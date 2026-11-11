import * as THREE from 'three';

const CYAN = 0x5df4ff;
const WHITE_CYAN = 0xc9ffff;
const MAGENTA = 0xff5ecb;

function neon(color, opacity = 1) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    toneMapped: false,
    depthWrite: opacity >= 1,
  });
}

function edgeMaterial(color = CYAN, opacity = 0.34) {
  return new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    toneMapped: false,
    depthWrite: false,
  });
}

function shellMaterial(color, metalness = 0.62, roughness = 0.3) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness,
    roughness,
    clearcoat: 0.85,
    clearcoatRoughness: 0.22,
    envMapIntensity: 0.45,
    emissive: 0x030b10,
  });
}

function addEdges(mesh, color = CYAN, opacity = 0.3, threshold = 28) {
  mesh.updateMatrixWorld(true);
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(mesh.geometry, threshold),
    edgeMaterial(color, opacity),
  );
  edges.renderOrder = 2;
  mesh.add(edges);
  return edges;
}

function addGlowBar(parent, geometry, color, position, rotation) {
  const mesh = new THREE.Mesh(geometry, neon(color, 0.98));
  if (position) mesh.position.set(...position);
  if (rotation) mesh.rotation.set(...rotation);
  parent.add(mesh);
  return mesh;
}

function wheel(radius, width, tireMat, rimMat, accentMat) {
  const group = new THREE.Group();
  const tyre = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 20, 1), tireMat);
  tyre.rotation.x = Math.PI / 2;
  group.add(tyre);

  const rimGeo = new THREE.CylinderGeometry(radius * 0.58, radius * 0.58, width + 0.012, 14, 1);
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.rotation.x = Math.PI / 2;
  group.add(rim);

  for (const side of [-1, 1]) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 0.62, radius * 0.045, 6, 22),
      accentMat,
    );
    ring.position.z = side * (width * 0.5 + 0.008);
    group.add(ring);
  }
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.16, radius * 0.16, width + 0.03, 10), accentMat);
  hub.rotation.x = Math.PI / 2;
  group.add(hub);
  return group;
}

function addWheelSet(parent, positions, radius, width, tireMat, rimMat, accentMat) {
  for (const [x, z] of positions) {
    const w = wheel(radius, width, tireMat, rimMat, accentMat);
    w.position.set(x, radius, z);
    parent.add(w);
  }
}

function beam(start, end, radius, material, radialSegments = 6) {
  const a = new THREE.Vector3(...start);
  const b = new THREE.Vector3(...end);
  const direction = b.clone().sub(a);
  const length = direction.length();
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, length, radialSegments, 1),
    material,
  );
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return mesh;
}

function normalizeGroup(group, targetLength, maxSpan = 4.6) {
  group.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(group);
  let size = box.getSize(new THREE.Vector3());
  let scale = targetLength / Math.max(0.001, size.x);
  const span = Math.max(size.x, size.z);
  if (span * scale > maxSpan) scale = maxSpan / span;
  group.scale.multiplyScalar(scale);
  group.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(group);
  group.position.x -= (box.min.x + box.max.x) * 0.5;
  group.position.z -= (box.min.z + box.max.z) * 0.5;
  group.position.y -= box.min.y;
  group.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(group);
  group.userData.displayBox = box.clone();
  return box;
}

