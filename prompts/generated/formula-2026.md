# AeroFlow prompt package — AeroFlow Formula 2026

> Generated from `formula-2026-01` by `scripts/prompt-engine.mjs`. Original, brand-free design. Not a CFD result.

## Design brief

| Field | Value |
|---|---|
| ID | `formula-2026-01` |
| Vehicle class | 2026-style open-wheel formula racing car |
| Era / language | 2026 · compact active-aero formula car with a low nose, exposed wheels and a tightly packaged rear |
| Stance | very low, wide, exposed wheels, short front overhang, long rear aero platform |
| Wheel-to-body | 48% |
| Wheelbase | 58% |
| Ride height | 65 mm |
| Aero | multi-element front wing, halo, undercut sidepods, floor-edge winglets, beam wing, multi-element rear wing, central shark fin, exposed carbon-fiber suspension |
| Materials | exposed two-by-two carbon fiber, electric cyan highlights, black slicks with forged magnesium rims |
| Livery | deep navy body with electric cyan and white geometric blocks, brand-free, no team identity |
| Views | front three-quarter, side profile, rear three-quarter |
| Target | both → glb, 30000 tris |

**Constraints:** original open-wheel design, bilateral symmetry, exposed wheels, all suspension arms plausibly connected, no real team livery, no logos.

**3D note:** Hard-surface backend preferred; keep panel gaps and exposed suspension crisp.

## Four-view concept sheet

```text
Original 2026-style open-wheel formula racing car, 2026, compact active-aero formula car with a low nose, exposed wheels and a tightly packaged rear. Very low, wide, exposed wheels, short front overhang, long rear aero platform, wheel diameter about 48% of body height, wheelbase about 58% of overall length, 65 mm ride height. Aero and mechanical details: multi-element front wing, halo, undercut sidepods, floor-edge winglets, beam wing, multi-element rear wing, central shark fin, exposed carbon-fiber suspension. Materials: exposed two-by-two carbon fiber, electric cyan highlights, black slicks with forged magnesium rims. Livery: deep navy body with electric cyan and white geometric blocks, brand-free, no team identity. Brand-free, original design. Four-view automotive concept sheet: front three-quarter, side profile, rear three-quarter, and top-down. The same original vehicle in every view, consistent proportions, no logo, no text. Even soft studio light with cool rim lighting, Seamless near-white studio background, high-end industrial-design presentation. Negative: fenders, closed wheels, logos, text, sponsor marks, extra wheels, asymmetric wings, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

## Clean reference set

Use these as **separate** images. Keep the same design, materials and scale.

### front three-quarter

```text
Original 2026-style open-wheel formula racing car, 2026, compact active-aero formula car with a low nose, exposed wheels and a tightly packaged rear. Very low, wide, exposed wheels, short front overhang, long rear aero platform, wheel diameter about 48% of body height, wheelbase about 58% of overall length, 65 mm ride height. Aero and mechanical details: multi-element front wing, halo, undercut sidepods, floor-edge winglets, beam wing, multi-element rear wing, central shark fin, exposed carbon-fiber suspension. Materials: exposed two-by-two carbon fiber, electric cyan highlights, black slicks with forged magnesium rims. Livery: deep navy body with electric cyan and white geometric blocks, brand-free, no team identity. Brand-free, original design. Front three-quarter view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Even soft studio light with cool rim lighting, Seamless near-white studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: fenders, closed wheels, logos, text, sponsor marks, extra wheels, asymmetric wings, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

### side profile

