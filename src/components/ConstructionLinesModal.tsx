import React, { useMemo, useState } from 'react';
import { FutureProjectLine, UNDER_CONSTRUCTION_LINES } from '../data/futureProjectsData';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  HardHat,
  Layers,
  MapPin,
  Search,
  Sparkles,
  X,
} from 'lucide-react';

interface ConstructionLinesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLine: FutureProjectLine | null;
  onSelectLine: (line: FutureProjectLine | null) => void;
}

export const ConstructionLinesModal: React.FC<ConstructionLinesModalProps> = ({
  isOpen,
  onClose,
  selectedLine,
  onSelectLine,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [authorityFilter, setAuthorityFilter] = useState<'all' | 'İBB' | 'UAB'>('all');

  const filteredLines = useMemo(() => {
    return UNDER_CONSTRUCTION_LINES.filter((line) => {
      if (authorityFilter !== 'all' && line.authority !== authorityFilter) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        line.code.toLowerCase().includes(q) ||
        line.name.toLowerCase().includes(q) ||
        line.shortName.toLowerCase().includes(q) ||
        line.stations.some((s) => s.name.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, authorityFilter]);

  const totalKm = useMemo(() => {
    return UNDER_CONSTRUCTION_LINES.reduce((sum, l) => sum + l.lengthKm, 0);
  }, []);

  const avgProgress = useMemo(() => {
    const total = UNDER_CONSTRUCTION_LINES.reduce((sum, l) => sum + (l.progressPercent || 0), 0);
    const avg = total / UNDER_CONSTRUCTION_LINES.length;
    return avg % 1 === 0 ? avg.toString() : avg.toFixed(1);
  }, []);

  const ibbCount = useMemo(() => UNDER_CONSTRUCTION_LINES.filter((l) => l.authority === 'İBB').length, []);
  const uabCount = useMemo(() => UNDER_CONSTRUCTION_LINES.filter((l) => l.authority === 'UAB').length, []);

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        onClick={onClose}
        className="md:hidden fixed inset-0 bg-black/65 backdrop-blur-xs z-40 transition-opacity animate-in fade-in"
      />

      <aside
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        className="fixed md:relative inset-y-0 left-0 z-50 md:z-20 w-[88vw] max-w-[360px] sm:max-w-[400px] md:w-[380px] lg:w-[420px] h-full shrink-0 bg-neutral-950 border-r border-neutral-800 flex flex-col overflow-hidden text-neutral-100 select-text shadow-2xl animate-in slide-in-from-left duration-200"
        aria-label="İnşaası Devam Eden Raylı Sistemler Paneli"
      >
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-neutral-800 bg-neutral-950/90 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-inner shrink-0">
            <HardHat className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-bold text-white font-heading truncate flex items-center gap-1.5">
              <span>İnşaası Devam Edenler</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {UNDER_CONSTRUCTION_LINES.length} Hat
              </span>
            </h2>
            <p className="text-[11px] text-neutral-400 truncate">
              {totalKm.toFixed(1)} km • Ort. %{avgProgress} Tamamlandı
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors border border-neutral-700/60 shrink-0 cursor-pointer"
          title="Paneli Kapat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Search & Authority Filter */}
      <div className="px-3.5 py-2.5 bg-neutral-900/80 border-b border-neutral-800/80 flex flex-col gap-2 shrink-0">
        <div className="relative w-full">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Hat adı, kod veya istasyon ara (M12, M1B, M7)..."
            className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl pl-8.5 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/80"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs"
            >
              Temizle
            </button>
          )}
        </div>

        {uabCount > 0 ? (
          <div className="flex items-center gap-1 bg-neutral-950 rounded-xl p-0.5 border border-neutral-800 text-[11px]">
            <button
              type="button"
              onClick={() => setAuthorityFilter('all')}
              className={`flex-1 py-1 rounded-lg text-center transition-all ${
                authorityFilter === 'all'
                  ? 'bg-neutral-800 text-white font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Tümü ({UNDER_CONSTRUCTION_LINES.length})
            </button>
            <button
              type="button"
              onClick={() => setAuthorityFilter('İBB')}
              className={`flex-1 py-1 rounded-lg text-center transition-all flex items-center justify-center gap-1 ${
                authorityFilter === 'İBB'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>İBB ({ibbCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setAuthorityFilter('UAB')}
              className={`flex-1 py-1 rounded-lg text-center transition-all flex items-center justify-center gap-1 ${
                authorityFilter === 'UAB'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>UAB ({uabCount})</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between px-2.5 py-1 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px]">
            <span className="text-neutral-400">İdare:</span>
            <span className="flex items-center gap-1.5 font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>İBB Raylı Sistemler ({ibbCount} Proje)</span>
            </span>
          </div>
        )}
      </div>

      {/* Lines List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
        <div className="text-[11px] text-neutral-400 flex items-center justify-between px-1">
          <span>Haritada görmek için bir hatta tıklayın:</span>
          {selectedLine && (
            <button
              type="button"
              onClick={() => onSelectLine(null)}
              className="text-amber-400 hover:text-amber-300 font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
            >
              <span>Seçimi Kaldır ({selectedLine.code})</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {filteredLines.length === 0 ? (
          <div className="py-12 text-center text-neutral-400 text-xs">
            Arama kriterlerine uygun inşaat hattı bulunamadı.
          </div>
        ) : (
          filteredLines.map((line) => {
            const isSelected = selectedLine?.id === line.id;
            const progress = line.progressPercent || 0;

            const handleCardClick = () => {
              if (isSelected) {
                onSelectLine(null);
              } else {
                onSelectLine(line);
                // On mobile screens, automatically close drawer so the user sees the map update immediately
                if (typeof window !== 'undefined' && window.innerWidth < 768) {
                  onClose();
                }
              }
            };

            return (
              <div
                key={line.id}
                onClick={handleCardClick}
                className={`rounded-2xl border p-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-400 ring-2 ring-amber-400/50 shadow-xl shadow-amber-500/10'
                    : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/90'
                }`}
              >
                <div className="flex flex-col gap-2">
                  {/* Top: Code badge and Line Name & Select Button */}
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <div
                        style={{ backgroundColor: line.color }}
                        className="px-2.5 py-1 rounded-xl font-heading font-black text-xs text-white shadow-md shrink-0 flex items-center justify-center min-w-[48px]"
                      >
                        {line.code}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                          {line.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                              line.authority === 'UAB'
                                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}
                          >
                            {line.authority}
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            {line.lengthKm} km • {line.stationCount} İst.
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick();
                      }}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all shrink-0 active:scale-95 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-neutral-950 font-bold border border-amber-400 shadow-amber-500/30'
                          : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700'
                      }`}
                    >
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{isSelected ? 'Haritada' : 'Haritada Gör'}</span>
                    </button>
                  </div>

                  {/* Middle: Progress Bar & Predicted Open Date */}
                  <div className="flex items-center justify-between gap-3 pt-1 border-t border-neutral-800/60 text-xs">
                    {/* Progress */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-[10px] text-neutral-400 shrink-0">İlerleme:</span>
                      <div className="flex-1 h-2 rounded-full bg-neutral-950 overflow-hidden border border-neutral-800">
                        <div
                          style={{ width: `${progress}%` }}
                          className={`h-full rounded-full transition-all duration-500 ${
                            progress >= 85
                              ? 'bg-emerald-400'
                              : progress >= 70
                              ? 'bg-amber-400'
                              : 'bg-cyan-400'
                          }`}
                        />
                      </div>
                      <span className="font-mono font-bold text-[11px] text-white shrink-0">
                        %{progress}
                      </span>
                    </div>

                    {/* Predicted Open Time */}
                    <div className="flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span className="font-bold text-white font-mono bg-neutral-950 px-1.5 py-0.5 rounded-lg border border-neutral-800 text-[10px]">
                        {line.targetYear}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div className="px-3.5 py-2.5 border-t border-neutral-800 bg-neutral-950/90 flex items-center justify-between text-[11px] text-neutral-400 shrink-0">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
          <span className="truncate">
            {selectedLine
              ? `${selectedLine.code} haritada gösteriliyor`
              : 'Haritada hat seçilmedi'}
          </span>
        </div>

        {selectedLine ? (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={onClose}
              className="md:hidden px-2.5 py-1 rounded-xl text-amber-950 bg-amber-400 hover:bg-amber-300 font-bold transition-all cursor-pointer"
            >
              Haritada Gör
            </button>
            <button
              type="button"
              onClick={() => onSelectLine(null)}
              className="px-2.5 py-1 rounded-xl text-amber-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 font-semibold transition-colors cursor-pointer"
            >
              Kaldır
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded-xl font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
          >
            Kapat
          </button>
        )}
      </div>
    </aside>
    </>
  );
};
