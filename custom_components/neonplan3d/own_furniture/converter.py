"""Turn a loaded 3D model into a NeonPlan pack item built from boxes, cylinders and lofts.

NeonPlan draws pack furniture only from those three shapes (at most 60 per item), each given in
fractions of the item's size (see docs/packs.md of NeonPlan 3D):

- An object that is a cylinder (upright or lying), a tapered shape (lamp shade, cone, frustum) or a
  box (also turned around the vertical axis) becomes that one part.
- An object that a single box fits badly (a whole chair as one mesh, an L-shaped sofa) is filled with
  voxels and covered greedily by the largest boxes that fit, within the part budget.

Coordinates of the item: x to the right, y up, z to the front (+z); NeonPlan puts the back to the wall.
"""

from __future__ import annotations

from dataclasses import dataclass, field
import math
import re
from typing import Any

import numpy as np

from .loaders import MeshObject, Model, color_hex

MAX_PARTS = 60
MAX_SIZE = 10.0  # metres, NeonPlan's limit per measure
MIN_SIZE = 0.01
UNITS = {"m": 1.0, "cm": 0.01, "mm": 0.001, "in": 0.0254}
EDGES = (False, True, "faint", "glow")
_SCREEN = re.compile(r"screen|display|bildschirm|monitor", re.I)


class ConvertError(Exception):
    """A model that cannot become an item; `code` says why."""

    def __init__(self, code: str, detail: str = "") -> None:
        super().__init__(f"{code}: {detail}" if detail else code)
        self.code = code
        self.detail = detail


@dataclass
class Options:
    """Settings the panel offers."""

    max_parts: int = 40
    units: str = "auto"  # auto | m | cm | mm | in
    up: str = "auto"  # auto | y | z
    turn: int = 0  # 0, 90, 180, 270 degrees around the vertical axis
    edges: bool | str = "faint"

    @classmethod
    def from_dict(cls, data: dict[str, Any] | None) -> Options:
        data = data or {}
        o = cls()
        o.max_parts = int(min(MAX_PARTS, max(1, int(data.get("max_parts", o.max_parts)))))
        o.units = data.get("units", o.units) if data.get("units", o.units) in ("auto", *UNITS) else "auto"
        o.up = data.get("up", o.up) if data.get("up", o.up) in ("auto", "y", "z") else "auto"
        o.turn = int(data.get("turn", 0)) % 360 // 90 * 90
        o.edges = data.get("edges", o.edges) if data.get("edges", o.edges) in EDGES else "faint"
        return o


@dataclass
class Result:
    """The converted item: its default size, its parts and what the panel should tell."""

    size: list[float]
    parts: list[dict[str, Any]]
    notes: list[dict[str, Any]] = field(default_factory=list)
    stats: dict[str, Any] = field(default_factory=dict)
    glow: bool = False
    screen: bool = False
    unit: str = "m"
    up: str = "y"


# ------------------------------------------------------------------------------------------------ main


