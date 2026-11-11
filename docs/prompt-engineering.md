# Prompt engineering workflow

## Purpose

The prompt layer produces **consistent, brand-free vehicle specifications** and
separates three needs that are often mixed:

1. concept exploration;
2. photorealistic presentation;
3. clean multi-view references for image-to-3D.

A prompt that wins at (2) often damages (3). AeroFlow keeps separate templates.

## Specification

[`prompts/schema/prompt-spec.schema.json`](../prompts/schema/prompt-spec.schema.json)
defines the fields. Start from an example:

- [`gt3-endurance.json`](../prompts/examples/gt3-endurance.json)
- [`formula-2026.json`](../prompts/examples/formula-2026.json)
- [`lemans-hypercar.json`](../prompts/examples/lemans-hypercar.json)

Required fields: identity, vehicle class, design language, proportions, aero
items, materials, livery, views, constraints.

## Compile

```bash
node scripts/prompt-engine.mjs --spec prompts/examples/gt3-endurance.json --mode all
```

Modes: `brief`, `sheet`, `reference`, `threed`, `cinematic`, `blueprint`, `all`.

Write to a file:

```bash
node scripts/prompt-engine.mjs \
  --spec prompts/examples/lemans-hypercar.json \
  --mode reference \
  --out prompts/generated/lemans-reference.md
```

The compiler is deterministic and offline. It does not call an image model.

## Reference-set production

1. Compile the `reference` mode.
2. Generate each view as a **separate image**.
3. Keep the same design, wheel design, materials, and livery across views.
4. Use an image-conditioned workflow if identity drifts between views.
5. Inspect each image for:
   - all four wheels visible;
   - no cropped body;
   - symmetric lights and wheels;
   - plausible suspension/aero connections;
   - no people, logos, or motion blur.
6. Generate a 3D asset from separate views when supported. Use a composite only
   as a last resort.
7. Import the resulting GLB/glTF into AeroFlow Lab.

## Design review gates

Use the checks from the vendored `vehicle-design` skill:

- wheel-to-body ratio appropriate for the class;
- wheelbase and overhangs support the intended stance;
- silhouette reads at thumbnail size;
- ground contact and suspension load believable;
- aero surfaces have a plausible function;
- each view looks like the same car;
- no real brand, sponsor, or team identity.

## Prompt quality rubric

| Criterion | Good | Bad |
|---|---|---|
| Proportion | numeric wheel/body and wheelbase cues | "cool proportions" |
| Aero | functional part names | random vents and wings |
| Material | 2–3 materials, gloss/matte stated | "shiny" |
| Views | explicit, consistent view list | "multiple angles" |
| Reference hygiene | isolated, even light, no blur | cinematic, cropped |
| IP | original, brand-free | real team livery / badge |
| 3D | separate reference images | "four views" only in text |

## Generated assets

Generated Markdown is committed under `prompts/generated/`. Regenerate it after
changing a spec or the compiler so the repository stays reproducible.

## AeroFlow boundary

The lab visualizes flow and computes a transparent drag proxy. It does not
validate cooling, downforce, aero balance, or safety. Label prompt-derived designs
as concepts, not engineering results.
