#!/usr/bin/env node
/**
 * Repository-wide, offline verification for AeroFlow Platform.
 * Fails closed on manifest, locale, prompt, skills, model, and documentation
 * drift. Visual/WebGL checks remain manual (docs/validation.md).
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const checks = [];

function check(name, condition, detail = '') {
  checks.push({ name, pass: Boolean(condition), detail });
  if (!condition) errors.push(`${name}${detail ? ` — ${detail}` : ''}`);
}

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function json(file) {
  return JSON.parse(read(file));
}

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
}

// Required top-level files
for (const file of [
  'README.md', 'LICENSE', 'CHANGELOG.md', 'ROADMAP.md', 'CONTRIBUTING.md',
  'SECURITY.md', 'CODE_OF_CONDUCT.md', 'THIRD_PARTY_NOTICES.md',
  'docs/architecture.md', 'docs/installation.md', 'docs/plugin.md',
  'docs/prompt-engineering.md', 'docs/validation.md', 'docs/maintenance.md',
  'docs/journal.md', 'docs/models.md', 'docs/flow-visual-language.md',
  'skills/SOURCES.json', 'skills/README.md',
  'prompts/README.md', 'models/racing/manifest.json',
  'plugin/package.json', 'plugin/client.js', 'plugin/cordis.patch.yml',
  'plugin/source/importers.js', 'plugin/source/smoke-field.js',
]) {
  check(`required file: ${file}`, exists(file));
}

// Plugin manifest
let pkg;
try {
  pkg = json('plugin/package.json');
  check('plugin package name', pkg.name === 'aeroflow-dsh-plugin', String(pkg.name));
  check('plugin version is semver', /^\d+\.\d+\.\d+$/.test(pkg.version), pkg.version);
  check('plugin is a DSH bundle', Boolean(pkg.dsh?.bundle?.patch), JSON.stringify(pkg.dsh?.bundle));
  check('plugin is a web client', pkg.dsh?.client?.platform === 'web');
  check('plugin has client export', pkg.exports?.['./client'] === './client.js');
  check('plugin runtime files declared', ['client.js', 'index.js', 'cordis.patch.yml', 'locale/*.json', 'icon.svg'].every((entry) => pkg.files?.includes(entry)));
  check('plugin React is external', !read('plugin/client.js').includes('react-dom.production') && !read('plugin/client.js').includes('react.production'));
} catch (error) {
  check('plugin manifest parses', false, error.message);
}

const client = (() => {
  try { return read('plugin/client.js'); } catch { return ''; }
})();
check('client bundle loads through DSH module loader', client.includes('__ModuleLoader__.load'));
check('client bundle uses current package id', client.includes('aeroflow-dsh-plugin'));
check('client bundle is non-trivial', client.length > 100000, `${client.length} bytes`);
check('client bundle has no source-map local path', !client.includes('D:\\\\DSH'));
check('client bundle contains white-smoke renderer', client.includes('SmokeField') || client.includes('smoke'));

// Entry ID must match the package name
try {
  const entry = read('plugin/source/entry.jsx');
  check('client entry id matches package', entry.includes(`id: '${pkg.name}'`));
} catch { /* already reported */ }

// Locales
let en = {};
let zh = {};
try {
  en = json('plugin/locale/en.json');
  zh = json('plugin/locale/zh.json');
  const enKeys = Object.keys(en).sort();
  const zhKeys = Object.keys(zh).sort();
  check('locale key parity', JSON.stringify(enKeys) === JSON.stringify(zhKeys), `${enKeys.length} vs ${zhKeys.length}`);
  check('locale metadata title', en.meta?.title && zh.meta?.title);
  check('locale metadata description', en.meta?.description && zh.meta?.description);
} catch (error) {
  check('locale files parse', false, error.message);
}