def convert(model: Model, options: Options | None = None) -> Result:
    """Convert a loaded model."""
    opts = options or Options()
    notes: list[dict[str, Any]] = []

    up = model.up if opts.up == "auto" else opts.up
    objects = [MeshObject(o.name, _orient(o.tris, up, opts.turn), o.material) for o in model.objects]

    allpts = np.concatenate([o.tris.reshape(-1, 3) for o in objects])
    raw = allpts.max(axis=0) - allpts.min(axis=0)
    if opts.units == "auto":
        unit = _guess_unit(float(raw.max()), model.metres)
        if unit != "m" or not model.metres:
            notes.append({"code": "unit_guessed", "unit": unit})
    else:
        unit = opts.units
    scale = UNITS[unit]

    lo = allpts.min(axis=0) * scale
    hi = allpts.max(axis=0) * scale
    ext = hi - lo
    if ext.max() > MAX_SIZE:
        raise ConvertError("too_large", f"{ext[0]:.2f} × {ext[2]:.2f} × {ext[1]:.2f} m")  # noqa: RUF001
    if ext.max() < MIN_SIZE:
        raise ConvertError("too_small", f"{ext.max() * 1000:.1f} mm")
    shift = np.array([(lo[0] + hi[0]) / 2, lo[1], (lo[2] + hi[2]) / 2])
    size = np.maximum(ext, MIN_SIZE)  # x, y, z
    W, H, D = float(size[0]), float(size[1]), float(size[2])
    item = _Frame(W, D, H)

    for o in objects:
        o.tris = o.tris * scale - shift

    # an object made of separate bodies (an STL keeps no objects; a Blender object with loose parts)
    # becomes one object per body - unless it falls apart into crumbs (a broken mesh)
    split: list[MeshObject] = []
    for o in objects:
        bodies = _bodies(o.tris)
        if 1 < len(bodies) <= 4 * opts.max_parts:
            split.extend(MeshObject(f"{o.name}#{k}", b, o.material) for k, b in enumerate(bodies))
        else:
            split.append(o)
    if len(split) > len(objects):
        notes.append({"code": "bodies_found", "count": len(split)})
    objects = split

    # one fit per object, the biggest first
    fits = [f for f in (_fit_object(o) for o in objects) if f is not None]
    fits.sort(key=lambda f: -f.weight)

    budget = opts.max_parts
    dropped = 0
    if len(fits) > budget:
        dropped = len(fits) - budget
        fits = fits[:budget]
        notes.append({"code": "dropped_small", "count": dropped})

    # spare parts go to the objects a single shape fits worst, by their error volume
    spare = budget - len(fits)
    poor = [f for f in fits if f.fill is not None and f.fill < 0.6]
    if poor and spare > 0:
        # an error that hardly shows (a bulb inside its shade) is not worth any part
        reference = sum(f.prim_volume for f in fits)
        errors = np.array([max(f.prim_volume - f.solid_volume, 1e-12) for f in poor])
        worth = np.floor(errors / (0.01 * reference)).astype(int)
        share = errors * (worth > 0)
        if share.sum() > 0:
            alloc = np.minimum(np.floor(share / share.sum() * spare).astype(int), worth)
            # hand out what rounding left over, worst first
            for i in np.argsort(-share):
                if alloc.sum() >= spare:
                    break
                if share[i] > 0 and alloc[i] < worth[i]:
                    alloc[i] += 1
            for f, extra in zip(poor, alloc, strict=True):
                if extra > 0:
                    f.boxes = _decompose(f, 1 + int(extra))
    decomposed = sum(1 for f in fits if f.boxes is not None)
    if decomposed:
        notes.append({"code": "decomposed", "count": decomposed})
    reference = sum(f.prim_volume for f in fits)
    starved = [f for f in poor if f.boxes is None and f.prim_volume - f.solid_volume >= 0.01 * reference]
    if starved:
        # more parts would help, but the budget is spent
        notes.append({"code": "coarse", "count": len(starved)})

    parts: list[dict[str, Any]] = []
    for f in fits:
        style = _style(f.obj, opts.edges)
        if f.boxes is not None:
            parts.extend(item.box(*b, **style) for b in f.boxes)
        else:
            parts.extend(item.part(f.prim, **style))
    if len(parts) > budget:
        notes.append({"code": "dropped_small", "count": len(parts) - budget})
    parts = parts[: min(budget, MAX_PARTS)]
    if not parts:
        raise ConvertError("no_parts")

    textured = sum(1 for f in fits if f.obj.material.color is None and f.obj.material.name)
    if textured:
        notes.append({"code": "texture_colours", "count": textured})

    shapes: dict[str, int] = {}
    for p in parts:
        key = p["shape"] if not p.get("rot") else "box_turned"
        shapes[key] = shapes.get(key, 0) + 1
    stats = {
        "objects": len(objects),
        "triangles": int(sum(len(o.tris) for o in objects)),
        "parts": len(parts),
        "shapes": shapes,
        "dropped": dropped,
    }
    return Result(
        size=[round(W, 4), round(D, 4), round(H, 4)],
        parts=parts,
        notes=notes,
        stats=stats,
        glow=any(p.get("glow") for p in parts),
        screen=any(p.get("screen") for p in parts),
        unit=unit,
        up=up,
    )


def _orient(tris: np.ndarray, up: str, turn: int) -> np.ndarray:
    """To NeonPlan's axes: y up, +z front. Z-up files (Rhino, STL) turn so that their -y front faces +z."""
    t = tris.astype(np.float64, copy=True)
    if up == "z":
        t = np.stack([t[..., 0], t[..., 2], -t[..., 1]], axis=-1)
    if turn:
        a = math.radians(turn)
        c, s = round(math.cos(a)), round(math.sin(a))
        x, z = t[..., 0].copy(), t[..., 2].copy()
        t[..., 0] = c * x + s * z
        t[..., 2] = -s * x + c * z
    return t


