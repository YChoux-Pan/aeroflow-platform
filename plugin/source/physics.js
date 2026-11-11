/** Sea-level reference air. */
export const AIR_DENSITY = 1.225;
export const AIR_VISCOSITY = 1.81e-5;
export const GRAVITY = 9.81;

/**
 * The visual shape library is shared by the controls and the 3D state.
 * `areaFactor` turns bounding-box width * height into a plausible frontal area.
 */
export const PRESETS = [
  {
    id: 'coupe',
    name: 'GT Coupe',
    labelKey: 'preset.coupe',
    kindKey: 'preset.coupe.kind',
    cd: 0.29,
    length: 4.6,
    width: 1.96,
    height: 1.24,
    mass: 1480,
    areaFactor: 0.76,
    accent: 'ion',
  },
  {
    id: 'truck',
    name: 'Cargo Rig',
    labelKey: 'preset.truck',
    kindKey: 'preset.truck.kind',
    cd: 0.72,
    length: 8.4,
    width: 2.48,
    height: 3.5,
    mass: 8200,
    areaFactor: 0.9,
    accent: 'plasma',
  },
  {
    id: 'drone',
    name: 'Quadrotor',
    labelKey: 'preset.drone',
    kindKey: 'preset.drone.kind',
    cd: 0.86,
    length: 1.35,
    width: 1.25,
    height: 0.55,
    mass: 4.2,
    areaFactor: 0.55,
    accent: 'aurora',
  },
  {
    id: 'aircraft',
    name: 'Wing Pod',
    labelKey: 'preset.aircraft',
    kindKey: 'preset.aircraft.kind',
    cd: 0.11,
    length: 6.2,
    width: 2.4,
    height: 2.2,
    mass: 3100,
    areaFactor: 0.75,
    accent: 'ion',
  },
  {
    id: 'custom',
    name: 'Bluff Pod',
    labelKey: 'preset.custom',
    kindKey: 'preset.custom.kind',
    cd: 0.55,
    length: 3.2,
    width: 1.6,
    height: 1.4,
    mass: 800,
    areaFactor: 0.82,
    accent: 'ghost',
  },
];

export const PRESET_BY_ID = Object.fromEntries(PRESETS.map((preset) => [preset.id, preset]));

export function makeSpecimen(id, overrides = {}) {
  const base = PRESET_BY_ID[id] || PRESET_BY_ID.coupe;
  return {
    id: base.id,
    name: base.name,
    labelKey: base.labelKey,
    kindKey: base.kindKey,
    cd: base.cd,
    length: base.length,
    width: base.width,
    height: base.height,
    mass: base.mass,
    areaFactor: base.areaFactor,
    accent: base.accent,
    ...overrides,
  };
}

export function frontalArea(specimen) {
  return Math.max(0.01, specimen.width * specimen.height * specimen.areaFactor);
}

/**
 * Simplified, transparent aerodynamic load model. This is deliberately not a
 * Navier-Stokes solve: it is a real drag/load relationship driving a real-time
 * visual field. The UI labels it as a proxy.
 */
export function computeAero(specimen, windSpeed, density = AIR_DENSITY, viscosity = AIR_VISCOSITY) {
  const speed = Math.max(0, Number(windSpeed) || 0);
  const area = frontalArea(specimen);
  const q = 0.5 * density * speed * speed;
  const drag = q * specimen.cd * area;
  return {
    speed,
    area,
    q,
    drag,
    cdA: specimen.cd * area,
    power: drag * speed,
    reynolds: (speed * specimen.length) / viscosity,
    dynamicLoad: drag / Math.max(1, specimen.mass * GRAVITY),
    density,
  };
}

/** Visual body displacement in tunnel units, intentionally perceptible. */
export function driftFromDrag(drag) {
  return Math.min(0.95, Math.max(0, drag) / 1000);
}

export function formatCompact(value, digits = 1) {
  if (!Number.isFinite(value)) return '—';
  const abs = Math.abs(value);
  if (abs >= 1e9) return `${(value / 1e9).toFixed(digits)}G`;
  if (abs >= 1e6) return `${(value / 1e6).toFixed(digits)}M`;
  if (abs >= 1e3) return `${(value / 1e3).toFixed(digits)}k`;
  return value.toFixed(abs >= 100 ? 0 : digits);
}

export function formatDuration(seconds) {
  const clamped = Math.max(0, seconds || 0);
  const mins = Math.floor(clamped / 60);
  const secs = Math.floor(clamped % 60);
  const tenths = Math.floor((clamped * 10) % 10);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${tenths}`;
}
