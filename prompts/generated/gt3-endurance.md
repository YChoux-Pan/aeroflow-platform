# AeroFlow prompt package — AeroFlow GT3 Endurance

> Generated from `gt3-endurance-01` by `scripts/prompt-engine.mjs`. Original, brand-free design. Not a CFD result.

## Design brief

| Field | Value |
|---|---|
| ID | `gt3-endurance-01` |
| Vehicle class | GT3 endurance racing car |
| Era / language | late 2020s · function-led German endurance GT, low and wide with a long hood and a cabin set rearward |
| Stance | wide track, short overhangs, wheels pushed to the corners, planted rear haunches |
| Wheel-to-body | 36% |
| Wheelbase | 59% |
| Ride height | 90 mm |
| Aero | front splitter with endplates, aggressive canards, vented hood, louvered front fenders, side skirts, rear diffuser, swan-neck rear wing, roof scoop |
| Materials | prepreg carbon-fiber body panels, satin cyan accents, forged center-lock wheels with carbon covers |
| Livery | matte graphite base with a single cyan accent stripe, brand-free, no sponsor marks |
| Views | front three-quarter, side profile, rear three-quarter |
| Target | both → glb, 25000 tris |

**Constraints:** original design, brand-free, no real manufacturer badges, no sponsor marks, four wheels fully visible, bilateral symmetry.

**3D note:** Use separate front, side and rear three-quarter references for the 3D pass.

## Four-view concept sheet

```text
Original GT3 endurance racing car, late 2020s, function-led German endurance GT, low and wide with a long hood and a cabin set rearward. Wide track, short overhangs, wheels pushed to the corners, planted rear haunches, wheel diameter about 36% of body height, wheelbase about 59% of overall length, 90 mm ride height. Aero and mechanical details: front splitter with endplates, aggressive canards, vented hood, louvered front fenders, side skirts, rear diffuser, swan-neck rear wing, roof scoop. Materials: prepreg carbon-fiber body panels, satin cyan accents, forged center-lock wheels with carbon covers. Livery: matte graphite base with a single cyan accent stripe, brand-free, no sponsor marks. Brand-free, original design. Four-view automotive concept sheet: front three-quarter, side profile, rear three-quarter, and top-down. The same original vehicle in every view, consistent proportions, no logo, no text. Soft even studio lighting with a subtle rim light, Seamless light-gray studio background, high-end industrial-design presentation. Negative: logos, text, watermark, people, cropped wheels, motion blur in reference views, sponsor marks, recognizable production-car body, extra wheels, asymmetric headlights, melted body panels.
```

## Clean reference set

Use these as **separate** images. Keep the same design, materials and scale.

### front three-quarter

```text
Original GT3 endurance racing car, late 2020s, function-led German endurance GT, low and wide with a long hood and a cabin set rearward. Wide track, short overhangs, wheels pushed to the corners, planted rear haunches, wheel diameter about 36% of body height, wheelbase about 59% of overall length, 90 mm ride height. Aero and mechanical details: front splitter with endplates, aggressive canards, vented hood, louvered front fenders, side skirts, rear diffuser, swan-neck rear wing, roof scoop. Materials: prepreg carbon-fiber body panels, satin cyan accents, forged center-lock wheels with carbon covers. Livery: matte graphite base with a single cyan accent stripe, brand-free, no sponsor marks. Brand-free, original design. Front three-quarter view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Soft even studio lighting with a subtle rim light, Seamless light-gray studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: logos, text, watermark, people, cropped wheels, motion blur in reference views, sponsor marks, recognizable production-car body, extra wheels, asymmetric headlights, melted body panels.
```

### side profile

```text
Original GT3 endurance racing car, late 2020s, function-led German endurance GT, low and wide with a long hood and a cabin set rearward. Wide track, short overhangs, wheels pushed to the corners, planted rear haunches, wheel diameter about 36% of body height, wheelbase about 59% of overall length, 90 mm ride height. Aero and mechanical details: front splitter with endplates, aggressive canards, vented hood, louvered front fenders, side skirts, rear diffuser, swan-neck rear wing, roof scoop. Materials: prepreg carbon-fiber body panels, satin cyan accents, forged center-lock wheels with carbon covers. Livery: matte graphite base with a single cyan accent stripe, brand-free, no sponsor marks. Brand-free, original design. Side profile view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Soft even studio lighting with a subtle rim light, Seamless light-gray studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: logos, text, watermark, people, cropped wheels, motion blur in reference views, sponsor marks, recognizable production-car body, extra wheels, asymmetric headlights, melted body panels.
```