function createCar() {
  const group = new THREE.Group();
  const bodyMat = shellMaterial(0x14272f, 0.72, 0.23);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x071018,
    metalness: 0.6,
    roughness: 0.06,
    transparent: true,
    opacity: 0.86,
    clearcoat: 1,
    depthWrite: false,
  });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x05080b, roughness: 0.92, metalness: 0.08 });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x4a5d64, metalness: 0.95, roughness: 0.25 });
  const accentMat = neon(CYAN);

  const silhouette = new THREE.Shape();
  silhouette.moveTo(-2.16, 0.22);
  silhouette.lineTo(-2.14, 0.46);
  silhouette.quadraticCurveTo(-2.02, 0.67, -1.62, 0.72);
  silhouette.lineTo(-1.1, 0.82);
  silhouette.quadraticCurveTo(-0.88, 1.22, -0.3, 1.34);
  silhouette.quadraticCurveTo(0.3, 1.4, 0.78, 1.16);
  silhouette.lineTo(1.28, 0.82);
  silhouette.quadraticCurveTo(1.82, 0.72, 2.08, 0.56);
  silhouette.lineTo(2.15, 0.3);
  silhouette.quadraticCurveTo(2.16, 0.12, 1.9, 0.12);
  silhouette.lineTo(-1.9, 0.12);
  silhouette.quadraticCurveTo(-2.16, 0.12, -2.16, 0.22);

  const bodyGeo = new THREE.ExtrudeGeometry(silhouette, {
    depth: 1.6,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.04,
    bevelSegments: 2,
    curveSegments: 18,
    steps: 1,
  });
  bodyGeo.translate(0, 0, -0.8);
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  group.add(body);
  addEdges(body, CYAN, 0.28, 24);

  const canopy = new THREE.Shape();
  canopy.moveTo(-0.78, 0.99);
  canopy.quadraticCurveTo(-0.52, 1.3, 0.04, 1.36);
  canopy.quadraticCurveTo(0.55, 1.32, 0.86, 0.99);
  canopy.lineTo(-0.78, 0.99);
  const canopyGeo = new THREE.ExtrudeGeometry(canopy, {
    depth: 1.15,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.02,
    bevelSegments: 1,
    curveSegments: 14,
  });
  canopyGeo.translate(0, 0, -0.575);
  const glass = new THREE.Mesh(canopyGeo, glassMat);
  group.add(glass);
  addEdges(glass, 0x8efaff, 0.35, 35);

  for (const z of [-0.806, 0.806]) {
    addGlowBar(group, new THREE.BoxGeometry(2.45, 0.024, 0.014), CYAN, [-0.18, 0.82, z]);
    addGlowBar(group, new THREE.BoxGeometry(0.6, 0.018, 0.012), WHITE_CYAN, [-1.66, 0.69, z]);
    addGlowBar(group, new THREE.BoxGeometry(0.26, 0.014, 0.012), MAGENTA, [1.9, 0.49, z]);
  }

  addGlowBar(group, new THREE.BoxGeometry(0.035, 0.075, 0.4), WHITE_CYAN, [-2.135, 0.49, -0.53]);
  addGlowBar(group, new THREE.BoxGeometry(0.035, 0.075, 0.4), WHITE_CYAN, [-2.135, 0.49, 0.53]);
  addGlowBar(group, new THREE.BoxGeometry(0.035, 0.05, 1.16), 0xff4f9f, [2.14, 0.48, 0]);
  addGlowBar(group, new THREE.BoxGeometry(1.68, 0.03, 1.72), 0x0a1115, [0.25, 0.11, 0]);

  const wing = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.035, 1.58), bodyMat);
  wing.position.set(1.76, 1.12, 0);
  group.add(wing);
  addEdges(wing, CYAN, 0.42, 20);
  for (const z of [-0.56, 0.56]) {
    const support = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.28, 0.05), rimMat);
    support.position.set(1.68, 0.96, z);
    group.add(support);
  }

  for (const z of [-0.44, 0.44]) {
    const intake = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.12, 0.06), neon(MAGENTA, 0.55));
    intake.position.set(1.2, 0.52, z * 2.08);
    group.add(intake);
  }

  addWheelSet(
    group,
    [[-1.34, -0.79], [-1.34, 0.79], [1.34, -0.79], [1.34, 0.79]],
    0.34,
    0.27,
    tireMat,
    rimMat,
    accentMat,
  );

  normalizeGroup(group, 3.45, 3.9);
  return { group, update() {} };
}