// Every literal t('...') key must exist. Dynamic keys are known allowlists.
try {
  const source = read('plugin/source/client.jsx');
  const used = new Set(Array.from(source.matchAll(/\bt\('([^']+)'\)/g), (match) => match[1]));
  const dynamic = new Set([
    ...['coupe', 'truck', 'drone', 'aircraft', 'custom', 'imported'].map((id) => `preset.${id}`),
    ...['0', '90', '180', '270'].map((id) => `wind.preset${id}`),
    ...['ion', 'aurora', 'plasma', 'ghost'].map((id) => `palette.${id}`),
    ...['iso', 'side', 'top'].map((id) => `hud.${id}`),
  ]);
  const missing = [...used].filter((key) => !(key in en) && !dynamic.has(key));
  check('all literal UI locale keys exist', missing.length === 0, missing.join(', '));
} catch { /* source read already reported */ }

// Prompt examples compile byte-for-byte to committed generated Markdown
const promptDir = path.join(root, 'prompts', 'examples');
if (fs.existsSync(promptDir)) {
  for (const name of fs.readdirSync(promptDir).filter((file) => file.endsWith('.json')).sort()) {
    const specPath = path.join('prompts', 'examples', name);
    const generatedPath = path.join('prompts', 'generated', name.replace(/\.json$/, '.md'));
    try {
      const output = execFileSync(process.execPath, [path.join('scripts', 'prompt-engine.mjs'), '--spec', specPath, '--mode', 'all'], {
        cwd: root,
        encoding: 'utf8',
        maxBuffer: 4 * 1024 * 1024,
      });
      check(`prompt compiles: ${name}`, output.includes('## Clean reference set'));
      check(`prompt has no unresolved placeholder: ${name}`, !/\{\{[^}]+\}\}/.test(output) && !output.includes('undefined'));
      if (exists(generatedPath)) {
        check(`generated prompt is current: ${generatedPath}`, output === read(generatedPath));
      } else {
        check(`generated prompt exists: ${generatedPath}`, false);
      }
    } catch (error) {
      check(`prompt compiles: ${name}`, false, error.message);
    }
  }
}

// Skill source lock and required local records
let sources;
try {
  sources = json('skills/SOURCES.json');
  check('skill sources is an array', Array.isArray(sources.sources) && sources.sources.length >= 5);
  for (const source of sources.sources || []) {
    const dir = path.join('skills', 'vendor', source.id);
    check(`skill vendor dir: ${source.id}`, exists(dir));
    check(`skill source record: ${source.id}`, exists(path.join(dir, 'SOURCE.md')));
    check(`skill readme: ${source.id}`, exists(path.join(dir, 'README.md')));
    if (source.vendored === 'full') {
      check(`skill upstream skill.md: ${source.id}`, exists(path.join(dir, 'SKILL.md')));
      check(`skill license: ${source.id}`, exists(path.join(dir, 'LICENSE')));
    }
    if (source.vendored === 'metadata-only') {
      check(`metadata-only source has no copied SKILL.md: ${source.id}`, !exists(path.join(dir, 'SKILL.md')));
    }
  }
  check('project-owned skill exists', exists('skills/aeroflow-vehicle-prompt-engineer/SKILL.md'));
  check('camera license gap is documented', read('skills/vendor/camera-prompts/SOURCE.md').toLowerCase().includes('no license'));
} catch (error) {
  check('skills/SOURCES.json parses', false, error.message);
}

// Model catalog, per-model manifests, hashes, and prompt links
try {
  const catalog = json('models/racing/manifest.json');
  check('model catalog is an array', Array.isArray(catalog.models) && catalog.models.length >= 2);
  const seen = new Set();
  for (const entry of catalog.models || []) {
    check(`model catalog entry has id: ${entry.name || entry.manifest}`, Boolean(entry.id));
    check(`model catalog id is unique: ${entry.id}`, !seen.has(entry.id));
    seen.add(entry.id);
    const manifestPath = path.join('models', 'racing', entry.manifest);
    check(`model manifest exists: ${entry.id}`, exists(manifestPath));
    if (!exists(manifestPath)) continue;
    const manifest = json(manifestPath);
    check(`model manifest id matches catalog: ${entry.id}`, manifest.id === entry.id, `${manifest.id} vs ${entry.id}`);
    check(`model has a name: ${entry.id}`, Boolean(manifest.name));
    check(`model has a generation script: ${entry.id}`, Boolean(manifest.generationScript));
    if (manifest.promptSpec) check(`model prompt spec exists: ${entry.id}`, exists(manifest.promptSpec));
    if (manifest.promptPackage) check(`model prompt package exists: ${entry.id}`, exists(manifest.promptPackage));
    for (const [kind, record] of Object.entries(manifest.files || {})) {
      check(`model file exists: ${entry.id}/${kind}`, exists(record.path));
      if (exists(record.path)) {
        check(`model hash: ${entry.id}/${kind}`, sha256(record.path) === record.sha256, record.path);
        check(`model size: ${entry.id}/${kind}`, fs.statSync(path.join(root, record.path)).size === record.bytes);
      }
    }
    check(`model dimensions are positive: ${entry.id}`, Object.values(manifest.dimensionsMeters || {}).every((value) => value > 0));
  }
  for (const preview of ['aeroflow-gt3-front34.jpg', 'aeroflow-gt3-side.jpg', 'aeroflow-gt3-rear34.jpg']) {
    check(`model preview exists: ${preview}`, exists(path.join('models', 'racing', 'previews', preview)));
  }
  check('model previews have provenance note', exists('models/racing/previews/README.md'));
} catch (error) {
  check('model manifest parses', false, error.message);
}

// No absolute local paths in tracked text sources
const textExtensions = new Set(['.md', '.json', '.js', '.jsx', '.mjs', '.ps1', '.sh', '.yml', '.yaml', '.txt', '.html', '.css']);
const skipDirs = new Set(['node_modules', '.git', '.vendor-src', 'dist']);
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      walk(path.join(dir, entry.name));
    } else if (textExtensions.has(path.extname(entry.name))) {
      const rel = path.relative(root, path.join(dir, entry.name));
      const text = fs.readFileSync(path.join(dir, entry.name), 'utf8');
      if (/[A-Za-z]:\\DSH|C:\\Users\\/i.test(text)) {
        check(`no absolute local path: ${rel}`, false);
      }
    }
  }
}
try { walk(root); } catch (error) { check('text path scan', false, error.message); }

// Version and changelog presence
try {
  check('changelog contains package version', read('CHANGELOG.md').includes(`[${pkg.version}]`), pkg.version);
} catch { /* reported */ }

// Report
const failed = checks.filter((entry) => !entry.pass);
console.log(`AeroFlow verification: ${checks.length - failed.length}/${checks.length} checks passed.`);
if (failed.length > 0) {
  console.error('\nFailures:');
  for (const entry of failed) console.error(`- ${entry.name}${entry.detail ? `: ${entry.detail}` : ''}`);
  process.exitCode = 1;
} else {
  console.log('All automated repository checks passed. Visual/WebGL acceptance is manual.');
}
