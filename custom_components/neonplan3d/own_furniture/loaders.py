"""Load 3D files (glTF/GLB, OBJ with MTL, STL) into mesh objects.

Every object is a set of triangles (an array of shape (n, 3, 3), in the file's own units and axes) with
its material. Only numpy is needed, which Home Assistant ships anyway. The axes and units are sorted out
by the converter.
"""

from __future__ import annotations

import base64
import contextlib
from dataclasses import dataclass, field
import json
from pathlib import PurePosixPath
import re
import struct
from typing import Any

import numpy as np

# largest number of triangles read from one upload (a furniture model needs far fewer)
MAX_TRIANGLES = 3_000_000


class LoadError(Exception):
    """A file that cannot be read; `code` says why (the panel translates it)."""

    def __init__(self, code: str, detail: str = "") -> None:
        super().__init__(f"{code}: {detail}" if detail else code)
        self.code = code
        self.detail = detail


@dataclass
class Material:
    """What the converter needs of a material."""

    name: str = ""
    # sRGB 0..1, None when unknown (a texture only)
    color: tuple[float, float, float] | None = None
    alpha: float = 1.0
    emissive: bool = False


@dataclass
class MeshObject:
    """One object of the model: its triangles and material."""

    name: str
    tris: np.ndarray
    material: Material = field(default_factory=Material)


@dataclass
class Model:
    """A loaded file: its objects, the format and the axis that is up in that format by default."""

    objects: list[MeshObject]
    kind: str
    up: str  # "y" or "z"
    name: str
    # glTF is in metres by definition; OBJ and STL carry no unit
    metres: bool


SUPPORTED = (".glb", ".gltf", ".obj", ".stl")
_HINT_OTHER = {
    ".fbx": "fbx",
    ".3dm": "3dm",
    ".blend": "blend",
    ".dae": "dae",
    ".3mf": "3mf",
    ".ply": "ply",
    ".step": "step",
    ".stp": "step",
    ".usdz": "usdz",
    ".usd": "usdz",
}


def load(files: dict[str, bytes]) -> Model:
    """Read the main model among the uploaded files (a .gltf or .obj may bring its .bin, .mtl alongside)."""
    by_ext: dict[str, str] = {}
    for name in files:
        by_ext.setdefault(PurePosixPath(name.lower()).suffix, name)
    for ext in SUPPORTED:
        if ext in by_ext:
            main = by_ext[ext]
            break
    else:
        other = next((_HINT_OTHER[e] for e in by_ext if e in _HINT_OTHER), "")
        raise LoadError("unsupported_format", other)
    stem = PurePosixPath(main).stem
    data = files[main]
    ext = PurePosixPath(main.lower()).suffix
    if ext in (".glb", ".gltf"):
        objects = _load_gltf(data, files, ext == ".glb")
        model = Model(objects, "gltf", "y", stem, True)
    elif ext == ".obj":
        model = Model(_load_obj(data, files), "obj", "y", stem, False)
    else:
        model = Model([MeshObject(stem, _load_stl(data))], "stl", "z", stem, False)
    model.objects = [o for o in model.objects if len(o.tris)]
    if not model.objects:
        raise LoadError("no_triangles")
    total = sum(len(o.tris) for o in model.objects)
    if total > MAX_TRIANGLES:
        raise LoadError("too_many_triangles", str(total))
    for o in model.objects:
        if not np.isfinite(o.tris).all():
            raise LoadError("bad_numbers", o.name)
    return model


# ------------------------------------------------------------------------------------------------ glTF


_COMPONENTS = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
_WIDTH = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4, "MAT4": 16}


def _linear_to_srgb(c: float) -> float:
    c = min(1.0, max(0.0, float(c)))
    return 12.92 * c if c <= 0.0031308 else 1.055 * c ** (1 / 2.4) - 0.055


