"""Websocket commands of the "Eigene Möbel" page. Importing is done by the page through the normal pack import
(neonplan3d/packs/import), so the pack is checked and kept exactly as one imported by hand."""

from __future__ import annotations

import json
from pathlib import PurePosixPath
from types import ModuleType
from typing import TYPE_CHECKING, Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
import voluptuous as vol

from .const import DATA_OWN_FURNITURE, PACK_ID, WS_PREFIX
from .signer import Signer, SignerError
from .upload import sessions_of

if TYPE_CHECKING:
    from . import Runtime

_OPTIONS = vol.Schema(
    {
        vol.Optional("max_parts"): vol.All(int, vol.Range(min=1, max=60)),
        vol.Optional("units"): vol.In(["auto", "m", "cm", "mm", "in"]),
        vol.Optional("up"): vol.In(["auto", "y", "z"]),
        vol.Optional("turn"): vol.In([0, 90, 180, 270]),
        vol.Optional("edges"): vol.Any(bool, vol.In(["faint", "glow"])),
    }
)


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    for cmd in (ws_state, ws_process, ws_convert, ws_save, ws_remove, ws_pack):
        websocket_api.async_register_command(hass, cmd)


def _import_tools() -> tuple[ModuleType, ModuleType]:
    # numpy is only loaded once a model is read, not with every start of NeonPlan
    from . import converter, loaders

    return converter, loaders


