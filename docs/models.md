# Racing models

## Catalog

[`models/racing/manifest.json`](../models/racing/manifest.json) indexes every
asset. Each model has a manifest with source prompt, generator, dimensions, and
SHA-256 records.

| Model | Class | Source | Files |
|---|---|---|---|
| AeroFlow Formula 01 | open-wheel concept | `plugin/tools/generate-racing-model.mjs` | GLB / glTF / OBJ |
| AeroFlow GT3 Endurance | GT3 endurance concept | `prompts/examples/gt3-endurance.json` → `plugin/tools/generate-gt3-model.mjs` | GLB / glTF / OBJ |

Both are original, brand-free AeroFlow designs. The Formula model is hand-authored
test geometry; the GT3 model is the first asset generated from the installed
prompt-engineering pipeline.

## AeroFlow GT3 Endurance

- Design source: [`prompts/examples/gt3-endurance.json`](../prompts/examples/gt3-endurance.json)
- Prompt package: [`prompts/generated/gt3-endurance.md`](../prompts/generated/gt3-endurance.md)
- Generator: [`plugin/tools/generate-gt3-model.mjs`](../plugin/tools/generate-gt3-model.mjs)
- Manifest: [`models/racing/aeroflow-gt3-endurance.manifest.json`](../models/racing/aeroflow-gt3-endurance.manifest.json)
- GLB (preferred): [`models/racing/aeroflow-gt3-endurance.glb`](../models/racing/aeroflow-gt3-endurance.glb)
- Preview: [`models/racing/previews/`](../models/racing/previews/)

Design intent: long hood, cabin rearward, wide track, front splitter, canards,
vented hood, side skirts, rear diffuser, swan-neck wing, roof scoop, graphite
body, cyan accent stripe, no logos or text.

The model is 132 meshes / ~12k triangles. The prompt target was 25k; the asset is
intentionally lighter for real-time import. Use the real dimensions in the
manifest and set Cd in the lab.

## Generation workflow

```bash
# 1. Edit the prompt specification
#    prompts/examples/gt3-endurance.json

# 2. Rebuild the compiled prompt package
node scripts/prompt-engine.mjs --spec prompts/examples/gt3-endurance.json --mode all --out prompts/generated/gt3-endurance.md

# 3. Regenerate the asset
cd plugin/tools
node generate-gt3-model.mjs

# 4. Verify hashes, dimensions, prompt links, and import
cd ../..
node scripts/verify.mjs
cd plugin/tools && node run-import-smoke.mjs
```

## Import rules

- GLB is preferred.
- glTF must have embedded resources.
- OBJ receives the AeroFlow material treatment.
- Draco, Meshopt, KTX2, and external `.bin`/textures are rejected.
- The importer normalizes display size; dimension and Cd fields remain editable.

## Licensing

Model geometry, generator code, and previews are original AeroFlow work under the
repository MIT license. No third-party vehicle geometry or trademark is included.
Previews are approximate offline renders, not AeroFlow/WebGL captures.
