# Maintenance runbook

AeroFlow is intended to be maintained for a long time. Keep changes small,
recorded, and reversible.

## Cadence

| Frequency | Task |
|---|---|
| Every push / PR | CI: verify, build, import smoke test |
| Weekly | Triage issues; check DSH compatibility reports |
| Monthly | Review dependencies and open PRs; run manual visual pass if UI changed |
| Quarterly | Refresh skill snapshots; review roadmap; check upstream licenses |
| Every release | Changelog, version bump, tag, plugin zip, release notes |
| After DSH upgrade | Re-run install + slot checks + import smoke test |

## Release checklist

1. Update `plugin/package.json` version (SemVer).
2. Update `CHANGELOG.md`; move `Unreleased` entries into the dated version.
3. Rebuild `plugin/client.js` if source/locale changed:
   ```bash
   cd plugin/tools
   pnpm install --frozen-lockfile
   node build.mjs
   ```
4. Run `node scripts/verify.mjs` and the import smoke test.
5. Commit with an English imperative message.
6. Tag `vX.Y.Z`; push the tag.
7. The release workflow builds and attaches `aeroflow-plugin-vX.Y.Z.zip`.
8. Verify the release asset and installation from a clean clone.
9. Add a journal entry in `docs/journal.md`.

## Plugin version versus repository version

The plugin package version is the installable artifact version. Repository docs
can evolve without a plugin bump; only bump when runtime files change.

## Updating a vendored skill

1. Identify the new upstream commit.
2. Clone the upstream with a blob-filtered sparse checkout into a unique,
   reviewed temporary directory.
3. Read the upstream `LICENSE` and `SKILL.md`.
4. Copy only the documented files. Never copy `.git`, sample secrets, or
   unrelated repository content.
5. Update the folder's `README.md` and `SOURCE.md`.
6. Update `skills/SOURCES.json` with the new commit and date.
7. Run `node scripts/verify.mjs`.
8. Inspect the diff. If the upstream license changed, update
   `THIRD_PARTY_NOTICES.md` before merging.

If a repository has no license, keep only metadata and link to it. Do not
redistribute its content.

## Updating the plugin dependency set

- `three` and `esbuild` are development/build dependencies under
  `plugin/tools/`.
- The runtime bundle is self-contained; do not add runtime network dependencies.
- After a Three.js upgrade, re-run:
  - build;
  - import smoke test with GLB/glTF/OBJ;
  - manual WebGL check;
  - locale and layout check.
- Update `plugin/THIRD_PARTY_NOTICES.md` and `THIRD_PARTY_NOTICES.md` if the
  Three.js version changes.

## Regenerating racing assets

```bash
cd plugin/tools
node generate-racing-model.mjs
cd ../..
node scripts/verify.mjs
```

The generator rewrites GLB, glTF, OBJ, and `models/racing/manifest.json`. Review
the manifest hashes and keep the matching metadata.

## Data safety

- Do not delete a shared workspace or vendor directory unless you have listed
  and verified its complete contents first.
- Prefer additive copies into a new, clearly named directory over in-place
  deletion.
- Keep third-party files under version control with their license.
- Never commit DSH profile data, credentials, or local absolute paths that
  identify a private machine.

## Breaking-change policy

- Rename a plugin package only with a major version bump and a migration note.
- Keep `plugin/client.js` loadable by the current DSH Web runtime; do not assume
  a new DSH API without a compatibility test.
- Keep prompt schemas backward-compatible where possible; add fields instead of
  renaming them.
- Deprecations stay documented for at least one minor release.

## Backup and recovery

- The repository is the source of truth.
- Vendor snapshots are pinned by commit, so they can be re-fetched.
- Generated prompt Markdown can be regenerated from JSON specs and the compiler.
- Racing binaries can be regenerated from the generator script; the manifest
  records their hashes.
- Keep the `THIRD_PARTY_NOTICES.md` and per-folder licenses with any partial
  export.
