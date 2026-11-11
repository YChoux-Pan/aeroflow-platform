#!/usr/bin/env node
/**
 * Build a minimal installable plugin archive.
 *
 * Output: dist/aeroflow-plugin-v<version>.zip
 * Contents: one top-level aeroflow-dsh-plugin/ folder with runtime files only.
 */
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pluginDir = path.join(root, 'plugin');
const dist = path.join(root, 'dist');
const stage = path.join(dist, 'aeroflow-dsh-plugin');
const pkg = JSON.parse(await fsp.readFile(path.join(pluginDir, 'package.json'), 'utf8'));
const archive = path.join(dist, `aeroflow-plugin-v${pkg.version}.zip`);

// Only runtime assets. Never ship sources, tools, node_modules, or test output.
const runtime = [
  'package.json',
  'index.js',
  'client.js',
  'cordis.patch.yml',
  'icon.svg',
  'LICENSE',
  'README.md',
  'THIRD_PARTY_NOTICES.md',
];
const localeDir = path.join(pluginDir, 'locale');

if (!fs.existsSync(pluginDir)) throw new Error(`Missing plugin directory: ${pluginDir}`);
if (!fs.existsSync(path.join(pluginDir, 'client.js'))) throw new Error('Missing built client.js');

await fsp.rm(dist, { recursive: true, force: true });
await fsp.mkdir(stage, { recursive: true });
for (const file of runtime) {
  if (!fs.existsSync(path.join(pluginDir, file))) throw new Error(`Missing runtime file: ${file}`);
  await fsp.copyFile(path.join(pluginDir, file), path.join(stage, file));
}
await fsp.mkdir(path.join(stage, 'locale'), { recursive: true });
for (const file of await fsp.readdir(localeDir)) {
  if (file.endsWith('.json')) {
    await fsp.copyFile(path.join(localeDir, file), path.join(stage, 'locale', file));
  }
}

if (process.platform === 'win32') {
  execFileSync('powershell.exe', [
    '-NoProfile',
    '-NonInteractive',
    '-Command',
    `Compress-Archive -LiteralPath '${stage}' -DestinationPath '${archive}' -Force`,
  ], { stdio: 'inherit' });
} else {
  try {
    execFileSync('zip', ['-qr', archive, 'aeroflow-dsh-plugin'], { cwd: dist, stdio: 'inherit' });
  } catch (error) {
    throw new Error(`Could not create zip. Install the 'zip' utility or use a release workflow. ${error.message}`);
  }
}

const bytes = fs.statSync(archive).size;
console.log(`Created ${path.relative(root, archive)} (${bytes} bytes)`);
console.log('Extract the zip, then select the extracted aeroflow-dsh-plugin folder in DSH Plugins and enable the bundle.');
