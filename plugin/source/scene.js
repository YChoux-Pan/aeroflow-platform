import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createVehicle, disposeObject } from './models.js';
import { loadImportedVehicle } from './importers.js';
import { computeAero, driftFromDrag } from './physics.js';
import { getPalette } from './palettes.js';
import { SmokeField } from './smoke-field.js';

const TAU = Math.PI * 2;
const UP = new THREE.Vector3(0, 1, 0);
const TRAIL_POINTS = 5;
const SEGMENTS = TRAIL_POINTS;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function makeGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.22, 'rgba(255,255,255,0.85)');
  gradient.addColorStop(0.6, 'rgba(255,255,255,0.18)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makePadGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(128, 128, 10, 128, 128, 128);
  gradient.addColorStop(0, 'rgba(255,255,255,0.55)');
  gradient.addColorStop(0.42, 'rgba(255,255,255,0.22)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeSmokeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, 128, 128);

  const base = context.createRadialGradient(64, 64, 2, 64, 64, 62);
  base.addColorStop(0, 'rgba(255,255,255,0.92)');
  base.addColorStop(0.28, 'rgba(255,255,255,0.6)');
  base.addColorStop(0.66, 'rgba(255,255,255,0.18)');
  base.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = base;
  context.fillRect(0, 0, 128, 128);

  for (let index = 0; index < 16; index += 1) {
    const x = 18 + Math.random() * 92;
    const y = 18 + Math.random() * 92;
    const radius = 18 + Math.random() * 32;
    const puff = context.createRadialGradient(x, y, 0, x, y, radius);
    puff.addColorStop(0, `rgba(255,255,255,${0.1 + Math.random() * 0.15})`);
    puff.addColorStop(0.55, `rgba(255,255,255,${0.04 + Math.random() * 0.08})`);
    puff.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = puff;
    context.fillRect(0, 0, 128, 128);
  }

  context.globalCompositeOperation = 'destination-in';
  const mask = context.createRadialGradient(64, 64, 15, 64, 64, 64);
  mask.addColorStop(0, 'rgba(255,255,255,1)');
  mask.addColorStop(0.74, 'rgba(255,255,255,0.9)');
  mask.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = mask;
  context.fillRect(0, 0, 128, 128);
  context.globalCompositeOperation = 'source-over';

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeEnvironmentTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  const sky = context.createLinearGradient(0, 0, 0, 512);
  sky.addColorStop(0, '#05090c');
  sky.addColorStop(0.36, '#10181c');
  sky.addColorStop(0.5, '#344149');
  sky.addColorStop(0.58, '#59656b');
  sky.addColorStop(0.66, '#121b20');
  sky.addColorStop(1, '#010305');
  context.fillStyle = sky;
  context.fillRect(0, 0, 1024, 512);

  const overhead = context.createRadialGradient(510, 82, 10, 510, 82, 260);
  overhead.addColorStop(0, 'rgba(255, 255, 255, .98)');
  overhead.addColorStop(0.18, 'rgba(236, 247, 250, .65)');
  overhead.addColorStop(1, 'rgba(180, 210, 220, 0)');
  context.fillStyle = overhead;
  context.fillRect(0, 0, 1024, 512);

  const cyan = context.createRadialGradient(190, 258, 4, 190, 258, 190);
  cyan.addColorStop(0, 'rgba(142, 240, 255, .55)');
  cyan.addColorStop(0.22, 'rgba(40, 142, 170, .25)');
  cyan.addColorStop(1, 'rgba(5, 45, 60, 0)');
  context.fillStyle = cyan;
  context.fillRect(0, 0, 1024, 512);

  const magenta = context.createRadialGradient(820, 292, 4, 820, 292, 150);
  magenta.addColorStop(0, 'rgba(255, 120, 195, .2)');
  magenta.addColorStop(1, 'rgba(44, 18, 54, 0)');
  context.fillStyle = magenta;
  context.fillRect(0, 0, 1024, 512);

  const cold = context.createRadialGradient(510, 110, 3, 510, 110, 140);
  cold.addColorStop(0, 'rgba(197, 255, 255, .5)');
  cold.addColorStop(1, 'rgba(20, 60, 80, 0)');
  context.fillStyle = cold;
  context.fillRect(0, 0, 1024, 512);

  context.fillStyle = 'rgba(206, 240, 248, .16)';
  context.fillRect(0, 302, 1024, 1);
  context.fillStyle = 'rgba(113, 209, 226, .1)';
  context.fillRect(0, 318, 1024, 1);

  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function textSprite(text, color = '#8ff8ff', scale = 2.6) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 96;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, 512, 96);
  context.font = '600 26px "Bahnschrift", "Segoe UI", sans-serif';
  context.letterSpacing = '4px';
  context.fillStyle = color;
  context.fillText(text, 10, 58);
  context.fillStyle = 'rgba(105, 240, 255, 0.42)';
  context.fillRect(10, 70, 54, 1);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(scale, scale * 0.1875, 1);
  sprite.renderOrder = 8;
  return sprite;
}

