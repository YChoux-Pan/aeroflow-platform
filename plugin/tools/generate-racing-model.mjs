/**
 * Generate the original AeroFlow Formula racing-car concept used by the
 * repository's GLB/GLTF import tests and demo.
 *
 * Development-only. Run from this directory:
 *   node generate-racing-model.mjs
 */
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// GLTFExporter uses FileReader for its final Blob assembly. This asset has no
// image textures, so a small browser-API shim is enough for Node.
if (typeof globalThis.FileReader === 'undefined') {
  globalThis.FileReader = class NodeFileReader {
    constructor() {
      this.result = null;
      this.onloadend = null;
      this.onerror = null;
    }

    readAsArrayBuffer(blob) {
      blob.arrayBuffer()
        .then((buffer) => {
          this.result = buffer;
          this.onloadend?.();
        })
        .catch((error) => this.onerror?.(error));
    }

    readAsDataURL(blob) {
      blob.arrayBuffer()
        .then((buffer) => {
          this.result = `data:${blob.type || 'application/octet-stream'};base64,${Buffer.from(buffer).toString('base64')}`;
          this.onloadend?.();
        })
        .catch((error) => this.onerror?.(error));
    }
  };
}

const here = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(here, '..', '..', 'models', 'racing');

function material(color, metalness, roughness, emissive = 0x000000) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    emissive,
    emissiveIntensity: emissive === 0x000000 ? 0 : 0.7,
  });
}

function addBox(parent, size, position, materialInstance, name) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), materialInstance);
  mesh.position.set(...position);
  mesh.name = name;
  parent.add(mesh);
  return mesh;
}

function addWheel(parent, x, z, tireMaterial, rimMaterial) {
  const wheel = new THREE.Group();
  wheel.name = `Wheel_${x < 0 ? 'Front' : 'Rear'}_${z < 0 ? 'Left' : 'Right'}`;
  wheel.position.set(x, 0.36, z);

  const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.3, 24, 1), tireMaterial);
  tire.rotation.x = Math.PI / 2;
  wheel.add(tire);

  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.32, 16, 1), rimMaterial);
  rim.rotation.x = Math.PI / 2;
  wheel.add(rim);

  for (const side of [-1, 1]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.235, 0.022, 6, 20), rimMaterial);
    ring.position.z = side * 0.165;
    wheel.add(ring);
  }

  parent.add(wheel);
  return wheel;
}

