# Scripts

All scripts are repository-local and use Node.js built-ins unless noted.

| Script | Purpose |
|---|---|
| `prompt-engine.mjs` | Validate a vehicle prompt spec and compile deterministic Markdown |
| `verify.mjs` | Full offline repository verification |
| `package-plugin.mjs` | Build `dist/aeroflow-plugin-v<version>.zip` with runtime files only |
| `install-plugin.ps1` | Clone/update and add the local bundle on Windows |
| `install-plugin.sh` | Clone/update and add the local bundle on macOS/Linux |

## Examples

```bash
node scripts/prompt-engine.mjs --spec prompts/examples/gt3-endurance.json --mode all
node scripts/verify.mjs
node scripts/package-plugin.mjs
```

The install scripts add the package to a DSH profile with `dsh plugin add`.
Enabling the bundle may still require the DSH **Plugins** page, depending on the
profile. They never edit the profile's configuration files by hand.

## Release artifact

`package-plugin.mjs` creates a minimal folder/zip suitable for the Plugins page:
`package.json`, `index.js`, `client.js`, `cordis.patch.yml`, `icon.svg`,
`locale/*.json`, `LICENSE`, and the notices. Extract the zip before selecting the
folder in DSH; not every DSH version accepts a zip as a package spec. It
deliberately excludes source, build tools, and `node_modules`.
