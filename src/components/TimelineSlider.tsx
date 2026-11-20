import React, { useEffect, useMemo, useState } from 'react';
import { DatePoint, KmlLayerItem, TimeFilterMode } from '../types';
import {
  MONTH_NAMES_FULL,
  MONTH_NAMES_SHORT,
  dateToMonthIndex,
  findAdjacentLayerDates,
  formatDateLong,
  monthIndexToDate,
} from '../utils/dateUtils';
import {
  BarChart3,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  DraftingCompass,
  HardHat,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from 'lucide-react';
import { calculateNetworkStats } from '../utils/lineStats';

interface TimelineSliderProps {
  currentDate: DatePoint;
  onChangeDate: (date: DatePoint) => void;
  layers: KmlLayerItem[];
  filterMode: TimeFilterMode;
  onChangeFilterMode: (mode: TimeFilterMode) => void;
  minYear?: number;
  maxYear?: number;
  isConstructionActive?: boolean;
  isProjectsActive?: boolean;
  onToggleConstruction?: () => void;
  onToggleProjects?: () => void;
  onOpenYearlyStats?: () => void;
}

export const TimelineSlider: React.FC<TimelineSliderProps> = ({
  currentDate,
  onChangeDate,
  layers,
  filterMode,
  onChangeFilterMode,
  minYear = 1989,
  maxYear = 2026,
  isConstructionActive = false,
  isProjectsActive = false,
  onToggleConstruction,
  onToggleProjects,
  onOpenYearlyStats,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(1000); // ms per month
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const today = useMemo(() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1 };
  }, []);

  const effectiveMinYear = Math.min(minYear, today.year);
  const effectiveMaxYear = Math.max(maxYear, today.year);

  const minIndex = useMemo(() => dateToMonthIndex({ year: effectiveMinYear, month: 1 }), [effectiveMinYear]);
  const maxIndex = useMemo(() => dateToMonthIndex({ year: effectiveMaxYear, month: 12 }), [effectiveMaxYear]);
  const totalMonths = maxIndex - minIndex + 1;

  const currentIdx = dateToMonthIndex(currentDate);
  const isToday = currentDate.year === today.year && currentDate.month === today.month;

  const handleGoToToday = () => {
    onChangeDate(today);
  };

  // Network kilometer statistics: Cumulative Network vs Newly Opened, and Metro İstanbul vs UAB builders
  const cumulativeStats = useMemo(
    () => calculateNetworkStats(layers, currentDate, 'cumulative'),
    [layers, currentDate]
  );

  const exactMonthStats = useMemo(
    () => calculateNetworkStats(layers, currentDate, 'exact-month'),
    [layers, currentDate]
  );

  const activeStats = filterMode === 'cumulative' ? cumulativeStats : exactMonthStats;

  // Year tick markers for the timeline rail (clean 1989 to 2026 spacing)
  const yearMarkers = useMemo(() => {
    const list: { year: number; percent: number; showLabel: boolean; showLabelMobile: boolean; isMajor: boolean }[] = [];
    for (let y = effectiveMinYear; y <= effectiveMaxYear; y++) {
      const idx = dateToMonthIndex({ year: y, month: 1 });
      const percent = ((idx - minIndex) / (totalMonths - 1)) * 100;
      
      const isStart = y === effectiveMinYear;
      const isEnd = y === effectiveMaxYear;
      const isTenYear = y % 10 === 0;
      const isFiveYear = y % 5 === 0 && y !== 1990; // Avoid crowding next to 1989
      const showLabel = isStart || isEnd || isFiveYear;
      const showLabelMobile = isStart || isEnd || isTenYear;
      const isMajor = showLabel || y % 5 === 0;

      list.push({ year: y, percent, showLabel, showLabelMobile, isMajor });
    }
    return list;
  }, [effectiveMinYear, effectiveMaxYear, minIndex, totalMonths]);

  // Find date points on timeline
  const dateMilestones = useMemo(() => {
    const dateMap = new Map<number, { color: string; date: DatePoint }>();
    layers.forEach((l) => {
      const idx = dateToMonthIndex(l.date);
      if (!dateMap.has(idx)) {
        dateMap.set(idx, { color: l.color, date: l.date });
      }
    });

    return Array.from(dateMap.entries()).map(([idx, data]) => {
      const percent = Math.min(100, Math.max(0, ((idx - minIndex) / (totalMonths - 1)) * 100));
      return {
        idx,
        percent,
        ...data,
      };
    });
  }, [layers, minIndex, totalMonths]);

  // Playback loop
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      const nextIdx = currentIdx >= maxIndex ? minIndex : currentIdx + 1;
      onChangeDate(monthIndexToDate(nextIdx));
    }, playSpeed);

    return () => clearInterval(timer);
  }, [isPlaying, currentIdx, maxIndex, minIndex, playSpeed, onChangeDate]);

  // Slider change handler
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIdx = parseInt(e.target.value, 10);
    onChangeDate(monthIndexToDate(newIdx));
  };

  // Step 1 month backwards
  const handleStepPrev = () => {
    const prevIdx = Math.max(minIndex, currentIdx - 1);
    onChangeDate(monthIndexToDate(prevIdx));
  };

  // Step 1 month forwards
  const handleStepNext = () => {
    const nextIdx = Math.min(maxIndex, currentIdx + 1);
    onChangeDate(monthIndexToDate(nextIdx));
  };

  // Jump to previous / next milestone date
  const { prevDate, nextDate } = useMemo(
    () => findAdjacentLayerDates(layers, currentDate),
    [layers, currentDate]
  );

  const handleJumpPrev = () => {
    if (prevDate) onChangeDate(prevDate);
  };

  const handleJumpNext = () => {
    if (nextDate) onChangeDate(nextDate);
  };

  return (
    <div className="w-full bg-neutral-900/98 backdrop-blur-xl border-t border-neutral-800 shadow-2xl px-2.5 py-2 sm:px-6 sm:py-3 z-40 transition-all select-none pb-[max(0.5rem,env(safe-area-inset-bottom,0px))]">
      <div className="max-w-7xl mx-auto flex flex-col gap-1.5 sm:gap-3">
        {/* If Mobile Collapsed: Show minimal slim bar */}
        {isMobileCollapsed ? (
          <div className="flex sm:hidden items-center justify-between gap-1.5 py-0.5">
            {/* Active Date Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-neutral-950/80 border border-cyan-500/40 shadow-inner">
              <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="font-heading text-xs font-bold text-white tracking-wide">
                {MONTH_NAMES_SHORT[currentDate.month - 1].toUpperCase()}
              </span>
              <span className="font-heading text-xs font-bold text-cyan-400">
                {currentDate.year}
              </span>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleStepPrev}
                className="p-1 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white"
                title="Önceki Ay"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-1.5 rounded-lg text-neutral-950 font-bold ${
                  isPlaying ? 'bg-amber-500' : 'bg-cyan-500'
                }`}
                title={isPlaying ? 'Duraklat' : 'Oynat'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />}
              </button>
              <button
                type="button"
                onClick={handleStepNext}
                className="p-1 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white"
                title="Sonraki Ay"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Km indicator */}
            <div className="px-2 py-0.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-[10px] font-mono text-cyan-300">
              {activeStats.totalKm.toFixed(0)} km
            </div>

            {/* Quick Construction Lines button */}
            <button
              type="button"
              onClick={onToggleConstruction}
              className={`p-1.5 rounded-xl border text-xs font-semibold ${
                isConstructionActive
                  ? 'bg-amber-500 text-neutral-950 border-amber-400 font-bold'
                  : 'bg-neutral-800 text-amber-400 border-amber-500/30'
              }`}
              title="İnşaat Hatları"
            >
              <HardHat className="w-3.5 h-3.5" />
            </button>

            {/* Expand Chevron */}
            <button
              type="button"
              onClick={() => setIsMobileCollapsed(false)}
              className="p-1.5 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700"
              title="Zaman Çizelgesini Genişlet"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        ) : null}

        {/* Full View (Always shown on desktop, hidden on mobile if collapsed) */}
        <div className={`flex flex-col gap-2 sm:gap-3 ${isMobileCollapsed ? 'hidden sm:flex' : 'flex'}`}>
          {/* Top Section: Date Badge, Playback Controls, Filter Mode, and Stats */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 sm:gap-3">
            {/* Row 1: Date Badge, Jump to Today, and Playback */}
            <div className="flex items-center justify-between gap-1.5 sm:gap-2">
              {/* Active Date Badge & Today Button */}
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-cyan-500/40 shadow-inner shrink-0">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                  <span className="font-heading text-xs sm:text-base font-bold text-white tracking-wide">
                    {MONTH_NAMES_FULL[currentDate.month - 1].toUpperCase()}
                  </span>
                  <span className="font-heading text-xs sm:text-base font-bold text-cyan-400">
                    {currentDate.year}
                  </span>
                  {currentDate.year === 1875 && (
                    <span className="ml-0.5 sm:ml-1 px-1 py-0.5 rounded text-[8.5px] sm:text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      TÜNEL
                    </span>
                  )}
                </div>

                {currentDate.year === 1875 && (
                  <button
                    type="button"
                    onClick={() => onChangeDate({ year: 1989, month: 3 })}
                    title="1989 Modern Metro Dönemine Git (M1 Açılışı)"
                    className="flex items-center gap-1 px-2 py-1 rounded-xl border text-[11px] font-semibold bg-neutral-800 hover:bg-neutral-700 text-cyan-300 border-neutral-700 transition-all cursor-pointer"
                  >
                    <span>1989</span>
                  </button>
                )}

                {/* Jump to Today Button */}
                <button
                  type="button"
                  onClick={handleGoToToday}
                  title={`Bugüne Git (${MONTH_NAMES_SHORT[today.month - 1]} ${today.year})`}
                  className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl border text-[10.5px] sm:text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer shrink-0 ${
                    isToday
                      ? 'bg-cyan-500 text-neutral-950 border-cyan-400 font-bold shadow-cyan-500/20'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border-neutral-700'
                  }`}
                >
                  <Clock className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isToday ? 'text-neutral-950' : 'text-cyan-400'}`} />
                  <span>Bugün</span>
                </button>
              </div>

              {/* Center Playback Controls */}
              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                {/* Jump to previous milestone (desktop) */}
                <button
                  type="button"
                  onClick={handleJumpPrev}
                  disabled={!prevDate}
                  title={prevDate ? `Önceki Açılışa Git (${formatDateLong(prevDate)})` : 'Daha önceki açılış yok'}
                  className="hidden sm:flex p-1.5 sm:p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  <SkipBack className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                {/* Step 1 month back */}
                <button
                  type="button"
                  onClick={handleStepPrev}
                  title="Önceki Ay"
                  className="p-1 sm:p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                {/* Play / Pause */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? 'Zaman Çizelgesini Duraklat' : 'Zaman Çizelgesini Oynat'}
                  className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl transition-all shadow-lg cursor-pointer ${
                    isPlaying
                      ? 'bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold shadow-amber-500/30 ring-2 ring-amber-400'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold shadow-cyan-500/30 ring-2 ring-cyan-300'
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" />
                  )}
                </button>

                {/* Step 1 month forward */}
                <button
                  type="button"
                  onClick={handleStepNext}
                  title="Sonraki Ay"
                  className="p-1 sm:p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                {/* Jump to next milestone (desktop) */}
                <button
                  type="button"
                  onClick={handleJumpNext}
                  disabled={!nextDate}
                  title={nextDate ? `Sonraki Açılışa Git (${formatDateLong(nextDate)})` : 'Daha sonraki açılış yok'}
                  className="hidden sm:flex p-1.5 sm:p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                {/* Mobile Minimize Chevron */}
                <button
                  type="button"
                  onClick={() => setIsMobileCollapsed(true)}
                  className="sm:hidden p-1 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white border border-neutral-700/60 ml-0.5"
                  title="Küçült"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Controls: Yıllık İstatistik, Filter Mode Tabs, and Km Stats Breakdown */}
            <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 shrink-0">
              {/* Yıllık İstatistik Button (Desktop) */}
              <button
                type="button"
                onClick={onOpenYearlyStats}
                title="Yıl yıl raylı sistem açılış ve kilometre istatistikleri tablosunu görüntüle"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-neutral-950/90 hover:bg-neutral-800 text-cyan-300 hover:text-white border border-neutral-800 hover:border-cyan-500/50 transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Yıllık İstatistik</span>
              </button>

              {/* Filter Mode Selector with Km Display under each tab */}
              <div className="flex items-center bg-neutral-950/90 rounded-xl p-0.5 sm:p-1 border border-neutral-800 text-xs shadow-inner flex-1 sm:flex-initial justify-center sm:justify-start">
                <button
                  type="button"
                  onClick={() => onChangeFilterMode('cumulative')}
                  className={`flex-1 sm:flex-initial px-2 sm:px-3 py-1 rounded-lg transition-all text-center flex flex-col items-center justify-center min-w-[70px] sm:min-w-[95px] cursor-pointer ${
                    filterMode === 'cumulative'
                      ? 'bg-cyan-500 text-neutral-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                  title="Seçili tarihte işletmede olan tüm aktif hat ve istasyonları gösterir"
                >
                  <span className="text-[9.5px] sm:text-[11px] font-semibold leading-tight">Kümülatif</span>
                  <span
                    className={`text-[8.5px] sm:text-[10px] font-mono font-bold leading-tight mt-0.5 ${
                      filterMode === 'cumulative' ? 'text-neutral-950 font-extrabold' : 'text-cyan-400'
                    }`}
                  >
                    {cumulativeStats.totalKm.toFixed(1)} km
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onChangeFilterMode('exact-month')}
                  className={`flex-1 sm:flex-initial px-2 sm:px-3 py-1 rounded-lg transition-all text-center flex flex-col items-center justify-center min-w-[70px] sm:min-w-[95px] cursor-pointer ${
                    filterMode === 'exact-month'
                      ? 'bg-cyan-500 text-neutral-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                  title="Yalnızca bu ay içinde hizmete açılan yeni hat ve istasyonları gösterir"
                >
                  <span className="text-[9.5px] sm:text-[11px] font-semibold leading-tight">Yeni Açılan</span>
                  <span
                    className={`text-[8.5px] sm:text-[10px] font-mono font-bold leading-tight mt-0.5 ${
                      filterMode === 'exact-month' ? 'text-neutral-950 font-extrabold' : 'text-cyan-400'
                    }`}
                  >
                    {exactMonthStats.totalKm.toFixed(1)} km
                  </span>
                </button>
              </div>

              {/* Total Km and Builder Breakdown (Metro İstanbul vs UAB) */}
              <div className="flex items-center gap-1 sm:gap-2 text-[8.5px] sm:text-[11px] px-2 py-1 sm:py-1.5 rounded-lg bg-neutral-950/80 border border-neutral-800 shadow-sm whitespace-nowrap">
                <div className="flex items-center gap-1 text-neutral-300">
                  <span className="text-neutral-400 hidden xs:inline">
                    {filterMode === 'cumulative' ? 'Top:' : 'Açılan:'}
                  </span>
                  <span className="font-bold text-white font-mono">{activeStats.totalKm.toFixed(1)} km</span>
                </div>
                <span className="text-neutral-700">|</span>
                <div className="flex items-center gap-1" title="Metro İstanbul (İBB) hat uzunluğu">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  <span className="text-neutral-400">İBB:</span>
                  <span className="font-bold text-emerald-400 font-mono">
                    {activeStats.metroIstanbulKm.toFixed(1)}
                  </span>
                </div>
                <span className="text-neutral-700">|</span>
                <div className="flex items-center gap-1" title="UAB hat uzunluğu">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                  <span className="text-neutral-400">UAB:</span>
                  <span className="font-bold text-sky-400 font-mono">
                    {activeStats.uabKm.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle/Bottom row: The Interactive Slider Rail + Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-4 pt-0.5">
            {/* Continuous Range Track & Year Markers */}
            <div className="relative flex-1 min-w-0 pt-0.5 pb-1">
              {/* Range Track */}
              <div className="relative flex items-center h-7 touch-manipulation">
                <input
                  type="range"
                  min={minIndex}
                  max={maxIndex}
                  value={Math.max(minIndex, currentIdx)}
                  onChange={handleSliderChange}
                  className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 z-20 focus:outline-none"
                />

                {/* Milestone Dots on Timeline */}
                <div className="absolute inset-x-0 h-2.5 pointer-events-none z-10">
                  {dateMilestones.map((marker) => (
                    <div
                      key={marker.idx}
                      style={{ left: `${marker.percent}%` }}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center group pointer-events-auto cursor-pointer"
                      onClick={() => onChangeDate(marker.date)}
                    >
                      {/* Glowing Milestone Pip */}
                      <span
                        style={{ backgroundColor: marker.color }}
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-neutral-900 shadow-md transform transition-transform group-hover:scale-150"
                      />
                      {/* Tooltip on hover showing date */}
                      <div className="absolute bottom-5 hidden group-hover:flex flex-col items-center whitespace-nowrap px-2 py-1 rounded-md bg-neutral-950 border border-cyan-500/40 text-[11px] text-cyan-300 shadow-2xl z-30">
                        <span className="font-semibold">{formatDateLong(marker.date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Year Markers underneath: calibrated spacing for mobile vs desktop */}
              <div className="relative w-full h-4 mt-0.5 pointer-events-none">
                {yearMarkers.map((item) => (
                  <div
                    key={item.year}
                    style={{ left: `${item.percent}%` }}
                    className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                  >
                    <div
                      className={`w-px ${
                        item.isMajor ? 'h-1.5 sm:h-2 bg-neutral-500' : 'h-1 bg-neutral-700'
                      } mb-0.5`}
                    />
                    {item.showLabel && (
                      <span
                        className={`text-[8.5px] sm:text-[10px] font-mono tracking-wider font-semibold ${
                          item.year === currentDate.year ? 'text-cyan-400 font-bold' : 'text-neutral-400'
                        } ${item.showLabelMobile ? 'inline' : 'hidden sm:inline'}`}
                      >
                        {item.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons: 3-item grid on mobile, stacked on desktop */}
            <div className="grid grid-cols-3 sm:flex sm:flex-col gap-1.5 shrink-0 justify-center w-full sm:w-auto">
              {/* İnşaası Devam Edenler */}
              <button
                type="button"
                onClick={onToggleConstruction}
                title="İnşaası devam eden raylı sistem hatlarını görüntüle"
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all active:scale-95 shadow-sm whitespace-nowrap cursor-pointer min-h-[36px] sm:min-h-[38px] ${
                  isConstructionActive
                    ? 'bg-amber-500 text-neutral-950 font-bold border-amber-400 shadow-amber-500/25 ring-2 ring-amber-400/40'
                    : 'bg-neutral-800/90 hover:bg-neutral-700 text-amber-400 hover:text-amber-300 border-amber-500/30 hover:border-amber-500/60'
                }`}
              >
                <HardHat className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  <span className="sm:hidden">İnşaat</span>
                  <span className="hidden sm:inline">İnşaası Devam Edenler</span>
                </span>
              </button>

              {/* Proje Aşamasındakiler */}
              <button
                type="button"
                onClick={onToggleProjects}
                title="Proje ve planlama aşamasındaki raylı sistem hatlarını görüntüle"
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all active:scale-95 shadow-sm whitespace-nowrap cursor-pointer min-h-[36px] sm:min-h-[38px] ${
                  isProjectsActive
                    ? 'bg-indigo-500 text-white font-bold border-indigo-400 shadow-indigo-500/25 ring-2 ring-indigo-400/40'
                    : 'bg-neutral-800/90 hover:bg-neutral-700 text-indigo-400 hover:text-indigo-300 border-indigo-500/30 hover:border-indigo-500/60'
                }`}
              >
                <DraftingCompass className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  <span className="sm:hidden">Projeler</span>
                  <span className="hidden sm:inline">Proje Aşamasındakiler</span>
                </span>
              </button>

              {/* Yıllık İstatistik Button (Mobile only inside grid) */}
              <button
                type="button"
                onClick={onOpenYearlyStats}
                title="Yıllık İstatistikler"
                className="sm:hidden flex items-center justify-center gap-1 px-2 py-1.5 rounded-xl text-[11px] font-semibold bg-neutral-950/90 hover:bg-neutral-800 text-cyan-300 hover:text-white border border-neutral-800 transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap min-h-[36px]"
              >
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">İstatistik</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