function createTruck() {
  const group = new THREE.Group();
  const bodyMat = shellMaterial(0x27333a, 0.55, 0.38);
  const cargoMat = shellMaterial(0x40515b, 0.42, 0.5);
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x070c0f, metalness: 0.3, roughness: 0.8 });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x051117,
    metalness: 0.5,
    roughness: 0.08,
    transparent: true,
    opacity: 0.86,
    clearcoat: 1,
    depthWrite: false,
  });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x040608, roughness: 0.94 });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x6b7377, metalness: 0.9, roughness: 0.3 });
  const accentMat = neon(0xffb05e);

  const cab = new THREE.Shape();
  cab.moveTo(-2.42, 0.28);
  cab.lineTo(-2.4, 1.48);
  cab.quadraticCurveTo(-2.36, 1.92, -1.98, 1.98);
  cab.lineTo(-1.02, 1.98);
  cab.lineTo(-0.78, 1.42);
  cab.lineTo(-0.6, 0.78);
  cab.lineTo(-0.6, 0.28);
  cab.lineTo(-2.42, 0.28);
  const cabGeo = new THREE.ExtrudeGeometry(cab, {
    depth: 2.16,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.04,
    bevelSegments: 2,
    curveSegments: 10,
  });
  cabGeo.translate(0, 0, -1.08);
  const cabMesh = new THREE.Mesh(cabGeo, bodyMat);
  group.add(cabMesh);
  addEdges(cabMesh, CYAN, 0.25, 24);

  const windshield = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.62, 1.72), glassMat);
  windshield.position.set(-2.39, 1.53, 0);
  group.add(windshield);
  for (const z of [-1.096, 1.096]) {
    const sideGlass = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.52, 0.025), glassMat);
    sideGlass.position.set(-1.52, 1.57, z);
    group.add(sideGlass);
  }

  const cargo = new THREE.Mesh(new THREE.BoxGeometry(3.25, 2.18, 2.3), cargoMat);
  cargo.position.set(0.95, 1.42, 0);
  group.add(cargo);
  addEdges(cargo, CYAN, 0.24, 20);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(3.32, 0.08, 2.36), darkMat);
  roof.position.set(0.95, 2.54, 0);
  group.add(roof);
  addGlowBar(group, new THREE.BoxGeometry(3.26, 0.018, 0.02), 0xffb45f, [0.95, 2.49, -1.16]);
  addGlowBar(group, new THREE.BoxGeometry(3.26, 0.018, 0.02), 0xffb45f, [0.95, 2.49, 1.16]);

  for (const x of [-0.12, 0.46, 1.04, 1.62, 2.2]) {
    for (const z of [-1.165, 1.165]) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.045, 1.98, 0.025), rimMat);
      rib.position.set(x, 1.32, z);
      group.add(rib);
    }
  }

  addGlowBar(group, new THREE.BoxGeometry(0.04, 0.15, 1.82), 0xfff0cf, [-2.425, 1.24, 0]);
  addGlowBar(group, new THREE.BoxGeometry(0.035, 0.08, 0.28), WHITE_CYAN, [-2.44, 0.8, -0.82]);
  addGlowBar(group, new THREE.BoxGeometry(0.035, 0.08, 0.28), WHITE_CYAN, [-2.44, 0.8, 0.82]);
  addGlowBar(group, new THREE.BoxGeometry(0.025, 0.05, 0.1), 0xff6b6b, [-2.44, 1.72, -0.94]);
  addGlowBar(group, new THREE.BoxGeometry(0.025, 0.05, 0.1), 0xff6b6b, [-2.44, 1.72, 0.94]);

  addWheelSet(
    group,
    [[-1.94, -1.02], [-1.94, 1.02], [1.0, -1.02], [1.0, 1.02], [1.74, -1.02], [1.74, 1.02]],
    0.48,
    0.34,
    tireMat,
    rimMat,
    accentMat,
  );

  const skirtL = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.22, 0.05), darkMat);
  skirtL.position.set(0.35, 0.46, 1.16);
  group.add(skirtL);
  const skirtR = skirtL.clone();
  skirtR.position.z = -1.16;
  group.add(skirtR);

  normalizeGroup(group, 4.15, 4.6);
  return { group, update() {} };
}