function createGrid(glowColor) {
  const geometry = new THREE.PlaneGeometry(42, 42, 1, 1);
  geometry.rotateX(-Math.PI / 2);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(glowColor) },
      uOpacity: { value: 1.0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform vec3 uColor;
      uniform float uOpacity;
      float gridLine(vec2 p, float scale) {
        vec2 coord = p * scale;
        vec2 grid = abs(fract(coord - 0.5) - 0.5) / max(fwidth(coord), vec2(0.0001));
        return 1.0 - min(min(grid.x, grid.y), 1.0);
      }
      void main() {
        vec2 p = vUv * 42.0;
        float fine = gridLine(p, 2.0);
        float major = gridLine(p, 0.4);
        float dist = length(vUv - 0.5) * 2.0;
        float fade = 1.0 - smoothstep(0.2, 0.92, dist);
        float alpha = (fine * 0.1 + major * 0.28) * fade;
        vec3 col = uColor * (fine * 0.5 + major * 1.25);
        gl_FragColor = vec4(col, alpha * uOpacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 0.006;
  mesh.renderOrder = 1;
  return mesh;
}

function createPlatform() {
  const group = new THREE.Group();
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x08151d,
    metalness: 0.72,
    roughness: 0.36,
    emissive: 0x02080c,
  });
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x51efff,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const faintMat = new THREE.LineBasicMaterial({
    color: 0x32b8c7,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(3.18, 3.28, 0.1, 72, 1), baseMat);
  base.position.y = 0.045;
  group.add(base);

  const collar = new THREE.Mesh(new THREE.CylinderGeometry(3.04, 3.11, 0.04, 72, 1), baseMat);
  collar.position.y = 0.112;
  group.add(collar);

  for (const radius of [1.25, 2.25, 3.06, 3.3]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(radius, radius + 0.012, 96), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.118;
    group.add(ring);
  }

  const tickPositions = [];
  for (let index = 0; index < 72; index += 1) {
    const angle = (index / 72) * TAU;
    const inner = index % 6 === 0 ? 2.74 : 2.92;
    const outer = 3.03;
    tickPositions.push(
      Math.cos(angle) * inner, 0.122, Math.sin(angle) * inner,
      Math.cos(angle) * outer, 0.122, Math.sin(angle) * outer,
    );
  }
  const ticksGeometry = new THREE.BufferGeometry();
  ticksGeometry.setAttribute('position', new THREE.Float32BufferAttribute(tickPositions, 3));
  group.add(new THREE.LineSegments(ticksGeometry, faintMat));

  const spokePositions = [];
  for (let index = 0; index < 12; index += 1) {
    const angle = (index / 12) * TAU;
    spokePositions.push(
      Math.cos(angle) * 0.52, 0.124, Math.sin(angle) * 0.52,
      Math.cos(angle) * 2.75, 0.124, Math.sin(angle) * 2.75,
    );
  }
  const spokesGeometry = new THREE.BufferGeometry();
  spokesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(spokePositions, 3));
  group.add(new THREE.LineSegments(spokesGeometry, faintMat));

  const center = new THREE.Mesh(new THREE.RingGeometry(0.48, 0.5, 48), ringMat);
  center.rotation.x = -Math.PI / 2;
  center.position.y = 0.123;
  group.add(center);

  return group;
}