def _load_gltf(data: bytes, files: dict[str, bytes], binary: bool) -> list[MeshObject]:
    bin_chunk = b""
    if binary:
        if len(data) < 20 or data[:4] != b"glTF":
            raise LoadError("broken_file", "glb header")
        version, length = struct.unpack_from("<II", data, 4)
        if version != 2:
            raise LoadError("gltf_version", str(version))
        pos, doc = 12, None
        while pos + 8 <= min(length, len(data)):
            size, kind = struct.unpack_from("<II", data, pos)
            chunk = data[pos + 8 : pos + 8 + size]
            if kind == 0x4E4F534A:  # JSON
                doc = json.loads(chunk.decode("utf-8"))
            elif kind == 0x004E4942:  # BIN
                bin_chunk = chunk
            pos += 8 + size
        if doc is None:
            raise LoadError("broken_file", "no json chunk")
    else:
        try:
            doc = json.loads(data.decode("utf-8-sig"))
        except ValueError as err:
            raise LoadError("broken_file", str(err)) from err

    used = set(doc.get("extensionsRequired", [])) | set(doc.get("extensionsUsed", []))
    if {"KHR_draco_mesh_compression", "EXT_meshopt_compression", "KHR_meshopt_compression"} & used:
        raise LoadError("compressed")

    buffers: list[bytes] = []
    for i, buf in enumerate(doc.get("buffers", [])):
        uri = buf.get("uri")
        if uri is None:
            buffers.append(bin_chunk if i == 0 else b"")
        elif uri.startswith("data:"):
            buffers.append(base64.b64decode(uri.split(",", 1)[1]))
        else:
            wanted = PurePosixPath(uri).name.lower()
            match = next((v for k, v in files.items() if PurePosixPath(k).name.lower() == wanted), None)
            if match is None:
                raise LoadError("missing_file", PurePosixPath(uri).name)
            buffers.append(match)

    views = doc.get("bufferViews", [])
    accessors = doc.get("accessors", [])

    def read(index: int) -> np.ndarray:
        acc = accessors[index]
        width = _WIDTH[acc["type"]]
        dtype = np.dtype(_COMPONENTS[acc["componentType"]])
        count = acc["count"]
        if "bufferView" not in acc:
            return np.zeros((count, width), dtype=np.float64)
        view = views[acc["bufferView"]]
        raw = buffers[view["buffer"]]
        start = view.get("byteOffset", 0) + acc.get("byteOffset", 0)
        stride = view.get("byteStride") or dtype.itemsize * width
        if stride == dtype.itemsize * width:
            arr = np.frombuffer(raw, dtype=dtype, count=count * width, offset=start).reshape(count, width)
        else:
            rows = np.lib.stride_tricks.as_strided(
                np.frombuffer(raw, dtype=np.uint8, offset=start), shape=(count, stride), strides=(stride, 1)
            )
            arr = rows[:, : dtype.itemsize * width].copy().view(dtype).reshape(count, width)
        out = arr.astype(np.float64)
        if acc.get("normalized"):
            info = np.iinfo(dtype)  # type: ignore[type-var]  # normalized accessors are integers (glTF)
            out = np.maximum(out / info.max, -1.0)
        return out

    materials: list[Material] = []
    for m in doc.get("materials", []):
        pbr = m.get("pbrMetallicRoughness", {})
        factor = pbr.get("baseColorFactor", [1, 1, 1, 1])
        textured = "baseColorTexture" in pbr
        color: tuple[float, float, float] | None = tuple(_linear_to_srgb(c) for c in factor[:3])  # type: ignore[assignment]
        if textured and min(factor[:3]) > 0.98:
            color = None  # only a texture: the colour is unknown
        alpha = float(factor[3]) if m.get("alphaMode", "OPAQUE") != "OPAQUE" else 1.0
        ext = m.get("extensions", {})
        transmission = ext.get("KHR_materials_transmission", {}).get("transmissionFactor", 0)
        if transmission > 0.3:
            alpha = min(alpha, 0.3)
        emissive = (
            max(m.get("emissiveFactor", [0, 0, 0]))
            * ext.get("KHR_materials_emissive_strength", {}).get("emissiveStrength", 1)
            > 0.05
        )
        materials.append(Material(m.get("name", ""), color, alpha, emissive))

    meshes = doc.get("meshes", [])
    nodes = doc.get("nodes", [])
    objects: list[MeshObject] = []
    total = 0

    def local_matrix(node: dict[str, Any]) -> np.ndarray:
        if "matrix" in node:
            return np.array(node["matrix"], dtype=np.float64).reshape(4, 4).T
        t = node.get("translation", [0, 0, 0])
        x, y, z, w = node.get("rotation", [0, 0, 0, 1])
        s = node.get("scale", [1, 1, 1])
        r = np.array(
            [
                [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
                [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
                [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)],
            ]
        )
        m = np.eye(4)
        m[:3, :3] = r * np.array(s, dtype=np.float64)
        m[:3, 3] = t
        return m

    def visit(index: int, parent: np.ndarray, depth: int) -> None:
        nonlocal total
        if depth > 64:
            raise LoadError("broken_file", "node loop")
        node = nodes[index]
        world = parent @ local_matrix(node)
        if "mesh" in node:
            mesh = meshes[node["mesh"]]
            name = node.get("name") or mesh.get("name") or f"object_{index}"
            for k, prim in enumerate(mesh.get("primitives", [])):
                mode = prim.get("mode", 4)
                if mode not in (4, 5, 6) or "POSITION" not in prim.get("attributes", {}):
                    continue
                pos = read(prim["attributes"]["POSITION"])[:, :3]
                idx = read(prim["indices"])[:, 0].astype(np.int64) if "indices" in prim else np.arange(len(pos))
                tri = _triangles_from_mode(idx, mode)
                if not len(tri):
                    continue
                total += len(tri)
                if total > MAX_TRIANGLES:
                    raise LoadError("too_many_triangles", str(total))
                p = pos @ world[:3, :3].T + world[:3, 3]
                mat = (
                    materials[prim["material"]]
                    if "material" in prim and prim["material"] < len(materials)
                    else Material()
                )
                objects.append(MeshObject(name if len(mesh["primitives"]) == 1 else f"{name}.{k}", p[tri], mat))
        for child in node.get("children", []):
            visit(child, world, depth + 1)

    scenes = doc.get("scenes", [])
    if scenes:
        roots = scenes[doc.get("scene", 0)].get("nodes", [])
    else:
        children = {c for n in nodes for c in n.get("children", [])}
        roots = [i for i in range(len(nodes)) if i not in children]
    for r in roots:
        visit(r, np.eye(4), 0)
    return objects


def _triangles_from_mode(idx: np.ndarray, mode: int) -> np.ndarray:
    if mode == 4:
        n = len(idx) // 3
        return idx[: n * 3].reshape(n, 3)
    if len(idx) < 3:
        return np.zeros((0, 3), dtype=np.int64)
    if mode == 5:  # strip: every other triangle turned
        t = np.stack([idx[:-2], idx[1:-1], idx[2:]], axis=1)
        t[1::2, [0, 1]] = t[1::2, [1, 0]]
        return t
    return np.stack([np.full(len(idx) - 2, idx[0]), idx[1:-1], idx[2:]], axis=1)  # fan


# ------------------------------------------------------------------------------------------------ OBJ


def _text(data: bytes) -> str:
    for enc in ("utf-8-sig", "latin-1"):
        try:
            return data.decode(enc)
        except UnicodeDecodeError:
            continue
    return data.decode("utf-8", "replace")


def _parse_mtl(text: str) -> dict[str, Material]:
    out: dict[str, Material] = {}
    cur: Material | None = None
    for line in text.splitlines():
        parts = line.split()
        if not parts:
            continue
        key = parts[0].lower()
        if key == "newmtl":
            cur = Material(" ".join(parts[1:]))
            out[cur.name] = cur
        elif cur is None:
            continue
        elif key == "kd" and len(parts) >= 4:
            with contextlib.suppress(ValueError):
                cur.color = tuple(min(1.0, max(0.0, float(v))) for v in parts[1:4])  # type: ignore[assignment]
        elif key == "d" and len(parts) >= 2:
            with contextlib.suppress(ValueError):
                cur.alpha = float(parts[1])
        elif key == "tr" and len(parts) >= 2:
            with contextlib.suppress(ValueError):
                cur.alpha = 1.0 - float(parts[1])
        elif key == "ke" and len(parts) >= 4:
            with contextlib.suppress(ValueError):
                cur.emissive = max(float(v) for v in parts[1:4]) > 0.05
    return out


def _load_obj(data: bytes, files: dict[str, bytes]) -> list[MeshObject]:
    text = _text(data)
    verts: list[tuple[float, float, float]] = []
    groups: dict[tuple[str, str], list[list[int]]] = {}
    order: list[tuple[str, str]] = []
    materials: dict[str, Material] = {}
    obj_name, mat_name = "object", ""
    total = 0
    for line in text.splitlines():
        if not line or line[0] == "#":
            continue
        parts = line.split()
        if not parts:
            continue
        key = parts[0]
        if key == "v" and len(parts) >= 4:
            try:
                verts.append((float(parts[1]), float(parts[2]), float(parts[3])))
            except ValueError as err:
                raise LoadError("broken_file", line[:60]) from err
        elif key == "f" and len(parts) >= 4:
            idx = []
            for p in parts[1:]:
                try:
                    i = int(p.split("/", 1)[0])
                except ValueError as err:
                    raise LoadError("broken_file", line[:60]) from err
                idx.append(i - 1 if i > 0 else len(verts) + i)
            group = (obj_name, mat_name)
            if group not in groups:
                groups[group] = []
                order.append(group)
            for k in range(1, len(idx) - 1):
                groups[group].append([idx[0], idx[k], idx[k + 1]])
            total += len(idx) - 2
            if total > MAX_TRIANGLES:
                raise LoadError("too_many_triangles", str(total))
        elif key in ("o", "g"):
            obj_name = " ".join(parts[1:]) or obj_name
        elif key == "usemtl":
            mat_name = " ".join(parts[1:])
        elif key == "mtllib":
            for lib in re.split(r"\s+", line.split(None, 1)[1].strip()) if len(parts) > 1 else []:
                wanted = PurePosixPath(lib.replace("\\", "/")).name.lower()
                found = next((v for k, v in files.items() if PurePosixPath(k).name.lower() == wanted), None)
                if found is not None:
                    materials.update(_parse_mtl(_text(found)))
    if not verts:
        raise LoadError("no_triangles")
    v = np.array(verts, dtype=np.float64)
    objects = []
    for group in order:
        tri = np.array(groups[group], dtype=np.int64)
        tri = tri[(tri >= 0).all(axis=1) & (tri < len(v)).all(axis=1)]
        if not len(tri):
            continue
        name, mat = group
        objects.append(MeshObject(name if not mat else f"{name} ({mat})", v[tri], materials.get(mat, Material(mat))))
    return objects


# ------------------------------------------------------------------------------------------------ STL


def _load_stl(data: bytes) -> np.ndarray:
    if len(data) >= 84:
        (count,) = struct.unpack_from("<I", data, 80)
        if 84 + 50 * count == len(data):
            if count > MAX_TRIANGLES:
                raise LoadError("too_many_triangles", str(count))
            rec = np.dtype([("n", "<f4", 3), ("v", "<f4", (3, 3)), ("a", "<u2")])
            return np.frombuffer(data, dtype=rec, count=count, offset=84)["v"].astype(np.float64)
    text = _text(data)
    if "vertex" not in text:
        raise LoadError("broken_file", "stl")
    nums = re.findall(r"vertex\s+(\S+)\s+(\S+)\s+(\S+)", text)
    try:
        v = np.array(nums, dtype=np.float64)
    except ValueError as err:
        raise LoadError("broken_file", "stl numbers") from err
    n = len(v) // 3
    if n > MAX_TRIANGLES:
        raise LoadError("too_many_triangles", str(n))
    return v[: n * 3].reshape(n, 3, 3)


def color_hex(c: tuple[float, float, float]) -> str:
    """'#rrggbb' of an sRGB colour."""
    return "#" + "".join(f"{round(min(1.0, max(0.0, x)) * 255):02x}" for x in c)


__all__ = ["SUPPORTED", "LoadError", "Material", "MeshObject", "Model", "color_hex", "load"]