### rear three-quarter

```text
Original GT3 endurance racing car, late 2020s, function-led German endurance GT, low and wide with a long hood and a cabin set rearward. Wide track, short overhangs, wheels pushed to the corners, planted rear haunches, wheel diameter about 36% of body height, wheelbase about 59% of overall length, 90 mm ride height. Aero and mechanical details: front splitter with endplates, aggressive canards, vented hood, louvered front fenders, side skirts, rear diffuser, swan-neck rear wing, roof scoop. Materials: prepreg carbon-fiber body panels, satin cyan accents, forged center-lock wheels with carbon covers. Livery: matte graphite base with a single cyan accent stripe, brand-free, no sponsor marks. Brand-free, original design. Rear three-quarter view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Soft even studio lighting with a subtle rim light, Seamless light-gray studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: logos, text, watermark, people, cropped wheels, motion blur in reference views, sponsor marks, recognizable production-car body, extra wheels, asymmetric headlights, melted body panels.
```

## Image-to-3D handoff

- **Pipeline:** both
- **Format:** glb
- **Triangle target:** 25000
- **Notes:** Use separate front, side and rear three-quarter references for the 3D pass.
- **Reference prompts:** one per view in the section above. Feed them as separate images when the backend supports multiple inputs.
- **Do not:** rely on a single four-view composite if a multi-image path exists; add motion blur; crop wheels; include people or logos.
- **AeroFlow import:** uncompressed OBJ/GLB or self-contained GLTF only. Draco, Meshopt, KTX2 and external `.bin`/texture references are rejected.
- **After import:** set real length, width, height, mass and Cd; the flow field is a visual proxy, not validated CFD.

## Cinematic shot

```text
Low-angle tracking shot, 50 mm equivalent, car sharp, background motion streaks of an original GT3 endurance racing car, late 2020s, function-led German endurance GT, low and wide with a long hood and a cabin set rearward. Wide track, short overhangs, wheels pushed to the corners, planted rear haunches, wheel diameter about 36% of body height, wheelbase about 59% of overall length, 90 mm ride height. Aero: front splitter with endplates, aggressive canards, vented hood, louvered front fenders, side skirts, rear diffuser, swan-neck rear wing, roof scoop. Materials: prepreg carbon-fiber body panels, satin cyan accents, forged center-lock wheels with carbon covers. Livery: matte graphite base with a single cyan accent stripe, brand-free, no sponsor marks. Wet endurance circuit at dusk with distant pit-lane lights and light spray. Soft even studio lighting with a subtle rim light. Cinematic, photorealistic, sharp focus on the car, controlled depth of field, realistic reflections, brand-free, no logos, no text, no watermark. Negative: logos, text, watermark, people, cropped wheels, motion blur in reference views, sponsor marks, recognizable production-car body, extra wheels, asymmetric headlights, melted body panels.
```

## Technical blueprint

```text
Technical blueprint of an original GT3 endurance racing car, late 2020s, function-led German endurance GT, low and wide with a long hood and a cabin set rearward. Orthographic side view. Wide track, short overhangs, wheels pushed to the corners, planted rear haunches, wheel diameter about 36% of body height, wheelbase about 59% of overall length, 90 mm ride height. Visible front splitter with endplates, aggressive canards, vented hood, louvered front fenders, side skirts, rear diffuser, swan-neck rear wing, roof scoop. Dimension lines, callout arrows, airflow direction arrows, labeled aero components, centerline section cut. Monochrome navy technical background with cyan and white annotations, clean white line work, grid, no logos, no marketing copy, no real car identity. Negative: illegible labels, text, watermark, logos, perspective distortion.
```

---

Design guardrails: original and brand-free; no real team livery or manufacturer badge; no claim of CFD validation.

