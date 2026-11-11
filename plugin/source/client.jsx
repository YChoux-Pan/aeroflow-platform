import en from '../locale/en.json';
import zh from '../locale/zh.json';
import { createAeroScene } from './scene.js';
import { IMPORT_ACCEPT, MAX_IMPORT_BYTES, formatFromFileName } from './importers.js';
import {
  AIR_DENSITY,
  PRESETS,
  PRESET_BY_ID,
  computeAero,
  formatCompact,
  formatDuration,
  makeSpecimen,
} from './physics.js';
import { PALETTES, getPalette } from './palettes.js';

// Injected by the loader factory before the plugin is applied. Keeping React
// out of the bundle is mandatory: the host owns the single React runtime.
let React;
let h;
let Fragment;

export function installReact(react) {
  React = react;
  h = react.createElement;
  Fragment = react.Fragment;
}

const NS = 'aeroflow';

const shared = {
  open: false,
  windSpeed: 30,
  articleId: 'hellcat',
  importName: '',
  paletteTone: '#e8f6ff',
  particles: 460,
};
const openListeners = new Set();

function notifyOpen() {
  for (const listener of openListeners) listener();
}

function setLabOpen(open) {
  if (shared.open === open) return;
  shared.open = open;
  notifyOpen();
}

function subscribeOpen(listener) {
  openListeners.add(listener);
  return () => openListeners.delete(listener);
}

const labMemory = {
  specimen: makeSpecimen('hellcat'),
  windSpeed: 30,
  windAngle: 0,
  palette: 'smoke',
  autoPalette: true,
  showStreams: true,
  showForce: true,
  autoRotate: false,
  running: true,
  imported: null,
  importRevision: 0,
};