function createDrone() {
  const group = new THREE.Group();
  const bodyMat = shellMaterial(0x1b2b30, 0.65, 0.28);
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x070b0e, metalness: 0.6, roughness: 0.55 });
  const accentMat = neon(0x4cffb8);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x061219,
    metalness: 0.65,
    roughness: 0.08,
    transparent: true,
    opacity: 0.84,
    depthWrite: false,
  });

  const fuselage = new THREE.Mesh(new THREE.CapsuleGeometry(0.27, 0.74, 8, 16), bodyMat);
  fuselage.rotation.z = Math.PI / 2;
  fuselage.position.y = 0.9;
  group.add(fuselage);
  addEdges(fuselage, 0x5affe0, 0.3, 30);

  const canopy = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 10), glassMat);
  canopy.scale.set(0.72, 0.55, 0.9);
  canopy.position.set(-0.2, 1.08, 0);
  group.add(canopy);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.36, 12), bodyMat);
  nose.rotation.z = Math.PI / 2;
  nose.position.set(-0.76, 0.9, 0);
  group.add(nose);

  const rotorPositions = [[-0.83, -0.67], [-0.83, 0.67], [0.83, -0.67], [0.83, 0.67]];
  for (const [x, z] of rotorPositions) {
    const arm = beam([0, 0.9, 0], [x, 0.9, z], 0.045, darkMat);
    group.add(arm);
    const armGlow = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.026, 0.02), accentMat);
    armGlow.position.set(x * 0.56, 0.93, z * 0.56);
    armGlow.rotation.y = -Math.atan2(z, x);
    group.add(armGlow);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.018, 6, 28), accentMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, 1.03, z);
    group.add(ring);

    const rotor = new THREE.Group();
    rotor.position.set(x, 1.03, z);
    for (let bladeIndex = 0; bladeIndex < 2; bladeIndex += 1) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.008, 0.045), darkMat);
      blade.rotation.y = bladeIndex * Math.PI * 0.52;
      rotor.add(blade);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.09, 10), bodyMat);
    rotor.add(hub);
    rotor.userData.spin = true;
    group.add(rotor);
    group.userData.rotors = group.userData.rotors || [];
    group.userData.rotors.push(rotor);

    const strut = beam([x, 1.02, z], [x * 1.15, 0.42, z * 1.15], 0.028, darkMat);
    group.add(strut);
    const skid = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.24, 4, 8), darkMat);
    skid.rotation.z = Math.PI / 2;
    skid.position.set(x * 1.15, 0.23, z * 1.15);
    group.add(skid);
    addGlowBar(group, new THREE.BoxGeometry(0.11, 0.025, 0.02), accentMat, [x * 1.15, 0.2, z * 1.15]);
  }

  const gimbal = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), darkMat);
  gimbal.position.set(-0.5, 0.68, 0);
  group.add(gimbal);
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.1, 0.13, 16), bodyMat);
  lens.rotation.z = Math.PI / 2;
  lens.position.set(-0.65, 0.68, 0);
  group.add(lens);
  const lensGlass = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.02, 16), glassMat);
  lensGlass.rotation.z = Math.PI / 2;
  lensGlass.position.set(-0.72, 0.68, 0);
  group.add(lensGlass);
  addGlowBar(group, new THREE.BoxGeometry(0.02, 0.05, 0.11), MAGENTA, [-0.73, 0.68, 0]);

  normalizeGroup(group, 2.7, 3.4);
  const rotors = group.userData.rotors || [];
  return {
    group,
    update(t, speed, running) {
      if (!running) return;
      const spin = (4 + speed * 0.45) * 0.004;
      for (const rotor of rotors) rotor.rotation.y += spin;
    },
  };
}