def _bodies(tris: np.ndarray, most: int = 2000) -> list[np.ndarray]:
    """The bodies of a triangle set: triangles belong together when they share an edge that only the two
    of them have. Two boxes that merely touch along an edge or a corner (a cushion on a seat) share edges
    with four triangles, so they stay apart - like separate objects in Rhino."""
    n = len(tris)
    if n < 2 or n > 2_000_000:
        return [tris]
    pts = tris.reshape(-1, 3)
    tol = max(float(np.ptp(pts, axis=0).max()) * 1e-6, 1e-9)
    _, vid = np.unique(np.round(pts / tol).astype(np.int64), axis=0, return_inverse=True)
    faces = vid.reshape(-1, 3)
    edges = np.sort(np.concatenate([faces[:, [0, 1]], faces[:, [1, 2]], faces[:, [2, 0]]]), axis=1)
    owner = np.tile(np.arange(n), 3)
    _, inv, counts = np.unique(edges, axis=0, return_inverse=True, return_counts=True)
    inv = inv.ravel()
    pair = counts[inv] == 2
    order = np.argsort(inv[pair], kind="stable")
    tri = owner[pair][order].reshape(-1, 2)  # the two triangles of every such edge
    label = np.arange(n)
    for _ in range(10_000):
        low = np.minimum(label[tri[:, 0]], label[tri[:, 1]])
        new = label.copy()
        np.minimum.at(new, tri[:, 0], low)
        np.minimum.at(new, tri[:, 1], low)
        np.minimum.at(new, label, new)  # hook the old roots too
        while True:
            jumped = new[new]
            if np.array_equal(jumped, new):
                break
            new = jumped
        if np.array_equal(new, label):
            break
        label = new
    tri_label = label
    groups = np.unique(tri_label)
    if len(groups) == 1 or len(groups) > most:
        return [tris]
    order = np.argsort(tri_label, kind="stable")
    cuts = np.flatnonzero(np.diff(tri_label[order])) + 1
    return [tris[idx] for idx in np.split(order, cuts)]


def _guess_unit(extent: float, metres: bool) -> str:
    """The unit that makes the model furniture-sized (about 0.15 … 4 m), metres when it already is."""
    if extent <= (12 if metres else 10):
        return "m"
    return min(("cm", "mm"), key=lambda u: abs(math.log(max(extent * UNITS[u], 1e-9))))


def _style(obj: MeshObject, edges: bool | str) -> dict[str, Any]:
    m = obj.material
    style: dict[str, Any] = {}
    if m.alpha < 0.7:
        style["color"] = "glass"
    elif m.color is not None:
        style["color"] = color_hex(m.color)
    else:
        style["color"] = "body"
    if edges:
        style["edges"] = edges
    if m.emissive:
        style["glow"] = True
    if _SCREEN.search(f"{obj.name} {m.name}"):
        style["screen"] = True
    return style


# ------------------------------------------------------------------------------------------------ fitting


@dataclass
class _Fit:
    obj: MeshObject
    lo: np.ndarray
    hi: np.ndarray
    prim: dict[str, Any]
    prim_volume: float
    weight: float
    fill: float | None = None  # solid volume / primitive volume, for boxes
    solid_volume: float = 0.0
    boxes: list[tuple[float, float, float, float, float, float]] | None = None


def _points(tris: np.ndarray, limit: int = 200_000) -> np.ndarray:
    pts = tris.reshape(-1, 3)
    if len(pts) > limit:
        pts = pts[np.random.default_rng(1).choice(len(pts), limit, replace=False)]
    return np.unique(np.round(pts, 6), axis=0)


