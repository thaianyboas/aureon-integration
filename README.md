# AUREON Integration

Dedicated **HACS Integration distribution repository** for the AUREON Floor Studio Python backend and NeonPlan3D frontend assets.

**Status: preparation only — NOT READY TO INSTALL.** The repository intentionally does not yet contain `custom_components/neonplan3d` on its default branch. Do not add this repository to HACS yet.

## Source of truth

The authoritative source, tests and build scripts are in [AUREON Dashboard](https://github.com/thaianyboas/aureon-dashboard), branch `master`. This repository is for the eventual distribution of a reviewed, generated integration package. Do not maintain a second independent source fork.

## Candidate build

The [Prepare AUREON integration candidate](../../actions/workflows/candidate.yml) workflow can be started manually from the Actions tab. It checks out the dashboard source, packages the integration, checks its checksums and migration contract, and uploads a **review-only Actions artifact**. It does not commit to `main`, publish a release, or change any Home Assistant installation.

## Safety

- Keep the official NeonPlan3D integration installed in production until migration and rollback are validated.
- The modified integration uses the same `neonplan3d` domain as the official version. Do not install both in one Home Assistant instance.
- Do not upload apartment floorplans, tokens, licenses, or paid asset packs to this public repository.
- Preserve stable AUREON Dashboard v0.28.0 until release gates pass.
- No Home Assistant runtime test or HACS installation is claimed.

See [distribution strategy](https://github.com/thaianyboas/aureon-dashboard/blob/master/floor-studio/DISTRIBUTION_TARGET.md) and [migration and rollback](https://github.com/thaianyboas/aureon-dashboard/blob/master/floor-studio/NEONPLAN_MIGRATION_AND_ROLLBACK.md).
