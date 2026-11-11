# Project journal

Reverse-chronological engineering log. Add an entry for significant decisions,
upstream snapshots, releases, and unresolved risks. This is not a changelog;
record the reasoning and the evidence.

## 2026-11-11 — GT3 Endurance asset from the prompt pipeline

**Goal:** produce a new racing model using the installed prompt engineering
rather than hand-waving a new concept.

**Input:** `prompts/examples/gt3-endurance.json`, compiled to
`prompts/generated/gt3-endurance.md`.

**Output:** `aeroflow-gt3-endurance.glb`, `.gltf`, `.obj`, a per-model manifest,
and three offline software previews.

**Design choices:**

- Original GT3-style body, no real manufacturer/team/sponsor identity.
- Long hood and cabin set rearward; front splitter, canards, vented hood, wide
  fenders, side skirts, diffuser, swan-neck wing, roof scoop, cyan livery accent.
- 132 meshes, ~12k triangles, 5.07 m long, 2.9 m wheelbase, 2.265 m wide,
  1.395 m high including the wing. The display is normalized by AeroFlow.
- The GT3 model uses separate PBR materials; the OBJ preview is flat-shaded and
  intentionally labelled as an approximate software preview.

**Asset organization:**

- `models/racing/manifest.json` is now a catalog.
- Formula and GT3 have separate `*.manifest.json` files with dimensions and
  SHA-256.
- Import smoke coverage was extended to all six files.

**Verification:** repository verification passed 117/117 checks; the import smoke
test passed all six GLB/glTF/OBJ assets (the GT3 path resolves to 132 meshes); CI
run `42951971803` succeeded on commit `3b94e47`. Visual WebGL acceptance in the
lab is still manual and is not claimed by the previews.

## 2026-11-11 — Public repository and v1.1.0 release

**Published:** <https://github.com/YChoux-Pan/aeroflow-platform>
public, default branch `main`.

**Verification evidence:**

- Repository verification: `90/90` checks passed locally and in CI.
- Main CI run `42950164378` (merge `e6f7dd6`) passed, including
  frozen-lockfile installation, bundle rebuild/diff, import smoke test,
  repository verification, and plugin packaging.
- Release workflow run `42950190967` passed for tag `v1.1.0`.
- Release asset `aeroflow-plugin-v1.1.0.zip` (206,788 bytes) is attached.
- A fresh shallow clone of the public repository passed
  `node scripts/verify.mjs`.
- The renamed bundle `aeroflow-dsh-plugin@1.1.0` is installed in the local
  `desktop` profile; both DSH client slots are active.
- The previous `@local/aeroflow-lab` bundle was removed before the rename.

**Open items:**

- Manual WebGL/visual acceptance in the DSH page remains pending.
- Dependabot opened update PRs for Three.js, esbuild, and Actions versions;
  these should be evaluated in the next maintenance window, not auto-merged.
- Prompt Lab in the plugin UI and compressed-glTF decoding are roadmap items.

## 2026-11-11 — Platform consolidation and v1.1.0

**Context:** AeroFlow Lab existed as a working DSH plugin but had only OBJ
import, no persistent project repository, and no reproducible prompt/skills
layer.

**Done:**

- Migrated the plugin into a monorepo under `aeroflow-platform/plugin`.
- Renamed the package to `aeroflow-dsh-plugin` and bumped to `1.1.0`.
- Added OBJ/GLB/self-contained glTF import with asynchronous attachment,
  material preservation, typed errors, and stale-request disposal.
- Added an original Formula 01 racing test asset and deterministic generator.
- Added the prompt specification, templates, examples, generated packages, and
  an offline compiler.
- Vendored and documented five upstream skill/tooling groups, with pinned
  commits and license audit.
- Added CI, release packaging, installation, architecture, validation, and
  maintenance documentation.

**Known limitations:**

- Visual/WebGL acceptance still requires a manual DSH check.
- The aerodynamic field is a visual proxy; no validated CFD.
- Compressed glTF and external glTF resources are deliberately unsupported.
- The old `@local/aeroflow-lab` install must be removed before installing the
  renamed package.

**Next:** manual light/dark visual pass; in-app import format hint; Prompt Lab
panel in the plugin.

## 2026-11-05 — Initial AeroFlow Lab plugin

**Context:** Build an interactive 3D wind-tunnel experience inspired by a dark
teal automotive HUD reference video.

**Done:**

- Five parametric test articles.
- Wind speed/direction controls, streamlines, wake, force-balance drift.
- Drag, dynamic pressure, power, Reynolds, CdA telemetry.
- Automatic and manual flow palettes.
- Bilingual UI and composer launcher.
- Packaged as a DSH Web bundle.

**Lessons:**

- Client slots and module-loader wiring must be verified before visual polish.
- The data path from simulation to React must be throttled to avoid re-render
  pressure.
- A separate import module keeps vehicle loading testable without WebGL.

## Decision log

| Date | Decision | Rationale |
|---|---|---|
| 2026-11-11 | Rename package to `aeroflow-dsh-plugin` | Stable public identity; no npm scope ownership assumption |
| 2026-11-11 | Reject compressed glTF | No decoder assets bundled; offline reliability over silent failure |
| 2026-11-11 | Preserve glTF materials | Imported vehicles should retain authored PBR appearance |
| 2026-11-11 | Keep camera-prompts metadata-only | Upstream had no license at snapshot time |
| 2026-11-11 | Commit built `client.js` | Other computers can install without a Node build |
| 2026-11-11 | Use a deterministic prompt compiler | Reproducibility and reviewable prompt changes |
| 2026-11-11 | Keep prompt and plugin layers separate | Design iteration should not require a plugin rebuild |
