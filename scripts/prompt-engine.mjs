#!/usr/bin/env node
/**
 * AeroFlow deterministic vehicle prompt compiler.
 *
 * Usage:
 *   node scripts/prompt-engine.mjs --spec prompts/examples/gt3-endurance.json --mode all
 *   node scripts/prompt-engine.mjs --spec ... --mode reference --out prompts/generated/gt3.md
 *
 * No network, no model calls, no dependencies outside Node.js.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const MODES = ['brief', 'sheet', 'reference', 'threed', 'cinematic', 'blueprint', 'all'];
const DEFAULT_NEGATIVES = [
  'logos',
  'sponsor marks',
  'text',
  'watermark',
  'recognizable production-car body',
  'extra wheels',
  'asymmetric headlights',
  'melted body panels',
];

function usage() {
  return `AeroFlow prompt compiler

Usage:
  node scripts/prompt-engine.mjs --spec <file.json> [options]

Options:
  --spec <file>    Prompt specification JSON (required)
  --mode <mode>    ${MODES.join(' | ')} (default: all)
  --out <file>     Write Markdown to a file instead of stdout
  --help           Show this help
`;
}

function parseArgs(argv) {
  const args = { mode: 'all' };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') {
      args.help = true;
    } else if (token === '--spec') {
      args.spec = argv[++index];
    } else if (token === '--mode') {
      args.mode = argv[++index];
    } else if (token === '--out') {
      args.out = argv[++index];
    } else {
      throw new Error(`Unknown argument: ${token}`);
    }
  }
  return args;
}

function assert(condition, message) {
  if (!condition) throw new Error(`Invalid prompt spec: ${message}`);
}

function validateSpec(spec) {
  assert(spec && typeof spec === 'object', 'the root must be an object');
  for (const key of ['id', 'title', 'vehicleClass', 'designLanguage', 'livery']) {
    assert(typeof spec[key] === 'string' && spec[key].trim().length > 0, `${key} is required`);
  }
  assert(spec.proportions && typeof spec.proportions.stance === 'string', 'proportions.stance is required');
  assert(Array.isArray(spec.aero) && spec.aero.length >= 2, 'aero must contain at least two items');
  assert(spec.materials && typeof spec.materials.body === 'string', 'materials.body is required');
  assert(Array.isArray(spec.views) && spec.views.length > 0, 'views must contain at least one view');
  assert(Array.isArray(spec.constraints) && spec.constraints.length >= 2, 'constraints must contain at least two items');

  const { wheelToBodyPercent, wheelbasePercent, rideHeightMm } = spec.proportions;
  if (wheelToBodyPercent !== undefined) assert(wheelToBodyPercent >= 20 && wheelToBodyPercent <= 55, 'wheelToBodyPercent must be 20–55');
  if (wheelbasePercent !== undefined) assert(wheelbasePercent >= 40 && wheelbasePercent <= 75, 'wheelbasePercent must be 40–75');
  if (rideHeightMm !== undefined) assert(rideHeightMm >= 30 && rideHeightMm <= 450, 'rideHeightMm must be 30–450');
}

function list(values) {
  return values.join(', ');
}

function cap(value) {
  const text = String(value || '').trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function proportionText(spec) {
  const p = spec.proportions;
  const parts = [p.stance];
  if (p.wheelToBodyPercent !== undefined) parts.push(`wheel diameter about ${p.wheelToBodyPercent}% of body height`);
  if (p.wheelbasePercent !== undefined) parts.push(`wheelbase about ${p.wheelbasePercent}% of overall length`);
  if (p.rideHeightMm !== undefined) parts.push(`${p.rideHeightMm} mm ride height`);
  return parts.join(', ');
}

function materialText(spec) {
  const m = spec.materials;
  return [m.body, m.accent, m.wheels].filter(Boolean).join(', ');
}

function negativeText(spec) {
  const values = [...new Set([...(spec.negatives || []), ...DEFAULT_NEGATIVES])];
  return `Negative: ${list(values.map((value) => value.trim()))}.`;
}

function common(spec) {
  return `Original ${spec.vehicleClass}, ${spec.era || 'contemporary era'}, ${spec.designLanguage}. ${cap(proportionText(spec))}. Aero and mechanical details: ${list(spec.aero)}. Materials: ${materialText(spec)}. Livery: ${spec.livery}. Brand-free, original design.`;
}

function brief(spec) {
  return `## Design brief

| Field | Value |
|---|---|
| ID | \`${spec.id}\` |
| Vehicle class | ${spec.vehicleClass} |
| Era / language | ${spec.era || 'contemporary'} · ${spec.designLanguage} |
| Stance | ${spec.proportions.stance} |
| Wheel-to-body | ${spec.proportions.wheelToBodyPercent ?? '—'}% |
| Wheelbase | ${spec.proportions.wheelbasePercent ?? '—'}% |
| Ride height | ${spec.proportions.rideHeightMm ?? '—'} mm |
| Aero | ${list(spec.aero)} |
| Materials | ${materialText(spec)} |
| Livery | ${spec.livery} |
| Views | ${list(spec.views)} |
| Target | ${spec.target ? `${spec.target.pipeline || 'image'} → ${spec.target.format || 'glb'}, ${spec.target.triangles || 25000} tris` : 'image'} |

**Constraints:** ${list(spec.constraints)}.
${spec.target?.notes ? `\n**3D note:** ${spec.target.notes}` : ''}
`;
}

function sheetPrompt(spec) {
  return `${common(spec)} Four-view automotive concept sheet: front three-quarter, side profile, rear three-quarter, and top-down. The same original vehicle in every view, consistent proportions, no logo, no text. ${cap(spec.lighting || 'soft even studio lighting')}, ${cap(spec.background || 'seamless light-gray background')}, high-end industrial-design presentation. ${negativeText(spec)}`;
}

function referencePrompt(spec, view) {
  return `${common(spec)} ${view.charAt(0).toUpperCase() + view.slice(1)} view, full vehicle visible including all four wheels, centered, slight orthographic look, consistent design and materials across the reference set, ${cap(spec.lighting || 'soft even studio lighting')}, ${cap(spec.background || 'seamless light-gray studio background')}, no shadows, no motion blur, no people, no text, no logos, bilateral symmetry, crisp panel gaps, isolated. ${negativeText(spec)}`;
}

function cinematicPrompt(spec) {
  return `${cap(spec.camera || 'low-angle hero shot, 35 mm equivalent')} of an original ${spec.vehicleClass}, ${spec.era || 'contemporary era'}, ${spec.designLanguage}. ${cap(proportionText(spec))}. Aero: ${list(spec.aero)}. Materials: ${materialText(spec)}. Livery: ${spec.livery}. ${cap(spec.scene || 'a clean modern racing circuit at dusk')}. ${cap(spec.lighting || 'dramatic practical lighting')}. Cinematic, photorealistic, sharp focus on the car, controlled depth of field, realistic reflections, brand-free, no logos, no text, no watermark. ${negativeText(spec)}`;
}

function blueprintPrompt(spec) {
  return `Technical blueprint of an original ${spec.vehicleClass}, ${spec.era || 'contemporary era'}, ${spec.designLanguage}. Orthographic side view. ${cap(proportionText(spec))}. Visible ${list(spec.aero)}. Dimension lines, callout arrows, airflow direction arrows, labeled aero components, centerline section cut. Monochrome navy technical background with cyan and white annotations, clean white line work, grid, no logos, no marketing copy, no real car identity. Negative: illegible labels, text, watermark, logos, perspective distortion.`;
}

function threedHandoff(spec) {
  const target = spec.target || {};
  return `## Image-to-3D handoff

- **Pipeline:** ${target.pipeline || 'image-to-3d'}
- **Format:** ${target.format || 'glb'}
- **Triangle target:** ${target.triangles || 25000}
- **Notes:** ${target.notes || 'Use separate front, side and rear three-quarter reference images.'}
- **Reference prompts:** one per view in the section above. Feed them as separate images when the backend supports multiple inputs.
- **Do not:** rely on a single four-view composite if a multi-image path exists; add motion blur; crop wheels; include people or logos.
- **AeroFlow import:** uncompressed OBJ/GLB or self-contained GLTF only. Draco, Meshopt, KTX2 and external \`.bin\`/texture references are rejected.
- **After import:** set real length, width, height, mass and Cd; the flow field is a visual proxy, not validated CFD.
`;
}

function render(spec, mode) {
  const include = (part) => mode === 'all' || mode === part;
  const blocks = [`# AeroFlow prompt package — ${spec.title}\n`, `> Generated from \`${spec.id}\` by \`scripts/prompt-engine.mjs\`. Original, brand-free design. Not a CFD result.\n`];

  if (include('brief')) blocks.push(brief(spec));
  if (include('sheet')) {
    blocks.push(`## Four-view concept sheet\n\n\`\`\`text\n${sheetPrompt(spec)}\n\`\`\`\n`);
  }
  if (include('reference')) {
    const references = spec.views.map((view) => `### ${view}\n\n\`\`\`text\n${referencePrompt(spec, view)}\n\`\`\`\n`).join('\n');
    blocks.push(`## Clean reference set\n\nUse these as **separate** images. Keep the same design, materials and scale.\n\n${references}`);
  }
  if (include('threed')) blocks.push(threedHandoff(spec));
  if (include('cinematic')) {
    blocks.push(`## Cinematic shot\n\n\`\`\`text\n${cinematicPrompt(spec)}\n\`\`\`\n`);
  }
  if (include('blueprint')) {
    blocks.push(`## Technical blueprint\n\n\`\`\`text\n${blueprintPrompt(spec)}\n\`\`\`\n`);
  }
  blocks.push(`---\n\nDesign guardrails: original and brand-free; no real team livery or manufacturer badge; no claim of CFD validation.\n`);
  return `${blocks.join('\n')}\n`;
}

async function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    console.error(usage());
    process.exitCode = 1;
    return;
  }
  if (args.help) {
    console.log(usage());
    return;
  }
  if (!args.spec) {
    console.error('Missing --spec.');
    console.error(usage());
    process.exitCode = 1;
    return;
  }
  if (!MODES.includes(args.mode)) {
    console.error(`Unknown mode: ${args.mode}. Use one of: ${MODES.join(', ')}.`);
    process.exitCode = 1;
    return;
  }

  try {
    const specPath = path.resolve(process.cwd(), args.spec);
    const spec = JSON.parse(await fs.readFile(specPath, 'utf8'));
    validateSpec(spec);
    const output = render(spec, args.mode);
    if (args.out) {
      const outPath = path.resolve(process.cwd(), args.out);
      await fs.mkdir(path.dirname(outPath), { recursive: true });
      await fs.writeFile(outPath, output, 'utf8');
      console.log(`Wrote ${outPath}`);
    } else {
      process.stdout.write(output);
    }
  } catch (error) {
    console.error(`prompt-engine: ${error.message}`);
    process.exitCode = 1;
  }
}

await main();
