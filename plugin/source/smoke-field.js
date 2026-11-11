import * as THREE from 'three';

/**
 * White-smoke streamlines for the wind tunnel.
 *
 * The simulation keeps the existing aerodynamic deflection model, but renders
 * each streak as a camera-facing, procedurally eroded ribbon plus soft smoke
 * puffs. This is a visual proxy, not a CFD volume or a particle-fluid solver.
 */
const NODES = 14;
const HISTORY = NODES - 1;
const SAMPLE_INTERVAL = 0.075;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export class SmokeField {
  constructor(scene, count, smokeTexture, camera) {
    this.scene = scene;
    this.count = count;
    this.camera = camera;
    this.smokeTexture = smokeTexture;
    this.head = new Float32Array(count * 3);
    this.history = new Float32Array(count * HISTORY * 3);
    this.seed = new Float32Array(count);
    this.age = new Float32Array(count);
    this.lastSample = new Float32Array(count);
    this.opacity = new Float32Array(count);
    this.body = { halfLength: 1.6, halfWidth: 0.9, halfHeight: 0.7, centerY: 0.7 };
    this.settings = null;
    this.dir = new THREE.Vector3(1, 0, 0);
    this.lateral = new THREE.Vector3(0, 0, 1);
    this.smokeColor = new THREE.Color('#f3f9fb');
    this.time = 0;

    this.nodeX = new Float32Array(NODES);
    this.nodeY = new Float32Array(NODES);
    this.nodeZ = new Float32Array(NODES);

    const vertexCount = count * NODES * 2;
    this.positions = new Float32Array(vertexCount * 3);
    this.uvs = new Float32Array(vertexCount * 2);
    this.alphas = new Float32Array(vertexCount);
    this.seeds = new Float32Array(vertexCount);
    this.ribbonGeometry = new THREE.BufferGeometry();
    this.ribbonGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.ribbonGeometry.setAttribute('uv', new THREE.BufferAttribute(this.uvs, 2));
    this.ribbonGeometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    this.ribbonGeometry.setAttribute('aSeed', new THREE.BufferAttribute(this.seeds, 1));
    this.ribbonGeometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
    this.ribbonGeometry.attributes.aAlpha.setUsage(THREE.DynamicDrawUsage);

    const indices = new Uint32Array(count * (NODES - 1) * 6);
    let cursor = 0;
    for (let index = 0; index < count; index += 1) {
      const base = index * NODES * 2;
      for (let node = 0; node < NODES - 1; node += 1) {
        const a = base + node * 2;
        const b = a + 1;
        const c = a + 2;
        const d = a + 3;
        indices[cursor++] = a;
        indices[cursor++] = b;
        indices[cursor++] = c;
        indices[cursor++] = b;
        indices[cursor++] = d;
        indices[cursor++] = c;
      }
    }
    this.ribbonGeometry.setIndex(new THREE.BufferAttribute(indices, 1));

    this.ribbonMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: this.smokeColor },
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute float aAlpha;
        attribute float aSeed;
        varying float vAlpha;
        varying float vSeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vAlpha = aAlpha;
          vSeed = aSeed;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        varying float vAlpha;
        varying float vSeed;
        varying vec2 vUv;
        float hash21(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
            mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }
        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.55;
          for (int i = 0; i < 4; i++) {
            value += amplitude * noise(p);
            p = p * 2.03 + 17.1;
            amplitude *= 0.5;
          }
          return value;
        }
        void main() {
          float edge = smoothstep(0.0, 0.24, vUv.x) * (1.0 - smoothstep(0.76, 1.0, vUv.x));
          float head = smoothstep(0.0, 0.08, vUv.y);
          vec2 q = vec2(
            vUv.y * 4.2 - uTime * 0.16 + vSeed * 9.0,
            vUv.x * 3.0 + vSeed * 15.0
          );
          float cloud = fbm(q);
          float strands = fbm(vec2(vUv.y * 1.6 - uTime * 0.1, vUv.x * 7.5 + vSeed * 4.0));
          float detail = smoothstep(0.26, 0.82, cloud * 0.72 + strands * 0.55);
          float alpha = vAlpha * edge * head * (0.28 + detail * 0.9);
          if (alpha < 0.004) discard;
          vec3 color = uColor * (0.72 + 0.32 * cloud + 0.1 * strands);
          gl_FragColor = vec4(uColor * (0.8 + 0.42 * cloud), alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      toneMapped: false,
    });

    this.ribbons = new THREE.Mesh(this.ribbonGeometry, this.ribbonMaterial);
    this.ribbons.frustumCulled = false;
    this.ribbons.renderOrder = 7;
    scene.add(this.ribbons);

    this.puffCount = Math.max(320, Math.round(count * 4));
    this.puffParticle = new Uint16Array(this.puffCount);
    this.puffNode = new Uint8Array(this.puffCount);
    this.puffOffset = new Float32Array(this.puffCount * 3);
    this.puffPositions = new Float32Array(this.puffCount * 3);
    this.puffAlphas = new Float32Array(this.puffCount);
    this.puffSizes = new Float32Array(this.puffCount);
    for (let index = 0; index < this.puffCount; index += 1) {
      this.puffParticle[index] = (index * 37 + 11) % count;
      this.puffNode[index] = 2 + ((index * 5) % (NODES - 4));
      this.puffOffset[index * 3] = (Math.random() * 2 - 1) * 0.4;
      this.puffOffset[index * 3 + 1] = (Math.random() * 2 - 1) * 0.2;
      this.puffOffset[index * 3 + 2] = (Math.random() * 2 - 1) * 0.4;
      this.puffAlphas[index] = 0.08 + Math.random() * 0.08;
      this.puffSizes[index] = 1.2 + Math.random() * 1.4;
    }
    this.puffGeometry = new THREE.BufferGeometry();
    this.puffGeometry.setAttribute('position', new THREE.BufferAttribute(this.puffPositions, 3));
    this.puffGeometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.puffAlphas, 1));
    this.puffGeometry.setAttribute('aSize', new THREE.BufferAttribute(this.puffSizes, 1));
    this.puffMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: this.smokeColor },
        uMap: { value: smokeTexture },
        uPixelRatio: { value: Math.min(2, window.devicePixelRatio || 1) },
      },
      vertexShader: `
        attribute float aAlpha;
        attribute float aSize;
        uniform float uPixelRatio;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(aSize * uPixelRatio * 330.0 / max(0.8, -mv.z), 1.0, 96.0);
          gl_Position = projectionMatrix * mv;
          vAlpha = aAlpha;
        }
      `,
      fragmentShader: `
        uniform sampler2D uMap;
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          vec4 texel = texture2D(uMap, gl_PointCoord);
          float alpha = texel.a * vAlpha;
          if (alpha < 0.004) discard;
          gl_FragColor = vec4(uColor * (1.0 + texel.r * 0.5), alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    this.puffs = new THREE.Points(this.puffGeometry, this.puffMaterial);
    this.puffs.frustumCulled = false;
    this.puffs.renderOrder = 8;
    scene.add(this.puffs);
  }

  setPalette(palette) {
    // The lightest stop is the smoke body; dark stops remain UI-only.
    this.smokeColor.set(palette.stops[2]);
    this.ribbonMaterial.uniforms.uColor.value.copy(this.smokeColor);
    this.puffMaterial.uniforms.uColor.value.copy(this.smokeColor);
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
    this.ribbons.visible = visible;
    this.puffs.visible = visible;
  }

  reset(settings, time) {
    this.settings = settings;
    this.time = time;
    this.setDirection(settings.windAngle);
    for (let index = 0; index < this.count; index += 1) {
      this.spawn(index, time, true);
      this.opacity[index] = 0.9;
    }
    this.buildGeometry();
  }

  setDirection(angleDegrees) {
    const angle = (angleDegrees * Math.PI) / 180;
    this.dir.set(Math.cos(angle), 0, Math.sin(angle));
    this.lateral.set(-Math.sin(angle), 0, Math.cos(angle));
  }

  spawn(index, time, initial = false) {
    const base = index * 3;
    const u = initial ? -8.8 + Math.random() * 14.4 : -9.3 - Math.random() * 1.7;
    const lateral = (Math.random() * 2 - 1) * 3.7;
    const y = 0.12 + Math.pow(Math.random(), 0.82) * 3.8;
    const x = this.dir.x * u + this.lateral.x * lateral;
    const z = this.dir.z * u + this.lateral.z * lateral;
    this.head[base] = x;
    this.head[base + 1] = y;
    this.head[base + 2] = z;
    this.seed[index] = Math.random();
    this.age[index] = 0;
    this.opacity[index] = 0.65 + Math.random() * 0.55;
    this.lastSample[index] = time - Math.random() * SAMPLE_INTERVAL;
    const trailBase = index * HISTORY * 3;
    for (let point = 0; point < HISTORY; point += 1) {
      const distance = (point + 1) * (0.075 + Math.random() * 0.05);
      this.history[trailBase + point * 3] = x - this.dir.x * distance;
      this.history[trailBase + point * 3 + 1] = y + (Math.random() - 0.5) * 0.025;
      this.history[trailBase + point * 3 + 2] = z - this.dir.z * distance;
    }
  }

  update(dt, time, settings) {
    this.settings = settings;
    this.time = time;
    this.setDirection(settings.windAngle);
    const dir = this.dir;
    const lateral = this.lateral;
    const body = this.body;
    const halfL = body.halfLength;
    const halfW = body.halfWidth;
    const halfH = body.halfHeight;
    const centerY = body.centerY;
    const baseSpeed = settings.windSpeed > 0 ? 0.14 + settings.windSpeed * 0.072 : 0;
    if (baseSpeed <= 0.0001) return;

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

      let uVelocity = baseSpeed * (1 - 0.3 * proximity);
      let vVelocity = Math.sin(u * 0.66 + time * 0.74 + this.seed[index] * 19.0) * baseSpeed * 0.065;
      let yVelocity = Math.cos(v * 1.02 + time * 0.62 + this.seed[index] * 23.0) * baseSpeed * 0.045;
      vVelocity += Math.sin(u * 1.55 - time * 1.02 + this.seed[index] * 7.0) * baseSpeed * 0.026;
      yVelocity += Math.sin(v * 1.4 + time * 0.84 + this.seed[index] * 11.0) * baseSpeed * 0.022;

      if (nearBody) {
        const push = (1.42 - ellipsoid) * baseSpeed * 0.9;
        vVelocity += sideSign * push * 0.98;
        yVelocity += verticalSign * push * 0.48;
        uVelocity *= 0.82;
      }

      const downstream = u + halfL * 1.2;
      let turbulence = 0;
      if (downstream > 0) {
        const wake = Math.exp(-downstream / (halfL * 1.65 + 1.2)) * Math.exp(-Math.abs(sy) * 1.1);
        const wave = Math.sin(downstream * 2.35 - time * 2.7 + this.seed[index] * 9.0);
        vVelocity += wave * baseSpeed * 0.4 * wake * sideSign;
        yVelocity += Math.cos(downstream * 1.75 - time * 2.15 + this.seed[index] * 7.0) * baseSpeed * 0.2 * wake;
        uVelocity *= 1 - 0.1 * wake;
        turbulence = wake;
      }

      if (y < 0.2) yVelocity += (0.2 - y) * 7.0;
      if (y > 4.35) yVelocity += (4.35 - y) * 7.0;

      x += (dir.x * uVelocity + lateral.x * vVelocity) * dt;
      y += yVelocity * dt;
      z += (dir.z * uVelocity + lateral.z * vVelocity) * dt;
      u = x * dir.x + z * dir.z;
      v = x * lateral.x + z * lateral.z;

      this.age[index] += dt;
      if (u > 9.4 || Math.abs(v) > 4.5 || y < 0.03 || y > 4.75 || this.age[index] > 16) {
        this.spawn(index, time, false);
        x = this.head[base];
        y = this.head[base + 1];
        z = this.head[base + 2];
        u = x * dir.x + z * dir.z;
        v = x * lateral.x + z * lateral.z;
        turbulence = 0;
      } else {
        this.head[base] = x;
        this.head[base + 1] = y;
        this.head[base + 2] = z;
      }

      if (time - this.lastSample[index] > SAMPLE_INTERVAL) {
        this.lastSample[index] = time;
        const trailBase = index * HISTORY * 3;
        for (let point = HISTORY - 1; point > 0; point -= 1) {
          this.history[trailBase + point * 3] = this.history[trailBase + (point - 1) * 3];
          this.history[trailBase + point * 3 + 1] = this.history[trailBase + (point - 1) * 3 + 1];
          this.history[trailBase + point * 3 + 2] = this.history[trailBase + (point - 1) * 3 + 2];
        }
        this.history[trailBase] = x;
        this.history[trailBase + 1] = y;
        this.history[trailBase + 2] = z;
      }

      this.opacity[index] = clamp(
        0.62 + proximity * 0.32 + turbulence * 0.2 + Math.sin(time * 0.9 + this.seed[index] * 13) * 0.08,
        0.4,
        1.2,
      );
    }

    this.buildGeometry();
    this.ribbonMaterial.uniforms.uTime.value = time;
  }

  buildGeometry() {
    const positions = this.positions;
    const uvs = this.uvs;
    const alphas = this.alphas;
    const seeds = this.seeds;
    const camera = this.camera ? this.camera.position : null;
    const count = this.count;
    const nodeX = this.nodeX;
    const nodeY = this.nodeY;
    const nodeZ = this.nodeZ;

    for (let index = 0; index < count; index += 1) {
      const base = index * 3;
      const trailBase = index * HISTORY * 3;
      const seed = this.seed[index];
      nodeX[0] = this.head[base];
      nodeY[0] = this.head[base + 1];
      nodeZ[0] = this.head[base + 2];
      for (let node = 1; node < NODES; node += 1) {
        const offset = trailBase + (node - 1) * 3;
        nodeX[node] = this.history[offset];
        nodeY[node] = this.history[offset + 1];
        nodeZ[node] = this.history[offset + 2];
      }

      const vertexBase = index * NODES * 2;
      for (let node = 0; node < NODES; node += 1) {
        const t = node / (NODES - 1);
        const prev = Math.max(0, node - 1);
        const next = Math.min(NODES - 1, node + 1);
        let tx = nodeX[next] - nodeX[prev];
        let ty = nodeY[next] - nodeY[prev];
        let tz = nodeZ[next] - nodeZ[prev];
        let length = Math.hypot(tx, ty, tz);
        if (length < 1e-5) {
          tx = this.dir.x;
          ty = 0;
          tz = this.dir.z;
          length = 1;
        }
        tx /= length;
        ty /= length;
        tz /= length;

        let vx = 0;
        let vy = 1;
        let vz = 0;
        if (camera) {
          vx = camera.x - nodeX[node];
          vy = camera.y - nodeY[node];
          vz = camera.z - nodeZ[node];
        }
        let sx = ty * vz - tz * vy;
        let sy = tz * vx - tx * vz;
        let sz = tx * vy - ty * vx;
        const sideLength = Math.hypot(sx, sy, sz);
        if (sideLength < 1e-5) {
          sx = 0;
          sy = 1;
          sz = 0;
        } else {
          sx /= sideLength;
          sy /= sideLength;
          sz /= sideLength;
        }

        const width = (0.045 + seed * 0.045) * (0.82 + t * 1.25) * (0.86 + 0.16 * Math.sin(seed * 23 + t * 9));
        const alpha = (0.05 + seed * 0.06) * Math.pow(1 - t, 1.32) * this.opacity[index] * (0.72 + 0.28 * Math.sin(seed * 17 + t * 13));
        const left = (vertexBase + node * 2) * 3;
        const right = left + 3;
        positions[left] = nodeX[node] + sx * width;
        positions[left + 1] = nodeY[node] + sy * width;
        positions[left + 2] = nodeZ[node] + sz * width;
        positions[right] = nodeX[node] - sx * width;
        positions[right + 1] = nodeY[node] - sy * width;
        positions[right + 2] = nodeZ[node] - sz * width;

        const uvOffset = (vertexBase + node * 2) * 2;
        uvs[uvOffset] = 0;
        uvs[uvOffset + 1] = t;
        uvs[uvOffset + 2] = 1;
        uvs[uvOffset + 3] = t;

        alphas[vertexBase + node * 2] = alpha;
        alphas[vertexBase + node * 2 + 1] = alpha;
        seeds[vertexBase + node * 2] = seed;
        seeds[vertexBase + node * 2 + 1] = seed;
      }
    }

    this.ribbonGeometry.attributes.position.needsUpdate = true;
    this.ribbonGeometry.attributes.aAlpha.needsUpdate = true;
    this.ribbonGeometry.attributes.uv.needsUpdate = true;
    this.ribbonGeometry.attributes.aSeed.needsUpdate = true;

    for (let index = 0; index < this.puffCount; index += 1) {
      const particle = this.puffParticle[index];
      const node = this.puffNode[index];
      const base = particle * 3;
      let x;
      let y;
      let z;
      if (node === 0) {
        x = this.head[base];
        y = this.head[base + 1];
        z = this.head[base + 2];
      } else {
        const offset = particle * HISTORY * 3 + (node - 1) * 3;
        x = this.history[offset];
        y = this.history[offset + 1];
        z = this.history[offset + 2];
      }
      const puffBase = index * 3;
      this.puffPositions[puffBase] = x + this.puffOffset[puffBase];
      this.puffPositions[puffBase + 1] = y + this.puffOffset[puffBase + 1];
      this.puffPositions[puffBase + 2] = z + this.puffOffset[puffBase + 2];
      const fade = 1 - node / (NODES - 1);
      this.puffAlphas[index] = (0.08 + this.seed[particle] * 0.08) * fade * this.opacity[particle];
      this.puffSizes[index] = (1.2 + this.seed[particle] * 1.4) * (0.76 + fade * 0.75);
    }
    this.puffGeometry.attributes.position.needsUpdate = true;
    this.puffGeometry.attributes.aAlpha.needsUpdate = true;
    this.puffGeometry.attributes.aSize.needsUpdate = true;
  }

  dispose() {
    this.scene.remove(this.ribbons);
    this.scene.remove(this.puffs);
    this.ribbonGeometry.dispose();
    this.puffGeometry.dispose();
    this.ribbonMaterial.dispose();
    this.puffMaterial.dispose();
  }
}
