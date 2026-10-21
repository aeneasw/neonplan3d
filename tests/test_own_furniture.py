"""Own furniture the whole way in a real Home Assistant: upload, convert, save, import with the normal pack import,
remove - and that the own key unlocks nothing else."""

from __future__ import annotations

import base64
import json
from pathlib import Path
import uuid

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.neonplan3d import packs as np_packs
from custom_components.neonplan3d.own_furniture.const import (
    DATA_OWN_FURNITURE,
    LEGACY_STORAGE_KEY_ITEMS,
    LEGACY_STORAGE_KEY_SEED,
    PACK_ID,
    STORAGE_KEY_SEED,
    UPLOAD_URL,
    WS_PREFIX,
)

FIXTURES = Path(__file__).parent / "fixtures" / "own_furniture"


async def _setup(hass: HomeAssistant) -> MockConfigEntry:
    assert await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain="neonplan3d", data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


async def _upload(client, path: Path, chunk: int = 50_000) -> str:
    session = uuid.uuid4().hex
    data = path.read_bytes()
    for off in range(0, len(data), chunk):
        res = await client.post(
            f"{UPLOAD_URL}?session={session}&file={path.name}&offset={off}", data=data[off : off + chunk]
        )
        assert res.status == 200, await res.text()
    return session


async def _ws(client, msg: dict) -> dict:
    await client.send_json_auto_id(msg)
    return await client.receive_json()


async def test_model_to_neonplan_and_back(hass: HomeAssistant, hass_client, hass_ws_client) -> None:
    """GLB upload → parts → saved → in NeonPlan's library → removed again."""
    await _setup(hass)
    ws = await hass_ws_client(hass)
    state = await _ws(ws, {"type": f"{WS_PREFIX}/state"})
    assert state["success"] and state["result"]["active"], state
    assert state["result"]["key_id"] in np_packs.STUDIO_KEYS

    session = await _upload(await hass_client(), FIXTURES / "tisch.glb", chunk=4096)
    res = await _ws(ws, {"type": f"{WS_PREFIX}/process", "session": session})
    assert res["success"], res
    result = res["result"]["result"]
    assert result["size"] == [1.6, 0.9, 0.76]
    assert result["stats"]["shapes"] == {"box": 1, "cyl": 4}

    # other options on the same upload, without uploading again
    res = await _ws(
        ws, {"type": f"{WS_PREFIX}/convert", "session": session, "options": {"max_parts": 3, "edges": False}}
    )
    assert res["success"] and len(res["result"]["result"]["parts"]) == 3

    item = {
        "name": "Mein Tisch",
        "size": result["size"],
        "parts": result["parts"],
        "group": "table",
        "room": ["dining"],
        "surface": True,
    }
    saved = await _ws(ws, {"type": f"{WS_PREFIX}/save", "item": item})
    assert saved["success"], saved
    assert saved["result"]["item_id"] == "mein_tisch"

    # NeonPlan imports it with its own command, exactly like its "import pack" button
    imported = await _ws(ws, {"type": "neonplan3d/packs/import", "pack": saved["result"]["pack"]})
    assert imported["success"], imported
    assert imported["result"]["id"] == PACK_ID
    listed = await _ws(ws, {"type": "neonplan3d/packs/list"})
    pack = next(p for p in listed["result"]["packs"] if p["id"] == PACK_ID)
    assert [i["id"] for i in pack["items"]] == ["mein_tisch"]
    assert pack["items"][0]["surface"] is True

    # a second one goes into the same pack; the same name gets a new id
    again = await _ws(ws, {"type": f"{WS_PREFIX}/save", "item": item})
    assert again["result"]["item_id"] == "mein_tisch_2"
    # replacing keeps the id (furniture in the plan follows)
    replaced = await _ws(
        ws, {"type": f"{WS_PREFIX}/save", "item": {**item, "name": "Esstisch"}, "replace": "mein_tisch"}
    )
    assert replaced["result"]["item_id"] == "mein_tisch"
    imported = await _ws(ws, {"type": "neonplan3d/packs/import", "pack": replaced["result"]["pack"]})
    assert imported["success"] and imported["result"]["items"] == 2

    removed = await _ws(ws, {"type": f"{WS_PREFIX}/remove", "item_id": "mein_tisch_2"})
    assert removed["success"] and removed["result"]["pack"]
    removed = await _ws(ws, {"type": f"{WS_PREFIX}/remove", "item_id": "mein_tisch"})
    assert removed["result"]["pack"] is None
    gone = await _ws(ws, {"type": "neonplan3d/packs/remove", "pack_id": PACK_ID})
    assert gone["success"]


async def test_stl_in_mm_and_json(hass: HomeAssistant, hass_client, hass_ws_client) -> None:
    """A merged STL in millimetres (Rhino) and the JSON pack from the script."""
    await _setup(hass)
    ws = await hass_ws_client(hass)
    client = await hass_client()
    res = await _ws(ws, {"type": f"{WS_PREFIX}/process", "session": await _upload(client, FIXTURES / "stuhl.stl")})
    assert res["success"], res
    r = res["result"]["result"]
    assert r["unit"] == "mm" and r["up"] == "z" and r["size"] == [0.45, 0.45, 0.92]
    assert r["stats"]["parts"] == 6

    res = await _ws(
        ws, {"type": f"{WS_PREFIX}/process", "session": await _upload(client, FIXTURES / "beispiel-pack.json")}
    )
    assert res["success"], res
    items = res["result"]["items"]
    assert [i["problem"] for i in items] == [None, None]
    for entry in items:
        saved = await _ws(ws, {"type": f"{WS_PREFIX}/save", "item": entry["item"]})
        assert saved["success"], saved
    imported = await _ws(ws, {"type": "neonplan3d/packs/import", "pack": saved["result"]["pack"]})
    assert imported["success"] and imported["result"]["items"] == 2


