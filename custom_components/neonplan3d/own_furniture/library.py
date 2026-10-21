"""The own furniture, kept in Home Assistant's storage; all of it goes into one signed pack."""

from __future__ import annotations

import re
import time
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import LEGACY_STORAGE_KEY_ITEMS, STORAGE_KEY_ITEMS

_UMLAUTS = str.maketrans({"ä": "ae", "ö": "oe", "ü": "ue", "ß": "ss", "Ä": "ae", "Ö": "oe", "Ü": "ue"})
MAX_ITEMS = 200  # NeonPlan's limit per pack


def slug(text: str) -> str:
    """An id NeonPlan accepts: a-z, 0-9, _ . - and at most 40 characters."""
    s = re.sub(r"[^a-z0-9_-]+", "_", str(text).translate(_UMLAUTS).lower()).strip("_-")
    s = re.sub(r"_+", "_", s)[:32].strip("_-")
    return s if s and s[0].isalnum() else f"moebel_{s}".strip("_")[:32] or "moebel"


class Library:
    """The own items and the pack's release number."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._hass = hass
        self._store: Store[dict[str, Any]] = Store(hass, 1, STORAGE_KEY_ITEMS)
        self.items: list[dict[str, Any]] = []
        self.release = 0

    async def async_load(self) -> None:
        data = await self._store.async_load()
        if data is None:
            # the furniture of the former separate integration "NeonPlan 3D - Eigene Möbel"
            legacy: Store[dict[str, Any]] = Store(self._hass, 1, LEGACY_STORAGE_KEY_ITEMS)
            data = await legacy.async_load() or {}
            if data:
                await self._store.async_save(data)
        self.items = list(data.get("items", []))
        self.release = int(data.get("release", 0))

    async def async_save(self) -> None:
        await self._store.async_save({"items": self.items, "release": self.release, "saved_at": time.time()})

    def get(self, item_id: str) -> dict[str, Any] | None:
        return next((i for i in self.items if i["id"] == item_id), None)

    def free_id(self, wanted: str) -> str:
        base = slug(wanted)
        taken = {i["id"] for i in self.items}
        if base not in taken:
            return base
        n = 2
        while f"{base}_{n}" in taken:
            n += 1
        return f"{base}_{n}"

    def put(self, item: dict[str, Any]) -> None:
        """Add an item, or replace the one with the same id (furniture in the plan follows it)."""
        if self.get(item["id"]) is None and len(self.items) >= MAX_ITEMS:
            raise ValueError("full")
        self.items = [i for i in self.items if i["id"] != item["id"]] + [item]
        self.release = min(self.release + 1, 100000)

    def remove(self, item_id: str) -> bool:
        kept = [i for i in self.items if i["id"] != item_id]
        if len(kept) == len(self.items):
            return False
        self.items = kept
        self.release = min(self.release + 1, 100000)
        return True
