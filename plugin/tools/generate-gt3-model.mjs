/**
 * Generate the AeroFlow GT3 Endurance model from the installed prompt
 * specification `prompts/examples/gt3-endurance.json`.
 *
 * Development-only. Run from this directory:
 *   node generate-gt3-model.mjs
 */
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
const slug = 'aeroflow-gt3-endurance';

function paint(color, metalness = 0.62, roughness = 0.28, extra = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness,
    roughness,
    clearcoat: 0.9,
    clearcoatRoughness: 0.16,
    ...extra,
  });
}

function emissive(color, intensity = 0.8) {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: intensity,
    metalness: 0.2,
    roughness: 0.4,
  });
}

function addBox(parent, size, position, materialInstance, name, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), materialInstance);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.name = name;
  parent.add(mesh);
  return mesh;
}

function addCylinder(parent, radiusTop, radiusBottom, height, position, materialInstance, name, rotation = [Math.PI / 2, 0, 0], segments = 20) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments, 1), materialInstance);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.name = name;
  parent.add(mesh);
  return mesh;
}

function addExtrudedProfile(parent, shape, depth, materialInstance, name, bevel = 0.035, zCenter = 0) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    steps: 1,
    curveSegments: 20,
  });
  geometry.translate(0, 0, zCenter - depth / 2);
  const mesh = new THREE.Mesh(geometry, materialInstance);
  mesh.name = name;
  parent.add(mesh);
  return mesh;
}

function addWheel(parent, x, z, radius, width, materials) {
  const { tire, rim, accent, carbon } = materials;
  const wheel = new THREE.Group();
  const side = z >= 0 ? 1 : -1;
  wheel.name = `Wheel_${x < 0 ? 'Front' : 'Rear'}_${z < 0 ? 'Left' : 'Right'}`;
  wheel.position.set(x, radius, z);

  const tireMesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 28, 1), tire);
  tireMesh.rotation.x = Math.PI / 2;
  tireMesh.name = 'Tire';
  wheel.add(tireMesh);

  for (const face of [-1, 1]) {
    const sidewall = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.78, radius * 0.035, 6, 26), tire);
    sidewall.position.z = face * (width / 2 - 0.008);
    sidewall.name = 'Sidewall';
    wheel.add(sidewall);
  }

  const disc = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.55, radius * 0.55, width * 0.7, 20, 1), carbon);
  disc.rotation.x = Math.PI / 2;
  disc.name = 'BrakeDisc';
  wheel.add(disc);

  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.58, radius * 0.58, width * 0.82, 22, 1), rim);
  barrel.rotation.x = Math.PI / 2;
  barrel.name = 'RimBarrel';
  wheel.add(barrel);

  const outerFace = side * (width / 2 + 0.012);
  const rimFace = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.55, 0.022, 5, 26), rim);
  rimFace.position.z = outerFace;
  wheel.add(rimFace);

  for (let index = 0; index < 5; index += 1) {
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(radius * 0.09, radius * 0.72, 0.022), rim);
    spoke.position.set(0, radius * 0.18, outerFace);
    spoke.rotation.z = (index / 5) * Math.PI * 2;
    wheel.add(spoke);
  }

  const hub = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.16, radius * 0.16, 0.05, 12), accent);
  hub.rotation.x = Math.PI / 2;
  hub.position.z = outerFace + 0.015;
  hub.name = 'CenterLock';
  wheel.add(hub);

  const caliper = addBox(wheel, [radius * 0.12, radius * 0.3, 0.08], [radius * 0.36, 0, 0], accent, 'Caliper');
  caliper.rotation.z = 0.3;

  parent.add(wheel);
  return wheel;
}

