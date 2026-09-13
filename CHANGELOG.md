# Changelog

## 1.1.2 - 2026-09-13

### Fixed

- Remove the always-failing pages.yml workflow; GitHub Pages deploys from the main/docs branch via repository settings.
- Propagate export failures to a nonzero exit code instead of silently succeeding.
- Report friendly errors for export/build with a missing slug or artifact, replacing full re-exports and raw ENOENT stacks.
- Skip design systems with broken YAML front matter during site builds, matching the gallery generator's resilience.
- Warn when the gallery/detail META tables drift from the systems/ directory so new systems are never silently dropped.
- Reject unparseable ingest URLs with a friendly message and restrict navigation to http/https/data protocols.
- Pick the newest cached Chromium by numeric version comparison instead of lexicographic order.
- Escape styleVars and gallery tile style attribute values to close an attribute-injection point for externally contributed design systems.
- Remove the always-empty dead tags field from the gallery generator.
- Skip the forge-anvil deck layout test gracefully when no Chrome/Chromium is available, matching the ingest tests.
- Document the HEIGE_CHROME executable-path risk and correct the README directory listing to the real docs/ output.

## 1.1.1 - 2026-07-31

- Propagate CLI child-process errors and exit codes.
- Harden ingest slugs, symlink boundaries, and YAML serialization.
- Keep all bundled design systems free of schema warnings.
- Keep the `forge-anvil` deck centered on desktop and mobile viewports.
- Add deterministic CLI and browser regression tests.

## 1.1.0 - 2026-07-14

- Add imagery guidance, Agent recipe cards, adjacent-style references, compact exports, and expanded flagship examples.
