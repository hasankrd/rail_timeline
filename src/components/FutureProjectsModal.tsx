import React, { useState } from 'react';
import {
  FutureProjectLine,
  UNDER_CONSTRUCTION_LINES,
  PLANNED_PROJECT_LINES,
} from '../data/futureProjectsData';
import {
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  DraftingCompass,
  HardHat,
  MapPin,
  Navigation,
  Sparkles,
  TrendingUp,
  X,
  Layers,
} from 'lucide-react';

interface FutureProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'construction' | 'project';
  onFlyToLine?: (line: FutureProjectLine) => void;
  showConstructionOnMap: boolean;
  showProjectsOnMap: boolean;
  onToggleConstructionOnMap: () => void;
  onToggleProjectsOnMap: () => void;
}

export const FutureProjectsModal: React.FC<FutureProjectsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'construction',
  onFlyToLine,
  showConstructionOnMap,
  showProjectsOnMap,
  onToggleConstructionOnMap,
  onToggleProjectsOnMap,
}) => {
  const [activeTab, setActiveTab] = useState<'construction' | 'project'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const lines = activeTab === 'construction' ? UNDER_CONSTRUCTION_LINES : PLANNED_PROJECT_LINES;
  const filteredLines = lines.filter((line) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      line.name.toLowerCase().includes(q) ||
      line.code.toLowerCase().includes(q) ||
      line.shortName.toLowerCase().includes(q) ||
      line.stations.some((s) => s.name.toLowerCase().includes(q))
    );
  });

  const totalKm = lines.reduce((acc, l) => acc + l.lengthKm, 0);
  const totalStations = lines.reduce((acc, l) => acc + l.stationCount, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-neutral-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl h-[94vh] sm:h-auto sm:max-h-[90vh] bg-neutral-900 border border-neutral-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-100">
        {/* Header */}
        <div className="px-5 py-4 border-b border-neutral-800 bg-neutral-950/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-xl ${
                activeTab === 'construction'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
              }`}
            >
              {activeTab === 'construction' ? (
                <HardHat className="w-6 h-6" />
              ) : (
                <DraftingCompass className="w-6 h-6" />
              )}
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-heading flex items-center gap-2">
                <span>
                  {activeTab === 'construction'
                    ? 'İnşaası Devam Eden Raylı Sistemler'
                    : 'Proje Aşamasındaki Raylı Sistemler'}
                </span>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    activeTab === 'construction'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                  }`}
                >
                  {lines.length} Hat ({totalKm.toFixed(1)} km)
                </span>
              </h2>
              <p className="text-xs text-neutral-400">
                {activeTab === 'construction'
                  ? 'İstanbul genelinde yapımı süren metro hatları, fiziki gerçekleşme oranları ve açılış hedefleri'
                  : 'Fizibilite, ÇED ve ihale aşamasındaki vizyon metro ve tramvay projeleri'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              title="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switcher & Controls Bar */}
        <div className="px-5 py-3 border-b border-neutral-800 bg-neutral-900/90 flex flex-wrap items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-xl border border-neutral-800">
            <button
              type="button"
              onClick={() => setActiveTab('construction')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'construction'
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <HardHat className="w-3.5 h-3.5" />
              <span>İnşaası Devam Edenler</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-neutral-900/60 font-mono">
                {UNDER_CONSTRUCTION_LINES.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('project')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'project'
                  ? 'bg-indigo-500 text-white font-bold shadow-md shadow-indigo-500/20'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <DraftingCompass className="w-3.5 h-3.5" />
              <span>Proje Aşamasındakiler</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-neutral-900/60 font-mono">
                {PLANNED_PROJECT_LINES.length}
              </span>
            </button>
          </div>

          {/* Map Layer Overlay Toggle for current category */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={
                activeTab === 'construction'
                  ? onToggleConstructionOnMap
                  : onToggleProjectsOnMap
              }
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                (activeTab === 'construction' && showConstructionOnMap) ||
                (activeTab === 'project' && showProjectsOnMap)
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                  : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-600'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>
                {(activeTab === 'construction' && showConstructionOnMap) ||
                (activeTab === 'project' && showProjectsOnMap)
                  ? 'Haritada Gösteriliyor'
                  : 'Harita Katmanını Aç'}
              </span>
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {filteredLines.length === 0 ? (
            <div className="text-center py-12 text-neutral-400">
              Arama kriterlerine uygun hat bulunamadı.
            </div>
          ) : (
            filteredLines.map((line) => (
              <div
                key={line.id}
                className="p-4 sm:p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-neutral-700 transition-all shadow-md flex flex-col gap-3 group"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span
                      style={{ backgroundColor: line.color }}
                      className="px-2.5 py-1 rounded-lg text-xs font-black text-white shrink-0 shadow-sm"
                    >
                      {line.code}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        {line.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-neutral-400">
                        <span className="font-semibold text-neutral-300">
                          {line.lengthKm} km
                        </span>
                        <span>•</span>
                        <span>{line.stationCount} İstasyon</span>
                        <span>•</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            line.authority === 'İBB'
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                              : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          {line.authorityFullName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Status */}
                  <div className="flex items-center gap-2 self-start">
                    {onFlyToLine && (
                      <button
                        type="button"
                        onClick={() => {
                          onFlyToLine(line);
                          onClose();
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-cyan-300 hover:text-white border border-neutral-700 text-xs font-semibold transition-all shadow-sm active:scale-95"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Haritada Gör</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Progress bar (if under construction) or Status badge */}
                {line.progressPercent !== undefined && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-400 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                        <span>Fiziksel İlerleme:</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-amber-300 text-sm">
                          %{line.progressPercent}
                        </span>
                        {line.targetYear && (
                          <span className="text-neutral-400 text-[11px]">
                            (Hedef: {line.targetYear})
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden p-0.5">
                      <div
                        style={{
                          width: `${line.progressPercent}%`,
                          backgroundColor: line.color,
                        }}
                        className="h-full rounded-full transition-all duration-500 shadow-sm"
                      />
                    </div>
                  </div>
                )}

                {/* Status text for projects */}
                {line.category === 'project' && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                    <DraftingCompass className="w-3.5 h-3.5 shrink-0" />
                    <span>Durum: {line.statusText}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {line.description}
                </p>

                {/* Stations list pills */}
                <div className="pt-2 border-t border-neutral-800/80">
                  <span className="text-[11px] font-semibold text-neutral-400 block mb-1.5">
                    Güzergah ve İstasyonlar:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {line.stations.map((st, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[11px] px-2 py-0.5 rounded-lg border ${
                          st.isTransfer
                            ? 'bg-neutral-800 text-white font-semibold border-neutral-600'
                            : 'bg-neutral-900/80 text-neutral-300 border-neutral-800'
                        }`}
                        title={st.transfers ? `Aktarma: ${st.transfers.join(', ')}` : undefined}
                      >
                        {st.name}
                        {st.isTransfer && ' ⇄'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-neutral-800 bg-neutral-950/80 text-xs text-neutral-400 flex items-center justify-between">
          <span>Veriler İBB Raylı Sistem Dairesi ve T.C. Ulaştırma Bakanlığı güncel verileri ile uyumludur.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
