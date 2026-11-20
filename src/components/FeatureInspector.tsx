import React from 'react';
import { KmlLayerItem } from '../types';
import { formatDateLong } from '../utils/dateUtils';
import { Calendar, MapPin, Navigation, X } from 'lucide-react';

interface FeatureInspectorProps {
  feature: any | null;
  layer: KmlLayerItem | null;
  onClose: () => void;
  onFlyToCoordinates?: (coords: [number, number]) => void;
}

export const FeatureInspector: React.FC<FeatureInspectorProps> = ({
  feature,
  layer,
  onClose,
  onFlyToCoordinates,
}) => {
  if (!feature || !layer) return null;

  const props = feature.properties || {};
  const name = props.name || 'Site Feature';
  const desc = props.description || '';
  const geomType = feature.geometry?.type || '';
  const coordinates = feature.geometry?.coordinates;

  let coordsDisplay = '';
  const isPoint = geomType === 'Point' && Array.isArray(coordinates);
  if (isPoint) {
    coordsDisplay = `${coordinates[1].toFixed(4)}° N, ${coordinates[0].toFixed(4)}° E`;
  }

  return (
    <div className="fixed bottom-28 right-4 z-40 w-full max-w-xs bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[50vh] animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-950/60">
        <div className="flex items-center gap-2">
          <span
            style={{ backgroundColor: layer.color || '#EE2229' }}
            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
          />
          <span className="text-xs font-semibold text-neutral-300">
            {isPoint ? 'Station Information' : 'Railway Track Segment'}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 overflow-y-auto flex flex-col gap-3 text-xs">
        <div>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400">
            {layer.category || layer.name}
          </span>
          <h3 className="text-sm font-bold text-white font-heading leading-snug mt-0.5">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 mt-2 font-semibold" style={{ color: layer.color || '#EE2229' }}>
            <Calendar className="w-3.5 h-3.5" />
            <span>Opened: {formatDateLong(layer.date)}</span>
          </div>
        </div>

        {coordsDisplay && (
          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-[11px] text-neutral-300 font-mono">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: layer.color || '#EE2229' }} />
              <span>{coordsDisplay}</span>
            </div>
            {onFlyToCoordinates && (
              <button
                type="button"
                onClick={() => onFlyToCoordinates([coordinates[0], coordinates[1]])}
                title="Zoom into station location"
                className="p-1 rounded-lg bg-red-600/30 hover:bg-red-600 text-red-200 hover:text-white transition-colors"
              >
                <Navigation className="w-3 h-3" />
              </button>
            )}
          </div>
        )}

        {desc && (
          <div className="p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800 text-neutral-300 leading-relaxed max-h-36 overflow-y-auto text-[11.5px]">
            {desc}
          </div>
        )}

        {isPoint && onFlyToCoordinates && (
          <button
            type="button"
            onClick={() => onFlyToCoordinates([coordinates[0], coordinates[1]])}
            className="w-full py-2 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-red-600/30 transition-all active:scale-98"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Zoom to Station</span>
          </button>
        )}
      </div>
    </div>
  );
};
