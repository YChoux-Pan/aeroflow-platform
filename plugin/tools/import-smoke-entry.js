import fs from 'node:fs/promises';
import path from 'node:path';
import * as THREE from 'three';
import { fileURLToPath } from 'node:url';
import { loadImportedVehicle } from '../source/importers.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const assetDir = path.resolve(here, '..', '..', 'models', 'racing');

// GLTFLoader's FileLoader emits ProgressEvent for embedded data: URIs. Node
// has no DOM ProgressEvent, so provide the small event shape it needs.
if (typeof globalThis.ProgressEvent === 'undefined') {
  globalThis.ProgressEvent = class ProgressEvent {
    constructor(type, init = {}) {
      this.type = type;
      this.lengthComputable = Boolean(init.lengthComputable);
      this.loaded = init.loaded ?? 0;
      this.total = init.total ?? 0;
    }
  };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function load(fileName, format) {
  const filePath = path.join(assetDir, fileName);
  const data = format === 'glb' ? await fs.readFile(filePath) : await fs.readFile(filePath, 'utf8');
  return loadImportedVehicle({ name: fileName, format, data });
}

const results = [];
for (const [fileName, format] of [
  ['aeroflow-formula-01.glb', 'glb'],
  ['aeroflow-formula-01.gltf', 'gltf'],
  ['aeroflow-formula-01.obj', 'obj'],
  ['aeroflow-gt3-endurance.glb', 'glb'],
  ['aeroflow-gt3-endurance.gltf', 'gltf'],
  ['aeroflow-gt3-endurance.obj', 'obj'],
]) {
  const vehicle = await load(fileName, format);
  vehicle.group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(vehicle.group);
  const size = box.getSize(new THREE.Vector3());
  assert(Number.isFinite(size.x) && size.x > 0.5, `${fileName}: invalid bounds`);
  assert(size.y > 0.1, `${fileName}: missing height`);
  assert(size.z > 0.1, `${fileName}: missing width`);
  let meshes = 0;
  vehicle.group.traverse((child) => {
    if (child.isMesh) meshes += 1;
  });
  assert(meshes > 5, `${fileName}: expected a multi-part vehicle`);
  results.push({
    format,
    fileName,
    bounds: [size.x, size.y, size.z].map((value) => Number(value.toFixed(3))),
    meshes,
  });
}

async function expectCode(promise, code) {
  try {
    await promise;
    throw new Error(`Expected import error ${code}`);
  } catch (error) {
    assert(error?.code === code, `Expected ${code}, got ${error?.code || error?.message}`);
  }
}

await expectCode(
  loadImportedVehicle({
    format: 'gltf',
    data: JSON.stringify({ asset: { version: '2.0' }, buffers: [{ uri: 'external.bin', byteLength: 4 }] }),
  }),
  'EXTERNAL_RESOURCES',
);
await expectCode(
  loadImportedVehicle({
    format: 'gltf',
    data: JSON.stringify({
      asset: { version: '2.0' },
      extensionsRequired: ['KHR_draco_mesh_compression'],
      extensionsUsed: ['KHR_draco_mesh_compression'],
    }),
  }),
  'COMPRESSED_ASSET',
);
await expectCode(loadImportedVehicle({ format: 'glb', data: new ArrayBuffer(8) }), 'INVALID_GLTF');

console.log(JSON.stringify({ ok: true, imports: results }, null, 2));