async def _tools(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> tuple[ModuleType, ModuleType] | None:
    try:
        return await hass.async_add_import_executor_job(_import_tools)
    except ImportError as err:
        # Home Assistant's images bring numpy; a bare Python install may not
        connection.send_error(msg["id"], "numpy_missing", str(err))
        return None


def _runtime(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> Runtime | None:
    runtime: Runtime | None = hass.data.get(DATA_OWN_FURNITURE)
    if runtime is None:
        connection.send_error(msg["id"], "not_loaded", "NeonPlan 3D is not set up")
    return runtime


def _signer(runtime: Runtime, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> Signer | None:
    if runtime.signer is None:
        connection.send_error(msg["id"], runtime.error or "not_active", runtime.detail or runtime.error or "not active")
    return runtime.signer


@websocket_api.websocket_command({vol.Required("type"): f"{WS_PREFIX}/state"})
@websocket_api.require_admin
@callback
def ws_state(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Whether the key works, and the own furniture."""
    if (runtime := _runtime(hass, connection, msg)) is None:
        return
    connection.send_result(
        msg["id"],
        {
            "active": runtime.signer is not None,
            "error": runtime.error,
            "detail": runtime.detail,
            "key_id": runtime.key_id,
            "pack_id": PACK_ID,
            "items": runtime.library.items,
            "release": runtime.library.release,
        },
    )


class _NoItems(Exception):
    def __init__(self, code: str, detail: str) -> None:
        super().__init__(f"{code}: {detail}")
        self.code = code
        self.detail = detail


def _json_items(files: dict[str, bytes]) -> list[dict[str, Any]]:
    """Items of uploaded JSON files: a pack (signed or not), a list of items or a single item."""
    items: list[dict[str, Any]] = []
    for name, data in files.items():
        if PurePosixPath(name.lower()).suffix not in (".json", ".fp3dpack"):
            continue
        try:
            doc = json.loads(bytes(data).decode("utf-8-sig"))
        except ValueError as err:
            raise _NoItems("broken_file", f"{name}: {err}") from err
        if isinstance(doc, dict) and isinstance(doc.get("payload"), dict):
            doc = doc["payload"]
        if isinstance(doc, dict) and isinstance(doc.get("items"), list):
            found = doc["items"]
        elif isinstance(doc, list):
            found = doc
        elif isinstance(doc, dict) and "parts" in doc:
            found = [doc]
        else:
            raise _NoItems("no_items", name)
        items.extend(i for i in found if isinstance(i, dict))
    return items


def _result(res: Any) -> dict[str, Any]:
    return {
        "size": res.size,
        "parts": res.parts,
        "notes": res.notes,
        "stats": res.stats,
        "glow": res.glow,
        "screen": res.screen,
        "unit": res.unit,
        "up": res.up,
    }


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{WS_PREFIX}/process",
        vol.Required("session"): str,
        vol.Optional("options", default={}): _OPTIONS,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_process(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Read an uploaded model (or JSON items) and convert it with the options."""
    if (runtime := _runtime(hass, connection, msg)) is None:
        return
    session = sessions_of(runtime).get(msg["session"])
    if session is None or not session.files:
        connection.send_error(msg["id"], "no_upload", "upload not found")
        return
    files = {k: bytes(v) for k, v in session.files.items()}
    if all(PurePosixPath(n.lower()).suffix in (".json", ".fp3dpack") for n in files):
        try:
            items = await hass.async_add_executor_job(_json_items, files)
        except _NoItems as err:
            connection.send_error(msg["id"], err.code, err.detail)
            return
        checked = []
        for item in items:
            problem = None
            if runtime.signer is not None:
                try:
                    runtime.signer.check_item(item)
                except SignerError as err:
                    problem = err.detail
            checked.append({"item": item, "problem": problem})
        connection.send_result(msg["id"], {"kind": "json", "items": checked})
        return
    if (tools := await _tools(hass, connection, msg)) is None:
        return
    converter, loaders = tools
    try:
        model = await hass.async_add_executor_job(loaders.load, files)
        session.model = model
        session.name = model.name
        res = await hass.async_add_executor_job(converter.convert, model, converter.Options.from_dict(msg["options"]))
    except (loaders.LoadError, converter.ConvertError) as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    # the files are not needed any more once the model is read
    session.files = {}
    session.size = 0
    connection.send_result(
        msg["id"],
        {
            "kind": "model",
            "name": model.name,
            "format": model.kind,
            "objects": len(model.objects),
            "result": _result(res),
        },
    )


@websocket_api.websocket_command(
    {vol.Required("type"): f"{WS_PREFIX}/convert", vol.Required("session"): str, vol.Required("options"): _OPTIONS}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_convert(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Convert the model of an upload again, with other options."""
    if (runtime := _runtime(hass, connection, msg)) is None:
        return
    session = sessions_of(runtime).get(msg["session"])
    if session is None or session.model is None:
        connection.send_error(msg["id"], "no_upload", "upload not found - please upload again")
        return
    if (tools := await _tools(hass, connection, msg)) is None:
        return
    converter = tools[0]
    try:
        res = await hass.async_add_executor_job(
            converter.convert, session.model, converter.Options.from_dict(msg["options"])
        )
    except converter.ConvertError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    connection.send_result(msg["id"], {"result": _result(res)})


_ITEM_FIELDS = vol.Schema(
    {
        vol.Required("name"): vol.All(str, vol.Length(min=1, max=80)),
        vol.Required("size"): [vol.Coerce(float)],
        vol.Required("parts"): [dict],
        vol.Optional("id"): str,
        vol.Optional("group"): str,
        vol.Optional("room"): [str],
        vol.Optional("mount"): str,
        vol.Optional("wall_y"): vol.Coerce(float),
        vol.Optional("light"): vol.Any(None, str),
        vol.Optional("electric"): bool,
        vol.Optional("surface"): bool,
        vol.Optional("symbol"): list,
        vol.Optional("tags"): [str],
    },
    extra=vol.REMOVE_EXTRA,
)


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{WS_PREFIX}/save",
        vol.Required("item"): dict,
        vol.Optional("replace"): vol.Any(None, str),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_save(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Add or replace an item; answers with the signed pack the page then imports."""
    if (runtime := _runtime(hass, connection, msg)) is None or (signer := _signer(runtime, connection, msg)) is None:
        return
    raw = dict(msg["item"])
    # a JSON item may name itself by language: take that as is
    names = raw.get("name") if isinstance(raw.get("name"), dict) else None
    if names:
        raw["name"] = str(next(iter(names.values())))
    try:
        fields = _ITEM_FIELDS(raw)
    except vol.Invalid as err:
        connection.send_error(msg["id"], "invalid", str(err))
        return
    library = runtime.library
    if msg.get("replace") and library.get(msg["replace"]) is not None:
        item_id = msg["replace"]
    else:
        item_id = library.free_id(fields.get("id") or fields["name"])
    item: dict[str, Any] = {
        "id": item_id,
        "name": names or {"de": fields["name"], "en": fields["name"]},
        "size": fields["size"],
        "parts": fields["parts"],
    }
    for key in ("group", "room", "symbol", "tags", "electric", "surface", "light"):
        if fields.get(key) not in (None, "", [], False):
            item[key] = fields[key]
    if fields.get("mount") in ("surface", "wall", "ceiling"):
        item["mount"] = fields["mount"]
        if fields["mount"] == "wall" and fields.get("wall_y") is not None:
            item["wall_y"] = fields["wall_y"]
    try:
        signer.check_item(item)
        before = [dict(i) for i in library.items], library.release
        library.put(item)
        try:
            pack = signer.pack(library.items, library.release)
        except SignerError:
            library.items, library.release = before
            raise
    except SignerError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    except ValueError as err:
        connection.send_error(msg["id"], str(err), "at most 200 items")
        return
    await library.async_save()
    connection.send_result(msg["id"], {"pack": pack, "pack_id": PACK_ID, "item_id": item_id})


@websocket_api.websocket_command({vol.Required("type"): f"{WS_PREFIX}/remove", vol.Required("item_id"): str})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove an item; answers with the new pack, or none when nothing is left."""
    if (runtime := _runtime(hass, connection, msg)) is None or (signer := _signer(runtime, connection, msg)) is None:
        return
    if not runtime.library.remove(msg["item_id"]):
        connection.send_error(msg["id"], "not_found", "item not found")
        return
    await runtime.library.async_save()
    try:
        pack = signer.pack(runtime.library.items, runtime.library.release) if runtime.library.items else None
    except SignerError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    connection.send_result(msg["id"], {"pack": pack, "pack_id": PACK_ID})


@websocket_api.websocket_command({vol.Required("type"): f"{WS_PREFIX}/pack"})
@websocket_api.require_admin
@callback
def ws_pack(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The signed pack of all own furniture (to import again, or to keep as a file)."""
    if (runtime := _runtime(hass, connection, msg)) is None or (signer := _signer(runtime, connection, msg)) is None:
        return
    if not runtime.library.items:
        connection.send_result(msg["id"], {"pack": None, "pack_id": PACK_ID})
        return
    try:
        pack = signer.pack(runtime.library.items, runtime.library.release)
    except SignerError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    connection.send_result(msg["id"], {"pack": pack, "pack_id": PACK_ID})