```text
Original 2026-style open-wheel formula racing car, 2026, compact active-aero formula car with a low nose, exposed wheels and a tightly packaged rear. Very low, wide, exposed wheels, short front overhang, long rear aero platform, wheel diameter about 48% of body height, wheelbase about 58% of overall length, 65 mm ride height. Aero and mechanical details: multi-element front wing, halo, undercut sidepods, floor-edge winglets, beam wing, multi-element rear wing, central shark fin, exposed carbon-fiber suspension. Materials: exposed two-by-two carbon fiber, electric cyan highlights, black slicks with forged magnesium rims. Livery: deep navy body with electric cyan and white geometric blocks, brand-free, no team identity. Brand-free, original design. Side profile view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Even soft studio light with cool rim lighting, Seamless near-white studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: fenders, closed wheels, logos, text, sponsor marks, extra wheels, asymmetric wings, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

### rear three-quarter

```text
Original 2026-style open-wheel formula racing car, 2026, compact active-aero formula car with a low nose, exposed wheels and a tightly packaged rear. Very low, wide, exposed wheels, short front overhang, long rear aero platform, wheel diameter about 48% of body height, wheelbase about 58% of overall length, 65 mm ride height. Aero and mechanical details: multi-element front wing, halo, undercut sidepods, floor-edge winglets, beam wing, multi-element rear wing, central shark fin, exposed carbon-fiber suspension. Materials: exposed two-by-two carbon fiber, electric cyan highlights, black slicks with forged magnesium rims. Livery: deep navy body with electric cyan and white geometric blocks, brand-free, no team identity. Brand-free, original design. Rear three-quarter view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, Even soft studio light with cool rim lighting, Seamless near-white studio background, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. Negative: fenders, closed wheels, logos, text, sponsor marks, extra wheels, asymmetric wings, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

## Image-to-3D handoff

- **Pipeline:** both
- **Format:** glb
- **Triangle target:** 30000
- **Notes:** Hard-surface backend preferred; keep panel gaps and exposed suspension crisp.
- **Reference prompts:** one per view in the section above. Feed them as separate images when the backend supports multiple inputs.
- **Do not:** rely on a single four-view composite if a multi-image path exists; add motion blur; crop wheels; include people or logos.
- **AeroFlow import:** uncompressed OBJ/GLB or self-contained GLTF only. Draco, Meshopt, KTX2 and external `.bin`/texture references are rejected.
- **After import:** set real length, width, height, mass and Cd; the flow field is a visual proxy, not validated CFD.

## Cinematic shot

```text
Low front three-quarter, 35 mm equivalent, camera 0.5 m above the ground of an original 2026-style open-wheel formula racing car, 2026, compact active-aero formula car with a low nose, exposed wheels and a tightly packaged rear. Very low, wide, exposed wheels, short front overhang, long rear aero platform, wheel diameter about 48% of body height, wheelbase about 58% of overall length, 65 mm ride height. Aero: multi-element front wing, halo, undercut sidepods, floor-edge winglets, beam wing, multi-element rear wing, central shark fin, exposed carbon-fiber suspension. Materials: exposed two-by-two carbon fiber, electric cyan highlights, black slicks with forged magnesium rims. Livery: deep navy body with electric cyan and white geometric blocks, brand-free, no team identity. Modern permanent circuit pit lane at dawn with clean concrete and distant garage lights. Even soft studio light with cool rim lighting. Cinematic, photorealistic, sharp focus on the car, controlled depth of field, realistic reflections, brand-free, no logos, no text, no watermark. Negative: fenders, closed wheels, logos, text, sponsor marks, extra wheels, asymmetric wings, watermark, recognizable production-car body, asymmetric headlights, melted body panels.
```

## Technical blueprint

```text
Technical blueprint of an original 2026-style open-wheel formula racing car, 2026, compact active-aero formula car with a low nose, exposed wheels and a tightly packaged rear. Orthographic side view. Very low, wide, exposed wheels, short front overhang, long rear aero platform, wheel diameter about 48% of body height, wheelbase about 58% of overall length, 65 mm ride height. Visible multi-element front wing, halo, undercut sidepods, floor-edge winglets, beam wing, multi-element rear wing, central shark fin, exposed carbon-fiber suspension. Dimension lines, callout arrows, airflow direction arrows, labeled aero components, centerline section cut. Monochrome navy technical background with cyan and white annotations, clean white line work, grid, no logos, no marketing copy, no real car identity. Negative: illegible labels, text, watermark, logos, perspective distortion.
```

---

Design guardrails: original and brand-free; no real team livery or manufacturer badge; no claim of CFD validation.

