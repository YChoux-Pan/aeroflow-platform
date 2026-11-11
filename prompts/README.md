# AeroFlow prompt engineering

This directory is the reproducible prompt layer for racing-car, sports-car, and
vehicle-asset generation. It is deliberately separate from the vendored skill
snapshots so AeroFlow can evolve its own prompt language without modifying
third-party files.

## Quick start

```bash
# From the repository root
node scripts/prompt-engine.mjs --spec prompts/examples/gt3-endurance.json --mode all
node scripts/prompt-engine.mjs --spec prompts/examples/formula-2026.json --mode reference
node scripts/prompt-engine.mjs --spec prompts/examples/lemans-hypercar.json --mode sheet --out prompts/generated/lemans-sheet.md
```

The engine is deterministic, offline, and dependency-free. It validates the
spec shape, composes English image prompts from the AeroFlow formula, and emits
Markdown. It does not call an image or 3D model.

## Directory map

```
schema/prompt-spec.schema.json   machine-readable specification
taxonomy.md                      classes, eras, style vocabulary
negatives.md                     default negative constraints
templates/                       human-readable prompt templates
examples/                        editable JSON input specifications
generated/                       generated Markdown examples
```

## Prompt formula

```text
[vehicle class] + [era/style] + [proportions and stance]
+ [aero and mechanical details] + [materials and livery]
+ [view/layout and camera] + [lighting/background/rendering]
+ [negative constraints]
```

## Output modes

| Mode | Produces | Use for |
|---|---|---|
| `brief` | design brief | briefing a human or another agent |
| `sheet` | one four-view concept-sheet prompt | concept presentation |
| `reference` | one prompt per clean view | image-to-3D |
| `threed` | 3D handoff instructions | GLB/GLTF generation |
| `cinematic` | low-angle / tracking beauty prompt | posters, thumbnails |
| `blueprint` | orthographic technical prompt | aero and engineering callouts |
| `all` | all of the above | complete package |

## The non-negotiable rule

A text prompt cannot turn one image into a true multi-view 3D reference. For an
image-to-3D pipeline:

1. Generate **separate** front three-quarter, side, and rear three-quarter
   images.
2. Keep the same design, scale, and materials across all views.
3. Remove background, motion blur, people, and cropped wheels.
4. Feed the separate images through the backend's multi-image path when it has
   one; use a composite only as a fallback.

Read [`three-d-reference.md`](templates/three-d-reference.md) for the full
reference checklist.

## Design and IP guardrails

- Original, brand-free designs only. No real team liveries, sponsor marks, logos,
  or recognizable production-car silhouettes in generated commercial assets.
- The aerodynamic model in AeroFlow Lab is a visual proxy, not validated CFD.
- Do not paste vendor prompt text into this directory without checking its
  license. See [`../skills/SOURCES.json`](../skills/SOURCES.json).
