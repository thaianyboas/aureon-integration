# CI of the AUREON integration distribution

Two workflows run on every push to `master` (and on pull requests / by hand):

| Workflow | What it proves | Typical time |
|---|---|---|
| **Validate AUREON integration distribution** (`validate.yml`) | This repository is consistent: YAML parses, `hacs.json` follows the HACS integration schema, the integration manifest is valid, every Python file compiles, every JSON parses, `MANIFEST.json` was built from the commit in `SOURCE_COMMIT`, every packaged file matches its checksum (nothing missing, added or edited by hand), the release guard (`installation_approved: false`) holds, and no credential-like strings are present. | < 1 min |
| **Build pinned AUREON integration candidate** (`candidate.yml`) | The pinned dashboard commit passes its full gate (tests, build, browser checks, backend tests) and a fresh package built from it is **byte-identical** to the committed package. Uploads a review-only artifact. | ~15 min |

Both use pinned runner images (`ubuntu-24.04`), Node 24 based actions and cancel superseded runs of the same branch.
Action updates arrive as one grouped Dependabot pull request per month and are merged by hand.

## How to publish a package (the order matters)

1. In `aureon-dashboard`: commit **all** changes and push.
2. `npm run build` (refreshes the build evidence), then `node scripts/package-hacs-integration-candidate.mjs`.
   The script refuses to run with uncommitted changes, because the package must be the code of `HEAD`.
3. Copy the whole package into this repository: `custom_components/`, `MANIFEST.json`, `LICENSE` **and**
   `SOURCE_COMMIT` from `build/neonplan3d-hacs-integration-candidate/` (never write `SOURCE_COMMIT` by hand).
4. `python3 .github/scripts/validate_distribution.py` locally, then commit and push.

## Diagnosing a failure

Open the failed run; every check prints `PASS [name]` or `FAIL [name] reason / How to fix` and also appears as an
annotation. The validator reports all failing checks of a run at once.

| Failing check | Usual cause | Fix |
|---|---|---|
| `source pin` | The package was built before the dashboard commit existed (the failures of 2026-11-01). | Follow the publish order above. |
| `package files` | Files edited by hand, or a partial copy. | Copy the complete generated package. |
| `reproducible package` (candidate) | Committed package is stale or built from a dirty tree. | Rebuild from the pinned commit. |
| `hacs.json` / `integration manifest` | Metadata changed. | Restore the HACS/HA schema fields. |
| `python syntax` / `integration json` | A real error in the integration source. | Fix it in `aureon-dashboard`, repackage. |
| `secrets` | A token or key was committed. | Remove it **and rotate the credential**. |

Never silence a failing check (`continue-on-error`, `|| true`, removing a test); it reports a real inconsistency.
