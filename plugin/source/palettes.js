/**
 * Colour systems for the AeroFlow wind tunnel.
 * Every palette is an artwork palette; UI chrome still uses host theme tokens.
 */
export const PALETTES = {
  ion: {
    id: 'ion',
    labelKey: 'palette.ion',
    stops: ['#163dff', '#27d8ff', '#c8ffff'],
    wake: '#ff5ecb',
    tone: '#41eaff',
  },
  aurora: {
    id: 'aurora',
    labelKey: 'palette.aurora',
    stops: ['#004bff', '#25f6c8', '#eaff9d'],
    wake: '#ffb760',
    tone: '#38ffd0',
  },
  plasma: {
    id: 'plasma',
    labelKey: 'palette.plasma',
    stops: ['#5318ff', '#ff43c8', '#ffd7a1'],
    wake: '#6ff5ff',
    tone: '#ff66d4',
  },
  ghost: {
    id: 'ghost',
    labelKey: 'palette.ghost',
    stops: ['#3c6178', '#9bdff3', '#ffffff'],
    wake: '#83b9ff',
    tone: '#b9efff',
  },
  smoke: {
    id: 'smoke',
    labelKey: 'palette.smoke',
    stops: ['#7f8f98', '#d8e7ee', '#ffffff'],
    wake: '#c9e8ff',
    tone: '#e8f6ff',
  },
};

const AUTO_BY_PRESET = {
  hellcat: 'smoke',
  coupe: 'ion',
  truck: 'plasma',
  drone: 'aurora',
  aircraft: 'ion',
  custom: 'smoke',
  imported: 'smoke',
};

/**
 * Automatic colour selection: the specimen sets the base family, while high
 * loading pushes the field into the warmer plasma palette. Smoke-based
 * specimens keep their white visual language at every wind speed.
 */
export function resolvePaletteId(palette = 'ion', auto = true, presetId = 'hellcat', windSpeed = 0) {
  if (!auto) return PALETTES[palette] ? palette : 'ion';
  const base = AUTO_BY_PRESET[presetId] || 'ion';
  if (base === 'smoke') return 'smoke';
  if (windSpeed >= 68) return 'plasma';
  return base;
}

export function getPalette(palette = 'ion', auto = true, presetId = 'hellcat', windSpeed = 0) {
  return PALETTES[resolvePaletteId(palette, auto, presetId, windSpeed)];
}

export function paletteByKey(id) {
  return PALETTES[id] || PALETTES.ion;
}