function buildCar() {
  const root = new THREE.Group();
  root.name = 'AeroFlow_Formula_01';
  root.userData = {
    title: 'AeroFlow Formula 01',
    design: 'Original brand-free 2026-style open-wheel racing concept',
    units: 'meters',
    author: 'AeroFlow Platform',
    license: 'MIT',
  };

  const carbon = material(0x111a20, 0.72, 0.32);
  const livery = material(0x0a5cff, 0.52, 0.24);
  const accent = material(0x1a3b44, 0.35, 0.28, 0x27e6ff);
  const dark = material(0x05090c, 0.25, 0.72);
  const tire = material(0x030506, 0.05, 0.94);
  const rim = material(0x6b7d84, 0.92, 0.24);
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x07131a,
    metalness: 0.72,
    roughness: 0.12,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
  });

  addBox(root, [3.2, 0.07, 1.52], [0.05, 0.22, 0], carbon, 'Floor');
  addBox(root, [1.55, 0.38, 0.56], [0.4, 0.52, -0.6], livery, 'Sidepod_Left');
  addBox(root, [1.55, 0.38, 0.56], [0.4, 0.52, 0.6], livery, 'Sidepod_Right');
  addBox(root, [0.42, 0.27, 0.44], [-0.43, 0.48, -0.6], dark, 'SidepodIntake_Left');
  addBox(root, [0.42, 0.27, 0.44], [-0.43, 0.48, 0.6], dark, 'SidepodIntake_Right');
  addBox(root, [0.9, 0.5, 0.75], [1.22, 0.55, 0], carbon, 'EngineCover');
  addBox(root, [1.7, 0.42, 0.68], [0.15, 0.62, 0], livery, 'Monocoque');

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.23, 1.35, 10, 1), livery);
  nose.rotation.z = Math.PI / 2;
  nose.position.set(-1.9, 0.55, 0);
  nose.name = 'NoseCone';
  root.add(nose);

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.31, 18, 12), glass);
  cockpit.scale.set(0.9, 0.48, 0.72);
  cockpit.position.set(-0.18, 0.89, 0);
  cockpit.name = 'CockpitCanopy';
  root.add(cockpit);

  const haloCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.55, 0.91, 0),
    new THREE.Vector3(-0.4, 1.16, -0.28),
    new THREE.Vector3(0.02, 1.2, -0.3),
    new THREE.Vector3(0.2, 1.1, 0),
    new THREE.Vector3(0.02, 1.2, 0.3),
    new THREE.Vector3(-0.4, 1.16, 0.28),
    new THREE.Vector3(-0.55, 0.91, 0),
  ]);
  const halo = new THREE.Mesh(new THREE.TubeGeometry(haloCurve, 28, 0.028, 6, false), carbon);
  halo.name = 'Halo';
  root.add(halo);

  addBox(root, [0.52, 0.06, 1.9], [-2.15, 0.22, 0], carbon, 'FrontWing_Main');
  addBox(root, [0.48, 0.24, 0.035], [-2.15, 0.33, -0.95], livery, 'FrontWing_Endplate_Left');
  addBox(root, [0.48, 0.24, 0.035], [-2.15, 0.33, 0.95], livery, 'FrontWing_Endplate_Right');
  addBox(root, [0.4, 0.04, 1.75], [-2.35, 0.28, 0], livery, 'FrontWing_Flap');

  addBox(root, [2.35, 0.045, 0.05], [0.1, 0.35, -1.0], accent, 'SideImpact_Left');
  addBox(root, [2.35, 0.045, 0.05], [0.1, 0.35, 1.0], accent, 'SideImpact_Right');
  addBox(root, [2.9, 0.03, 0.025], [-0.05, 0.28, -0.77], accent, 'FloorEdge_Left');
  addBox(root, [2.9, 0.03, 0.025], [-0.05, 0.28, 0.77], accent, 'FloorEdge_Right');

  addBox(root, [0.36, 0.055, 1.65], [1.82, 1.25, 0], livery, 'RearWing_Main');
  addBox(root, [0.3, 0.04, 1.62], [1.73, 1.36, 0], accent, 'RearWing_Flap');
  addBox(root, [0.36, 0.32, 0.035], [1.82, 1.27, -0.84], carbon, 'RearWing_Endplate_Left');
  addBox(root, [0.36, 0.32, 0.035], [1.82, 1.27, 0.84], carbon, 'RearWing_Endplate_Right');
  addBox(root, [0.07, 0.62, 0.07], [1.7, 0.92, -0.38], carbon, 'RearWing_Pylon_Left');
  addBox(root, [0.07, 0.62, 0.07], [1.7, 0.92, 0.38], carbon, 'RearWing_Pylon_Right');
  addBox(root, [0.55, 0.3, 0.035], [1.05, 1.17, 0], livery, 'SharkFin');

  addBox(root, [0.5, 0.16, 1.3], [1.75, 0.32, 0], carbon, 'Diffuser');
  addBox(root, [0.05, 0.05, 1.0], [1.84, 0.3, 0], accent, 'RearLightBar');

  for (const z of [-0.94, 0.94]) {
    addBox(root, [0.22, 0.2, 0.32], [-0.86, 0.8, z], carbon, `MirrorPod_${z < 0 ? 'Left' : 'Right'}`);
    addBox(root, [0.05, 0.35, 0.05], [-0.86, 0.66, z], carbon, `MirrorStalk_${z < 0 ? 'Left' : 'Right'}`);
  }

  addWheel(root, -1.35, -0.86, tire, rim);
  addWheel(root, -1.35, 0.86, tire, rim);
  addWheel(root, 1.28, -0.84, tire, rim);
  addWheel(root, 1.28, 0.84, tire, rim);

  const frontSuspension = material(0x1a252b, 0.65, 0.38);
  for (const z of [-1, 1]) {
    for (const x of [-1.35, 1.28]) {
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.48, 6, 1), frontSuspension);
      arm.position.set(x, 0.52, z * 0.63);
      arm.rotation.z = Math.PI / 2;
      root.add(arm);
    }
  }

  root.updateMatrixWorld(true);
  return root;
}

function exportGltf(group, binary) {
  const exporter = new GLTFExporter();
  return new Promise((resolve, reject) => {
    exporter.parse(
      group,
      (result) => resolve(result),
      (error) => reject(error),
      {
        binary,
        onlyVisible: true,
        includeCustomExtensions: false,
        trs: false,
      },
    );
  });
}

const car = buildCar();
const box = new THREE.Box3().setFromObject(car);
const size = box.getSize(new THREE.Vector3());

await fs.mkdir(outputDir, { recursive: true });
const glb = await exportGltf(car, true);
const glbBytes = Buffer.from(glb);
const gltf = await exportGltf(car, false);
const gltfText = JSON.stringify(gltf, null, 2);
const obj = new OBJExporter().parse(car);

await fs.writeFile(path.join(outputDir, 'aeroflow-formula-01.glb'), glbBytes);
await fs.writeFile(path.join(outputDir, 'aeroflow-formula-01.gltf'), gltfText, 'utf8');
await fs.writeFile(path.join(outputDir, 'aeroflow-formula-01.obj'), obj, 'utf8');

const summary = {
  name: 'AeroFlow Formula 01',
  description: 'Original brand-free open-wheel racing concept. Procedurally generated from three.js primitives for the AeroFlow Platform asset and import test suite.',
  author: 'AeroFlow Platform',
  license: 'MIT',
  generationScript: 'plugin/tools/generate-racing-model.mjs',
  dimensionsMeters: {
    length: Number(size.x.toFixed(3)),
    width: Number(size.z.toFixed(3)),
    height: Number(size.y.toFixed(3)),
  },
  files: {
    glb: {
      path: 'models/racing/aeroflow-formula-01.glb',
      bytes: glbBytes.byteLength,
      sha256: createHash('sha256').update(glbBytes).digest('hex'),
    },
    gltf: {
      path: 'models/racing/aeroflow-formula-01.gltf',
      bytes: Buffer.byteLength(gltfText),
      sha256: createHash('sha256').update(gltfText).digest('hex'),
    },
    obj: {
      path: 'models/racing/aeroflow-formula-01.obj',
      bytes: Buffer.byteLength(obj),
      sha256: createHash('sha256').update(obj).digest('hex'),
    },
  },
};
await fs.writeFile(path.join(outputDir, 'manifest.json'), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');

console.log(JSON.stringify(summary, null, 2));