function buildGt3() {
  const root = new THREE.Group();
  root.name = 'AeroFlow_GT3_Endurance';
  root.userData = {
    title: 'AeroFlow GT3 Endurance',
    design: 'Original brand-free GT3 endurance racing car generated from the AeroFlow GT3 prompt specification',
    sourcePrompt: 'prompts/examples/gt3-endurance.json',
    units: 'meters',
    author: 'AeroFlow Platform',
    license: 'MIT',
  };

  const body = paint(0x2b363e, 0.52, 0.3);
  const bodyDark = paint(0x192127, 0.46, 0.4);
  const carbon = paint(0x070b10, 0.35, 0.5);
  const accent = paint(0x20d8ff, 0.45, 0.24, { emissive: 0x0b4654, emissiveIntensity: 0.65 });
  const accentGlow = emissive(0x42edff, 0.85);
  const tire = new THREE.MeshStandardMaterial({ color: 0x020405, metalness: 0.05, roughness: 0.96 });
  const rim = new THREE.MeshStandardMaterial({ color: 0xaab5ba, metalness: 0.92, roughness: 0.22 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x0a1a24,
    metalness: 0.55,
    roughness: 0.08,
    transparent: true,
    opacity: 0.66,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
  });
  const redLight = emissive(0xff315c, 1.2);
  const whiteLight = emissive(0xbffcff, 1.0);
  const grille = new THREE.MeshStandardMaterial({ color: 0x04080b, metalness: 0.25, roughness: 0.8 });
  const materials = { tire, rim, accent: accentGlow, carbon };

  // Lower body: long hood, cabin set rearward, muscular rear deck.
  const silhouette = new THREE.Shape();
  silhouette.moveTo(-2.32, 0.2);
  silhouette.lineTo(-2.34, 0.4);
  silhouette.quadraticCurveTo(-2.24, 0.61, -1.78, 0.66);
  silhouette.lineTo(-1.08, 0.71);
  silhouette.quadraticCurveTo(-0.86, 0.74, -0.72, 0.84);
  silhouette.lineTo(0.92, 0.88);
  silhouette.quadraticCurveTo(1.52, 0.88, 1.94, 0.8);
  silhouette.lineTo(2.28, 0.69);
  silhouette.quadraticCurveTo(2.36, 0.55, 2.25, 0.38);
  silhouette.lineTo(2.24, 0.2);
  silhouette.lineTo(-2.12, 0.18);
  silhouette.quadraticCurveTo(-2.32, 0.18, -2.32, 0.2);
  addExtrudedProfile(root, silhouette, 1.62, body, 'BodyShell', 0.045);

  // Undertray.
  addBox(root, [4.2, 0.045, 1.5], [0.02, 0.2, 0], carbon, 'Undertray');

  // Cabin / greenhouse.
  const cabin = new THREE.Shape();
  cabin.moveTo(-0.78, 0.84);
  cabin.quadraticCurveTo(-0.54, 1.08, -0.12, 1.15);
  cabin.lineTo(0.55, 1.15);
  cabin.quadraticCurveTo(0.95, 1.04, 1.16, 0.85);
  cabin.closePath();
  addExtrudedProfile(root, cabin, 1.2, glass, 'Greenhouse', 0.02);
  addBox(root, [0.72, 0.035, 1.06], [0.24, 1.158, 0], bodyDark, 'RoofPanel');
  addBox(root, [0.06, 0.025, 1.2], [1.1, 0.88, 0], carbon, 'RearWindowTrim');

  // Roof scoop / antenna pod.
  addBox(root, [0.34, 0.09, 0.34], [0.62, 1.17, 0], carbon, 'RoofScoop');
  addBox(root, [0.18, 0.035, 0.22], [0.55, 1.22, 0], grille, 'RoofScoopOpening');

  // Fender shoulders and arch lips.
  for (const side of [-1, 1]) {
    for (const [x, wheelRadius, scale] of [[-1.55, 0.36, 0.9], [1.35, 0.38, 1.05]]) {
      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.48, 18, 12), body);
      shoulder.scale.set(1.25 * scale, 0.33, 0.2);
      shoulder.position.set(x, 0.68, side * 0.78);
      shoulder.name = `FenderShoulder_${x < 0 ? 'Front' : 'Rear'}_${side < 0 ? 'Left' : 'Right'}`;
      root.add(shoulder);

      const arch = new THREE.Mesh(
        new THREE.TorusGeometry(wheelRadius + 0.035, 0.03, 6, 28, Math.PI),
        bodyDark,
      );
      arch.position.set(x, wheelRadius, side * 0.88);
      arch.name = `WheelArch_${x < 0 ? 'Front' : 'Rear'}_${side < 0 ? 'Left' : 'Right'}`;
      root.add(arch);

      const archAccent = new THREE.Mesh(
        new THREE.TorusGeometry(wheelRadius + 0.07, 0.008, 4, 28, Math.PI),
        accent,
      );
      archAccent.position.set(x, wheelRadius, side * 0.9);
      root.add(archAccent);
    }
  }

  // Front splitter and endplates.
  addBox(root, [0.55, 0.035, 1.94], [-2.28, 0.16, 0], carbon, 'FrontSplitter');
  addBox(root, [0.62, 0.2, 0.035], [-2.3, 0.26, -0.98], bodyDark, 'SplitterEndplate_Left');
  addBox(root, [0.62, 0.2, 0.035], [-2.3, 0.26, 0.98], bodyDark, 'SplitterEndplate_Right');
  addBox(root, [0.04, 0.03, 1.86], [-2.55, 0.165, 0], accent, 'SplitterLeadingEdge');

  // Nose intake and headlights.
  addBox(root, [0.04, 0.2, 1.15], [-2.36, 0.35, 0], grille, 'FrontIntake');
  addBox(root, [0.035, 0.055, 0.36], [-2.34, 0.55, -0.56], whiteLight, 'Headlight_Left');
  addBox(root, [0.035, 0.055, 0.36], [-2.34, 0.55, 0.56], whiteLight, 'Headlight_Right');
  addBox(root, [0.05, 0.02, 0.44], [-2.33, 0.46, -0.56], accent, 'DRL_Left');
  addBox(root, [0.05, 0.02, 0.44], [-2.33, 0.46, 0.56], accent, 'DRL_Right');

  // Canards.
  for (const side of [-1, 1]) {
    for (let index = 0; index < 2; index += 1) {
      addBox(
        root,
        [0.42, 0.025, 0.22],
        [-2.22 - index * 0.06, 0.32 + index * 0.08, side * (0.86 + index * 0.02)],
        carbon,
        `Canard_${side < 0 ? 'Left' : 'Right'}_${index + 1}`,
        [0, 0, side * -0.13],
      );
    }
  }

  // Hood vents.
  addBox(root, [0.52, 0.018, 0.62], [-1.28, 0.715, 0], grille, 'HoodVentPanel');
  for (const side of [-1, 1]) {
    for (let index = 0; index < 3; index += 1) {
      addBox(root, [0.08, 0.01, 0.4], [-1.48 + index * 0.15, 0.728, side * 0.2], carbon, `HoodVent_${side}_${index}`);
    }
  }

  // Side skirts and livery stripe.
  for (const side of [-1, 1]) {
    addBox(root, [2.55, 0.12, 0.08], [-0.06, 0.22, side * 0.84], carbon, `SideSkirt_${side < 0 ? 'Left' : 'Right'}`);
    addBox(root, [3.2, 0.018, 0.012], [-0.12, 0.43, side * 0.816], accent, `LiveryStripe_${side < 0 ? 'Left' : 'Right'}`);
    addBox(root, [0.62, 0.28, 0.025], [0.93, 0.55, side * 0.815], grille, `SideIntake_${side < 0 ? 'Left' : 'Right'}`);
    addBox(root, [0.05, 0.14, 0.02], [0.64, 0.56, side * 0.825], accent, `SideIntakeAccent_${side < 0 ? 'Left' : 'Right'}`);
    addBox(root, [0.45, 0.012, 0.012], [-0.38, 0.79, side * 0.72], carbon, `DoorLine_${side < 0 ? 'Left' : 'Right'}`);
  }

  // Mirrors.
  for (const side of [-1, 1]) {
    addBox(root, [0.24, 0.07, 0.16], [-0.64, 0.86, side * 0.82], carbon, `MirrorPod_${side < 0 ? 'Left' : 'Right'}`);
    addCylinder(root, 0.018, 0.018, 0.24, [-0.6, 0.76, side * 0.72], carbon, `MirrorStalk_${side < 0 ? 'Left' : 'Right'}`, [0, 0, 0.5], 8);
  }

  // Rear engine deck, exhaust, tail light.
  addBox(root, [0.9, 0.04, 1.2], [1.45, 0.82, 0], carbon, 'EngineDeckVent');
  for (const side of [-1, 1]) {
    addCylinder(root, 0.052, 0.052, 0.16, [2.28, 0.39, side * 0.28], bodyDark, `Exhaust_${side < 0 ? 'Left' : 'Right'}`, [0, 0, Math.PI / 2], 12);
  }
  addBox(root, [0.025, 0.07, 1.38], [2.28, 0.55, 0], redLight, 'TailLightBar');
  addBox(root, [0.03, 0.035, 0.1], [2.29, 0.68, -0.72], redLight, 'TailLight_Left');
  addBox(root, [0.03, 0.035, 0.1], [2.29, 0.68, 0.72], redLight, 'TailLight_Right');

  // Diffuser and fins.
  addBox(root, [0.72, 0.035, 1.55], [2.1, 0.17, 0], carbon, 'DiffuserFloor');
  for (let index = -2; index <= 2; index += 1) {
    addBox(root, [0.6, 0.16, 0.025], [2.13, 0.25, index * 0.27], carbon, `DiffuserFin_${index + 3}`);
  }
  for (const side of [-1, 1]) {
    addBox(root, [0.55, 0.2, 0.03], [2.12, 0.28, side * 0.77], carbon, `DiffuserEndplate_${side < 0 ? 'Left' : 'Right'}`);
  }

  // Rear wing: swan-neck supports, main plane, flap, endplates.
  const wingMain = addBox(root, [0.46, 0.05, 1.82], [1.93, 1.23, 0], carbon, 'RearWingMain');
  wingMain.rotation.z = 0.035;
  const wingFlap = addBox(root, [0.22, 0.035, 1.78], [2.06, 1.3, 0], bodyDark, 'RearWingFlap');
  wingFlap.rotation.z = 0.08;
  for (const side of [-1, 1]) {
    addBox(root, [0.52, 0.35, 0.035], [1.98, 1.22, side * 0.92], bodyDark, `RearWingEndplate_${side < 0 ? 'Left' : 'Right'}`);
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.58, 0.83, side * 0.54),
      new THREE.Vector3(1.62, 0.98, side * 0.54),
      new THREE.Vector3(1.78, 1.13, side * 0.54),
      new THREE.Vector3(1.9, 1.2, side * 0.54),
    ]);
    const pylon = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.028, 6, false), carbon);
    pylon.name = `SwanNeck_${side < 0 ? 'Left' : 'Right'}`;
    root.add(pylon);
  }
  addBox(root, [0.02, 0.07, 1.76], [2.18, 1.3, 0], accent, 'RearWingGurney');

  // Rear deck louver slats.
  for (let index = 0; index < 4; index += 1) {
    addBox(root, [0.03, 0.012, 0.7], [1.05 + index * 0.08, 0.805, 0], carbon, `RearLouver_${index}`);
  }

  // Wheels.
  addWheel(root, -1.55, -0.9, 0.36, 0.3, materials);
  addWheel(root, -1.55, 0.9, 0.36, 0.3, materials);
  addWheel(root, 1.35, -0.92, 0.38, 0.34, materials);
  addWheel(root, 1.35, 0.92, 0.38, 0.34, materials);

  // Carbon front dive planes and lower rear bumper corners.
  for (const side of [-1, 1]) {
    addBox(root, [0.2, 0.025, 0.16], [2.2, 0.26, side * 0.78], carbon, `RearCornerCanard_${side < 0 ? 'Left' : 'Right'}`);
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
      { binary, onlyVisible: true, includeCustomExtensions: false, trs: false },
    );
  });
}