def _fit_object(obj: MeshObject) -> _Fit | None:
    pts = _points(obj.tris)
    if len(pts) < 3:
        return None
    lo, hi = pts.min(axis=0), pts.max(axis=0)
    ext = hi - lo
    if ext.max() < 1e-4:
        return None
    weight = float(np.prod(np.maximum(ext, ext.max() * 0.02)))

    axis = _cylinder_axis(pts, lo, hi)
    if axis is not None:
        c = (lo + hi) / 2
        if axis == 1:
            dia = float((ext[0] + ext[2]) / 2)
            prim: dict[str, Any] = {"shape": "cyl", "cx": c[0], "cz": c[2], "dia": dia, "y0": lo[1], "y1": hi[1]}
            vol = math.pi * dia * dia / 4 * ext[1]
        else:
            across = 2 if axis == 0 else 0
            dia = float((ext[1] + ext[across]) / 2)
            prim = {
                "shape": "cyl_lying",
                "axis": "x" if axis == 0 else "z",
                "cx": c[0],
                "cz": c[2],
                "len": float(ext[axis]),
                "dia": dia,
                "cy": c[1],
            }
            vol = math.pi * dia * dia / 4 * ext[axis]
        return _Fit(obj, lo, hi, prim, vol, weight)

    loft = _loft(pts, lo, hi)
    if loft is not None:
        (b, t) = loft
        a1 = (b[1] - b[0]) * (b[3] - b[2])
        a2 = (t[1] - t[0]) * (t[3] - t[2])
        vol = ext[1] / 3 * (a1 + a2 + math.sqrt(max(a1 * a2, 0)))
        return _Fit(obj, lo, hi, {"shape": "loft", "bottom": b, "top": t, "y0": lo[1], "y1": hi[1]}, vol, weight)

    prim = {
        "shape": "box",
        "x0": lo[0],
        "x1": hi[0],
        "y0": lo[1],
        "y1": hi[1],
        "z0": lo[2],
        "z1": hi[2],
    }
    vol = float(np.prod(np.maximum(ext, 1e-4)))
    turned = _turned_rect(pts[:, [0, 2]])
    if turned is not None and turned["area"] < 0.85 * max(ext[0], 1e-4) * max(ext[2], 1e-4):
        prim = {
            "shape": "obb",
            "cx": turned["cx"],
            "cz": turned["cz"],
            "w": turned["w"],
            "d": turned["d"],
            "rot": turned["rot"],
            "y0": lo[1],
            "y1": hi[1],
        }
        vol = turned["area"] * max(ext[1], 1e-4)

    fit = _Fit(obj, lo, hi, prim, vol, weight)
    # how well does one box fill the object? (an L-shape, a whole chair: badly)
    solid, _origin, v, surf = _voxelize(obj.tris, lo, hi, 28, with_surface=True)
    # surface voxels are only partly inside: count them half
    fit.solid_volume = (float((solid & ~surf).sum()) + 0.5 * float(surf.sum())) * v**3
    fit.fill = fit.solid_volume / max(vol, 1e-12)
    return fit


def _cylinder_axis(pts: np.ndarray, lo: np.ndarray, hi: np.ndarray) -> int | None:
    """Axis (1 = upright, 0 = lying along x, 2 = along z) of an object whose points lie on a round side."""
    ext = hi - lo
    c = (lo + hi) / 2
    for a in (1, 0, 2):
        u, w = [i for i in range(3) if i != a]
        if min(ext[u], ext[w], ext[a]) < 1e-4 or abs(ext[u] - ext[w]) > 0.12 * max(ext[u], ext[w]):
            continue
        ru = (pts[:, u] - c[u]) / (ext[u] / 2)
        rw = (pts[:, w] - c[w]) / (ext[w] / 2)
        rho = np.hypot(ru, rw)
        side = rho > 0.25
        if side.sum() < 6:
            continue
        round_ok = ((rho[side] > 0.82) & (rho[side] < 1.06)).mean()
        sectors = len(
            np.unique(np.floor((np.arctan2(rw[side], ru[side]) + math.pi) / (2 * math.pi) * 12).astype(int) % 12)
        )
        if round_ok >= 0.9 and sectors >= 7:
            return a
    return None