function createAircraft() {
  const group = new THREE.Group();
  const bodyMat = shellMaterial(0x1a2d37, 0.76, 0.22);
  const wingMat = shellMaterial(0x1e3541, 0.7, 0.28);
  wingMat.side = THREE.DoubleSide;
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x060d12, metalness: 0.55, roughness: 0.5 });
  const accentMat = neon(CYAN);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x06131a,
    metalness: 0.7,
    roughness: 0.06,
    transparent: true,
    opacity: 0.86,
    clearcoat: 1,
    depthWrite: false,
  });

  const fuselage = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 2.1, 10, 20), bodyMat);
  fuselage.rotation.z = Math.PI / 2;
  fuselage.position.set(0.16, 1.02, 0);
  group.add(fuselage);
  addEdges(fuselage, CYAN, 0.24, 32);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.68, 18), bodyMat);
  nose.rotation.z = Math.PI / 2;
  nose.position.set(-1.63, 1.02, 0);
  group.add(nose);
  const tailCone = new THREE.Mesh(new THREE.ConeGeometry(0.215, 0.7, 14), bodyMat);
  tailCone.rotation.z = -Math.PI / 2;
  tailCone.position.set(1.75, 1.02, 0);
  group.add(tailCone);

  function wingGeometry(span, rootLE, tipLE, rootTE, tipTE, thickness) {
    const vertices = [
      rootLE, 0.9, 0,
      tipLE, 0.9, span,
      tipTE, 0.9, span,
      rootTE, 0.9, 0,
      rootLE, 0.9 - thickness, 0,
      tipLE, 0.9 - thickness, span,
      tipTE, 0.9 - thickness, span,
      rootTE, 0.9 - thickness, 0,
    ];
    const indices = [
      0, 1, 2, 0, 2, 3,
      7, 6, 5, 7, 5, 4,
      0, 4, 5, 0, 5, 1,
      1, 5, 6, 1, 6, 2,
      2, 6, 7, 2, 7, 3,
      3, 7, 4, 3, 4, 0,
    ];
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
  }

  for (const side of [-1, 1]) {
    const wing = new THREE.Mesh(wingGeometry(2.25 * side, -0.38, 0.35, 1.1, 1.08, 0.075), wingMat);
    group.add(wing);
    addEdges(wing, CYAN, 0.38, 22);

    const stabilizer = new THREE.Mesh(
      wingGeometry(0.92 * side, 1.35, 1.55, 1.95, 1.9, 0.055),
      wingMat,
    );
    group.add(stabilizer);
    addEdges(stabilizer, CYAN, 0.26, 22);

    const engine = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.19, 0.92, 16), darkMat);
    engine.rotation.z = Math.PI / 2;
    engine.position.set(0.34, 0.76, side * 1.08);
    group.add(engine);
    const engineRing = new THREE.Mesh(new THREE.TorusGeometry(0.185, 0.024, 6, 22), accentMat);
    engineRing.rotation.y = Math.PI / 2;
    engineRing.position.set(0.8, 0.76, side * 1.08);
    group.add(engineRing);
    const intakeRing = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.016, 6, 22), accentMat);
    intakeRing.rotation.y = Math.PI / 2;
    intakeRing.position.set(-0.13, 0.76, side * 1.08);
    group.add(intakeRing);
    addGlowBar(group, new THREE.BoxGeometry(1.45, 0.018, 0.015), CYAN, [0.25, 0.945, side * 1.65]);
  }

  const finShape = new THREE.Shape();
  finShape.moveTo(1.24, 1.06);
  finShape.lineTo(1.88, 1.62);
  finShape.lineTo(1.98, 1.06);
  const finGeo = new THREE.ExtrudeGeometry(finShape, {
    depth: 0.06,
    bevelEnabled: false,
    steps: 1,
    curveSegments: 4,
  });
  finGeo.translate(0, 0, -0.03);
  const fin = new THREE.Mesh(finGeo, wingMat);
  group.add(fin);
  addEdges(fin, CYAN, 0.38, 18);

  const canopy = new THREE.Mesh(new THREE.SphereGeometry(0.34, 18, 12), glassMat);
  canopy.scale.set(0.86, 0.44, 0.72);
  canopy.position.set(-0.7, 1.3, 0);
  group.add(canopy);

  addGlowBar(group, new THREE.BoxGeometry(0.035, 0.085, 0.32), WHITE_CYAN, [-1.94, 0.91, 0]);
  addGlowBar(group, new THREE.BoxGeometry(1.15, 0.026, 0.03), CYAN, [0.2, 0.73, 0]);

  normalizeGroup(group, 4.3, 4.6);
  return { group, update() {} };
}

