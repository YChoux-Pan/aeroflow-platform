# Concept sheet template

Use for early exploration and internal review. Prefer `--mode sheet` from the
prompt engine so the proportions stay consistent with the spec.

## Template

```text
Original {vehicleClass}, {era} design language, {designLanguage}.
Proportions: {stance}, wheel diameter about {wheelToBodyPercent}% of body height,
wheelbase about {wheelbasePercent}% of overall length, {rideHeightMm} mm ride height.
Aero and mechanical details: {aero}.
Materials and livery: {materials}; {livery}.
Four-view automotive concept sheet: front three-quarter, side profile,
rear three-quarter, top-down. The same original vehicle in every view,
consistent proportions, no logo, no text.
{lighting}, {background}, high-end industrial-design presentation.
Negative: no logos, no text, no watermark, no different car per view,
no inconsistent proportions, no cropped wheels, no motion blur.
```

## Prompt notes

- State the design language before the part list.
- Use 3–6 aero parts, not 15.
- Keep the vehicle brand-free. "Original" and "concept" help.
- Put the four views in a single sentence so the model treats them as one
  package.
- For a cleaner sheet, ask for a neutral background and no environment.