function createTunnelFrames() {
  const group = new THREE.Group();
  const material = new THREE.LineBasicMaterial({
    color: 0x2b7c8e,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  const accentMaterial = new THREE.LineBasicMaterial({
    color: 0x65f7ff,
    transparent: true,
    opacity: 0.28,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });

  const crossSection = [];
  const radiusY = 4.7;
  const radiusZ = 5.3;
  const corners = 10;
  for (let index = 0; index < 8; index += 1) {
    const angle = (index / 8) * TAU + Math.PI / 8;
    crossSection.push([Math.cos(angle) * radiusZ, 1.2 + Math.sin(angle) * radiusY * 0.72]);
  }

  for (let frame = -8; frame <= 8; frame += 4) {
    const positions = [];
    for (let index = 0; index < crossSection.length; index += 1) {
      const [z1, y1] = crossSection[index];
      const [z2, y2] = crossSection[(index + 1) % crossSection.length];
      positions.push(frame, Math.max(0.04, y1), z1, frame, Math.max(0.04, y2), z2);
    }
    positions.push(frame, 0.04, -radiusZ, frame, 0.04, radiusZ);
    positions.push(frame, 0.04, radiusZ, frame, 3.4, radiusZ);
    positions.push(frame, 0.04, -radiusZ, frame, 3.4, -radiusZ);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    group.add(new THREE.LineSegments(geometry, material));
  }

  const longLines = [];
  for (const z of [-5.3, 5.3]) {
    longLines.push(-8, 3.4, z, 8, 3.4, z);
  }
  for (const y of [3.4]) {
    longLines.push(-8, y, -5.3, 8, y, -5.3);
    longLines.push(-8, y, 5.3, 8, y, 5.3);
  }
  const longGeometry = new THREE.BufferGeometry();
  longGeometry.setAttribute('position', new THREE.Float32BufferAttribute(longLines, 3));
  group.add(new THREE.LineSegments(longGeometry, accentMaterial));

  return group;
}

function createStarDust() {
  const count = 700;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();
  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (Math.random() - 0.5) * 34;
    positions[index * 3 + 1] = Math.random() * 12 + 0.5;
    positions[index * 3 + 2] = (Math.random() - 0.5) * 24;
    color.set(index % 7 === 0 ? 0x49e6ff : index % 11 === 0 ? 0xff68cf : 0x4f95a3);
    const brightness = 0.2 + Math.random() * 0.5;
    colors[index * 3] = color.r * brightness;
    colors[index * 3 + 1] = color.g * brightness;
    colors[index * 3 + 2] = color.b * brightness;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.018,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  return new THREE.Points(geometry, material);
}

class FlowField {
  constructor(scene, count, glowTexture) {
    this.scene = scene;
    this.count = count;
    this.glowTexture = glowTexture;
    this.head = new Float32Array(count * 3);
    this.history = new Float32Array(count * TRAIL_POINTS * 3);
    this.seed = new Float32Array(count);
    this.age = new Float32Array(count);
    this.lastSample = new Float32Array(count);
    this.body = { halfLength: 1.6, halfWidth: 0.9, halfHeight: 0.7, centerY: 0.7 };
    this.settings = null;
    this.dir = new THREE.Vector3(1, 0, 0);
    this.lateral = new THREE.Vector3(0, 0, 1);
    this.colors = {
      a: new THREE.Color('#163dff'),
      b: new THREE.Color('#27d8ff'),
      c: new THREE.Color('#c8ffff'),
      d: new THREE.Color('#ff5ecb'),
    };
    this.tmpColor = new THREE.Color();
    this.material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    this.positionArray = new Float32Array(count * SEGMENTS * 2 * 3);
    this.colorArray = new Float32Array(count * SEGMENTS * 2 * 3);
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positionArray, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colorArray, 3));
    this.geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
    this.geometry.attributes.color.setUsage(THREE.DynamicDrawUsage);
    this.lines = new THREE.LineSegments(this.geometry, this.material);
    this.lines.frustumCulled = false;
    this.lines.renderOrder = 3;
    scene.add(this.lines);

    this.headPositions = new Float32Array(count * 3);
    this.headColors = new Float32Array(count * 3);
    this.headGeometry = new THREE.BufferGeometry();
    this.headGeometry.setAttribute('position', new THREE.BufferAttribute(this.headPositions, 3));
    this.headGeometry.setAttribute('color', new THREE.BufferAttribute(this.headColors, 3));
    this.headGeometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
    this.headGeometry.attributes.color.setUsage(THREE.DynamicDrawUsage);
    this.headMaterial = new THREE.PointsMaterial({
      size: 0.13,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      alphaTest: 0.02,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
      sizeAttenuation: true,
    });
    this.points = new THREE.Points(this.headGeometry, this.headMaterial);
    this.points.frustumCulled = false;
    this.points.renderOrder = 4;
    scene.add(this.points);
  }

  setPalette(palette) {
    this.colors.a.set(palette.stops[0]);
    this.colors.b.set(palette.stops[1]);
    this.colors.c.set(palette.stops[2]);
    this.colors.d.set(palette.wake);
  }

  setBounds(box) {
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    this.body = {
      halfLength: Math.max(0.55, size.x * 0.5),
      halfWidth: Math.max(0.38, size.z * 0.5),
      halfHeight: Math.max(0.3, size.y * 0.5),
      centerY: center.y,
    };
  }

  setVisible(visible) {
    this.lines.visible = visible;
    this.points.visible = visible;
  }

  reset(settings, time) {
    this.settings = settings;
    this.setDirection(settings.windAngle);
    for (let index = 0; index < this.count; index += 1) {
      this.spawn(index, time, true);
    }
    this.writeGeometry(time);
  }

  setDirection(angleDegrees) {
    const angle = (angleDegrees * Math.PI) / 180;
    this.dir.set(Math.cos(angle), 0, Math.sin(angle));
    this.lateral.set(-Math.sin(angle), 0, Math.cos(angle));
  }

  spawn(index, time, initial = false) {
    const base = index * 3;
    const u = initial ? -8.6 + Math.random() * 16.7 : -9.2 - Math.random() * 1.4;
    const lateral = (Math.random() * 2 - 1) * 3.6;
    const y = 0.18 + Math.pow(Math.random(), 0.82) * 3.95;
    const x = this.dir.x * u + this.lateral.x * lateral;
    const z = this.dir.z * u + this.lateral.z * lateral;
    this.head[base] = x;
    this.head[base + 1] = y;
    this.head[base + 2] = z;
    this.seed[index] = Math.random();
    this.age[index] = 0;
    this.lastSample[index] = time - Math.random() * 0.045;
    const trailBase = index * TRAIL_POINTS * 3;
    for (let point = 0; point < TRAIL_POINTS; point += 1) {
      const distance = (point + 1) * (0.1 + Math.random() * 0.05);
      this.history[trailBase + point * 3] = x - this.dir.x * distance;
      this.history[trailBase + point * 3 + 1] = y;
      this.history[trailBase + point * 3 + 2] = z - this.dir.z * distance;
    }
  }

  colorFor(uVelocity, baseSpeed, turbulence) {
    const ratio = clamp((uVelocity / Math.max(0.001, baseSpeed) - 0.55) / 1.45, 0, 1);
    if (ratio < 0.5) {
      this.tmpColor.copy(this.colors.a).lerp(this.colors.b, ratio * 2);
    } else {
      this.tmpColor.copy(this.colors.b).lerp(this.colors.c, (ratio - 0.5) * 2);
    }
    if (turbulence > 0.015) {
      this.tmpColor.lerp(this.colors.d, clamp(turbulence * 1.8, 0, 0.78));
    }
    return this.tmpColor;
  }

  update(dt, time, settings) {
    this.settings = settings;
    this.setDirection(settings.windAngle);
    const dir = this.dir;
    const lateral = this.lateral;
    const body = this.body;
    const halfL = body.halfLength;
    const halfW = body.halfWidth;
    const halfH = body.halfHeight;
    const centerY = body.centerY;
    const baseSpeed = settings.windSpeed > 0 ? 0.12 + settings.windSpeed * 0.065 : 0;
    if (baseSpeed <= 0.0001) return;
    const positions = this.positionArray;
    const colors = this.colorArray;
    const headPositions = this.headPositions;
    const headColors = this.headColors;
    const sampleInterval = 0.055;
    const count = this.count;

    for (let index = 0; index < count; index += 1) {
      const base = index * 3;
      let x = this.head[base];
      let y = this.head[base + 1];
      let z = this.head[base + 2];
      let u = x * dir.x + z * dir.z;
      let v = x * lateral.x + z * lateral.z;

      const sx = u / (halfL * 1.18 + 0.45);
      const sy = (y - centerY) / (halfH * 1.15 + 0.3);
      const sz = v / (halfW * 1.12 + 0.3);
      const ellipsoid = sx * sx + sy * sy + sz * sz;
      const proximity = Math.exp(-ellipsoid * 1.6);
      const nearBody = ellipsoid < 1.42;
      const sideSign = v >= 0 ? 1 : -1;
      const verticalSign = y >= centerY ? 1 : -1;

      let uVelocity = baseSpeed * (1 - 0.26 * proximity);
      let vVelocity = Math.sin(u * 0.72 + time * 0.82 + this.seed[index] * 19.0) * baseSpeed * 0.024;
      let yVelocity = Math.cos(v * 1.07 + time * 0.66 + this.seed[index] * 23.0) * baseSpeed * 0.018;

      if (nearBody) {
        const push = (1.42 - ellipsoid) * baseSpeed * 0.78;
        vVelocity += sideSign * push * 0.92;
        yVelocity += verticalSign * push * 0.42;
        uVelocity *= 0.86;
      }

      const downstream = u + halfL * 1.25;
      let turbulence = 0;
      if (downstream > 0) {
        const wake = Math.exp(-downstream / (halfL * 1.65 + 1.2)) * Math.exp(-Math.abs(sy) * 1.1);
        const wave = Math.sin(downstream * 2.45 - time * 2.8 + this.seed[index] * 9.0);
        vVelocity += wave * baseSpeed * 0.32 * wake * sideSign;
        yVelocity += Math.cos(downstream * 1.85 - time * 2.2 + this.seed[index] * 7.0) * baseSpeed * 0.13 * wake;
        uVelocity *= 1 - 0.12 * wake;
        turbulence = wake * 0.45;
      }

      if (y < 0.2) yVelocity += (0.2 - y) * 7.0;
      if (y > 4.3) yVelocity += (4.3 - y) * 7.0;

      let velocityX = dir.x * uVelocity + lateral.x * vVelocity;
      let velocityZ = dir.z * uVelocity + lateral.z * vVelocity;
      const velocityY = yVelocity;
      x += velocityX * dt;
      y += velocityY * dt;
      z += velocityZ * dt;
      u = x * dir.x + z * dir.z;
      v = x * lateral.x + z * lateral.z;

      this.age[index] += dt;
      if (u > 9.5 || Math.abs(v) > 4.4 || y < 0.03 || y > 4.75 || this.age[index] > 15) {
        this.spawn(index, time, false);
        x = this.head[base];
        y = this.head[base + 1];
        z = this.head[base + 2];
        u = x * dir.x + z * dir.z;
        v = x * lateral.x + z * lateral.z;
        turbulence = 0;
        uVelocity = baseSpeed;
      } else {
        this.head[base] = x;
        this.head[base + 1] = y;
        this.head[base + 2] = z;
      }

      if (time - this.lastSample[index] > sampleInterval) {
        this.lastSample[index] = time;
        const trailBase = index * TRAIL_POINTS * 3;
        for (let point = TRAIL_POINTS - 1; point > 0; point -= 1) {
          this.history[trailBase + point * 3] = this.history[trailBase + (point - 1) * 3];
          this.history[trailBase + point * 3 + 1] = this.history[trailBase + (point - 1) * 3 + 1];
          this.history[trailBase + point * 3 + 2] = this.history[trailBase + (point - 1) * 3 + 2];
        }
        this.history[trailBase] = x;
        this.history[trailBase + 1] = y;
        this.history[trailBase + 2] = z;
      }

      const color = this.colorFor(uVelocity, baseSpeed, turbulence);
      const segmentOffset = index * SEGMENTS * 2 * 3;
      const trailBase = index * TRAIL_POINTS * 3;
      let previousX = x;
      let previousY = y;
      let previousZ = z;
      for (let segment = 0; segment < SEGMENTS; segment += 1) {
        const nextX = this.history[trailBase + segment * 3];
        const nextY = this.history[trailBase + segment * 3 + 1];
        const nextZ = this.history[trailBase + segment * 3 + 2];
        const offset = segmentOffset + segment * 6;
        const fadeStart = Math.max(0.06, 1 - segment / SEGMENTS);
        const fadeEnd = Math.max(0.025, 1 - (segment + 1) / SEGMENTS);
        positions[offset] = previousX;
        positions[offset + 1] = previousY;
        positions[offset + 2] = previousZ;
        positions[offset + 3] = nextX;
        positions[offset + 4] = nextY;
        positions[offset + 5] = nextZ;
        colors[offset] = color.r * fadeStart;
        colors[offset + 1] = color.g * fadeStart;
        colors[offset + 2] = color.b * fadeStart;
        colors[offset + 3] = color.r * fadeEnd;
        colors[offset + 4] = color.g * fadeEnd;
        colors[offset + 5] = color.b * fadeEnd;
        previousX = nextX;
        previousY = nextY;
        previousZ = nextZ;
      }

      headPositions[base] = x;
      headPositions[base + 1] = y;
      headPositions[base + 2] = z;
      headColors[base] = color.r * 1.2;
      headColors[base + 1] = color.g * 1.2;
      headColors[base + 2] = color.b * 1.2;
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.headGeometry.attributes.position.needsUpdate = true;
    this.headGeometry.attributes.color.needsUpdate = true;
  }

  writeGeometry(time) {
    // The first frame after a reset only needs a valid head; trails fill in live.
    const positions = this.positionArray;
    const colors = this.colorArray;
    const color = this.colors.b;
    const count = this.count;
    for (let index = 0; index < count; index += 1) {
      const base = index * 3;
      const segmentOffset = index * SEGMENTS * 2 * 3;
      const trailBase = index * TRAIL_POINTS * 3;
      let previousX = this.head[base];
      let previousY = this.head[base + 1];
      let previousZ = this.head[base + 2];
      for (let segment = 0; segment < SEGMENTS; segment += 1) {
        const nextX = this.history[trailBase + segment * 3];
        const nextY = this.history[trailBase + segment * 3 + 1];
        const nextZ = this.history[trailBase + segment * 3 + 2];
        const offset = segmentOffset + segment * 6;
        positions[offset] = previousX;
        positions[offset + 1] = previousY;
        positions[offset + 2] = previousZ;
        positions[offset + 3] = nextX;
        positions[offset + 4] = nextY;
        positions[offset + 5] = nextZ;
        const fade = 1 - segment / SEGMENTS;
        colors[offset] = color.r * fade;
        colors[offset + 1] = color.g * fade;
        colors[offset + 2] = color.b * fade;
        colors[offset + 3] = color.r * fade * 0.3;
        colors[offset + 4] = color.g * fade * 0.3;
        colors[offset + 5] = color.b * fade * 0.3;
        previousX = nextX;
        previousY = nextY;
        previousZ = nextZ;
      }
      this.headPositions[base] = this.head[base];
      this.headPositions[base + 1] = this.head[base + 1];
      this.headPositions[base + 2] = this.head[base + 2];
      this.headColors[base] = color.r;
      this.headColors[base + 1] = color.g;
      this.headColors[base + 2] = color.b;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.headGeometry.attributes.position.needsUpdate = true;
    this.headGeometry.attributes.color.needsUpdate = true;
  }

  dispose() {
    this.scene.remove(this.lines);
    this.scene.remove(this.points);
    this.geometry.dispose();
    this.headGeometry.dispose();
    this.material.dispose();
    this.headMaterial.dispose();
  }
}

export function createAeroScene({ canvas, container, initialSettings, onTelemetry, onReady, onError, onImportError }) {
  let disposed = false;
  let raf = 0;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
  } catch (error) {
    onError?.(error);
    return null;
  }
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setClearColor(0x03090e, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x070b0e);
  scene.fog = new THREE.FogExp2(0x0a1014, 0.034);

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  const cameraHome = new THREE.Vector3(-4.8, 2.6, 6.9);
  camera.position.copy(cameraHome);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.enablePan = false;
  controls.minDistance = 4.2;
  controls.maxDistance = 17;
  controls.minPolarAngle = 0.08;
  controls.maxPolarAngle = Math.PI * 0.505;
  controls.autoRotateSpeed = 0.48;
  controls.rotateSpeed = 0.65;
  controls.zoomSpeed = 0.8;
  controls.target.set(0, 0.95, 0);
  controls.update();

  const settingsRef = { current: initialSettings };
  const aeroRef = { current: computeAero(initialSettings.specimen, initialSettings.windSpeed) };
  const clock = { time: 0, last: performance.now(), lastTelemetry: 0, frames: 0, fps: 60 };
  const body = {
    drift: 0,
    lateral: 0,
    pivot: new THREE.Group(),
  };
  body.pivot.position.y = 0.18;
  scene.add(body.pivot);

  const smokeTexture = makeSmokeTexture();
  const padGlowTexture = makePadGlowTexture();
  const environmentTexture = makeEnvironmentTexture();
  scene.environment = environmentTexture;
  scene.environmentIntensity = 1.32;
  const palette = getPalette(initialSettings.palette, initialSettings.autoPalette, initialSettings.specimen.id, initialSettings.windSpeed);

  const grid = createGrid(palette.tone);
  scene.add(grid);
  scene.add(createPlatform());
  scene.add(createTunnelFrames());
  const stars = createStarDust();
  scene.add(stars);

  const glowMaterial = new THREE.MeshBasicMaterial({
    map: padGlowTexture,
    color: new THREE.Color(palette.tone),
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const padGlow = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 5.2), glowMaterial);
  padGlow.rotation.x = -Math.PI / 2;
  padGlow.position.y = 0.14;
  padGlow.renderOrder = 2;
  scene.add(padGlow);

  const labelOne = textSprite('TEST SECTION 01 // FLOW FIELD');
  labelOne.position.set(-6.6, 0.4, 4.1);
  scene.add(labelOne);

  const labelTwo = textSprite('FORCE BALANCE // LIVE', '#ff8bdc', 2.3);
  labelTwo.position.set(3.8, 0.35, 4.3);
  scene.add(labelTwo);

  const hemisphere = new THREE.HemisphereLight(0xdff4ff, 0x020508, 1.5);
  scene.add(hemisphere);

  const keyLight = new THREE.DirectionalLight(0xf4fbff, 4.0);
  keyLight.position.set(-4.8, 7.4, 4.5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x4d8cff, 2.4);
  rimLight.position.set(4.5, 4.5, -5.5);
  scene.add(rimLight);

  const magentaLight = new THREE.PointLight(0xff4ecb, 8, 16, 2);
  magentaLight.position.set(2.8, 1.8, 4.8);
  scene.add(magentaLight);

  const cyanLight = new THREE.PointLight(0x32f5ff, 16, 18, 2);
  cyanLight.position.set(-4.2, 2.2, 3.4);
  scene.add(cyanLight);

  const topLight = new THREE.PointLight(0xf2fdff, 32, 14, 2);
  topLight.position.set(0, 6.5, 0.5);
  scene.add(topLight);

  const overheadStrip = new THREE.Mesh(
    new THREE.BoxGeometry(5.6, 0.055, 0.2),
    new THREE.MeshBasicMaterial({
      color: 0xe9fbff,
      transparent: true,
      opacity: 0.35,
      toneMapped: false,
      depthWrite: false,
    }),
  );
  overheadStrip.position.set(0, 4.9, -2.4);
  scene.add(overheadStrip);

  const windArrow = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(-5.6, 0.18, 3.8), 1.9, 0x5df4ff, 0.3, 0.16);
  scene.add(windArrow);
  const windLabel = textSprite('WIND VECTOR', '#6ef4ff', 1.7);
  windLabel.position.set(-5.6, 0.48, 3.8);
  scene.add(windLabel);

  const forceArrow = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 2.2, 0), 1.4, 0xff5ecb, 0.26, 0.12);
  forceArrow.visible = false;
  scene.add(forceArrow);

  const flow = new SmokeField(scene, window.innerWidth < 760 ? 240 : 460, smokeTexture, camera);
  flow.setPalette(palette);
  flow.setVisible(initialSettings.showStreams);
  windLabel.material.opacity = 0.38;

  let vehicle = null;
  let currentModelKey = '';
  let modelLoadToken = 0;
  let modelHeight = 1.2;

  function clearVehicle() {
    if (!vehicle) return;
    body.pivot.remove(vehicle.group);
    disposeObject(vehicle.group);
    vehicle = null;
  }

  function vehicleLocalBox() {
    if (!vehicle) return null;
    vehicle.group.updateWorldMatrix(true, true);
    body.pivot.updateWorldMatrix(true, true);
    const box = new THREE.Box3().setFromObject(vehicle.group);
    const inverse = new THREE.Matrix4().copy(body.pivot.matrixWorld).invert();
    return box.applyMatrix4(inverse);
  }

  function refreshVehicleBounds() {
    if (!vehicle) return;
    const box = vehicleLocalBox();
    // The pivot's origin sits at body height 0.18 in tunnel coordinates.
    box.translate(new THREE.Vector3(0, 0.18, 0));
    flow.setBounds(box);
    modelHeight = Math.max(0.5, box.max.y);
  }

  function applySpecimenScale(specimen) {
    if (!vehicle) return;
    const visualKey = `${specimen.length.toFixed(2)}:${specimen.width.toFixed(2)}:${specimen.height.toFixed(2)}`;
    if (vehicle.visualKey === visualKey) return;
    vehicle.visualKey = visualKey;
    const base = vehicle.baseSpecimen || specimen;
    const damp = (value, reference) => clamp(Math.pow(Math.max(0.15, value) / Math.max(0.15, reference), 0.72), 0.64, 1.38);
    const scale = new THREE.Vector3(
      damp(specimen.length, base.length),
      damp(specimen.height, base.height),
      damp(specimen.width, base.width),
    );
    vehicle.group.scale.copy(vehicle.baseScale).multiply(scale);
    vehicle.group.position.set(0, 0, 0);
    vehicle.group.updateMatrixWorld(true);
    const box = vehicleLocalBox();
    const center = box.getCenter(new THREE.Vector3());
    vehicle.group.position.x -= center.x;
    vehicle.group.position.z -= center.z;
    vehicle.group.position.y -= box.min.y;
    vehicle.group.updateMatrixWorld(true);
    refreshVehicleBounds();
    vehicle.visualKey = visualKey;
  }

  function mountVehicle(specimen, modelKey, importedAsset) {
    clearVehicle();
    currentModelKey = modelKey;
    body.drift = 0;
    body.lateral = 0;
    body.pivot.position.set(0, 0.18, 0);
    body.pivot.rotation.set(0, 0, 0);
    const token = ++modelLoadToken;
    const currentSpecimen = () => settingsRef.current.specimen;

    function attach(next, attachSpecimen) {
      if (disposed || token !== modelLoadToken) {
        disposeObject(next.group);
        return;
      }
      vehicle = next;
      vehicle.baseSpecimen = { ...attachSpecimen };
      vehicle.baseScale = next.group.scale.clone();
      vehicle.visualKey = '';
      body.pivot.add(vehicle.group);
      applySpecimenScale(attachSpecimen);

      const box = vehicleLocalBox();
      box.translate(new THREE.Vector3(0, 0.18, 0));
      const newTarget = new THREE.Vector3(0, clamp(box.getCenter(new THREE.Vector3()).y * 0.8, 0.7, 2.4), 0);
      controls.target.lerp(newTarget, 0.45);
      flow.reset(settingsRef.current, clock.time);
    }

    if (modelKey.startsWith('imported:') && importedAsset) {
      loadImportedVehicle(importedAsset)
        .then((next) => attach(next, currentSpecimen()))
        .catch((error) => {
          if (disposed || token !== modelLoadToken) return;
          onImportError?.(error);
          attach(createVehicle({ ...currentSpecimen(), id: 'custom' }), currentSpecimen());
        });
    } else {
      attach(createVehicle(specimen), specimen);
    }
  }

  function applyPalette() {
    const settings = settingsRef.current;
    const current = getPalette(settings.palette, settings.autoPalette, settings.specimen.id, settings.windSpeed);
    flow.setPalette(current);
    glowMaterial.color.set(current.tone);
    grid.material.uniforms.uColor.value.set(current.tone);
    windArrow.setColor(new THREE.Color(current.tone));
    forceArrow.setColor(new THREE.Color(current.wake));
    if (labelOne.material) labelOne.material.opacity = 0.34;
    return current;
  }

  function updateWindArrow() {
    const settings = settingsRef.current;
    const angle = (settings.windAngle * Math.PI) / 180;
    const dir = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
    windArrow.setDirection(dir);
    windArrow.setLength(1.9, 0.3, 0.16);
  }

  mountVehicle(initialSettings.specimen, initialSettings.modelKey, initialSettings.importedAsset);
  flow.reset(initialSettings, 0);

  function resize() {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  function setView(view) {
    const targetY = controls.target.y;
    if (view === 'side') {
      camera.position.set(0.01, 2.2, 9.4);
      controls.target.set(0, targetY, 0);
    } else if (view === 'top') {
      camera.position.set(0.01, 9.6, 0.9);
      controls.target.set(0, 0.55, 0);
    } else {
      camera.position.copy(cameraHome);
      controls.target.set(0, targetY, 0);
    }
    controls.update();
  }

  function resetSimulation() {
    clock.time = 0;
    body.drift = 0;
    body.lateral = 0;
    flow.reset(settingsRef.current, 0);
    setView('iso');
  }

  function update(next) {
    const previous = settingsRef.current;
    settingsRef.current = next;
    aeroRef.current = computeAero(next.specimen, next.windSpeed);
    flow.settings = next;
    applyPalette();
    updateWindArrow();
    flow.setVisible(next.showStreams);
    const paletteNow = getPalette(next.palette, next.autoPalette, next.specimen.id, next.windSpeed);
    glowMaterial.color.set(paletteNow.tone);
    controls.autoRotate = Boolean(next.autoRotate);
    forceArrow.visible = Boolean(next.showForce) && aeroRef.current.drag > 0.5;
    if (next.modelKey !== currentModelKey) {
      mountVehicle(next.specimen, next.modelKey, next.importedAsset);
    } else {
      applySpecimenScale(next.specimen);
      if (previous.windAngle !== next.windAngle) {
        // Keep the current particle positions, only bend the incoming vector.
        updateWindArrow();
      }
    }
  }

  function emitTelemetry(force = false) {
    const now = performance.now();
    if (!force && now - clock.lastTelemetry < 150) return;
    clock.lastTelemetry = now;
    const settings = settingsRef.current;
    const aero = aeroRef.current;
    const resolvedPalette = getPalette(settings.palette, settings.autoPalette, settings.specimen.id, settings.windSpeed);
    onTelemetry?.({
      time: clock.time,
      fps: clock.fps,
      drag: aero.drag,
      q: aero.q,
      power: aero.power,
      reynolds: aero.reynolds,
      cdA: aero.cdA,
      area: aero.area,
      drift: body.drift,
      paletteId: resolvedPalette.id,
      particles: flow.count,
      running: settings.running,
    });
  }

  let firstFrame = true;

  function animate(now) {
    if (disposed) return;
    raf = requestAnimationFrame(animate);
    const dt = Math.min(0.05, Math.max(0.001, (now - clock.last) / 1000));
    const previous = clock.last;
    clock.last = now;
    const settings = settingsRef.current;
    const aero = aeroRef.current;
    const running = Boolean(settings.running);
    if (running) {
      clock.time += dt;
      flow.update(dt, clock.time, settings);
      if (vehicle?.update) vehicle.update(clock.time, settings.windSpeed, running);
    } else {
      flow.update(0, clock.time, settings);
    }

    const dragNorm = clamp(aero.drag / 2000, 0, 1);
    const dir = new THREE.Vector3(Math.cos((settings.windAngle * Math.PI) / 180), 0, Math.sin((settings.windAngle * Math.PI) / 180));
    const lateral = new THREE.Vector3(-dir.z, 0, dir.x);
    if (running) {
      const targetDrift = driftFromDrag(aero.drag) * 0.9;
      const spring = 1 - Math.pow(0.002, dt);
      body.drift += (targetDrift - body.drift) * spring;
      const targetLateral = Math.sin(clock.time * 1.15) * dragNorm * 0.055;
      body.lateral += (targetLateral - body.lateral) * (1 - Math.pow(0.03, dt));
    }
    const bob = Math.sin(clock.time * 1.55) * (0.006 + dragNorm * 0.018);
    body.pivot.position.x = dir.x * body.drift + lateral.x * body.lateral;
    body.pivot.position.z = dir.z * body.drift + lateral.z * body.lateral;
    body.pivot.position.y = 0.18 + bob;
    body.pivot.rotation.z = body.drift * 0.22 + Math.sin(clock.time * 0.7) * 0.005;
    body.pivot.rotation.x = -Math.sin((settings.windAngle * Math.PI) / 180) * body.drift * 0.22
      + Math.cos(clock.time * 1.1) * 0.004 * (0.3 + dragNorm);
    body.pivot.rotation.y = Math.sin((settings.windAngle * Math.PI) / 180) * body.drift * 0.1;

    padGlow.position.x = body.pivot.position.x * 0.55;
    padGlow.position.z = body.pivot.position.z * 0.55;
    padGlow.material.opacity = 0.24 + dragNorm * 0.28;

    const arrowStart = new THREE.Vector3(
      body.pivot.position.x - dir.x * 0.1,
      Math.max(1.3, modelHeight + 0.7),
      body.pivot.position.z - dir.z * 0.1,
    );
    forceArrow.position.copy(arrowStart);
    forceArrow.setDirection(dir);
    forceArrow.setLength(0.9 + clamp(aero.drag / 3800, 0, 1) * 2.1, 0.22, 0.1);
    forceArrow.visible = Boolean(settings.showForce) && aero.drag > 0.5;

    controls.autoRotate = Boolean(settings.autoRotate);
    controls.update();
    stars.rotation.y += dt * 0.006;
    renderer.render(scene, camera);

    clock.frames += 1;
    const elapsed = now - previous;
    if (elapsed > 0) clock.fps += ((1000 / Math.max(1, elapsed)) - clock.fps) * 0.05;
    emitTelemetry();
    if (firstFrame) {
      firstFrame = false;
      onReady?.();
    }
  }

  function onContextLost(event) {
    event.preventDefault();
    onError?.(new Error('WebGL context lost.'));
  }

  canvas.addEventListener('webglcontextlost', onContextLost);
  resize();
  emitTelemetry(true);
  raf = requestAnimationFrame(animate);

  return {
    update,
    reset: resetSimulation,
    setView,
    dispose() {
      if (disposed) return;
      disposed = true;
      modelLoadToken += 1;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      canvas.removeEventListener('webglcontextlost', onContextLost);
      controls.dispose();
      clearVehicle();
      flow.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          for (const material of materials) {
            for (const value of Object.values(material)) {
              if (value && value.isTexture) value.dispose();
            }
            material.dispose();
          }
        }
      });
      renderer.dispose();
      smokeTexture.dispose();
      padGlowTexture.dispose();
      environmentTexture.dispose();
      scene.clear();
    },
  };
}
