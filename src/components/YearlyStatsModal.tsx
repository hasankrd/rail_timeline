import React, { useMemo, useState } from 'react';
import { DatePoint, KmlLayerItem } from '../types';
import { calculateYearlyStats, YearStatRecord } from '../utils/lineStats';
import {
  BarChart3,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  Layers,
  MapPin,
  Maximize2,
  Search,
  Sparkles,
  TrendingUp,
  X,
} from 'lucide-react';
import { MONTH_NAMES_SHORT } from '../utils/dateUtils';

interface YearlyStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  layers: KmlLayerItem[];
  onSelectYear: (date: DatePoint) => void;
  currentDate: DatePoint;
}

export const YearlyStatsModal: React.FC<YearlyStatsModalProps> = ({
  isOpen,
  onClose,
  layers,
  onSelectYear,
  currentDate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAuthority, setFilterAuthority] = useState<'all' | 'Metro İstanbul' | 'UAB'>('all');
  const [activeTab, setActiveTab] = useState<'list' | 'chart'>('list');

  const yearlyRecords = useMemo(() => calculateYearlyStats(layers), [layers]);

  // Overall totals from the latest record
  const latestRecord = yearlyRecords[yearlyRecords.length - 1];
  const totalNetworkKm = latestRecord?.cumulativeTotalKm || 0;
  const totalMetroKm = latestRecord?.cumulativeMetroIstanbulKm || 0;
  const totalUabKm = latestRecord?.cumulativeUabKm || 0;

  // Filtered records
  const filteredRecords = useMemo(() => {
    let list = [...yearlyRecords].reverse(); // Most recent years first by default

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((r) => {
        if (r.year.toString().includes(q)) return true;
        return r.sections.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            (s.category && s.category.toLowerCase().includes(q))
        );
      });
    }

    if (filterAuthority !== 'all') {
      list = list.filter((r) =>
        r.sections.some((s) => s.authority === filterAuthority)
      );
    }

    return list;
  }, [yearlyRecords, searchQuery, filterAuthority]);

  // Max yearly km for bar scaling
  const maxYearKm = useMemo(() => {
    return Math.max(...yearlyRecords.map((r) => r.newKm), 1);
  }, [yearlyRecords]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[650] flex items-center justify-center p-2 sm:p-6 bg-neutral-950/85 backdrop-blur-md animate-fade-in pointer-events-auto">
      <div
        className="relative w-full max-w-5xl h-[94vh] sm:h-auto sm:max-h-[92%] bg-neutral-900 border border-neutral-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-100 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-neutral-800 bg-neutral-950/85 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-inner">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-heading flex items-center gap-2">
                <span>İstanbul Raylı Sistemler — Yıllık İstatistikler</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  1875 & 1989 — 2026
                </span>
              </h2>
              <p className="text-xs text-neutral-400">
                Yıl yıl açılan hat uzunlukları ve Metro İstanbul (İBB) vs UAB yapım dağılımı
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors border border-neutral-700/60"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top KPI Cards Banner */}
        <div className="px-5 py-3 bg-neutral-950/60 border-b border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 shrink-0">
          {/* Toplam Ağ */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-2.5">
            <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 font-medium">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Toplam Ağ (2026)</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-bold font-mono text-white">
                {totalNetworkKm.toFixed(1)}
              </span>
              <span className="text-xs text-cyan-400 font-semibold">km</span>
            </div>
          </div>

          {/* Metro İstanbul (İBB) */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-2.5">
            <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Metro İstanbul (İBB)</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
                {totalMetroKm.toFixed(1)}
              </span>
              <span className="text-xs text-emerald-300 font-semibold">km</span>
              <span className="text-[10px] text-neutral-400 ml-auto font-mono">
                %{((totalMetroKm / totalNetworkKm) * 100).toFixed(1)}
              </span>
            </div>
          </div>

          {/* UAB (Bakanlık / TCDD) */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-2.5">
            <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>UAB (Bakanlık / TCDD)</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-bold font-mono text-sky-400">
                {totalUabKm.toFixed(1)}
              </span>
              <span className="text-xs text-sky-300 font-semibold">km</span>
              <span className="text-[10px] text-neutral-400 ml-auto font-mono">
                %{((totalUabKm / totalNetworkKm) * 100).toFixed(1)}
              </span>
            </div>
          </div>

          {/* Toplam Açılış Dönemi */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-2.5">
            <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Açılış Yılları</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-bold font-mono text-amber-400">
                {yearlyRecords.length}
              </span>
              <span className="text-xs text-neutral-300 font-medium">farklı yıl</span>
            </div>
          </div>
        </div>

        {/* Controls: Search, Authority Filter, and Tabs */}
        <div className="px-5 py-3 bg-neutral-900/90 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Yıl veya hat ara (ör: 2024, Marmaray, M11, M4)..."
              className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
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

          {/* Filter Authority and View Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Authority Filter */}
            <div className="flex items-center bg-neutral-950 rounded-xl p-0.5 border border-neutral-800 text-xs">
              <button
                type="button"
                onClick={() => setFilterAuthority('all')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  filterAuthority === 'all'
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Tümü
              </button>
              <button
                type="button"
                onClick={() => setFilterAuthority('Metro İstanbul')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  filterAuthority === 'Metro İstanbul'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Metro İst.</span>
              </button>
              <button
                type="button"
                onClick={() => setFilterAuthority('UAB')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  filterAuthority === 'UAB'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>UAB</span>
              </button>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-neutral-950 rounded-xl p-0.5 border border-neutral-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('list')}
                className={`px-3 py-1 rounded-lg transition-all font-medium ${
                  activeTab === 'list'
                    ? 'bg-cyan-500 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Detaylı Liste
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('chart')}
                className={`px-3 py-1 rounded-lg transition-all font-medium ${
                  activeTab === 'chart'
                    ? 'bg-cyan-500 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Yıllık Grafik
              </button>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {filteredRecords.length === 0 ? (
            <div className="py-16 text-center text-neutral-400 text-xs">
              Arama kriterlerine uygun yıl veya hat bulunamadı.
            </div>
          ) : activeTab === 'list' ? (
            /* Year by Year Detailed Card List */
            <div className="space-y-3">
              {filteredRecords.map((record) => {
                const isCurrentYearActive = currentDate.year === record.year;
                const metroPercent =
                  record.newKm > 0 ? (record.newMetroIstanbulKm / record.newKm) * 100 : 0;
                const uabPercent =
                  record.newKm > 0 ? (record.newUabKm / record.newKm) * 100 : 0;

                return (
                  <div
                    key={record.year}
                    className={`rounded-2xl border p-4 transition-all ${
                      isCurrentYearActive
                        ? 'bg-neutral-900 border-cyan-500/60 ring-1 ring-cyan-500/40 shadow-lg shadow-cyan-500/5'
                        : 'bg-neutral-950/60 border-neutral-800/90 hover:border-neutral-700'
                    }`}
                  >
                    {/* Top Row of Year Card */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800/70">
                      <div className="flex items-center gap-3">
                        {/* Year Badge */}
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                            {record.year}
                          </span>
                          {record.year === 1875 && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              Osmanlı / Tarihi Tünel
                            </span>
                          )}
                          {isCurrentYearActive && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                              Seçili Yıl
                            </span>
                          )}
                        </div>

                        {/* New Km Badge for this Year */}
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs">
                          <span className="text-neutral-400">Yeni Hat:</span>
                          <span className="font-bold font-mono text-cyan-400">
                            +{record.newKm.toFixed(1)} km
                          </span>
                        </div>
                      </div>

                      {/* Cumulative Total at Year End & Quick Jump Button */}
                      <div className="flex items-center gap-2">
                        <div className="text-right text-[11px] text-neutral-400 hidden sm:block">
                          <span>Yıl Sonu Kümülatif Ağ: </span>
                          <span className="font-bold text-white font-mono">
                            {record.cumulativeTotalKm.toFixed(1)} km
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            const firstMonth = record.sections[0]?.date.month || 1;
                            onSelectYear({ year: record.year, month: firstMonth });
                            onClose();
                          }}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-cyan-300 hover:text-white border border-neutral-700 hover:border-cyan-500/50 transition-all active:scale-95 shadow-sm"
                          title={`${record.year} yılına ve açılış haritasına git`}
                        >
                          <span>Haritada Gör</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Builder Breakdown for this specific year */}
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {/* Metro Istanbul Portion */}
                      <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-900/70 border border-neutral-800/80">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                          <span className="text-neutral-300 font-medium">Metro İstanbul (İBB):</span>
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-bold text-emerald-400 font-mono">
                            {record.newMetroIstanbulKm.toFixed(1)} km
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            (%{metroPercent.toFixed(0)})
                          </span>
                        </div>
                      </div>

                      {/* UAB Portion */}
                      <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-900/70 border border-neutral-800/80">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0"></span>
                          <span className="text-neutral-300 font-medium">UAB (Bakanlık / TCDD):</span>
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-bold text-sky-400 font-mono">
                            {record.newUabKm.toFixed(1)} km
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            (%{uabPercent.toFixed(0)})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Visual Segment Proportion Bar (if km > 0) */}
                    {record.newKm > 0 && (
                      <div className="mt-2.5 w-full h-2 rounded-full bg-neutral-900 overflow-hidden flex">
                        {record.newMetroIstanbulKm > 0 && (
                          <div
                            style={{ width: `${metroPercent}%` }}
                            className="h-full bg-emerald-400 transition-all"
                            title={`Metro İstanbul: ${record.newMetroIstanbulKm.toFixed(1)} km`}
                          />
                        )}
                        {record.newUabKm > 0 && (
                          <div
                            style={{ width: `${uabPercent}%` }}
                            className="h-full bg-sky-400 transition-all"
                            title={`UAB: ${record.newUabKm.toFixed(1)} km`}
                          />
                        )}
                      </div>
                    )}

                    {/* Sections Opened in this Year */}
                    <div className="mt-3 space-y-1.5">
                      <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                        Bu Yılda Açılan Hat & Etablar ({record.sections.length} Açılış):
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {record.sections.map((sec) => (
                          <div
                            key={sec.id}
                            className="flex items-center justify-between gap-2 p-2 rounded-xl bg-neutral-950/70 border border-neutral-800/70 text-xs"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span
                                style={{ backgroundColor: sec.color }}
                                className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                              />
                              <span className="text-neutral-200 font-medium truncate" title={sec.name}>
                                {sec.name.replace(/\s*\(Opening:.*?\)$/i, '')}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <span
                                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                                  sec.authority === 'UAB'
                                    ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                                    : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                                }`}
                              >
                                {sec.authority}
                              </span>
                              <span className="font-mono font-bold text-neutral-300 text-[11px]">
                                {sec.lengthKm > 0 ? `${sec.lengthKm.toFixed(1)} km` : 'İstasyon'}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Bar Chart View: Year by Year comparison */
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                <span>
                  İstanbul'da yıllara göre yeni açılan hat uzunlukları (km) ve kurum dağılımı:
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span>Metro İstanbul (İBB)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                    <span>UAB (Bakanlık / TCDD)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                {yearlyRecords.map((record) => {
                  const barWidthPercent = (record.newKm / maxYearKm) * 100;
                  const metroPortion =
                    record.newKm > 0 ? (record.newMetroIstanbulKm / record.newKm) * 100 : 0;
                  const uabPortion =
                    record.newKm > 0 ? (record.newUabKm / record.newKm) * 100 : 0;

                  return (
                    <div
                      key={record.year}
                      className="p-3 rounded-xl bg-neutral-950/50 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-bold font-mono text-sm text-white w-12">
                            {record.year}
                          </span>
                          <span className="text-[11px] text-neutral-400">
                            {record.sections.length} açılış
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 font-mono text-xs">
                            <span className="text-emerald-400 font-semibold">
                              İBB: {record.newMetroIstanbulKm.toFixed(1)} km
                            </span>
                            <span className="text-neutral-600">/</span>
                            <span className="text-sky-400 font-semibold">
                              UAB: {record.newUabKm.toFixed(1)} km
                            </span>
                          </div>

                          <span className="font-bold font-mono text-cyan-300 text-xs min-w-[60px] text-right">
                            +{record.newKm.toFixed(1)} km
                          </span>

                          <button
                            type="button"
                            onClick={() => {
                              onSelectYear({ year: record.year, month: 1 });
                              onClose();
                            }}
                            className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-cyan-300"
                          >
                            Git
                          </button>
                        </div>
                      </div>

                      {/* Bar Representation */}
                      <div className="w-full h-3 rounded-full bg-neutral-900 overflow-hidden flex">
                        <div
                          style={{ width: `${Math.max(1, barWidthPercent)}%` }}
                          className="h-full flex rounded-full overflow-hidden"
                        >
                          {record.newMetroIstanbulKm > 0 && (
                            <div
                              style={{ width: `${metroPortion}%` }}
                              className="h-full bg-emerald-400"
                              title={`Metro İstanbul: ${record.newMetroIstanbulKm.toFixed(1)} km`}
                            />
                          )}
                          {record.newUabKm > 0 && (
                            <div
                              style={{ width: `${uabPortion}%` }}
                              className="h-full bg-sky-400"
                              title={`UAB: ${record.newUabKm.toFixed(1)} km`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-neutral-800 bg-neutral-950/80 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Veriler resmi hat açılış tarihleri ve hat geometrileri baz alınarak hesaplanmıştır.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
