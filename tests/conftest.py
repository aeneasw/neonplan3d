"""Fixtures for NeonPlan 3D tests."""

from __future__ import annotations

from collections.abc import Generator
from unittest.mock import AsyncMock, patch

from homeassistant.core import HomeAssistant
import pytest

from custom_components.neonplan3d import packs


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(enable_custom_integrations):
    """Enable loading custom integrations in all tests."""
    return


@pytest.fixture(autouse=True)
def mock_frontend(hass: HomeAssistant) -> Generator[dict[str, object]]:
    """Stand in for the frontend and panel_custom components (hass_frontend is not installed in tests)."""
    hass.config.components.update({"frontend", "panel_custom"})
    with (
        patch("homeassistant.components.frontend.add_extra_js_url") as add_js,
        patch("homeassistant.components.frontend.remove_extra_js_url") as remove_js,
        patch("homeassistant.components.frontend.async_remove_panel") as remove_panel,
        patch("homeassistant.components.panel_custom.async_register_panel", new_callable=AsyncMock) as register,
    ):
        yield {"add_js": add_js, "remove_js": remove_js, "remove_panel": remove_panel, "register": register}


@pytest.fixture(autouse=True)
def restore_pack_keys() -> Generator[None]:
    """Each setup adds its own furniture key to the pack check (in memory): every test starts with the shipped keys."""
    keys, studio = dict(packs.PACK_PUBLIC_KEYS), set(packs.STUDIO_KEYS)
    yield
    packs.PACK_PUBLIC_KEYS.clear()
    packs.PACK_PUBLIC_KEYS.update(keys)
    packs.STUDIO_KEYS.clear()
    packs.STUDIO_KEYS.update(studio)