def _loft(pts: np.ndarray, lo: np.ndarray, hi: np.ndarray):
    """Bottom and top rectangles (x0, x1, z0, z1) of a tapered object, or None."""
    ext = hi - lo
    if ext[1] < 1e-3:
        return None
    band = 0.06 * ext[1]
    bot = pts[pts[:, 1] <= lo[1] + band]
    top = pts[pts[:, 1] >= hi[1] - band]
    if len(bot) < 2 or len(top) < 1:
        return None

    def rect(p: np.ndarray) -> np.ndarray:
        return np.array([p[:, 0].min(), p[:, 0].max(), p[:, 2].min(), p[:, 2].max()])

    b, t = rect(bot), rect(top)
    size = max(ext[0], ext[2])
    bw, bd, tw, td = b[1] - b[0], b[3] - b[2], t[1] - t[0], t[3] - t[2]
    tapered = (
        abs(bw - tw) > 0.15 * size
        or abs(bd - td) > 0.15 * size
        or abs((b[0] + b[1] - t[0] - t[1]) / 2) > 0.1 * size
        or abs((b[2] + b[3] - t[2] - t[3]) / 2) > 0.1 * size
    )
    if not tapered:
        return None
    # every point must lie inside the rectangle interpolated at its height
    f = ((pts[:, 1] - lo[1]) / ext[1])[:, None]
    r = b[None, :] * (1 - f) + t[None, :] * f
    tol = 0.08 * size
    inside = (
        (pts[:, 0] >= r[:, 0] - tol)
        & (pts[:, 0] <= r[:, 1] + tol)
        & (pts[:, 2] >= r[:, 2] - tol)
        & (pts[:, 2] <= r[:, 3] + tol)
    )
    if inside.mean() < 0.97:
        return None
    return b.tolist(), t.tolist()


def _hull(p: np.ndarray) -> np.ndarray:
    """Convex hull of 2D points (monotone chain)."""
    p = np.unique(np.round(p, 6), axis=0)
    if len(p) < 3:
        return p
    p = p[np.lexsort((p[:, 1], p[:, 0]))]

    def half(points: list[tuple[float, float]]) -> list[tuple[float, float]]:
        out: list[tuple[float, float]] = []
        for qx, qz in points:
            while len(out) >= 2:
                (ax, az), (bx, bz) = out[-2], out[-1]
                if (bx - ax) * (qz - az) - (bz - az) * (qx - ax) > 0:
                    break
                out.pop()
            out.append((qx, qz))
        return out

    pl = [(float(a), float(b)) for a, b in p]
    lower, upper = half(pl), half(pl[::-1])
    return np.array(lower[:-1] + upper[:-1])


def _turned_rect(xz: np.ndarray) -> dict[str, float] | None:
    """Smallest rectangle around the points, turned around the vertical axis (rotating calipers)."""
    hull = _hull(xz)
    if len(hull) < 3:
        return None
    best = None
    edges = np.roll(hull, -1, axis=0) - hull
    for e in edges:
        n = math.hypot(e[0], e[1])
        if n < 1e-9:
            continue
        ux, uz = e[0] / n, e[1] / n
        a = hull @ np.array([ux, uz])
        b = hull @ np.array([-uz, ux])
        area = (a.max() - a.min()) * (b.max() - b.min())
        if best is None or area < best[0] - 1e-12:
            best = (area, ux, uz, a.min(), a.max(), b.min(), b.max())
    if best is None:
        return None
    area, ux, uz, a0, a1, b0, b1 = best
    w, d = a1 - a0, b1 - b0
    angle = math.degrees(math.atan2(uz, ux))
    # the same rectangle with the smallest turn (-45 … 45 degrees)
    while angle > 45:
        angle -= 90
        w, d = d, w
    while angle <= -45:
        angle += 90
        w, d = d, w
    ac, bc = (a0 + a1) / 2, (b0 + b1) / 2
    cx, cz = ac * ux - bc * uz, ac * uz + bc * ux
    return {"area": area, "w": w, "d": d, "rot": angle, "cx": cx, "cz": cz}


# ------------------------------------------------------------------------------------------------ voxels


