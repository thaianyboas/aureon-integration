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
# the index of the floor plans (names, order, where they stand on the property, the bin); the first plan, "main",
# is the one every installation had before and stays in the stores above, each further plan has stores of its own
# (STORAGE_KEY_BUILDING + "." + id, STORAGE_KEY_HISTORY + "." + id)
STORAGE_KEY_PLANS = f"{DOMAIN}.plans"
MAIN_PLAN = "main"
# a deleted plan waits this many days in the bin before its stores are removed
PLAN_TRASH_DAYS = 30
MAX_PLANS = 50
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

# a plan was saved (its revision and id), and the list of plans changed
SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
SIGNAL_PLANS_UPDATED = f"{DOMAIN}_plans_updated"
# a sentence for the open views (see voice.py) and the hass.data key of its broker
SIGNAL_ASK = f"{DOMAIN}_ask"
DATA_ASK = f"{DOMAIN}_ask"
# an announcement for the open views (see announce.py): they speak and show it
SIGNAL_ANNOUNCE = f"{DOMAIN}_announce"
# the open views of some card templates (or all) load their page again (the service `reload_screens`)
SIGNAL_RELOAD = f"{DOMAIN}_reload"
# the voice settings (which sentences Assist hands to NeonPlan), kept in .storage
DATA_VOICE = f"{DOMAIN}_voice"
# the NeonPlan views open now (screens.py): what each shows, for the card templates' overview
DATA_SCREENS = f"{DOMAIN}_screens"
STORAGE_KEY_VOICE = f"{DOMAIN}.voice"
