"""Own furniture: the converter on its own - shapes, units, axes and the part schema."""

from __future__ import annotations

from pathlib import Path

import numpy as np
import pytest

from custom_components.neonplan3d.own_furniture import converter, loaders
from custom_components.neonplan3d.packs import PART_SCHEMA

FIXTURES = Path(__file__).parent / "fixtures" / "own_furniture"


def _load(name: str) -> loaders.Model:
    return loaders.load({name: (FIXTURES / name).read_bytes()})


def _check_schema(parts: list[dict]) -> None:
    for p in parts:
        PART_SCHEMA(p)


def test_table_objects_become_box_and_cylinders() -> None:
    res = converter.convert(_load("tisch.glb"))
    assert res.size == [1.6, 0.9, 0.76] and res.unit == "m" and res.up == "y"
    assert res.stats["shapes"] == {"box": 1, "cyl": 4}
    top = next(p for p in res.parts if p["shape"] == "box")
    assert top["w"] == 1.0 and top["d"] == 1.0
    assert top["y"] == pytest.approx(0.72 / 0.76, abs=1e-3)
    assert top["color"].startswith("#")
    _check_schema(res.parts)


def test_merged_chair_in_mm_z_up() -> None:
    res = converter.convert(_load("stuhl.stl"))
    assert res.unit == "mm" and res.up == "z"
    assert res.size == [0.45, 0.45, 0.92]
    assert len(res.parts) == 6
    # the backrest stands at the back (-z): Rhino's +y is the back
    back = max(res.parts, key=lambda p: p["y"] + p["h"])
    assert back["z"] < -0.4
    # snapped to the model's own planes: the seat is exactly 40 mm thick at 430 … 470 mm
    seat = next(p for p in res.parts if p["w"] == 1.0 and p["d"] > 0.8)
    assert seat["y"] * 0.92 == pytest.approx(0.43, abs=0.002)
    assert seat["h"] * 0.92 == pytest.approx(0.04, abs=0.002)
    _check_schema(res.parts)


def test_options_budget_turn_and_units() -> None:
    model = _load("stuhl.stl")
    assert len(converter.convert(model, converter.Options.from_dict({"max_parts": 2})).parts) <= 2
    turned = converter.convert(model, converter.Options.from_dict({"turn": 180}))
    back = max(turned.parts, key=lambda p: p["y"] + p["h"])
    assert back["z"] > 0.4
    with pytest.raises(converter.ConvertError) as err:
        converter.convert(model, converter.Options.from_dict({"units": "m"}))
    assert err.value.code == "too_large"


def test_long_diagonal_is_split_into_turned_pieces() -> None:
    a = np.radians(30)
    c, s = np.cos(a), np.sin(a)
    # a 2 m strut turned 30° next to a 0.5 m post: longer than the item is wide
    box = np.array([[x, y, z] for x in (-1, 1) for y in (0, 0.05) for z in (-0.03, 0.03)])
    strut = box @ np.array([[c, 0, -s], [0, 1, 0], [s, 0, c]])
    faces = [
        (0, 1, 3),
        (0, 3, 2),
        (4, 6, 7),
        (4, 7, 5),
        (0, 4, 5),
        (0, 5, 1),
        (2, 3, 7),
        (2, 7, 6),
        (0, 2, 6),
        (0, 6, 4),
        (1, 5, 7),
        (1, 7, 3),
    ]
    tris = strut[np.array(faces)]
    res = converter.convert(loaders.Model([loaders.MeshObject("strut", tris)], "gltf", "y", "x", True))
    assert all(p.get("rot") == pytest.approx(-30, abs=0.5) for p in res.parts)
    assert len(res.parts) == 2
    _check_schema(res.parts)


def test_unsupported_formats_name_the_way_out() -> None:
    with pytest.raises(loaders.LoadError) as err:
        loaders.load({"sessel.fbx": b"x"})
    assert err.value.code == "unsupported_format" and err.value.detail == "fbx"
    with pytest.raises(loaders.LoadError) as err:
        loaders.load({"x.gltf": b'{"asset":{"version":"2.0"},"buffers":[{"uri":"x.bin","byteLength":4}],"meshes":[]}'})
    assert err.value.code == "missing_file" and err.value.detail == "x.bin"


def test_touching_bodies_in_one_stl_stay_apart() -> None:
    """Rhino writes all objects into one STL; a cushion lying exactly on a seat is still its own part."""

    def box(x0, x1, y0, y1, z0, z1):
        v = np.array([[x, y, z] for x in (x0, x1) for y in (y0, y1) for z in (z0, z1)], dtype=float)
        f = [
            (0, 1, 3),
            (0, 3, 2),
            (4, 6, 7),
            (4, 7, 5),
            (0, 4, 5),
            (0, 5, 1),
            (2, 3, 7),
            (2, 7, 6),
            (0, 2, 6),
            (0, 6, 4),
            (1, 5, 7),
            (1, 7, 3),
        ]
        return v[np.array(f)]

    # Z-up millimetres: an L of a seat and a back, a cushion on the seat touching the back
    tris = np.concatenate(
        [box(0, 2000, 0, 900, 0, 400), box(0, 2000, 700, 900, 400, 800), box(100, 1900, 0, 700, 400, 550)]
    )
    model = loaders.Model([loaders.MeshObject("sofa", tris)], "stl", "z", "sofa", False)
    res = converter.convert(model)
    assert len(res.parts) == 3
    assert {"code": "bodies_found", "count": 3} in res.notes
    assert res.size == [2.0, 0.9, 0.8]
    _check_schema(res.parts)