const car = buildGt3();
const box = new THREE.Box3().setFromObject(car);
const size = box.getSize(new THREE.Vector3());

await fs.mkdir(outputDir, { recursive: true });
const glb = await exportGltf(car, true);
const glbBytes = Buffer.from(glb);
const gltf = await exportGltf(car, false);
const gltfText = JSON.stringify(gltf, null, 2);
const obj = new OBJExporter().parse(car);

await fs.writeFile(path.join(outputDir, `${slug}.glb`), glbBytes);
await fs.writeFile(path.join(outputDir, `${slug}.gltf`), gltfText, 'utf8');
await fs.writeFile(path.join(outputDir, `${slug}.obj`), obj, 'utf8');

const manifest = {
  id: 'aeroflow-gt3-endurance',
  name: 'AeroFlow GT3 Endurance',
  description: 'Original brand-free GT3 endurance racing concept built from the installed AeroFlow prompt specification.',
  author: 'AeroFlow Platform',
  license: 'MIT',
  promptSpec: 'prompts/examples/gt3-endurance.json',
  promptPackage: 'prompts/generated/gt3-endurance.md',
  generationScript: 'plugin/tools/generate-gt3-model.mjs',
  dimensionsMeters: {
    length: Number(size.x.toFixed(3)),
    width: Number(size.z.toFixed(3)),
    height: Number(size.y.toFixed(3)),
  },
  files: {
    glb: {
      path: `models/racing/${slug}.glb`,
      bytes: glbBytes.byteLength,
      sha256: createHash('sha256').update(glbBytes).digest('hex'),
    },
    gltf: {
      path: `models/racing/${slug}.gltf`,
      bytes: Buffer.byteLength(gltfText),
      sha256: createHash('sha256').update(gltfText).digest('hex'),
    },
    obj: {
      path: `models/racing/${slug}.obj`,
      bytes: Buffer.byteLength(obj),
      sha256: createHash('sha256').update(obj).digest('hex'),
    },
  },
};

await fs.writeFile(
  path.join(outputDir, `${slug}.manifest.json`),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8',
);

let meshes = 0;
let triangles = 0;
car.traverse((child) => {
  if (!child.isMesh) return;
  meshes += 1;
  const geometry = child.geometry;
  const count = geometry.index ? geometry.index.count : (geometry.attributes.position?.count || 0);
  triangles += count / 3;
});

console.log(JSON.stringify({ ...manifest, meshes, triangles: Math.round(triangles) }, null, 2));
