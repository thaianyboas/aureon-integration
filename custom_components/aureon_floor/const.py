"""Constants for AUREON Floor Studio (separated from the official NeonPlan 3D, see storage.py)."""

from __future__ import annotations

DOMAIN = "aureon_floor"
# AUREON: its own domain, folder, URLs and stores, so that an update of the official NeonPlan 3D (domain
# "neonplan3d", same HACS folder before) can never replace or change this installation. The stores of the earlier
# names are copied once, newest name first (see storage.py); nothing of them is changed or deleted.
LEGACY_DOMAINS = ("neonplan3d", "floorplan_3d")
LEGACY_DOMAIN = LEGACY_DOMAINS[-1]
# the official integration; when it is installed as well, a repair issue asks to remove it (see __init__.py)
OFFICIAL_DOMAIN = "neonplan3d"

STORAGE_VERSION = 1
# minor versions of the building store; each step has a migration in storage.py
STORAGE_MINOR_VERSION = 2
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"
STORAGE_KEY_HISTORY = f"{DOMAIN}.history"
STORAGE_KEY_PACKS = f"{DOMAIN}.packs"
STORAGE_KEY_LICENSE = f"{DOMAIN}.license"
# opt-in usage and error reports (see diagnostics_report.py)
STORAGE_KEY_DIAGNOSTICS = f"{DOMAIN}.diagnostics"
# hass.data key of the reporter
DATA_DIAGNOSTICS = f"{DOMAIN}_diagnostics"

# restore points: at most this many, and a new one only after this pause since the last one
HISTORY_MAX = 20
HISTORY_INTERVAL = 600

URL_BASE = "/aureon_floor_static"
MAIN_BUNDLE = "neonplan3d.js"
PANEL_URL_PATH = "aureon-floor-studio"
PANEL_COMPONENT = "neonplan3d-panel"
PANEL_ICON = "mdi:floor-plan"
# AUREON: visible sidebar name (the element names stay those of NeonPlan, so dashboard cards keep working)
PANEL_TITLE = "AUREON Floor Studio"

SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
# a sentence for the open views (see voice.py) and the hass.data key of its broker
SIGNAL_ASK = f"{DOMAIN}_ask"
DATA_ASK = f"{DOMAIN}_ask"
# the voice settings (which sentences Assist hands to NeonPlan), kept in .storage
DATA_VOICE = f"{DOMAIN}_voice"
STORAGE_KEY_VOICE = f"{DOMAIN}.voice"
