# AeroFlow prompt package — AeroFlow Le Mans Hypercar

> Generated from `lemans-hypercar-01` by `scripts/prompt-engine.mjs`. Original, brand-free design. Not a CFD result.

## Design brief

| Field | Value |
|---|---|
| ID | `lemans-hypercar-01` |
| Vehicle class | Le Mans hypercar |
| Era / language | near-future 2030 · sculptural closed-cockpit endurance prototype with exaggerated fender volumes and a long aerodynamic tail |
| Stance | low, wide, long tail, forward cabin, muscular wheel arches |
| Wheel-to-body | 38% |
| Wheelbase | 62% |
| Ride height | 95 mm |
| Aero | dive planes, front splitter, louvered wheel arches, undercut sidepods, roof-mounted intake, swan-neck rear wing, large diffuser, gurney flaps |
| Materials | gloss carbon-fiber composite with ceramic clearcoat, warm amber accent blades, deep-dish forged wheels with aero covers |
| Livery | midnight blue with a warm amber and silver split, brand-free, no sponsor marks |
| Views | front three-quarter, side profile, rear three-quarter |
| Target | both → glb, 45000 tris |

**Constraints:** original hypercar design, closed cockpit, brand-free, functional aero surfaces, all four wheels visible, bilateral symmetry.

**3D note:** Hero asset. Preserve the long tail and rear wing in silhouette; dark materials need clear edge lighting.

## Four-view concept sheet

```text
Original Le Mans hypercar, near-future 2030, sculptural closed-cockpit endurance prototype with exaggerated fender volumes and a long aerodynamic tail. Low, wide, long tail, forward cabin, muscular wheel arches, wheel diameter about 38% of body height, wheelbase about 62% of overall length, 95 mm ride height. Aero and mechanical details: dive planes, front splitter, louvered wheel arches, undercut sidepods, roof-mounted intake, swan-neck rear wing, large diffuser, gurney flaps. Materials: gloss carbon-fiber composite with ceramic clearcoat, warm amber accent blades, deep-dish forged wheels with aero covers. Livery: midnight blue with a warm amber and silver split, brand-free, no sponsor marks. Brand-free, original design. Four-view automotive concept sheet: front three-quarter, side profile, rear three-quarter, and top-down. The same original vehicle in every view, consistent proportions, no logo, no text. Soft studio key with a cool outline, Seamless charcoal studio background, high-end industrial-design presentation. Negative: logos, text, real team livery, open wheels, extra wheels, deformed fenders, sponsor marks, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

## Clean reference set

Use these as **separate** images. Keep the same design, materials and scale.

### front three-quarter

```text
Original Le Mans hypercar, near-future 2030, sculptural closed-cockpit endurance prototype with exaggerated fender volumes and a long aerodynamic tail. Low, wide, long tail, forward cabin, muscular wheel arches, wheel diameter about 38% of body height, wheelbase about 62% of overall length, 95 mm ride height. Aero and mechanical details: dive planes, front splitter, louvered wheel arches, undercut sidepods, roof-mounted intake, swan-neck rear wing, large diffuser, gurney flaps. Materials: gloss carbon-fiber composite with ceramic clearcoat, warm amber accent blades, deep-dish forged wheels with aero covers. Livery: midnight blue with a warm amber and silver split, brand-free, no sponsor marks. Brand-free, original design. Front three-quarter view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Soft studio key with a cool outline, Seamless charcoal studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: logos, text, real team livery, open wheels, extra wheels, deformed fenders, sponsor marks, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

### side profile