def _surface_samples(tris: np.ndarray, v: float, budget: int = 4_000_000) -> np.ndarray:
    """Points on the triangles, at most half a voxel apart."""
    a, b, c = tris[:, 0], tris[:, 1], tris[:, 2]
    longest = np.maximum.reduce(
        [np.linalg.norm(b - a, axis=1), np.linalg.norm(c - a, axis=1), np.linalg.norm(c - b, axis=1)]
    )
    k = np.clip(np.ceil(longest / (0.5 * v)), 1, 64).astype(int)
    while ((k + 1) * (k + 2) // 2).sum() > budget and k.max() > 1:
        k = np.maximum(1, k // 2)
    out = [tris.reshape(-1, 3), tris.mean(axis=1)]
    for kk in np.unique(k[k > 1]):
        sel = tris[k == kk]
        i, j = np.meshgrid(np.arange(kk + 1), np.arange(kk + 1), indexing="ij")
        keep = (i + j) <= kk
        u = (i[keep] / kk)[None, :, None]
        w = (j[keep] / kk)[None, :, None]
        for s in range(0, len(sel), 20000):
            chunk = sel[s : s + 20000]
            pts = (
                chunk[:, 0][:, None, :]
                + u * (chunk[:, 1] - chunk[:, 0])[:, None, :]
                + w * (chunk[:, 2] - chunk[:, 0])[:, None, :]
            )
            out.append(pts.reshape(-1, 3))
    return np.concatenate(out)


def _voxelize(tris: np.ndarray, lo: np.ndarray, hi: np.ndarray, res: int, with_surface: bool = False):
    """Solid voxels of an object: the surface, and everything the outside cannot reach."""
    ext = np.maximum(hi - lo, 1e-6)
    v = max(float(ext.max()) / res, 1e-5)
    dims = np.maximum(np.ceil(ext / v).astype(int), 1) + 2  # one empty layer around
    origin = lo - v
    pts = _surface_samples(tris, v)
    idx = np.clip(np.floor((pts - origin) / v).astype(np.int64), 0, dims - 1)
    surf = np.zeros(tuple(dims), dtype=bool)
    surf[idx[:, 0], idx[:, 1], idx[:, 2]] = True
    if with_surface:
        return _fill(surf), origin, v, surf
    return _fill(surf), origin, v


def _fill(surf: np.ndarray) -> np.ndarray:
    empty = ~surf
    out = np.zeros_like(surf)
    out[0], out[-1] = empty[0], empty[-1]
    out[:, 0], out[:, -1] = empty[:, 0], empty[:, -1]
    out[:, :, 0], out[:, :, -1] = empty[:, :, 0], empty[:, :, -1]
    count = int(out.sum())
    while True:
        g = out.copy()
        g[1:] |= out[:-1]
        g[:-1] |= out[1:]
        g[:, 1:] |= out[:, :-1]
        g[:, :-1] |= out[:, 1:]
        g[:, :, 1:] |= out[:, :, :-1]
        g[:, :, :-1] |= out[:, :, 1:]
        g &= empty
        n = int(g.sum())
        out = g
        if n == count:
            break
        count = n
    return ~out


def _sat(a: np.ndarray) -> np.ndarray:
    s = np.zeros(tuple(n + 1 for n in a.shape), dtype=np.int64)
    s[1:, 1:, 1:] = a.astype(np.int64).cumsum(0).cumsum(1).cumsum(2)
    return s


def _sum(s: np.ndarray, b: list[int]) -> int:
    x0, x1, y0, y1, z0, z1 = b
    return int(
        s[x1, y1, z1]
        - s[x0, y1, z1]
        - s[x1, y0, z1]
        - s[x1, y1, z0]
        + s[x0, y0, z1]
        + s[x0, y1, z0]
        + s[x1, y0, z0]
        - s[x0, y0, z0]
    )


_ORDERS = (
    ((0, 1), (0, -1), (2, 1), (2, -1), (1, 1), (1, -1)),
    ((1, 1), (1, -1), (0, 1), (0, -1), (2, 1), (2, -1)),
    ((2, 1), (2, -1), (1, 1), (1, -1), (0, 1), (0, -1)),
)


def _grow(s: np.ndarray, seed: np.ndarray, order, shape) -> list[int]:
    """The box grown from a voxel, one side after the other, as far as it stays inside the solid."""
    b = [int(seed[0]), int(seed[0]) + 1, int(seed[1]), int(seed[1]) + 1, int(seed[2]), int(seed[2]) + 1]
    for _ in range(2):
        for axis, sign in order:
            lo_i, hi_i = 2 * axis, 2 * axis + 1
            room = shape[axis] - b[hi_i] if sign > 0 else b[lo_i]
            ok, top = 0, room
            while ok < top:
                mid = (ok + top + 1) // 2
                trial = list(b)
                if sign > 0:
                    trial[hi_i] += mid
                else:
                    trial[lo_i] -= mid
                vol = (trial[1] - trial[0]) * (trial[3] - trial[2]) * (trial[5] - trial[4])
                if _sum(s, trial) == vol:
                    ok = mid
                else:
                    top = mid - 1
            if sign > 0:
                b[hi_i] += ok
            else:
                b[lo_i] -= ok
    return b


def _depth(solid: np.ndarray, most: int = 12) -> np.ndarray:
    d = np.zeros(solid.shape, dtype=np.int16)
    cur = solid.copy()
    for _ in range(most):
        d += cur
        e = cur.copy()
        e[1:] &= cur[:-1]
        e[:-1] &= cur[1:]
        e[:, 1:] &= cur[:, :-1]
        e[:, :-1] &= cur[:, 1:]
        e[:, :, 1:] &= cur[:, :, :-1]
        e[:, :, :-1] &= cur[:, :, 1:]
        e[0] = e[-1] = False
        cur = e
        if not cur.any():
            break
    return d


def cover(solid: np.ndarray, most: int, target: float = 0.96, seeds: int = 10) -> list[list[int]]:
    """Up to `most` boxes (voxel index ranges) that cover the solid greedily, largest gain first."""
    total = int(solid.sum())
    if not total:
        return []
    s = _sat(solid)
    depth = _depth(solid)
    covered = np.zeros_like(solid)
    rng = np.random.default_rng(7)
    boxes: list[list[int]] = []
    while len(boxes) < most:
        left = solid & ~covered
        if left.sum() <= (1 - target) * total:
            break
        u = _sat(left)
        cand = np.argwhere(left)
        if len(cand) > seeds:
            score = depth[left].astype(np.float64) + rng.random(len(cand)) * 0.9
            cand = cand[np.argpartition(-score, seeds)[:seeds]]
        best, best_gain, best_vol = None, 0, 0
        for seed in cand:
            for order in _ORDERS:
                b = _grow(s, seed, order, solid.shape)
                gain = _sum(u, b)
                vol = (b[1] - b[0]) * (b[3] - b[2]) * (b[5] - b[4])
                if gain > best_gain or (gain == best_gain and vol > best_vol):
                    best, best_gain, best_vol = b, gain, vol
        if best is None or best_gain == 0:
            break
        boxes.append(best)
        x0, x1, y0, y1, z0, z1 = best
        covered[x0:x1, y0:y1, z0:z1] |= solid[x0:x1, y0:y1, z0:z1]
    return boxes


def _decompose(fit: _Fit, most: int) -> list[tuple[float, float, float, float, float, float]]:
    """The object as boxes in metres (x0, x1, y0, y1, z0, z1), inside its own bounding box."""
    res = int(min(56, max(24, 16 + 4 * most)))
    solid, origin, v = _voxelize(fit.obj.tris, fit.lo, fit.hi, res)
    # the model's own planes per axis: a voxel face snaps to the nearest one (CAD furniture comes out exact)
    pts = _points(fit.obj.tris)
    planes = [np.unique(np.round(pts[:, a], 5)) for a in range(3)]

    def snap(value: float, axis: int) -> float:
        cand = planes[axis]
        i = int(np.clip(np.searchsorted(cand, value), 1, len(cand) - 1)) if len(cand) > 1 else 0
        near = cand[i - 1 : i + 1] if len(cand) > 1 else cand
        best = float(near[np.argmin(np.abs(near - value))])
        return best if abs(best - value) <= 1.01 * v else value

    out = []
    for b in cover(solid, most):
        lo = origin + np.array([b[0], b[2], b[4]]) * v
        hi = origin + np.array([b[1], b[3], b[5]]) * v
        lo = np.array([snap(float(lo[a]), a) for a in range(3)])
        hi = np.array([snap(float(hi[a]), a) for a in range(3)])
        lo = np.maximum(lo, fit.lo)
        hi = np.minimum(hi, fit.hi)
        if (hi - lo).min() <= 0:
            continue
        out.append((float(lo[0]), float(hi[0]), float(lo[1]), float(hi[1]), float(lo[2]), float(hi[2])))
    return out or [(fit.lo[0], fit.hi[0], fit.lo[1], fit.hi[1], fit.lo[2], fit.hi[2])]


# ------------------------------------------------------------------------------------------------ output


class _Frame:
    """Writes parts in fractions of the item's size, the way NeonPlan reads them."""

    def __init__(self, w: float, d: float, h: float) -> None:
        self.w, self.d, self.h = w, d, h

    @staticmethod
    def _r(x: float) -> float:
        return round(float(x), 4)

    def _span(self, v: float) -> float:
        return self._r(min(1.0, max(0.001, v)))

    def _centre(self, v: float) -> float:
        return self._r(min(0.5, max(-0.5, v)))

    def _vertical(self, y0: float, y1: float) -> tuple[float, float]:
        y0 = min(max(y0, 0.0), self.h)
        y1 = min(max(y1, y0), self.h)
        if y1 - y0 < 0.001 * self.h:  # a flat face (a plane in Blender): give it a little thickness
            y1 = min(self.h, y0 + max(0.003, 0.001 * self.h))
            y0 = min(y0, y1 - 0.001 * self.h)
        y = self._r(min(1.0, max(0.0, y0 / self.h)))
        return y, self._span(min((y1 - y0) / self.h, 1 - y))

    def box(self, x0: float, x1: float, y0: float, y1: float, z0: float, z1: float, **style: Any) -> dict[str, Any]:
        y, h = self._vertical(y0, y1)
        return {
            "shape": "box",
            "x": self._centre((x0 + x1) / 2 / self.w),
            "z": self._centre((z0 + z1) / 2 / self.d),
            "w": self._span(max(x1 - x0, 0.003) / self.w),
            "d": self._span(max(z1 - z0, 0.003) / self.d),
            "y": y,
            "h": h,
            **style,
        }

    def part(self, p: dict[str, Any], **style: Any) -> list[dict[str, Any]]:
        """The part(s) of one fitted shape: a turned box longer than the item is split into pieces."""
        if p["shape"] != "obb":
            one = self._one(p, **style)
            return [one] if one is not None else []
        a = math.radians(p["rot"])
        c, s = math.cos(a), math.sin(a)
        wf, df = p["w"] / self.w, p["d"] / self.d
        n = max(1, math.ceil(max(wf, df) - 1e-9))
        along_w = wf >= df
        pieces = []
        for k in range(n):
            off = (k + 0.5 - n / 2) * ((p["w"] if along_w else p["d"]) / n)
            ux, uz = (c, s) if along_w else (-s, c)  # NeonPlan turns local x towards +z
            y, h = self._vertical(p["y0"], p["y1"])
            pieces.append(
                {
                    "shape": "box",
                    "x": self._centre((p["cx"] + off * ux) / self.w),
                    "z": self._centre((p["cz"] + off * uz) / self.d),
                    "w": self._span(max(p["w"] / (n if along_w else 1), 0.003) / self.w),
                    "d": self._span(max(p["d"] / (1 if along_w else n), 0.003) / self.d),
                    "y": y,
                    "h": h,
                    "rot": round(p["rot"], 2),
                    **style,
                }
            )
        return pieces

    def _one(self, p: dict[str, Any], **style: Any) -> dict[str, Any] | None:
        kind = p["shape"]
        if kind == "box":
            return self.box(p["x0"], p["x1"], p["y0"], p["y1"], p["z0"], p["z1"], **style)
        if kind == "cyl":
            y, h = self._vertical(p["y0"], p["y1"])
            return {
                "shape": "cyl",
                "x": self._centre(p["cx"] / self.w),
                "z": self._centre(p["cz"] / self.d),
                "w": self._span(p["dia"] / self.w),
                "d": self._span(p["dia"] / self.d),
                "y": y,
                "h": h,
                **style,
            }
        if kind == "cyl_lying":
            y, h = self._vertical(p["cy"] - p["dia"] / 2, p["cy"] + p["dia"] / 2)
            along_x = p["axis"] == "x"
            return {
                "shape": "cyl",
                "axis": p["axis"],
                "x": self._centre(p["cx"] / self.w),
                "z": self._centre(p["cz"] / self.d),
                "w": self._span((p["len"] if along_x else p["dia"]) / self.w),
                "d": self._span((p["dia"] if along_x else p["len"]) / self.d),
                "y": y,
                "h": h,
                **style,
            }
        if kind == "loft":
            b, t = p["bottom"], p["top"]
            y, h = self._vertical(p["y0"], p["y1"])
            return {
                "shape": "loft",
                "x": self._centre((b[0] + b[1]) / 2 / self.w),
                "z": self._centre((b[2] + b[3]) / 2 / self.d),
                "w": self._span(max(b[1] - b[0], 0.002) / self.w),
                "d": self._span(max(b[3] - b[2], 0.002) / self.d),
                "tx": self._centre((t[0] + t[1]) / 2 / self.w),
                "tz": self._centre((t[2] + t[3]) / 2 / self.d),
                "tw": self._span(max(t[1] - t[0], 0.002) / self.w),
                "td": self._span(max(t[3] - t[2], 0.002) / self.d),
                "y": y,
                "h": h,
                **style,
            }
        return None
