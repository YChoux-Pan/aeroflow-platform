# Installation

AeroFlow ships as a **DSH Web UI bundle**. There is no hosted service and no npm
publish requirement. A user needs DSH Desktop/Web (current profile: `desktop`)
and this repository.

## Requirements

| Role | Requirements |
|---|---|
| Plugin user | DSH Web UI, WebGL 2 capable browser |
| Contributor | Node.js 20+, pnpm 9+ (bundled runtime also works), Git |
| 3D import | WebGL 2; local GPU recommended |

## 1. Clone

```bash
git clone https://github.com/YChoux-Pan/aeroflow-platform.git
cd aeroflow-platform
```

Keep the repository in a stable path. The DSH bundle is installed as a local
link; moving or deleting the folder breaks the plugin install.

## 2. Install the bundle

### A. DSH Plugins page (recommended)

1. Open DSH Web.
2. Open the **Plugins** page from the sidebar.
3. Use the add/install control and choose the local package directory
   `<repo>/plugin`.
4. Enable the bundle named **AeroFlow Lab** / `aeroflow-dsh-plugin`.
5. If the running app does not hot-reload the client, refresh the page or restart
   DSH once.

The plugin package root is [`../plugin`](../plugin/); do not select the repository
root.

### B. DSH agent

On the target computer, open a DSH session and ask:

> Install the local bundle at `<absolute-path>/aeroflow-platform/plugin` with the
> plugin manager and enable it.

The agent uses the same profile manager as the Plugins page.

### C. CLI

```bash
dsh plugin --profile desktop add "<absolute-path>/aeroflow-platform/plugin"
```

This adds the package to the profile. If your profile does not automatically
select the new bundle, enable it once in **Plugins**. Restart DSH if the current
process loaded an older copy.

> The package name is `aeroflow-dsh-plugin`. A previous installation named
> `@local/aeroflow-lab` should be removed first if it is still present.

## 3. Verify

1. Open a conversation.
2. Look for the **AeroFlow wind tunnel** strip above the composer.
3. Click it. The full-screen lab should open.
4. Import `models/racing/aeroflow-formula-01.glb` via **Import vehicle mesh**.
5. Confirm the model appears and streamlines animate.

If the strip is missing:

- Confirm the bundle is enabled in **Plugins**.
- Refresh the page; client bundles are cached by the running app.
- Check that `plugin/client.js` exists and is non-empty.
- Remove the old `@local/aeroflow-lab` bundle if it conflicts.
- See `docs/validation.md` for manual checks.

## Updating

```bash
cd aeroflow-platform
git pull --ff-only
```

The repository commits the built `plugin/client.js`, so no build is required for
normal updates. If the bundle does not reload:

1. Disable and re-enable it in **Plugins**, or
2. Restart DSH.

A release also ships a one-folder plugin zip. Extract it first, then select the
extracted `aeroflow-dsh-plugin/` folder in the Plugins page. The zip itself is
not guaranteed to be accepted as a package spec by every DSH version.

## Uninstall

Use **Plugins → AeroFlow Lab → Remove** or the CLI equivalent. Removing the
bundle does not delete this repository or any generated model/prompt files.

## Troubleshooting import errors

| Message | Cause | Fix |
|---|---|---|
| Invalid file / no meshes | corrupt or empty model | re-export from Blender / source tool |
| External resources | `.gltf` references `.bin` or textures | export `.glb`, or embed data URIs |
| Unsupported compression | Draco / Meshopt / KTX2 | export an uncompressed GLB |
| 16 MB limit | file too large | decimate or simplify the mesh |
| Black/broken materials | missing textures in a glTF | use a self-contained GLB |

## Distribution policy

- Public repository: source, skills, prompts, and built plugin bundle.
- Release asset: `aeroflow-plugin-vX.Y.Z.zip` containing only the runtime plugin
  folder.
- No credentials, no local profile files, and no generated user data are
  committed.