function Icon({ name, size = 16 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  };
  switch (name) {
    case 'play':
      return (
        <svg {...common}>
          <path d="M8.5 5.6v12.8L18 12z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'pause':
      return (
        <svg {...common}>
          <rect x="7.5" y="5.5" width="3.2" height="13" rx="0.7" fill="currentColor" stroke="none" />
          <rect x="13.3" y="5.5" width="3.2" height="13" rx="0.7" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case 'reset':
      return (
        <svg {...common}>
          <path d="M5.2 9.2A7.2 7.2 0 1 1 5 14.4" />
          <path d="M5.2 4.8v4.6h4.6" />
        </svg>
      );
    case 'orbit':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="12" rx="8.2" ry="4.3" transform="rotate(-28 12 12)" />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
          <path d="M18.6 6.2l1.7-.5-.5 1.8" />
        </svg>
      );
    case 'stream':
      return (
        <svg {...common}>
          <path d="M4 8h9.5c2 0 3.1-1.2 3.1-2.5S15.5 3 14.2 3" />
          <path d="M4 12h13c2 0 3 1.1 3 2.4s-1 2.6-2.6 2.6" />
          <path d="M4 16h7.2c1.7 0 2.7 1 2.7 2.1" />
        </svg>
      );
    case 'force':
      return (
        <svg {...common}>
          <path d="M4 12h14" />
          <path d="M14 8l4 4-4 4" />
          <path d="M4 8.5V6M4 15.5V18" />
        </svg>
      );
    case 'upload':
      return (
        <svg {...common}>
          <path d="M12 16V5" />
          <path d="M8.4 8.4L12 4.8l3.6 3.6" />
          <path d="M5 15v3.2c0 .5.4.8.8.8h12.4c.4 0 .8-.3.8-.8V15" />
        </svg>
      );
    case 'auto':
      return (
        <svg {...common}>
          <path d="M12 3.8l1.4 4.1 4.1 1.4-4.1 1.4L12 14.8l-1.4-4.1-4.1-1.4 4.1-1.4z" />
          <path d="M18.2 15.2l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
        </svg>
      );
    case 'wind':
      return (
        <svg {...common}>
          <path d="M3 8h9.6c1.7 0 2.7-1 2.7-2.2S14.3 3.6 13.1 3.6c-1 0-1.8.5-2.2 1.3" />
          <path d="M3 12h14.4c1.7 0 2.7 1 2.7 2.2s-1 2.2-2.2 2.2c-1.1 0-1.9-.6-2.3-1.5" />
          <path d="M3 16.5h7.2" />
        </svg>
      );
    case 'chevron':
      return (
        <svg {...common}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="M5 12.5l4.2 4.2L19 6.8" />
        </svg>
      );
    case 'cube':
      return (
        <svg {...common}>
          <path d="M12 3.2l7.5 4.2v9.2L12 20.8l-7.5-4.2V7.4z" />
          <path d="M4.7 7.5L12 11.8l7.3-4.3M12 11.8v8.7" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
}

function PresetGlyph({ kind }) {
  const common = {
    viewBox: '0 0 64 36',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  };
  if (kind === 'truck') {
    return (
      <svg {...common}>
        <path d="M5 24V14h19v10M24 17h9l8 7h7v-3" />
        <path d="M6 24h5m6 0h12m8 0h8" />
        <circle cx="14" cy="26" r="3.4" />
        <circle cx="31" cy="26" r="3.4" />
        <circle cx="42" cy="26" r="3.4" />
        <path d="M8 18h12v-4H8z" opacity=".45" />
      </svg>
    );
  }
  if (kind === 'drone') {
    return (
      <svg {...common}>
        <path d="M18 18l8-4 8 4M32 14l8 4" />
        <ellipse cx="14" cy="13" rx="9" ry="3.4" />
        <ellipse cx="50" cy="13" rx="9" ry="3.4" />
        <ellipse cx="14" cy="26" rx="9" ry="3.4" opacity=".5" />
        <ellipse cx="50" cy="26" rx="9" ry="3.4" opacity=".5" />
        <rect x="26" y="13" width="12" height="8" rx="3" />
        <path d="M30 21v4m4-4v4" />
      </svg>
    );
  }
  if (kind === 'aircraft') {
    return (
      <svg {...common}>
        <path d="M7 20c2-4 12-5 23-5 8 0 19 1 27 5-9 4-18 3-27 3-10 0-20 0-23-3z" />
        <path d="M28 18l5-9 5 9" />
        <path d="M19 20h34" opacity=".4" />
        <path d="M28 21h4m5 0h4" opacity=".6" />
      </svg>
    );
  }
  if (kind === 'hellcat') {
    return (
      <svg {...common}>
        <path d="M3 24c1-3 4-5 9-6l14-5 8-6c4-3 10-2 15 1l7 7 5 4c2 1 3 2 3 4H3z" />
        <path d="M9 24h48" opacity=".55" />
        <path d="M22 13v10m19-12v12" opacity=".3" />
        <path d="M10 20h44" opacity=".22" />
        <circle cx="15" cy="26" r="3.4" />
        <circle cx="48" cy="26" r="3.4" />
        <circle cx="8" cy="19" r="1.3" />
        <circle cx="49" cy="19" r="1.3" />
        <path d="M48 15h11" opacity=".7" />
      </svg>
    );
  }
  if (kind === 'custom') {
    return (
      <svg {...common}>
        <path d="M7 23c0-4 3-6 8-7l22-6c5-1 12 0 16 4 3 3 2 7-2 9-5 2-12 1-17 1H16c-5 0-9-0-9-1z" />
        <path d="M21 14v14m13-17v17" opacity=".3" />
        <circle cx="52" cy="18" r="2.2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 24c1-4 6-6 14-7l9-6c4-3 11-2 14 1l9 8c4 1 6 2 6 4H4z" />
      <path d="M9 24h42" opacity=".55" />
      <circle cx="17" cy="26" r="3.2" />
      <circle cx="45" cy="26" r="3.2" />
      <path d="M10 20h40" opacity=".22" />
    </svg>
  );
}

function PanelHead({ index, title, subtitle }) {
  return (
    <div className="af-panel-head">
      <span className="af-panel-index">{index}</span>
      <div>
        <span className="af-panel-title">{title}</span>
        {subtitle ? <span className="af-panel-sub">{subtitle}</span> : null}
      </div>
    </div>
  );
}

function RangeRow({ label, value, display, unit, min, max, step, onChange, ariaLabel }) {
  const percent = ((Number(value) - min) / (max - min)) * 100;
  return (
    <label className="af-range-row">
      <span className="af-range-label">
        <span>{label}</span>
        <span className="af-range-value">
          {display}
          {unit ? <small>{unit}</small> : null}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={ariaLabel || label}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ '--af-fill': `${Math.max(0, Math.min(100, percent))}%` }}
      />
    </label>
  );
}

function ToggleChip({ active, onClick, icon, label, title }) {
  return (
    <button
      type="button"
      className={`af-chip${active ? ' is-active' : ''}`}
      onClick={onClick}
      aria-pressed={active}
      title={title || label}
    >
      <Icon name={icon} size={14} />
      <span>{label}</span>
    </button>
  );
}

function scientific(value) {
  if (!Number.isFinite(value) || value <= 0) return '—';
  const exponent = Math.floor(Math.log10(value));
  const mantissa = value / 10 ** exponent;
  return `${mantissa.toFixed(2)}e${exponent}`;
}

function windModeKey(angle) {
  const normalized = ((Math.round(angle) % 360) + 360) % 360;
  if (normalized <= 24 || normalized >= 336) return 'wind.headwind';
  if (normalized >= 156 && normalized <= 204) return 'wind.tailwind';
  return 'wind.cross';
}

function importErrorKey(error) {
  switch (error?.code) {
    case 'EXTERNAL_RESOURCES':
      return 'panel.importExternal';
    case 'COMPRESSED_ASSET':
      return 'panel.importCompressed';
    case 'NO_MESHES':
      return 'panel.importNoMeshes';
    case 'INVALID_GLTF':
    case 'INVALID_OBJ':
      return 'panel.importInvalid';
    default:
      return 'panel.importError';
  }
}

function sparklinePath(values, width, height) {
  const data = values.length > 1 ? values : [0, values[0] || 0];
  const max = Math.max(1, ...data) * 1.08;
  return data
    .map((value, index) => {
      const x = (index / Math.max(1, data.length - 1)) * width;
      const y = height - (Math.max(0, value) / max) * (height - 8) - 4;
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(' ');
}

export function buildComponents(ctx) {
  const { useMemo, useRef, useState, useEffect, useCallback } = React;

  function useTranslate() {
    const [, setRevision] = useState(0);
    useEffect(() => {
      const off = ctx.locale.subscribe(() => setRevision((value) => value + 1));
      return () => {
        if (typeof off === 'function') off();
      };
    }, []);
    const t = useMemo(() => ctx.locale.bind(NS), []);
    return t;
  }

  function useOpen() {
    const [open, setOpen] = useState(shared.open);
    useEffect(() => subscribeOpen(() => setOpen(shared.open)), []);
    return open;
  }

  function Launcher() {
    const t = useTranslate();
    const active = useOpen();
    const specimen = shared.importName ? { labelKey: 'preset.imported' } : PRESET_BY_ID[shared.articleId] || PRESET_BY_ID.hellcat;
    return (
      <div className="af-dock-wrap">
        <style>{DOCK_CSS}</style>
        <button
          type="button"
          className={`af-dock${active ? ' is-open' : ''}`}
          onClick={() => setLabOpen(true)}
          aria-label={`${t('launcher.open')} — ${t('lab.title')}`}
        >
          <span className="af-dock-glow" aria-hidden="true" />
          <span className="af-dock-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <rect x="1" y="1" width="38" height="38" rx="11" stroke="currentColor" strokeOpacity=".35" />
              <path d="M7 14h12c2.6 0 4 1.6 4.3 3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M7 20h20.6c2.7 0 4.1 1.4 4.4 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M7 26h11.4c2.2 0 3.4 1.2 3.8 2.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".55" />
              <path d="M23 15.5c2.9-2 7.4-1.8 9.7.5 1.6 1.6 1.6 4.3-.4 5.7-1.8 1.3-4.6 1.1-6.7.2l2.8-2.7-4.3-.5z" stroke="currentColor" strokeOpacity=".8" strokeWidth="1" />
            </svg>
          </span>
          <span className="af-dock-copy">
            <span className="af-dock-kicker">{t('launcher.kicker')}</span>
            <span className="af-dock-title">{t('launcher.title')}</span>
            <span className="af-dock-desc">{t('launcher.desc')}</span>
          </span>
          <span className="af-dock-stats" aria-hidden="true">
            <span className="af-dock-stat">
              <small>{t('launcher.wind')}</small>
              <strong>{shared.windSpeed.toFixed(0)}<em>m/s</em></strong>
            </span>
            <span className="af-dock-stat">
              <small>{t('launcher.article')}</small>
              <strong className="is-text">{specimen.labelKey ? t(specimen.labelKey) : t('preset.imported')}</strong>
            </span>
          </span>
          <span className="af-dock-status">
            <span className="af-dock-dot" aria-hidden="true" />
            <span>{t('launcher.live')}</span>
          </span>
          <span className="af-dock-open">
            {t('launcher.open')}
            <Icon name="chevron" size={13} />
          </span>
        </button>
      </div>
    );
  }

  function OverlayHost() {
    const open = useOpen();
    if (!open) return null;
    return <AeroLab />;
  }

  function AeroLab() {
    const t = useTranslate();
    const closeRef = useRef(null);
    const rootRef = useRef(null);
    const canvasRef = useRef(null);
    const stageRef = useRef(null);
    const sceneRef = useRef(null);
    const lastActiveRef = useRef(null);
    const fileInputRef = useRef(null);
    const importRevisionRef = useRef(labMemory.importRevision || 0);
    const previousPresetRef = useRef(makeSpecimen(labMemory.specimen.id));

    const [specimen, setSpecimen] = useState(() => ({ ...labMemory.specimen }));
    const [windSpeed, setWindSpeed] = useState(labMemory.windSpeed);
    const [windAngle, setWindAngle] = useState(labMemory.windAngle);
    const [palette, setPalette] = useState(labMemory.palette);
    const [autoPalette, setAutoPalette] = useState(labMemory.autoPalette);
    const [showStreams, setShowStreams] = useState(labMemory.showStreams);
    const [showForce, setShowForce] = useState(labMemory.showForce);
    const [autoRotate, setAutoRotate] = useState(labMemory.autoRotate);
    const [running, setRunning] = useState(labMemory.running);
    const [imported, setImported] = useState(labMemory.imported);
    const [importing, setImporting] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [importError, setImportError] = useState('');
    const [booted, setBooted] = useState(false);
    const [bootError, setBootError] = useState('');
    const [attempt, setAttempt] = useState(0);
    const [view, setView] = useState('iso');
    const [telemetry, setTelemetry] = useState({
      time: 0,
      fps: 0,
      drag: 0,
      q: 0,
      power: 0,
      reynolds: 0,
      cdA: 0,
      area: 0,
      drift: 0,
      paletteId: 'ion',
      particles: 0,
      running: true,
      samples: [],
    });

    const modelKey = imported ? `imported:${imported.revision}` : `preset:${specimen.id}`;
    const aero = useMemo(() => computeAero(specimen, windSpeed), [specimen, windSpeed]);
    const resolvedPalette = useMemo(
      () => getPalette(palette, autoPalette, specimen.id, windSpeed),
      [palette, autoPalette, specimen.id, windSpeed],
    );

    const settings = useMemo(
      () => ({
        specimen,
        windSpeed,
        windAngle,
        palette,
        autoPalette,
        showStreams,
        showForce,
        autoRotate,
        running,
        modelKey,
        importedAsset: imported,
      }),
      [specimen, windSpeed, windAngle, palette, autoPalette, showStreams, showForce, autoRotate, running, modelKey, imported],
    );

    const stateRef = useRef(settings);
    stateRef.current = settings;
    const metaRef = useRef({ specimen, imported, windSpeed, running, palette: resolvedPalette });
    metaRef.current = { specimen, imported, windSpeed, running, palette: resolvedPalette };

    useEffect(() => {
      labMemory.specimen = specimen;
      labMemory.windSpeed = windSpeed;
      labMemory.windAngle = windAngle;
      labMemory.palette = palette;
      labMemory.autoPalette = autoPalette;
      labMemory.showStreams = showStreams;
      labMemory.showForce = showForce;
      labMemory.autoRotate = autoRotate;
      labMemory.running = running;
      labMemory.imported = imported;
      labMemory.importRevision = importRevisionRef.current;
    }, [specimen, windSpeed, windAngle, palette, autoPalette, showStreams, showForce, autoRotate, running, imported]);

    useEffect(() => {
      lastActiveRef.current = document.activeElement;
      const timer = window.setTimeout(() => closeRef.current?.focus(), 0);
      const onKeyDown = (event) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          setLabOpen(false);
          return;
        }
        if (event.key !== 'Tab' || !rootRef.current) return;
        const focusable = Array.from(
          rootRef.current.querySelectorAll(
            'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => element.offsetParent !== null || element === document.activeElement);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };
      document.addEventListener('keydown', onKeyDown, true);
      return () => {
        window.clearTimeout(timer);
        document.removeEventListener('keydown', onKeyDown, true);
        const previous = lastActiveRef.current;
        if (previous && typeof previous.focus === 'function' && previous.isConnected) {
          window.setTimeout(() => previous.focus(), 0);
        }
      };
    }, []);

    useEffect(() => {
      if (!canvasRef.current || !stageRef.current) return undefined;
      let instance = null;
      try {
        instance = createAeroScene({
          canvas: canvasRef.current,
          container: stageRef.current,
          initialSettings: stateRef.current,
          onTelemetry: (payload) => {
            setTelemetry((previous) => {
              const samples = [...previous.samples, payload.drag].slice(-48);
              return { ...payload, samples };
            });
            const metadata = metaRef.current;
            shared.windSpeed = metadata.windSpeed;
            shared.articleId = metadata.imported ? 'imported' : metadata.specimen.id;
            shared.importName = metadata.imported?.name || '';
            shared.paletteTone = metadata.palette.tone;
            shared.particles = payload.particles;
          },
          onReady: () => {
            setBooted(true);
            setBootError('');
          },
          onError: () => {
            setBootError(t('lab.webglError'));
          },
          onImportError: (error) => {
            setImportError(t(importErrorKey(error)));
            setImported(null);
            setSpecimen(previousPresetRef.current || makeSpecimen('hellcat'));
          },
        });
        sceneRef.current = instance;
      } catch (error) {
        setBootError(t('lab.webglError'));
        sceneRef.current = null;
      }
      return () => {
        if (instance) instance.dispose();
        if (sceneRef.current === instance) sceneRef.current = null;
      };
      // The scene is recreated only for an explicit retry; every other change
      // is pushed through the update effect below.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [attempt]);

    useEffect(() => {
      if (sceneRef.current) sceneRef.current.update(settings);
    }, [settings]);

    const handleClose = useCallback(() => {
      setLabOpen(false);
    }, []);

    const handleSetView = (nextView) => {
      setView(nextView);
      sceneRef.current?.setView(nextView);
    };

    const handleReset = () => {
      sceneRef.current?.reset();
      setView('iso');
    };

    const applyPreset = (presetId) => {
      const next = makeSpecimen(presetId);
      previousPresetRef.current = next;
      setSpecimen(next);
      setImported(null);
      setImportError('');
    };

    const handleFile = async (file) => {
      if (!file) return;
      const format = formatFromFileName(file.name);
      if (!format || file.size > MAX_IMPORT_BYTES) {
        setImportError(t('panel.importError'));
        return;
      }
      setImporting(true);
      setImportError('');
      try {
        const data = format === 'glb' ? await file.arrayBuffer() : await file.text();
        if (!data || (typeof data === 'string' ? data.trim().length < 8 : data.byteLength < 20)) {
          throw new Error('empty');
        }
        previousPresetRef.current = specimen;
        importRevisionRef.current += 1;
        setImported({
          name: file.name,
          format,
          data,
          revision: importRevisionRef.current,
        });
        setSpecimen(makeSpecimen('custom', { name: file.name }));
      } catch (error) {
        setImportError(t('panel.importError'));
      } finally {
        setImporting(false);
      }
    };

    const onFileInput = (event) => {
      const file = event.target.files?.[0];
      handleFile(file);
      event.target.value = '';
    };

    const onDrop = (event) => {
      event.preventDefault();
      setIsDragging(false);
      handleFile(event.dataTransfer?.files?.[0]);
    };

    const clearImport = () => {
      setImported(null);
      setImportError('');
      setSpecimen(previousPresetRef.current || makeSpecimen('hellcat'));
    };

    const updateSpecimen = (key, value) => {
      setSpecimen((previous) => ({ ...previous, [key]: value }));
    };

    const mode = t(windModeKey(windAngle));
    const paletteTone = resolvedPalette.tone;
    const stageStyle = {
      '--af-accent': paletteTone,
      '--af-stops': `linear-gradient(90deg, ${resolvedPalette.stops[0]}, ${resolvedPalette.stops[1]}, ${resolvedPalette.stops[2]})`,
    };
    const chartWidth = 244;
    const chartHeight = 58;
    const chart = telemetry.samples.length ? telemetry.samples : [aero.drag];
    const path = sparklinePath(chart, chartWidth, chartHeight);
    const lastX = chartWidth;
    const chartMax = Math.max(1, ...chart) * 1.08;
    const lastY = chartHeight - (Math.max(0, chart[chart.length - 1]) / chartMax) * (chartHeight - 8) - 4;
    const dragRatio = Math.min(1, aero.drag / 4000);
    const activePresetId = imported ? null : specimen.id;
    const articleLabel = imported ? imported.name : t(specimen.labelKey);
    const statusLabel = bootError ? t('lab.noWebgl') : running ? t('lab.online') : t('lab.paused');
    const fps = Math.round(telemetry.fps || 0);
    const powerDisplay = aero.power >= 1000
      ? `${formatCompact(aero.power / 1000, 2)} kW`
      : `${formatCompact(aero.power, 1)} W`;

    return (
      <div
        className="af-overlay"
        ref={rootRef}
        data-aeroflow-lab="true"
        data-ready={booted ? 'true' : 'false'}
        style={stageStyle}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) handleClose();
        }}
      >
        <style>{LAB_CSS}</style>
        <div
          className="af-shell"
          role="dialog"
          aria-modal="true"
          aria-labelledby="af-title"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="af-corner af-corner-tl" aria-hidden="true" />
          <div className="af-corner af-corner-tr" aria-hidden="true" />
          <div className="af-corner af-corner-bl" aria-hidden="true" />
          <div className="af-corner af-corner-br" aria-hidden="true" />

          <header className="af-header">
            <div className="af-brand">
              <span className="af-brandmark" aria-hidden="true">
                <svg viewBox="0 0 44 44" fill="none">
                  <rect x="1" y="1" width="42" height="42" rx="12" stroke="currentColor" strokeOpacity=".32" />
                  <path d="M8 14h13.2c2.8 0 4.4 1.7 4.7 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8 21h22.7c2.9 0 4.5 1.6 4.8 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8 28h12.6c2.4 0 3.8 1.3 4.2 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".54" />
                  <path d="M27 16c3-2.2 7.8-2 10.2.4 1.8 1.8 1.6 4.7-.6 6.2-1.9 1.3-4.8 1.1-7 .1l3-2.8-4.7-.5z" stroke="currentColor" strokeOpacity=".85" strokeWidth="1.1" />
                  <circle cx="34" cy="30" r="1.8" fill="currentColor" />
                </svg>
              </span>
              <div className="af-brand-copy">
                <div className="af-brand-row">
                  <h1 id="af-title">{t('lab.title')}</h1>
                  <span className="af-version">V1.2</span>
                </div>
                <div className="af-brand-sub">{t('lab.subtitle')}<span>{t('lab.badge')}</span></div>
              </div>
            </div>

            <div className="af-header-center">
              <span className="af-status">
                <span className={`af-status-dot${running ? ' is-live' : ''}`} aria-hidden="true" />
                {statusLabel}
              </span>
              <span className="af-header-divider" aria-hidden="true" />
              <span className="af-header-metric">
                <small>{t('hud.article')}</small>
                <strong>{articleLabel}</strong>
              </span>
              <span className="af-header-metric">
                <small>{t('hud.drag')}</small>
                <strong>{formatCompact(aero.drag, 1)}<em>N</em></strong>
              </span>
            </div>

            <div className="af-header-actions">
              <span className="af-fps" title={t('telemetry.fps')}>
                <small>FPS</small>
                <strong>{fps || '—'}</strong>
              </span>
              <button type="button" className="af-close" onClick={handleClose} ref={closeRef} aria-label={t('lab.close')} title={t('lab.close')}>
                <span>{t('lab.esc')}</span>
                <Icon name="close" size={16} />
              </button>
            </div>
          </header>

          <div className="af-body">
            <aside className="af-rail af-left" aria-label={t('section.objectCn')}>
              <PanelHead index="01" title={t('section.object')} subtitle={t('section.objectCn')} />

              <div className="af-preset-grid">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    className={`af-preset${activePresetId === preset.id ? ' is-selected' : ''}`}
                    onClick={() => applyPreset(preset.id)}
                    aria-pressed={activePresetId === preset.id}
                  >
                    <span className="af-preset-top">
                      <span className="af-preset-glyph"><PresetGlyph kind={preset.id} /></span>
                      <span className="af-preset-cd">Cd {(activePresetId === preset.id ? specimen.cd : preset.cd).toFixed(2)}</span>
                    </span>
                    <span className="af-preset-name">{t(preset.labelKey)}</span>
                    <span className="af-preset-kind">{t(preset.kindKey)}</span>
                    {activePresetId === preset.id ? <span className="af-selected-tick"><Icon name="check" size={11} /></span> : null}
                  </button>
                ))}
              </div>

              <div
                className={`af-import-zone${isDragging ? ' is-dragging' : ''}${imported ? ' has-file' : ''}`}
                onDragOver={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
              >
                <label className="af-import-label">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={IMPORT_ACCEPT}
                    onChange={onFileInput}
                    className="af-file-input"
                    aria-label={t('panel.import')}
                  />
                  <span className="af-import-icon"><Icon name={imported ? 'cube' : 'upload'} size={18} /></span>
                  <span className="af-import-copy">
                    <strong>{importing ? t('panel.importBusy') : imported ? imported.name : t('panel.import')}</strong>
                    <small>{imported ? t('panel.importedNote') : t('panel.importHint')}</small>
                  </span>
                  <span className="af-import-badge">{imported ? imported.format.toUpperCase() : '3D'}</span>
                </label>
                {imported ? (
                  <button type="button" className="af-import-clear" onClick={clearImport} aria-label={t('panel.clearImport')} title={t('panel.clearImport')}>
                    <Icon name="close" size={12} />
                  </button>
                ) : null}
              </div>
              {importError ? <p className="af-inline-error" role="alert">{importError}</p> : null}

              <div className="af-area-card">
                <span className="af-area-label">{t('panel.area')}</span>
                <strong>{aero.area.toFixed(2)}<small>m²</small></strong>
                <span className="af-area-meta">{t('panel.areaHint')} · CdA {aero.cdA.toFixed(2)}</span>
                <i style={{ width: `${Math.min(100, aero.area * 10)}%` }} aria-hidden="true" />
              </div>

              <PanelHead index="02" title={t('section.geometry')} subtitle={t('section.geometryCn')} />
              <p className="af-rail-hint">{t('panel.paramsHint')}</p>
              <RangeRow
                label={t('dim.length')}
                value={specimen.length}
                display={specimen.length.toFixed(1)}
                unit={t('dim.meters')}
                min={0.6}
                max={12}
                step={0.1}
                onChange={(value) => updateSpecimen('length', value)}
              />
              <RangeRow
                label={t('dim.width')}
                value={specimen.width}
                display={specimen.width.toFixed(2)}
                unit={t('dim.meters')}
                min={0.3}
                max={4.2}
                step={0.02}
                onChange={(value) => updateSpecimen('width', value)}
              />
              <RangeRow
                label={t('dim.height')}
                value={specimen.height}
                display={specimen.height.toFixed(2)}
                unit={t('dim.meters')}
                min={0.25}
                max={4.5}
                step={0.02}
                onChange={(value) => updateSpecimen('height', value)}
              />
              <RangeRow
                label={t('dim.cd')}
                value={specimen.cd}
                display={specimen.cd.toFixed(2)}
                min={0.02}
                max={1.4}
                step={0.01}
                onChange={(value) => updateSpecimen('cd', value)}
              />
              <div className="af-mass-row">
                <span>{t('panel.mass')}</span>
                <strong>{formatCompact(specimen.mass, 0)} <small>kg</small></strong>
              </div>
            </aside>

            <section className="af-stage" ref={stageRef} aria-label={t('hud.flowField')}>
              <canvas ref={canvasRef} className="af-canvas" key={attempt} />
              <div className="af-scanlines" aria-hidden="true" />
              <div className="af-vignette" aria-hidden="true" />

              <div className="af-hud af-hud-top">
                <div className="af-hud-block af-coordinates">
                  <span className="af-hud-overline">{t('hud.testSection')}</span>
                  <span className="af-hud-small">{t('hud.flowField')} / 0.00 — 100.00 m·s⁻¹</span>
                </div>
                <div className="af-hud-wind">
                  <span className="af-hud-overline">{t('hud.windVector')}</span>
                  <span className="af-wind-arrow" style={{ transform: `rotate(${windAngle}deg)` }} aria-hidden="true">→</span>
                  <strong>{String(Math.round(windAngle)).padStart(3, '0')}°</strong>
                  <span className="af-hud-sep">/</span>
                  <strong>{windSpeed.toFixed(0)} <small>m/s</small></strong>
                  <span className="af-mode-pill">{mode}</span>
                </div>
                <div className="af-view-switch" role="group" aria-label={t('hud.view')}>
                  {['iso', 'side', 'top'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={view === option ? 'is-active' : ''}
                      onClick={() => handleSetView(option)}
                      aria-pressed={view === option}
                    >
                      {t(`hud.${option}`)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="af-side-scale" aria-hidden="true">
                <span>+04</span><i /><span>+02</span><i /><span>00</span><i /><span>−02</span>
              </div>

              <div className="af-hud af-hud-bottom">
                <div className="af-legend">
                  <div className="af-legend-head">
                    <span>{t('flow.velocity')}</span>
                    <span>{t('hud.palette')} · {t(resolvedPalette.labelKey)}</span>
                  </div>
                  <span className="af-legend-gradient" style={{ background: stageStyle['--af-stops'] }} />
                  <div className="af-legend-labels">
                    <span>{t('flow.low')} 0</span>
                    <span>1.0</span>
                    <span className="af-legend-fast">{t('flow.high')} {windSpeed.toFixed(0)} m/s</span>
                  </div>
                </div>

                <div className="af-playbar">
                  <button
                    type="button"
                    className="af-play"
                    onClick={() => setRunning((value) => !value)}
                    aria-label={running ? t('hud.pause') : t('hud.play')}
                    title={running ? t('hud.pause') : t('hud.play')}
                  >
                    <Icon name={running ? 'pause' : 'play'} size={17} />
                  </button>
                  <div className="af-time">
                    <span>{t('hud.elapsed')}</span>
                    <strong>{formatDuration(telemetry.time)}</strong>
                  </div>
                  <span className="af-play-divider" aria-hidden="true" />
                  <ToggleChip active={showStreams} onClick={() => setShowStreams((value) => !value)} icon="stream" label={t('hud.streams')} />
                  <ToggleChip active={showForce} onClick={() => setShowForce((value) => !value)} icon="force" label={t('hud.forceArrow')} />
                  <ToggleChip active={autoRotate} onClick={() => setAutoRotate((value) => !value)} icon="orbit" label={t('hud.autoOrbit')} />
                  <button type="button" className="af-icon-btn" onClick={handleReset} title={t('hud.reset')} aria-label={t('hud.reset')}>
                    <Icon name="reset" size={15} />
                  </button>
                </div>

                <div className="af-force-hud">
                  <div className="af-force-head">
                    <span>{t('hud.forceBalance')}</span>
                    <span className={`af-live-dot${running ? ' is-live' : ''}`} />
                  </div>
                  <div className="af-force-value">
                    <strong>{formatCompact(aero.drag, 1)}</strong>
                    <span>N</span>
                    <small>{t('hud.drag')}</small>
                  </div>
                  <div className="af-force-bar"><i style={{ width: `${Math.max(3, dragRatio * 100)}%` }} /></div>
                  <div className="af-force-foot">
                    <span>F<sub>D</sub></span>
                    <span>{t('hud.drift')} {telemetry.drift.toFixed(2)}</span>
                    <span>{telemetry.particles} <small>{t('telemetry.particles')}</small></span>
                  </div>
                </div>
              </div>

              <div className="af-stage-note">
                <span className="af-axis">X</span>
                <span className="af-axis af-axis-y">Y</span>
                <span className="af-axis af-axis-z">Z</span>
                <span>{t('hud.cameraHint')}</span>
              </div>

              {!booted && !bootError ? (
                <div className="af-boot">
                  <div className="af-boot-orbit" aria-hidden="true"><i /><i /><i /></div>
                  <strong>{t('lab.booting')}</strong>
                  <span>{t('lab.bootHint')}</span>
                  <div className="af-boot-bar"><i /></div>
                </div>
              ) : null}

              {bootError ? (
                <div className="af-boot af-boot-error" role="alert">
                  <span className="af-error-mark" aria-hidden="true">!</span>
                  <strong>{t('lab.noWebgl')}</strong>
                  <span>{bootError}</span>
                  <button
                    type="button"
                    className="af-retry"
                    onClick={() => {
                      setBooted(false);
                      setBootError('');
                      setAttempt((value) => value + 1);
                    }}
                  >
                    {t('lab.tryAgain')}
                  </button>
                </div>
              ) : null}
            </section>

            <aside className="af-rail af-right" aria-label={t('section.windCn')}>
              <PanelHead index="03" title={t('section.wind')} subtitle={t('section.windCn')} />
              <div className="af-wind-display">
                <div>
                  <span className="af-wind-label">{t('wind.speed')}</span>
                  <strong>{windSpeed.toFixed(0)}<small>m/s</small></strong>
                  <span className="af-wind-kmh">{(windSpeed * 3.6).toFixed(0)} km/h · {mode}</span>
                </div>
                <span className="af-wind-icon" aria-hidden="true"><Icon name="wind" size={30} /></span>
              </div>
              <RangeRow
                label={t('wind.speed')}
                value={windSpeed}
                display={windSpeed.toFixed(0)}
                unit={t('wind.unit')}
                min={0}
                max={100}
                step={1}
                onChange={setWindSpeed}
                ariaLabel={t('wind.speed')}
              />
              <div className="af-quick-row">
                {[10, 30, 60, 100].map((value) => (
                  <button key={value} type="button" className={Math.round(windSpeed) === value ? 'is-active' : ''} onClick={() => setWindSpeed(value)}>
                    {value}
                  </button>
                ))}
              </div>
              <p className="af-rail-hint">{t('wind.speedHint')} · {t('wind.air')}</p>

              <div className="af-direction-block">
                <div className="af-direction-head">
                  <span>{t('wind.direction')}</span>
                  <strong>{String(Math.round(windAngle)).padStart(3, '0')}°</strong>
                </div>
                <div className="af-compass-wrap">
                  <svg className="af-compass" viewBox="0 0 148 148" role="img" aria-label={`${t('wind.direction')} ${Math.round(windAngle)}°`}>
                    <defs>
                      <radialGradient id="af-compass-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor={paletteTone} stopOpacity=".28" />
                        <stop offset=".64" stopColor={paletteTone} stopOpacity=".07" />
                        <stop offset="1" stopColor={paletteTone} stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="74" cy="74" r="64" fill="url(#af-compass-glow)" />
                    <circle cx="74" cy="74" r="53" fill="none" stroke="rgba(150,247,255,.2)" strokeWidth=".8" />
                    <circle cx="74" cy="74" r="41" fill="none" stroke="rgba(150,247,255,.1)" strokeWidth=".7" strokeDasharray="1 6" />
                    {Array.from({ length: 24 }).map((_, index) => {
                      const angle = (index / 24) * Math.PI * 2;
                      const inner = index % 6 === 0 ? 46 : 50;
                      return (
                        <line
                          key={index}
                          x1={74 + Math.cos(angle) * inner}
                          y1={74 + Math.sin(angle) * inner}
                          x2={74 + Math.cos(angle) * 53}
                          y2={74 + Math.sin(angle) * 53}
                          stroke={index % 6 === 0 ? 'rgba(187,251,255,.55)' : 'rgba(150,247,255,.22)'}
                          strokeWidth={index % 6 === 0 ? 1.2 : 0.7}
                        />
                      );
                    })}
                    <g transform={`rotate(${windAngle} 74 74)`}>
                      <path d="M74 74 L121 74" stroke={paletteTone} strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M113 68.8L123 74l-10 5.2z" fill={paletteTone} />
                      <path d="M74 30v-8" stroke={paletteTone} strokeOpacity=".35" />
                    </g>
                    <circle cx="74" cy="74" r="4.2" fill={paletteTone} />
                    <circle cx="74" cy="74" r="23" fill="none" stroke={paletteTone} strokeOpacity=".16" />
                    <text x="74" y="143" textAnchor="middle" fill="rgba(198,253,255,.58)" fontSize="8" letterSpacing="2">FLOW</text>
                    <text x="10" y="77" fill="rgba(198,253,255,.42)" fontSize="7">L</text>
                    <text x="134" y="77" fill="rgba(198,253,255,.42)" fontSize="7">R</text>
                  </svg>
                  <div className="af-compass-readout">
                    <span>{t('hud.windVector')}</span>
                    <strong>{mode}</strong>
                    <small>{Math.round(windAngle)}° / 360°</small>
                  </div>
                </div>
                <RangeRow
                  label={t('wind.direction')}
                  value={windAngle}
                  display={`${Math.round(windAngle)}°`}
                  min={0}
                  max={359}
                  step={1}
                  onChange={setWindAngle}
                  ariaLabel={t('wind.direction')}
                />
                <div className="af-quick-row af-direction-presets">
                  {[0, 90, 180, 270].map((value) => (
                    <button key={value} type="button" className={Math.round(windAngle) === value ? 'is-active' : ''} onClick={() => setWindAngle(value)}>
                      {t(`wind.preset${value}`)}
                    </button>
                  ))}
                </div>
                <p className="af-rail-hint">{t('wind.directionHint')}</p>
              </div>

              <PanelHead index="04" title={t('section.telemetry')} subtitle={t('section.telemetryCn')} />
              <div className="af-telemetry-grid">
                <div className="af-metric af-metric-main">
                  <span>{t('telemetry.drag')}</span>
                  <strong>{formatCompact(aero.drag, 1)}<small>N</small></strong>
                  <i style={{ width: `${Math.max(3, dragRatio * 100)}%` }} />
                </div>
                <div className="af-metric">
                  <span>{t('telemetry.q')}</span>
                  <strong>{formatCompact(aero.q, 1)}<small>Pa</small></strong>
                </div>
                <div className="af-metric">
                  <span>{t('telemetry.power')}</span>
                  <strong>{powerDisplay}</strong>
                </div>
                <div className="af-metric">
                  <span>{t('telemetry.re')}</span>
                  <strong>{scientific(aero.reynolds)}</strong>
                </div>
                <div className="af-metric">
                  <span>{t('telemetry.cda')}</span>
                  <strong>{aero.cdA.toFixed(2)}<small>m²</small></strong>
                </div>
              </div>
              <div className="af-chart">
                <div className="af-chart-head">
                  <span>{t('telemetry.trend')}</span>
                  <span>{formatCompact(aero.drag, 0)} N</span>
                </div>
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="af-spark-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor={paletteTone} stopOpacity=".34" />
                      <stop offset="1" stopColor={paletteTone} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${path} L${chartWidth},${chartHeight} L0,${chartHeight} Z`} fill="url(#af-spark-fill)" stroke="none" />
                  <path d={path} fill="none" stroke={paletteTone} strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
                  <circle cx={lastX} cy={lastY} r="2.2" fill={paletteTone} />
                </svg>
                <div className="af-chart-foot">
                  <span>−8 s</span>
                  <span>{t('hud.live')} · {fps} FPS</span>
                </div>
              </div>

              <PanelHead index="05" title={t('section.flow')} subtitle={t('section.flowCn')} />
              <div className="af-auto-row">
                <div>
                  <span className="af-auto-title">{t('flow.auto')}</span>
                  <small>{t('flow.autoHint')}</small>
                </div>
                <button
                  type="button"
                  className={`af-switch${autoPalette ? ' is-on' : ''}`}
                  role="switch"
                  aria-checked={autoPalette}
                  aria-label={t('flow.auto')}
                  onClick={() => setAutoPalette((value) => !value)}
                >
                  <span />
                </button>
              </div>
              <div className="af-palette-row">
                {Object.values(PALETTES).map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`af-swatch${resolvedPalette.id === option.id ? ' is-selected' : ''}`}
                    onClick={() => {
                      setPalette(option.id);
                      setAutoPalette(false);
                    }}
                    aria-label={t(option.labelKey)}
                    aria-pressed={resolvedPalette.id === option.id && !autoPalette}
                    title={t(option.labelKey)}
                  >
                    <span
                      className="af-swatch-chip"
                      style={{ background: `linear-gradient(120deg, ${option.stops[0]}, ${option.stops[1]} 62%, ${option.stops[2]})` }}
                    />
                    <span>{t(option.labelKey)}</span>
                    {resolvedPalette.id === option.id ? <em>{autoPalette ? t('hud.auto') : ''}</em> : null}
                  </button>
                ))}
              </div>
              <div className="af-field-foot">
                <span><i className="af-mini-dot" /> {t('hud.flowField')}</span>
                <span>{telemetry.particles || '—'} {t('telemetry.particles')}</span>
                <span>{AIR_DENSITY.toFixed(3)} kg/m³</span>
              </div>

              <p className="af-disclaimer">{t('lab.note')}</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }

  return { Launcher, OverlayHost, AeroLab };
}

const DOCK_CSS = `
.af-dock-wrap { width: 100%; }
.af-dock {
  --af-dock-accent: var(--dsw-alias-brand-primary, #3b82f6);
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 54px;
  padding: 8px 14px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 14px;
  background:
    linear-gradient(105deg, color-mix(in srgb, var(--af-dock-accent) 7%, transparent), transparent 38%),
    var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: border-color .18s ease, background .18s ease, transform .18s ease;
}
.af-dock:hover { border-color: color-mix(in srgb, var(--af-dock-accent) 55%, var(--dsw-alias-border-l1)); transform: translateY(-1px); }
.af-dock:focus-visible { outline: 2px solid var(--af-dock-accent); outline-offset: 2px; }
.af-dock.is-open { border-color: var(--af-dock-accent); }
.af-dock-glow {
  position: absolute; inset: 0 auto 0 0; width: 4px;
  background: linear-gradient(180deg, transparent, var(--af-dock-accent), transparent);
  opacity: .8;
}
.af-dock-mark { color: var(--af-dock-accent); width: 40px; height: 40px; flex: none; }
.af-dock-mark svg { width: 40px; height: 40px; display: block; }
.af-dock-copy { display: flex; flex-direction: column; min-width: 0; gap: 1px; flex: 1; }
.af-dock-kicker { font: 600 9px/1.2 ui-monospace, "Cascadia Mono", monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--dsw-alias-label-tertiary); }
.af-dock-title { font: 650 13.5px/1.35 "Bahnschrift", "Segoe UI", sans-serif; letter-spacing: .015em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-dock-desc { font: 400 11px/1.35 "Segoe UI", sans-serif; color: var(--dsw-alias-label-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-dock-stats { display: flex; align-items: stretch; gap: 18px; padding-right: 6px; }
.af-dock-stat { display: flex; flex-direction: column; gap: 2px; min-width: 52px; }
.af-dock-stat small { font: 600 8.5px/1 ui-monospace, monospace; letter-spacing: .12em; color: var(--dsw-alias-label-tertiary); text-transform: uppercase; }
.af-dock-stat strong { font: 600 13px/1.15 ui-monospace, monospace; color: var(--dsw-alias-label-primary); white-space: nowrap; }
.af-dock-stat strong em { font-style: normal; font-size: 9px; color: var(--dsw-alias-label-tertiary); margin-left: 3px; }
.af-dock-stat strong.is-text { font-family: "Segoe UI", sans-serif; font-size: 12px; max-width: 105px; overflow: hidden; text-overflow: ellipsis; }
.af-dock-status { display: flex; align-items: center; gap: 5px; font: 600 9px/1 ui-monospace, monospace; letter-spacing: .08em; color: var(--dsw-alias-state-success-primary, #23a55a); white-space: nowrap; }
.af-dock-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; box-shadow: 0 0 8px currentColor; }
.af-dock-open {
  display: inline-flex; align-items: center; gap: 3px; padding: 6px 9px;
  border: 1px solid color-mix(in srgb, var(--af-dock-accent) 40%, transparent);
  border-radius: 7px; color: var(--af-dock-accent);
  font: 600 10px/1 "Segoe UI", sans-serif; white-space: nowrap;
  background: color-mix(in srgb, var(--af-dock-accent) 7%, transparent);
}
@media (max-width: 860px) {
  .af-dock-stats { display: none; }
  .af-dock-status { display: none; }
}
@media (max-width: 560px) {
  .af-dock { gap: 9px; padding: 7px 10px; min-height: 48px; }
  .af-dock-mark, .af-dock-mark svg { width: 32px; height: 32px; }
  .af-dock-desc { display: none; }
  .af-dock-open { font-size: 0; padding: 6px 7px; }
  .af-dock-open svg { width: 14px; height: 14px; }
}
`;

const LAB_CSS = `
.af-overlay {
  --af-ink: #03090e;
  --af-panel: rgba(6, 18, 25, .92);
  --af-panel-2: rgba(8, 23, 31, .78);
  --af-line: rgba(107, 238, 255, .13);
  --af-line-strong: rgba(107, 238, 255, .27);
  --af-text: #d9f9ff;
  --af-muted: #7fa3ad;
  --af-dim: #4c6b75;
  --af-accent: #41eaff;
  --af-cyan: #78f7ff;
  --af-warm: #ff9b5c;
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(6px, 1.8vh, 22px);
  background:
    radial-gradient(ellipse at 50% 12%, rgba(24, 102, 126, .2), transparent 56%),
    radial-gradient(ellipse at 86% 82%, rgba(105, 24, 120, .14), transparent 52%),
    rgba(1, 5, 9, .82);
  backdrop-filter: blur(15px) saturate(120%);
  -webkit-backdrop-filter: blur(15px) saturate(120%);
  pointer-events: auto;
  overscroll-behavior: contain;
  font-family: "Segoe UI", "Microsoft YaHei UI", sans-serif;
  color: var(--af-text);
  animation: af-fade .22s ease-out;
}
@keyframes af-fade { from { opacity: 0; } to { opacity: 1; } }
.af-overlay *, .af-overlay *::before, .af-overlay *::after { box-sizing: border-box; }
.af-overlay button, .af-overlay input { font: inherit; }
.af-shell {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(1660px, 99vw);
  height: min(960px, 97vh);
  overflow: hidden;
  border: 1px solid rgba(104, 243, 255, .24);
  border-radius: 12px;
  background:
    linear-gradient(90deg, rgba(92, 235, 255, .02) 1px, transparent 1px) 0 0 / 48px 48px,
    linear-gradient(rgba(92, 235, 255, .018) 1px, transparent 1px) 0 0 / 48px 48px,
    radial-gradient(ellipse at 52% 0%, rgba(18, 84, 102, .16), transparent 48%),
    #040c12;
  box-shadow: 0 34px 90px rgba(0, 0, 0, .62), inset 0 0 70px rgba(0, 174, 216, .04);
}
.af-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 4;
  background: repeating-linear-gradient(0deg, transparent 0 3px, rgba(128, 245, 255, .012) 3px 4px);
  mix-blend-mode: screen;
  opacity: .5;
}
.af-corner { position: absolute; width: 18px; height: 18px; z-index: 5; pointer-events: none; border-color: var(--af-accent); opacity: .7; }
.af-corner-tl { top: 6px; left: 6px; border-top: 1px solid; border-left: 1px solid; }
.af-corner-tr { top: 6px; right: 6px; border-top: 1px solid; border-right: 1px solid; }
.af-corner-bl { bottom: 6px; left: 6px; border-bottom: 1px solid; border-left: 1px solid; }
.af-corner-br { bottom: 6px; right: 6px; border-bottom: 1px solid; border-right: 1px solid; }
.af-header {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 66px;
  padding: 10px 18px;
  border-bottom: 1px solid var(--af-line);
  background: linear-gradient(180deg, rgba(8, 24, 32, .9), rgba(5, 15, 21, .7));
}
.af-header::after {
  content: "";
  position: absolute; bottom: -1px; left: 18px; width: 220px; height: 1px;
  background: linear-gradient(90deg, var(--af-accent), transparent);
  opacity: .5;
}
.af-brand { display: flex; align-items: center; gap: 11px; min-width: 270px; }
.af-brandmark { display: block; width: 44px; height: 44px; color: var(--af-accent); flex: none; filter: drop-shadow(0 0 12px rgba(57, 231, 255, .17)); }
.af-brandmark svg { width: 44px; height: 44px; display: block; }
.af-brand-copy { min-width: 0; }
.af-brand-row { display: flex; align-items: center; gap: 8px; }
.af-brand-row h1 { margin: 0; font: 650 19px/1.05 "Bahnschrift", "Segoe UI", sans-serif; letter-spacing: .12em; color: #e6fdff; white-space: nowrap; }
.af-version { border: 1px solid var(--af-line-strong); border-radius: 3px; padding: 2px 4px; color: var(--af-muted); font: 500 7px/1 ui-monospace, monospace; letter-spacing: .1em; }
.af-brand-sub { margin-top: 4px; color: var(--af-muted); font: 500 9px/1.2 "Segoe UI", sans-serif; letter-spacing: .055em; white-space: nowrap; }
.af-brand-sub span { margin-left: 9px; color: var(--af-dim); font: 500 8px/1 ui-monospace, monospace; letter-spacing: .1em; }
.af-header-center { display: flex; align-items: center; gap: 15px; flex: 1; min-width: 0; }
.af-status {
  display: inline-flex; align-items: center; gap: 7px; flex: none;
  color: #8af6d9; font: 600 9px/1 ui-monospace, monospace; letter-spacing: .08em; text-transform: uppercase;
}
.af-status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--af-muted); }
.af-status-dot.is-live { background: #42ffcb; box-shadow: 0 0 0 4px rgba(66, 255, 203, .07), 0 0 10px rgba(66, 255, 203, .8); animation: af-pulse 1.9s ease-in-out infinite; }
@keyframes af-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .45; } }
.af-header-divider { width: 1px; height: 22px; background: var(--af-line); }
.af-header-metric { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.af-header-metric small { color: var(--af-dim); font: 600 8px/1 ui-monospace, monospace; letter-spacing: .11em; text-transform: uppercase; }
.af-header-metric strong { color: var(--af-text); font: 500 12px/1.15 ui-monospace, monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 150px; }
.af-header-metric strong em { margin-left: 3px; font-style: normal; color: var(--af-muted); font-size: 9px; }
.af-header-actions { display: flex; align-items: center; gap: 13px; margin-left: auto; }
.af-fps { display: flex; align-items: baseline; gap: 5px; color: var(--af-dim); }
.af-fps small { font: 500 8px/1 ui-monospace, monospace; letter-spacing: .08em; }
.af-fps strong { color: var(--af-muted); font: 500 11px/1 ui-monospace, monospace; }
.af-close {
  display: inline-flex; align-items: center; gap: 8px;
  min-height: 32px; padding: 0 8px 0 10px;
  border: 1px solid var(--af-line); border-radius: 6px;
  background: rgba(11, 30, 39, .72); color: var(--af-muted); cursor: pointer;
}
.af-close span { font: 500 8px/1 ui-monospace, monospace; letter-spacing: .1em; }
.af-close:hover { color: var(--af-text); border-color: var(--af-line-strong); background: rgba(24, 55, 67, .8); }
.af-close:focus-visible, .af-overlay button:focus-visible, .af-overlay input:focus-visible { outline: 1px solid var(--af-accent); outline-offset: 2px; }
.af-body {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 262px minmax(0, 1fr) 306px;
  gap: 9px;
  flex: 1;
  min-height: 0;
  padding: 9px;
}
.af-rail {
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid var(--af-line);
  background: linear-gradient(160deg, rgba(8, 22, 29, .76), rgba(4, 12, 17, .54));
  scrollbar-width: thin;
  scrollbar-color: rgba(104, 234, 255, .25) transparent;
}
.af-rail::-webkit-scrollbar { width: 4px; }
.af-rail::-webkit-scrollbar-thumb { background: rgba(104, 234, 255, .22); border-radius: 4px; }
.af-left { padding: 14px 13px 18px; border-radius: 6px 2px 2px 6px; }
.af-right { padding: 14px 13px 18px; border-radius: 2px 6px 6px 2px; }
.af-left::before, .af-right::before {
  content: ""; position: sticky; top: 0; display: block; height: 1px; margin: -14px -13px 13px;
  background: linear-gradient(90deg, transparent, var(--af-accent), transparent); opacity: .25;
}
.af-panel-head { display: flex; align-items: center; gap: 9px; margin: 2px 0 10px; }
.af-panel-index {
  display: inline-flex; align-items: center; justify-content: center;
  width: 21px; height: 21px; flex: none;
  border: 1px solid var(--af-line-strong); border-radius: 4px;
  color: var(--af-accent); font: 500 8px/1 ui-monospace, monospace;
}
.af-panel-title { display: block; color: var(--af-text); font: 600 9px/1.1 ui-monospace, monospace; letter-spacing: .12em; }
.af-panel-sub { display: block; margin-top: 3px; color: var(--af-dim); font: 500 8px/1 "Segoe UI", sans-serif; letter-spacing: .07em; }
.af-preset-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.af-preset {
  position: relative;
  display: flex; flex-direction: column; align-items: stretch; gap: 2px;
  min-width: 0; padding: 7px 7px 8px;
  border: 1px solid var(--af-line); border-radius: 5px;
  background: rgba(7, 20, 27, .62); color: var(--af-text); cursor: pointer; text-align: left;
  transition: border-color .16s ease, background .16s ease, transform .16s ease;
}
.af-preset:hover { border-color: var(--af-line-strong); background: rgba(16, 42, 51, .6); transform: translateY(-1px); }
.af-preset.is-selected { border-color: color-mix(in srgb, var(--af-accent) 64%, transparent); background: linear-gradient(145deg, color-mix(in srgb, var(--af-accent) 10%, transparent), rgba(7, 20, 27, .8)); box-shadow: inset 0 0 18px color-mix(in srgb, var(--af-accent) 5%, transparent); }
.af-preset-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 3px; min-height: 30px; }
.af-preset-glyph { color: var(--af-muted); display: block; width: 52px; height: 30px; opacity: .86; }
.af-preset-glyph svg { width: 52px; height: 30px; display: block; }
.af-preset.is-selected .af-preset-glyph { color: var(--af-accent); }
.af-preset-cd { color: var(--af-dim); font: 500 7px/1.2 ui-monospace, monospace; white-space: nowrap; }
.af-preset-name { margin-top: 3px; font: 600 10px/1.2 "Segoe UI", sans-serif; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.af-preset-kind { color: var(--af-dim); font: 500 7px/1.2 ui-monospace, monospace; letter-spacing: .035em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-selected-tick { position: absolute; top: 4px; right: 4px; display: grid; place-items: center; width: 14px; height: 14px; color: var(--af-ink); background: var(--af-accent); border-radius: 3px; }
.af-import-zone { position: relative; margin-top: 8px; }
.af-import-zone.is-dragging .af-import-label { border-color: var(--af-accent); background: color-mix(in srgb, var(--af-accent) 11%, rgba(7, 20, 27, .7)); }
.af-import-label {
  display: flex; align-items: center; gap: 8px; min-height: 42px; padding: 7px 8px;
  border: 1px dashed var(--af-line-strong); border-radius: 5px;
  background: rgba(7, 20, 27, .45); cursor: pointer; transition: border-color .16s, background .16s;
}
.af-import-label:hover { border-color: var(--af-accent); background: rgba(13, 39, 48, .52); }
.af-import-label:focus-within { border-color: var(--af-accent); outline: 1px solid var(--af-accent); outline-offset: 2px; }
.af-file-input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
.af-import-icon { display: grid; place-items: center; width: 26px; height: 26px; flex: none; border: 1px solid var(--af-line); border-radius: 4px; color: var(--af-accent); }
.af-import-copy { min-width: 0; display: flex; flex-direction: column; gap: 2px; flex: 1; }
.af-import-copy strong { color: var(--af-text); font: 500 9px/1.2 "Segoe UI", sans-serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-import-copy small { color: var(--af-dim); font: 400 7px/1.25 "Segoe UI", sans-serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-import-badge { flex: none; color: var(--af-accent); font: 500 7px/1 ui-monospace, monospace; letter-spacing: .06em; opacity: .8; }
.af-import-clear {
  position: absolute; top: -5px; right: -5px; display: grid; place-items: center; width: 17px; height: 17px;
  border: 1px solid var(--af-line-strong); border-radius: 50%; background: #071820; color: var(--af-muted); cursor: pointer;
}
.af-import-clear:hover { color: var(--af-text); border-color: var(--af-accent); }
.af-inline-error { margin: 6px 1px 0; color: #ff9e9e; font: 400 8px/1.35 "Segoe UI", sans-serif; }
.af-area-card {
  position: relative; display: grid; grid-template-columns: 1fr auto; gap: 3px 8px;
  margin-top: 8px; padding: 9px 10px 10px; overflow: hidden;
  border: 1px solid var(--af-line); border-radius: 5px;
  background: linear-gradient(120deg, rgba(10, 30, 38, .82), rgba(5, 15, 20, .55));
}
.af-area-label { color: var(--af-muted); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-area-card strong { grid-row: span 2; align-self: center; color: var(--af-text); font: 500 19px/1 ui-monospace, monospace; }
.af-area-card strong small { margin-left: 3px; color: var(--af-muted); font-size: 9px; }
.af-area-meta { color: var(--af-dim); font: 400 7px/1.2 "Segoe UI", sans-serif; }
.af-area-card i { position: absolute; bottom: 0; left: 0; height: 1px; background: var(--af-accent); opacity: .65; box-shadow: 0 0 8px var(--af-accent); }
.af-rail-hint { margin: 0 0 8px; color: var(--af-dim); font: 400 8px/1.4 "Segoe UI", sans-serif; }
.af-left .af-panel-head:nth-of-type(2) { margin-top: 16px; }
.af-range-row { display: block; margin: 0 0 9px; }
.af-range-label { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin-bottom: 4px; color: var(--af-muted); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-range-value { color: var(--af-text); font: 500 10px/1 ui-monospace, monospace; white-space: nowrap; }
.af-range-value small { margin-left: 3px; color: var(--af-dim); font-size: 7px; }
.af-range-row input[type="range"] {
  display: block; width: 100%; height: 14px; margin: 0; cursor: pointer;
  -webkit-appearance: none; appearance: none; background: transparent;
}
.af-range-row input[type="range"]::-webkit-slider-runnable-track {
  height: 2px; border-radius: 2px;
  background: linear-gradient(90deg, var(--af-accent) 0 var(--af-fill), rgba(111, 239, 255, .16) var(--af-fill) 100%);
}
.af-range-row input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none; width: 8px; height: 8px; margin-top: -3px;
  border: 1px solid var(--af-ink); border-radius: 50%; background: var(--af-accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--af-accent) 25%, transparent), 0 0 8px color-mix(in srgb, var(--af-accent) 65%, transparent);
}
.af-range-row input[type="range"]::-moz-range-track { height: 2px; background: rgba(111, 239, 255, .18); }
.af-range-row input[type="range"]::-moz-range-progress { height: 2px; background: var(--af-accent); }
.af-range-row input[type="range"]::-moz-range-thumb { width: 8px; height: 8px; border: 1px solid var(--af-ink); border-radius: 50%; background: var(--af-accent); }
.af-mass-row { display: flex; align-items: center; justify-content: space-between; padding-top: 8px; margin-top: 2px; border-top: 1px solid var(--af-line); color: var(--af-muted); font: 400 8px/1.2 "Segoe UI", sans-serif; }
.af-mass-row strong { color: var(--af-text); font: 500 10px/1 ui-monospace, monospace; }
.af-mass-row strong small { color: var(--af-dim); font-size: 7px; }
.af-stage {
  position: relative; min-width: 0; min-height: 0; overflow: hidden;
  border: 1px solid var(--af-line);
  border-radius: 3px;
  background:
    radial-gradient(ellipse at 50% 42%, rgba(15, 69, 82, .24), transparent 56%),
    #030a0f;
  isolation: isolate;
}
.af-stage::before, .af-stage::after {
  content: ""; position: absolute; z-index: 3; pointer-events: none; width: 22px; height: 22px; border-color: var(--af-accent); opacity: .55;
}
.af-stage::before { top: 8px; left: 8px; border-top: 1px solid; border-left: 1px solid; }
.af-stage::after { right: 8px; bottom: 8px; border-right: 1px solid; border-bottom: 1px solid; }
.af-canvas { position: absolute; inset: 0; display: block; width: 100%; height: 100%; touch-action: none; cursor: grab; }
.af-canvas:active { cursor: grabbing; }
.af-scanlines, .af-vignette { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.af-scanlines { opacity: .35; background: repeating-linear-gradient(0deg, transparent 0 3px, rgba(139, 248, 255, .018) 3px 4px); }
.af-vignette { background: radial-gradient(ellipse at 50% 45%, transparent 38%, rgba(0, 4, 8, .52) 100%); }
.af-hud { position: absolute; left: 15px; right: 15px; z-index: 5; display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; pointer-events: none; }
.af-hud-top { top: 14px; }
.af-hud-bottom { bottom: 14px; align-items: flex-end; }
.af-hud-block { display: flex; flex-direction: column; gap: 4px; }
.af-hud-overline { color: var(--af-muted); font: 600 8px/1.2 ui-monospace, monospace; letter-spacing: .15em; text-transform: uppercase; }
.af-hud-small { color: var(--af-dim); font: 400 7px/1.3 ui-monospace, monospace; letter-spacing: .035em; }
.af-hud-wind { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; padding: 6px 9px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(4, 15, 21, .58); backdrop-filter: blur(4px); pointer-events: none; margin-left: auto; }
.af-hud-wind .af-hud-overline { margin-right: 3px; }
.af-wind-arrow { display: inline-block; color: var(--af-accent); font: 500 17px/1 ui-monospace, monospace; transform-origin: center; transition: transform .2s ease; text-shadow: 0 0 10px var(--af-accent); }
.af-hud-wind strong { color: var(--af-text); font: 500 11px/1 ui-monospace, monospace; white-space: nowrap; }
.af-hud-wind strong small { color: var(--af-muted); font-size: 8px; }
.af-hud-sep { color: var(--af-dim); font: 400 10px/1 ui-monospace, monospace; }
.af-mode-pill { padding: 2px 4px; border: 1px solid color-mix(in srgb, var(--af-accent) 35%, transparent); border-radius: 2px; color: var(--af-accent); font: 500 7px/1.2 ui-monospace, monospace; letter-spacing: .05em; }
.af-view-switch { display: flex; border: 1px solid var(--af-line); border-radius: 4px; overflow: hidden; background: rgba(5, 15, 21, .68); pointer-events: auto; flex: none; }
.af-view-switch button { padding: 6px 8px; border: 0; border-left: 1px solid var(--af-line); background: transparent; color: var(--af-muted); font: 500 7px/1 ui-monospace, monospace; letter-spacing: .06em; cursor: pointer; }
.af-view-switch button:first-child { border-left: 0; }
.af-view-switch button:hover { color: var(--af-text); background: rgba(35, 85, 100, .35); }
.af-view-switch button.is-active { color: var(--af-ink); background: var(--af-accent); }
.af-side-scale { position: absolute; top: 50%; right: 7px; z-index: 4; display: flex; flex-direction: column; align-items: flex-end; gap: 3px; transform: translateY(-50%); color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; pointer-events: none; }
.af-side-scale i { width: 12px; height: 1px; background: var(--af-line-strong); margin-bottom: 5px; }
.af-legend { display: flex; flex-direction: column; gap: 5px; width: 188px; padding: 7px 8px 6px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(4, 15, 21, .65); backdrop-filter: blur(4px); pointer-events: none; }
.af-legend-head { display: flex; justify-content: space-between; gap: 6px; color: var(--af-muted); font: 500 7px/1.2 ui-monospace, monospace; letter-spacing: .06em; }
.af-legend-head span:last-child { color: var(--af-accent); }
.af-legend-gradient { height: 3px; border-radius: 2px; box-shadow: 0 0 12px color-mix(in srgb, var(--af-accent) 20%, transparent); }
.af-legend-labels { display: flex; justify-content: space-between; gap: 4px; color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; }
.af-legend-fast { color: var(--af-muted); }
.af-playbar { display: flex; align-items: center; gap: 9px; padding: 5px 7px 5px 5px; border: 1px solid var(--af-line); border-radius: 5px; background: rgba(4, 15, 21, .76); backdrop-filter: blur(6px); pointer-events: auto; flex-wrap: wrap; max-width: 100%; }
.af-play { display: grid; place-items: center; width: 30px; height: 30px; flex: none; border: 1px solid color-mix(in srgb, var(--af-accent) 45%, transparent); border-radius: 4px; background: color-mix(in srgb, var(--af-accent) 9%, transparent); color: var(--af-accent); cursor: pointer; }
.af-play:hover { background: var(--af-accent); color: var(--af-ink); }
.af-time { display: flex; flex-direction: column; gap: 2px; min-width: 56px; }
.af-time span { color: var(--af-dim); font: 500 6px/1 ui-monospace, monospace; letter-spacing: .08em; }
.af-time strong { color: var(--af-text); font: 500 10px/1 ui-monospace, monospace; }
.af-play-divider { width: 1px; height: 19px; background: var(--af-line); }
.af-chip { display: inline-flex; align-items: center; gap: 4px; height: 25px; padding: 0 6px; border: 1px solid var(--af-line); border-radius: 3px; background: transparent; color: var(--af-muted); font: 500 7px/1 "Segoe UI", sans-serif; cursor: pointer; white-space: nowrap; }
.af-chip:hover { color: var(--af-text); border-color: var(--af-line-strong); }
.af-chip.is-active { color: var(--af-accent); border-color: color-mix(in srgb, var(--af-accent) 38%, transparent); background: color-mix(in srgb, var(--af-accent) 8%, transparent); }
.af-chip svg { flex: none; }
.af-icon-btn { display: grid; place-items: center; width: 25px; height: 25px; border: 1px solid var(--af-line); border-radius: 3px; background: transparent; color: var(--af-muted); cursor: pointer; }
.af-icon-btn:hover { color: var(--af-text); border-color: var(--af-line-strong); }
.af-force-hud { width: 158px; margin-left: auto; padding: 7px 9px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(4, 15, 21, .7); backdrop-filter: blur(4px); pointer-events: none; }
.af-force-head { display: flex; align-items: center; justify-content: space-between; gap: 6px; color: var(--af-muted); font: 500 7px/1.2 ui-monospace, monospace; letter-spacing: .06em; }
.af-live-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--af-dim); }
.af-live-dot.is-live { background: var(--af-accent); box-shadow: 0 0 7px var(--af-accent); }
.af-force-value { display: flex; align-items: baseline; gap: 3px; margin: 3px 0 4px; }
.af-force-value strong { color: var(--af-text); font: 500 19px/1 ui-monospace, monospace; letter-spacing: -.02em; }
.af-force-value span { color: var(--af-accent); font: 500 8px/1 ui-monospace, monospace; }
.af-force-value small { margin-left: auto; color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; }
.af-force-bar { height: 2px; overflow: hidden; background: rgba(102, 239, 255, .12); border-radius: 2px; }
.af-force-bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--af-accent), #fff); box-shadow: 0 0 8px var(--af-accent); transition: width .2s ease; }
.af-force-foot { display: flex; justify-content: space-between; gap: 5px; margin-top: 4px; color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; }
.af-force-foot span:last-child { color: var(--af-muted); }
.af-force-foot small { font-size: 5px; }
.af-stage-note { position: absolute; left: 16px; bottom: 88px; z-index: 4; display: flex; align-items: center; gap: 6px; color: var(--af-dim); font: 400 6px/1.2 ui-monospace, monospace; letter-spacing: .04em; pointer-events: none; }
.af-axis { display: inline-flex; align-items: center; justify-content: center; width: 10px; height: 10px; border: 1px solid var(--af-line-strong); border-radius: 2px; color: var(--af-muted); font: 500 6px/1 ui-monospace, monospace; }
.af-axis-y { color: #a5ffcf; }
.af-axis-z { color: #ff9ed9; }
.af-boot { position: absolute; inset: 0; z-index: 8; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; background: radial-gradient(ellipse at 50% 50%, rgba(9, 34, 44, .84), rgba(2, 7, 10, .96)); color: var(--af-text); text-align: center; }
.af-boot strong { font: 600 10px/1.2 ui-monospace, monospace; letter-spacing: .15em; color: var(--af-accent); }
.af-boot > span { color: var(--af-muted); font: 400 9px/1.4 "Segoe UI", sans-serif; max-width: 300px; }
.af-boot-orbit { position: relative; width: 74px; height: 74px; margin-bottom: 9px; }
.af-boot-orbit i { position: absolute; inset: 7px; border: 1px solid var(--af-line-strong); border-radius: 50%; animation: af-spin 2.4s linear infinite; }
.af-boot-orbit i:nth-child(1) { border-color: transparent var(--af-accent) transparent transparent; }
.af-boot-orbit i:nth-child(2) { inset: 17px; border-color: transparent transparent var(--af-muted) transparent; animation-duration: 1.8s; animation-direction: reverse; }
.af-boot-orbit i:nth-child(3) { inset: 28px; border: 0; background: var(--af-accent); box-shadow: 0 0 18px var(--af-accent); animation: af-pulse 1.1s ease-in-out infinite; }
@keyframes af-spin { to { transform: rotate(360deg); } }
.af-boot-bar { width: 170px; height: 2px; margin-top: 6px; overflow: hidden; background: rgba(111, 239, 255, .12); }
.af-boot-bar i { display: block; width: 45%; height: 100%; background: var(--af-accent); box-shadow: 0 0 8px var(--af-accent); animation: af-load 1.4s ease-in-out infinite; }
@keyframes af-load { 0% { transform: translateX(-110%); } 100% { transform: translateX(260%); } }
.af-boot-error { gap: 10px; }
.af-error-mark { display: grid; place-items: center; width: 34px; height: 34px; margin-bottom: 3px; border: 1px solid rgba(255, 142, 142, .5); border-radius: 50%; color: #ff9e9e; font: 500 16px/1 ui-monospace, monospace; }
.af-retry { margin-top: 5px; padding: 7px 14px; border: 1px solid var(--af-line-strong); border-radius: 4px; background: rgba(17, 44, 53, .7); color: var(--af-text); font: 500 9px/1 "Segoe UI", sans-serif; cursor: pointer; }
.af-retry:hover { border-color: var(--af-accent); color: var(--af-accent); }
.af-wind-display { display: flex; align-items: flex-start; justify-content: space-between; padding: 1px 0 8px; }
.af-wind-label { display: block; margin-bottom: 4px; color: var(--af-muted); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-wind-display strong { color: var(--af-text); font: 500 31px/1 ui-monospace, monospace; letter-spacing: -.055em; }
.af-wind-display strong small { margin-left: 4px; color: var(--af-accent); font-size: 10px; letter-spacing: .02em; }
.af-wind-kmh { display: block; margin-top: 5px; color: var(--af-dim); font: 400 7px/1.2 ui-monospace, monospace; }
.af-wind-icon { color: var(--af-accent); opacity: .65; padding-top: 7px; }
.af-quick-row { display: flex; gap: 4px; margin: 1px 0 8px; }
.af-quick-row button { flex: 1; min-width: 0; padding: 4px 2px; border: 1px solid var(--af-line); border-radius: 3px; background: rgba(7, 20, 27, .5); color: var(--af-muted); font: 500 7px/1.2 ui-monospace, monospace; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-quick-row button:hover { border-color: var(--af-line-strong); color: var(--af-text); }
.af-quick-row button.is-active { border-color: color-mix(in srgb, var(--af-accent) 48%, transparent); color: var(--af-accent); background: color-mix(in srgb, var(--af-accent) 8%, transparent); }
.af-direction-block { padding-top: 10px; margin-top: 2px; border-top: 1px solid var(--af-line); }
.af-direction-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 2px; color: var(--af-muted); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-direction-head strong { color: var(--af-accent); font: 500 14px/1 ui-monospace, monospace; }
.af-compass-wrap { display: flex; align-items: center; gap: 4px; margin: 3px 0 4px; }
.af-compass { display: block; width: 116px; height: 116px; flex: none; margin-left: -3px; }
.af-compass-readout { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.af-compass-readout span { color: var(--af-dim); font: 500 6px/1.2 ui-monospace, monospace; letter-spacing: .07em; }
.af-compass-readout strong { color: var(--af-text); font: 600 9px/1.2 "Segoe UI", sans-serif; }
.af-compass-readout small { color: var(--af-muted); font: 400 7px/1.2 ui-monospace, monospace; }
.af-direction-presets { margin-top: 5px; }
.af-right .af-panel-head:nth-of-type(2) { margin-top: 16px; }
.af-telemetry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.af-metric { position: relative; min-width: 0; padding: 6px 7px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(6, 18, 24, .55); overflow: hidden; }
.af-metric span { display: block; margin-bottom: 4px; color: var(--af-dim); font: 500 7px/1.2 "Segoe UI", sans-serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-metric strong { color: var(--af-text); font: 500 13px/1 ui-monospace, monospace; letter-spacing: -.02em; white-space: nowrap; }
.af-metric strong small { margin-left: 2px; color: var(--af-muted); font-size: 7px; }
.af-metric-main { grid-column: span 2; padding: 8px; background: linear-gradient(110deg, color-mix(in srgb, var(--af-accent) 8%, transparent), rgba(6, 18, 24, .55)); }
.af-metric-main strong { font-size: 23px; }
.af-metric-main i { position: absolute; bottom: 0; left: 0; height: 1px; background: var(--af-accent); box-shadow: 0 0 8px var(--af-accent); }
.af-chart { margin-top: 6px; padding: 7px 7px 5px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(5, 16, 21, .62); }
.af-chart-head { display: flex; justify-content: space-between; gap: 5px; color: var(--af-dim); font: 500 6px/1.2 ui-monospace, monospace; letter-spacing: .04em; }
.af-chart-head span:last-child { color: var(--af-muted); }
.af-chart svg { display: block; width: 100%; height: 58px; margin-top: 4px; overflow: visible; }
.af-chart-foot { display: flex; justify-content: space-between; color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; }
.af-auto-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 1px 0 8px; }
.af-auto-title { display: block; color: var(--af-text); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-auto-row small { display: block; margin-top: 3px; color: var(--af-dim); font: 400 7px/1.25 "Segoe UI", sans-serif; }
.af-switch { position: relative; width: 29px; height: 15px; flex: none; padding: 0; border: 1px solid var(--af-line-strong); border-radius: 10px; background: rgba(9, 24, 31, .8); cursor: pointer; }
.af-switch span { position: absolute; top: 2px; left: 2px; width: 9px; height: 9px; border-radius: 50%; background: var(--af-dim); transition: transform .16s ease, background .16s ease, box-shadow .16s ease; }
.af-switch.is-on { border-color: color-mix(in srgb, var(--af-accent) 50%, transparent); background: color-mix(in srgb, var(--af-accent) 14%, transparent); }
.af-switch.is-on span { transform: translateX(14px); background: var(--af-accent); box-shadow: 0 0 8px var(--af-accent); }
.af-palette-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
.af-palette-row .af-swatch:last-child:nth-child(odd) { grid-column: 1 / -1; }
.af-swatch { display: flex; align-items: center; gap: 5px; min-width: 0; padding: 4px 5px; border: 1px solid var(--af-line); border-radius: 3px; background: rgba(6, 18, 24, .5); color: var(--af-muted); font: 500 7px/1.2 "Segoe UI", sans-serif; cursor: pointer; text-align: left; }
.af-swatch:hover { border-color: var(--af-line-strong); color: var(--af-text); }
.af-swatch.is-selected { border-color: color-mix(in srgb, var(--af-accent) 54%, transparent); color: var(--af-text); }
.af-swatch-chip { width: 14px; height: 9px; flex: none; border-radius: 2px; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .12); }
.af-swatch span:nth-child(2) { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-swatch em { margin-left: auto; color: var(--af-accent); font: 500 5px/1 ui-monospace, monospace; font-style: normal; letter-spacing: .04em; }
.af-field-foot { display: flex; flex-wrap: wrap; gap: 4px 8px; margin-top: 8px; padding-top: 7px; border-top: 1px solid var(--af-line); color: var(--af-dim); font: 500 6px/1.2 ui-monospace, monospace; letter-spacing: .02em; }
.af-field-foot span { display: inline-flex; align-items: center; gap: 3px; }
.af-mini-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--af-accent); box-shadow: 0 0 4px var(--af-accent); }
.af-disclaimer { margin: 13px 0 0; color: var(--af-dim); font: 400 7px/1.45 "Segoe UI", sans-serif; border-top: 1px solid var(--af-line); padding-top: 8px; }
@media (max-width: 1320px) {
  .af-body { grid-template-columns: 238px minmax(0, 1fr) 286px; gap: 7px; padding: 7px; }
  .af-left { padding: 12px 11px 16px; }
  .af-right { padding: 12px 11px 16px; }
  .af-dock-stats { gap: 11px; }
  .af-playbar { gap: 6px; }
  .af-chip span { display: none; }
  .af-chip { padding: 0 7px; }
  .af-legend { display: none; }
}
@media (max-width: 1120px) {
  .af-body { grid-template-columns: 218px minmax(0, 1fr) 260px; }
  .af-brand { min-width: 220px; }
  .af-brand-row h1 { font-size: 17px; }
  .af-header-center .af-header-metric { display: none; }
  .af-header-center { justify-content: flex-start; }
  .af-preset-grid { gap: 4px; }
  .af-preset-name { font-size: 9px; }
  .af-coordinates { display: none; }
  .af-force-hud { display: none; }
  .af-playbar { max-width: 100%; }
}
@media (max-width: 920px) {
  .af-overlay { padding: 0; align-items: stretch; }
  .af-shell { width: 100vw; height: 100vh; max-height: 100vh; border-radius: 0; border-left: 0; border-right: 0; }
  .af-header { min-height: 58px; padding: 8px 12px; gap: 10px; }
  .af-brand { min-width: 0; flex: 1; }
  .af-brandmark, .af-brandmark svg { width: 34px; height: 34px; }
  .af-brand-row h1 { font-size: 15px; }
  .af-brand-sub span { display: none; }
  .af-header-center { display: none; }
  .af-body { display: flex; flex-direction: column; overflow-y: auto; padding: 7px; gap: 7px; }
  .af-stage { order: -1; min-height: 470px; flex: none; }
  .af-left, .af-right { overflow: visible; min-height: auto; flex: none; border-radius: 5px; }
  .af-left { display: grid; grid-template-columns: 1fr 1fr; column-gap: 13px; align-items: start; }
  .af-left .af-panel-head { grid-column: 1 / -1; }
  .af-left .af-preset-grid, .af-left .af-import-zone, .af-left .af-inline-error, .af-left .af-area-card { grid-column: 1 / -1; }
  .af-left .af-panel-head:nth-of-type(2) { grid-column: 1 / -1; margin-top: 9px; }
  .af-left .af-rail-hint { grid-column: 1 / -1; }
  .af-left .af-mass-row { grid-column: 1 / -1; }
  .af-right { display: grid; grid-template-columns: 1fr 1fr; column-gap: 14px; align-items: start; }
  .af-right .af-panel-head { grid-column: 1 / -1; }
  .af-right .af-panel-head:nth-of-type(2) { margin-top: 9px; }
  .af-right .af-telemetry-grid, .af-right .af-chart, .af-right .af-auto-row, .af-right .af-palette-row, .af-right .af-field-foot, .af-right .af-disclaimer { grid-column: 1 / -1; }
  .af-right .af-direction-block { grid-column: 1 / -1; }
  .af-right .af-rail-hint { grid-column: 1 / -1; }
  .af-legend { display: flex; }
  .af-force-hud { display: block; width: 145px; }
  .af-playbar { max-width: calc(100% - 150px); }
  .af-coordinates { display: flex; }
}
@media (max-width: 760px) {
  .af-legend { display: none; }
  .af-force-hud { display: none; }
  .af-playbar { max-width: 100%; }
}
@media (max-width: 640px) {
  .af-stage { min-height: 400px; }
  .af-hud { left: 9px; right: 9px; }
  .af-hud-top { top: 9px; }
  .af-hud-bottom { bottom: 9px; flex-wrap: wrap; }
  .af-hud-block.af-coordinates { display: none; }
  .af-hud-wind { margin-left: 0; }
  .af-view-switch { margin-left: auto; }
  .af-legend { display: none; }
  .af-force-hud { display: none; }
  .af-playbar { width: 100%; max-width: 100%; justify-content: space-between; }
  .af-stage-note { display: none; }
  .af-side-scale { display: none; }
  .af-left { display: block; }
  .af-right { display: block; }
  .af-brand-sub { max-width: 190px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .af-version { display: none; }
  .af-fps { display: none; }
  .af-header-metric { display: none; }
  .af-shell { overflow-y: auto; }
  .af-body { overflow: visible; }
}
`;

const plugin = {
  inject: ['slots', 'locale'],
  apply(ctx) {
    ctx.effect(() => {
      const disposeEn = ctx.locale.register(NS, 'en', en);
      const disposeZh = ctx.locale.register(NS, 'zh', zh);
      return () => {
        disposeEn();
        disposeZh();
      };
    });

    const { Launcher, OverlayHost } = buildComponents(ctx);
    ctx.slots.inject('conversation.input.dock', () =>
      ctx.slots.register(
        {
          name: 'conversation.input.dock',
          id: 'aeroflow-launcher',
          order: 30,
        },
        Launcher,
      ),
    );
    ctx.slots.inject('shell.overlay', () =>
      ctx.slots.register(
        {
          name: 'shell.overlay',
          id: 'aeroflow-lab',
          order: 30,
        },
        OverlayHost,
      ),
    );
  },
};

export default plugin;
