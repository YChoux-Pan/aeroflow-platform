import { build } from 'esbuild';
import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs/promises';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const pluginDir = path.resolve(here, '..');
const output = path.join(here, '.import-smoke.mjs');

await build({
  absWorkingDir: here,
  entryPoints: [path.join(here, 'import-smoke-entry.js')],
  outfile: output,
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: ['node20'],
  minify: false,
  legalComments: 'none',
  nodePaths: [path.join(here, 'node_modules')],
  logLevel: 'silent',
});

try {
  await import(`${pathToFileURL(output).href}?t=${Date.now()}`);
} finally {
  await fs.rm(output, { force: true });
}