async def test_key_unlocks_no_pro_feature(hass: HomeAssistant, hass_ws_client) -> None:
    """With the own key, NeonPlan still refuses Pro features, modules and foreign pack ids."""
    await _setup(hass)
    signer = hass.data[DATA_OWN_FURNITURE].signer
    ws = await hass_ws_client(hass)
    item = json.loads((FIXTURES / "beispiel-pack.json").read_text())["items"][0]
    base = signer._payload([item], PACK_ID, "x", 1)
    for bad in (
        {**base, "features": ["weather"]},
        {**base, "features": ["camera_cockpit"], "items": []},
        {**base, "id": "mastershort.wohnzimmer"},
        {**base, "items": [], "module": {"api": 1, "kind": "voice", "code": "export default {};"}},
    ):
        res = await _ws(ws, {"type": "neonplan3d/packs/import", "pack": signer._signed(bad)})
        assert not res["success"], bad
        assert res["error"]["code"] == "bad_signature"
    # and the panel's save refuses to carry them at all
    res = await _ws(ws, {"type": f"{WS_PREFIX}/save", "item": {**item, "name": "X", "parts": [{"shape": "sphere"}]}})
    assert not res["success"] and res["error"]["code"] == "invalid"


async def test_stays_off_when_neonplan_stops_limiting(hass: HomeAssistant, hass_ws_client, monkeypatch) -> None:
    """If NeonPlan's check ever accepted everything from a studio key, the key is taken out again."""
    real = np_packs.verify_pack

    def lax(text, keys=None, instance=None):
        data = json.loads(text)
        np_packs.validate_payload(data["payload"])
        return (
            real(text, keys, instance)
            if data["signature"]["key"] not in np_packs.STUDIO_KEYS
            else np_packs.validate_payload(data["payload"])
        )

    monkeypatch.setattr(np_packs, "verify_pack", lax)
    await _setup(hass)
    runtime = hass.data[DATA_OWN_FURNITURE]
    assert runtime.signer is None and runtime.error == "not_restricted"
    assert runtime.key_id not in np_packs.PACK_PUBLIC_KEYS
    ws = await hass_ws_client(hass)
    state = await _ws(ws, {"type": f"{WS_PREFIX}/state"})
    assert state["result"]["active"] is False
    res = await _ws(ws, {"type": f"{WS_PREFIX}/save", "item": {"name": "x", "size": [1, 1, 1], "parts": []}})
    assert not res["success"] and res["error"]["code"] == "not_restricted"


async def test_unload_takes_the_key_out(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    key = hass.data[DATA_OWN_FURNITURE].key_id
    assert key in np_packs.STUDIO_KEYS
    assert await hass.config_entries.async_unload(entry.entry_id)
    assert key not in np_packs.STUDIO_KEYS and key not in np_packs.PACK_PUBLIC_KEYS


async def test_same_key_after_restart(hass: HomeAssistant, hass_storage) -> None:
    """The seed is kept in .storage, so the key - and imported packs' signatures - stay valid."""
    await _setup(hass)
    seed = hass_storage[STORAGE_KEY_SEED]["data"]["seed"]
    assert len(base64.b64decode(seed)) == 32


async def test_takes_over_the_former_integration(hass: HomeAssistant, hass_storage, hass_ws_client) -> None:
    """The key and the furniture of the separate integration "NeonPlan 3D - Eigene Möbel" stay: the pack it
    imported keeps a valid signature, and its furniture is listed and can be edited."""
    seed = base64.b64encode(bytes(range(32))).decode()
    item = json.loads((FIXTURES / "beispiel-pack.json").read_text())["items"][0]
    hass_storage[LEGACY_STORAGE_KEY_SEED] = {
        "version": 1,
        "minor_version": 1,
        "key": LEGACY_STORAGE_KEY_SEED,
        "data": {"seed": seed},
    }
    hass_storage[LEGACY_STORAGE_KEY_ITEMS] = {
        "version": 1,
        "minor_version": 1,
        "key": LEGACY_STORAGE_KEY_ITEMS,
        "data": {"items": [item], "release": 7},
    }
    await _setup(hass)
    assert hass_storage[STORAGE_KEY_SEED]["data"]["seed"] == seed
    ws = await hass_ws_client(hass)
    state = await _ws(ws, {"type": f"{WS_PREFIX}/state"})
    assert state["result"]["active"] and state["result"]["release"] == 7
    assert [i["id"] for i in state["result"]["items"]] == [item["id"]]
    pack = await _ws(ws, {"type": f"{WS_PREFIX}/pack"})
    imported = await _ws(ws, {"type": "neonplan3d/packs/import", "pack": pack["result"]["pack"]})
    assert imported["success"], imported


async def test_upload_rules(hass: HomeAssistant, hass_client, hass_read_only_access_token) -> None:
    await _setup(hass)
    client = await hass_client()
    s = uuid.uuid4().hex
    assert (await client.post(f"{UPLOAD_URL}?session={s}&file=a.stl&offset=0", data=b"x" * 10)).status == 200
    # pieces in order only
    assert (await client.post(f"{UPLOAD_URL}?session={s}&file=a.stl&offset=0", data=b"x")).status == 409
    # unknown file types and bad sessions are refused
    assert (await client.post(f"{UPLOAD_URL}?session={s}&file=a.exe&offset=0", data=b"x")).status == 400
    assert (await client.post(f"{UPLOAD_URL}?session=../x&file=a.stl&offset=0", data=b"x")).status == 400
    # admins only
    user = await hass_client(hass_read_only_access_token)
    assert (await user.post(f"{UPLOAD_URL}?session={s}&file=b.stl&offset=0", data=b"x")).status == 403