function createCustom(specimen) {
  const group = new THREE.Group();
  const bodyMat = shellMaterial(0x20343c, 0.62, 0.32);
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x080f13, metalness: 0.5, roughness: 0.55 });
  const accentMat = neon(0xb9efff);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x071116,
    metalness: 0.7,
    roughness: 0.08,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
  });

  const length = Math.max(0.8, specimen.length * 0.5);
  const radius = Math.max(0.18, Math.min(0.9, specimen.height * 0.35));
  const fuselage = new THREE.Mesh(new THREE.CapsuleGeometry(radius, length, 10, 20), bodyMat);
  fuselage.rotation.z = Math.PI / 2;
  fuselage.position.y = radius + specimen.height * 0.08;
  group.add(fuselage);
  addEdges(fuselage, CYAN, 0.3, 30);

  const nose = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.94, 16, 12), glassMat);
  nose.scale.set(0.7, 1, 1);
  nose.position.set(-length * 0.5 - radius * 0.25, fuselage.position.y, 0);
  group.add(nose);

  for (const factor of [-0.2, 0.35]) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 1.01, 0.018, 5, 28),
      accentMat,
    );
    ring.rotation.y = Math.PI / 2;
    ring.position.set(factor * length, fuselage.position.y, 0);
    group.add(ring);
  }

  for (const side of [-1, 1]) {
    const finShape = new THREE.Shape();
    finShape.moveTo(0.2, 0);
    finShape.lineTo(1.0, 0.24);
    finShape.lineTo(0.86, 0);
    finShape.lineTo(0.2, 0);
    const finGeo = new THREE.ExtrudeGeometry(finShape, {
      depth: 0.035,
      bevelEnabled: false,
      steps: 1,
      curveSegments: 4,
    });
    finGeo.translate(0, 0, -0.017);
    const fin = new THREE.Mesh(finGeo, bodyMat);
    fin.position.set(-0.4, fuselage.position.y - radius * 0.18, side * radius * 0.9);
    fin.rotation.x = side * -0.08;
    group.add(fin);
    addEdges(fin, CYAN, 0.28, 16);
  }

  const rear = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.96, radius * 0.7, 0.16, 20), darkMat);
  rear.rotation.z = Math.PI / 2;
  rear.position.set(length * 0.55, fuselage.position.y, 0);
  group.add(rear);
  const rearGlow = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.72, 0.025, 6, 24), accentMat);
  rearGlow.rotation.y = Math.PI / 2;
  rearGlow.position.set(length * 0.63, fuselage.position.y, 0);
  group.add(rearGlow);

  normalizeGroup(group, 3.1, 3.6);
  return { group, update() {} };
}

export function createVehicle(specimen) {
  switch (specimen.id) {
    case 'truck':
      return createTruck();
    case 'drone':
      return createDrone();
    case 'aircraft':
      return createAircraft();
    case 'custom':
      return createCustom(specimen);
    case 'coupe':
    default:
      return createCar();
  }
}

export function buildImportedVehicle(object, { preserveMaterials = false } = {}) {
  const group = new THREE.Group();
  const material = shellMaterial(0x20333d, 0.7, 0.34);
  const importedEdgeMat = edgeMaterial(0x73f4ff, 0.22);
  const removable = [];
  let meshCount = 0;
  let triangles = 0;

  object.traverse((child) => {
    if (child.isLight || child.isCamera) {
      removable.push(child);
      return;
    }
    if (!child.isMesh) return;
    meshCount += 1;
    const geometry = child.geometry;
    if (geometry) {
      geometry.computeVertexNormals();
      const count = geometry.index ? geometry.index.count : (geometry.attributes.position?.count || 0);
      triangles += count / 3;
      if (!preserveMaterials || !child.material) child.material = material;
      child.castShadow = false;
      child.receiveShadow = false;
      if (triangles < 22000 && geometry.attributes.position) {
        const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 38), importedEdgeMat);
        edges.renderOrder = 2;
        child.add(edges);
      }
    }
  });

  for (const child of removable) child.removeFromParent();
  if (!meshCount) throw new Error('The imported asset contains no triangle meshes.');

  object.updateMatrixWorld(true);
  group.add(object);
  normalizeGroup(group, 3.5, 4.3);
  return { group, update() {} };
}

export function disposeObject(root) {
  if (!root) return;
  root.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      for (const material of materials) {
        for (const value of Object.values(material)) {
          if (value && value.isTexture && value.__aeroFlowOwned !== true) {
            value.dispose();
          }
        }
        material.dispose();
      }
    }
  });
}