```text
Original Le Mans hypercar, near-future 2030, sculptural closed-cockpit endurance prototype with exaggerated fender volumes and a long aerodynamic tail. Low, wide, long tail, forward cabin, muscular wheel arches, wheel diameter about 38% of body height, wheelbase about 62% of overall length, 95 mm ride height. Aero and mechanical details: dive planes, front splitter, louvered wheel arches, undercut sidepods, roof-mounted intake, swan-neck rear wing, large diffuser, gurney flaps. Materials: gloss carbon-fiber composite with ceramic clearcoat, warm amber accent blades, deep-dish forged wheels with aero covers. Livery: midnight blue with a warm amber and silver split, brand-free, no sponsor marks. Brand-free, original design. Side profile view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Soft studio key with a cool outline, Seamless charcoal studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: logos, text, real team livery, open wheels, extra wheels, deformed fenders, sponsor marks, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

### rear three-quarter

```text
Original Le Mans hypercar, near-future 2030, sculptural closed-cockpit endurance prototype with exaggerated fender volumes and a long aerodynamic tail. Low, wide, long tail, forward cabin, muscular wheel arches, wheel diameter about 38% of body height, wheelbase about 62% of overall length, 95 mm ride height. Aero and mechanical details: dive planes, front splitter, louvered wheel arches, undercut sidepods, roof-mounted intake, swan-neck rear wing, large diffuser, gurney flaps. Materials: gloss carbon-fiber composite with ceramic clearcoat, warm amber accent blades, deep-dish forged wheels with aero covers. Livery: midnight blue with a warm amber and silver split, brand-free, no sponsor marks. Brand-free, original design. Rear three-quarter view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Soft studio key with a cool outline, Seamless charcoal studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: logos, text, real team livery, open wheels, extra wheels, deformed fenders, sponsor marks, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

## Image-to-3D handoff

- **Pipeline:** both
- **Format:** glb
- **Triangle target:** 45000
- **Notes:** Hero asset. Preserve the long tail and rear wing in silhouette; dark materials need clear edge lighting.
- **Reference prompts:** one per view in the section above. Feed them as separate images when the backend supports multiple inputs.
- **Do not:** rely on a single four-view composite if a multi-image path exists; add motion blur; crop wheels; include people or logos.
- **AeroFlow import:** uncompressed OBJ/GLB or self-contained GLTF only. Draco, Meshopt, KTX2 and external `.bin`/texture references are rejected.
- **After import:** set real length, width, height, mass and Cd; the flow field is a visual proxy, not validated CFD.

## Cinematic shot

```text
Low rear three-quarter tracking shot, 70 mm equivalent, slight panning blur in the background of an original Le Mans hypercar, near-future 2030, sculptural closed-cockpit endurance prototype with exaggerated fender volumes and a long aerodynamic tail. Low, wide, long tail, forward cabin, muscular wheel arches, wheel diameter about 38% of body height, wheelbase about 62% of overall length, 95 mm ride height. Aero: dive planes, front splitter, louvered wheel arches, undercut sidepods, roof-mounted intake, swan-neck rear wing, large diffuser, gurney flaps. Materials: gloss carbon-fiber composite with ceramic clearcoat, warm amber accent blades, deep-dish forged wheels with aero covers. Livery: midnight blue with a warm amber and silver split, brand-free, no sponsor marks. Circuit de la Sarthe pit straight at blue hour, wet asphalt reflections, distant floodlights. Soft studio key with a cool outline. Cinematic, photorealistic, sharp focus on the car, controlled depth of field, realistic reflections, brand-free, no logos, no text, no watermark. Negative: logos, text, real team livery, open wheels, extra wheels, deformed fenders, sponsor marks, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

## Technical blueprint

```text
Technical blueprint of an original Le Mans hypercar, near-future 2030, sculptural closed-cockpit endurance prototype with exaggerated fender volumes and a long aerodynamic tail. Orthographic side view. Low, wide, long tail, forward cabin, muscular wheel arches, wheel diameter about 38% of body height, wheelbase about 62% of overall length, 95 mm ride height. Visible dive planes, front splitter, louvered wheel arches, undercut sidepods, roof-mounted intake, swan-neck rear wing, large diffuser, gurney flaps. Dimension lines, callout arrows, airflow direction arrows, labeled aero components, centerline section cut. Monochrome navy technical background with cyan and white annotations, clean white line work, grid, no logos, no marketing copy, no real car identity. Negative: illegible labels, text, watermark, logos, perspective distortion.
```

---

Design guardrails: original and brand-free; no real team livery or manufacturer badge; no claim of CFD validation.

