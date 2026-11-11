# Contributing to AeroFlow

Thanks for helping improve AeroFlow. This repository contains a DSH plugin, a
prompt compiler, vendored skill snapshots, and binary model assets. Treat each
surface with its own rules.

## Development setup

```bash
git clone https://github.com/YChoux-Pan/aeroflow-platform.git
cd aeroflow-platform
cd plugin/tools
pnpm install
cd ../..
node scripts/verify.mjs
```

The plugin runtime is already built and committed at `plugin/client.js`. Rebuild
it only when changing `plugin/source/` or `plugin/locale/`:

```bash
cd plugin/tools
node build.mjs
cd ../..
node scripts/verify.mjs
```

## What to edit

- Plugin behavior/UI: `plugin/source/`.
- Runtime strings: `plugin/locale/en.json` and `plugin/locale/zh.json` (key
  parity is enforced).
- Prompt conventions: `prompts/` and `scripts/prompt-engine.mjs`.
- Project-owned skill: `skills/aeroflow-vehicle-prompt-engineer/`.
- Original model geometry: `plugin/tools/generate-racing-model.mjs`; regenerate
  assets instead of editing binaries by hand.
- Documentation and governance: `docs/`, `README.md`, `CHANGELOG.md`,
  `ROADMAP.md`.

## Do not edit vendored skills

Files under `skills/vendor/` are pinned upstream snapshots. To update one,
follow `docs/maintenance.md`, update the commit in `skills/SOURCES.json`, copy
the documented files, and refresh the folder's `SOURCE.md`. Do not hide upstream
changes inside unrelated commits.

## Code and content quality

- Use clear, brand-free vehicle language. Do not add a real team livery or
  manufacturer badge to an example prompt.
- Do not present the visual field as validated CFD. The UI copy must keep the
  distinction.
- Keep prompt examples reproducible: if you add one, generate its Markdown with
  `scripts/prompt-engine.mjs` and commit both the JSON and the generated file.
- Keep the plugin bundle free of React; DSH owns the React runtime.
- Do not add runtime network dependencies. The 3D lab must work offline.
- Do not commit `node_modules` or `.vendor-src`.

## Tests

Before opening a pull request:

```bash
node scripts/verify.mjs
cd plugin/tools && node run-import-smoke.mjs
```

The import smoke test exercises the original GLB, glTF, and OBJ assets plus
expected failure modes for external resources, compressed assets, and invalid
GLB headers.

## Commit and release process

- Use imperative, scoped subjects, e.g. `plugin: preserve glTF materials`.
- Update `CHANGELOG.md` under `Unreleased` for user-visible changes.
- Add a dated entry to `docs/journal.md` for significant decisions.
- Versions follow SemVer for `plugin/package.json`.
- Release tags use `vX.Y.Z`. The release workflow attaches a plugin zip.
- Third-party license changes require a `THIRD_PARTY_NOTICES.md` update.

## Security

Please do not open a public issue for a credential leak or code-execution
vulnerability. See [`SECURITY.md`](SECURITY.md).
