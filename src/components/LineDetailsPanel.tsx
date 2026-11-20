import React, { useState } from 'react';
import { LineDetail, LineStationItem, LineMilestone } from '../data/linesData';
import { getOfficialMetroColor } from '../data/metroColors';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Gauge,
  Layers,
  MapPin,
  Navigation,
  Route,
  Sparkles,
  Train,
  Users,
  X,
  Zap,
  Building,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Activity,
} from 'lucide-react';

interface LineDetailsPanelProps {
  line: LineDetail | null;
  onClose: () => void;
  onSelectStation?: (stationName: string) => void;
  onFlyToLine?: (line: LineDetail) => void;
}

export const LineDetailsPanel: React.FC<LineDetailsPanelProps> = ({
  line,
  onClose,
  onSelectStation,
  onFlyToLine,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'vehicles' | 'stations' | 'milestones'>('overview');
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!line) return null;

  const themeColor = getOfficialMetroColor(line.code) || line.color || '#EE2229';
  const vehicles = line.vehiclesUsed;

  const handleStationClick = (station: LineStationItem) => {
    if (onSelectStation) {
      onSelectStation(station.name);
    }
  };

  const handleFlyToLine = () => {
    if (onFlyToLine) {
      onFlyToLine(line);
    }
  };

  return (
    <>
      {/* Mobile backdrop to allow easy tapping outside to dismiss */}
      <div
        onClick={onClose}
        className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-[490] animate-in fade-in"
      />

      <aside
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        className="fixed inset-x-0 bottom-0 sm:absolute sm:top-4 sm:right-4 sm:bottom-4 sm:left-auto z-[500] w-full sm:max-w-md lg:max-w-[460px] max-h-[85vh] sm:max-h-none bg-neutral-950/98 backdrop-blur-2xl border-t sm:border border-neutral-800 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-100 select-text pointer-events-auto animate-in slide-in-from-bottom duration-300 sm:animate-slide-in-right"
        aria-label="Hat Detay Paneli"
      >
        {/* Mobile Swipe / Dismiss Handle */}
        <div
          onClick={onClose}
          className="sm:hidden flex items-center justify-center py-2 shrink-0 cursor-pointer"
        >
          <div className="w-12 h-1.5 bg-neutral-700 hover:bg-neutral-600 rounded-full transition-colors" />
        </div>

        {/* Hero Section with Line Imagery or Modern Technical Texture */}
        <div className="relative w-full h-44 sm:h-56 bg-neutral-900 shrink-0 overflow-hidden">
          {line.imageUrl && !imageError ? (
            <>
              <img
                src={line.imageUrl}
                alt={line.name}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-black/70 pointer-events-none" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col justify-end p-6 relative overflow-hidden">
              <div
                style={{
                  backgroundImage: `radial-gradient(${themeColor} 1.5px, transparent 1.5px)`,
                }}
                className="absolute inset-0 opacity-25 [background-size:18px_18px]"
              />
              <div className="absolute -right-6 -bottom-6 text-neutral-800/40 pointer-events-none">
                <Train className="w-48 h-48" />
              </div>
            </div>
          )}

          {/* Top Badges & Close Button */}
          <div className="absolute top-3 sm:top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
            <div className="flex items-center gap-2">
              <span
                style={{ backgroundColor: themeColor }}
                className="px-2.5 py-1 rounded-xl text-white text-xs font-black tracking-wider uppercase shadow-lg flex items-center gap-1.5 border border-white/20"
              >
                <Train className="w-3.5 h-3.5" />
                <span>{line.code}</span>
              </span>

              <span className="px-2.5 py-1 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700/70 text-neutral-200 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                <span
                  className={`w-2 h-2 rounded-full ${
                    line.status === 'active'
                      ? 'bg-emerald-400 animate-pulse'
                      : line.status === 'construction'
                      ? 'bg-amber-400 animate-pulse'
                      : 'bg-indigo-400'
                  }`}
                />
                <span>
                  {line.status === 'active'
                    ? 'İşletmede'
                    : line.status === 'construction'
                    ? 'İnşaat Halinde'
                    : 'Planlanan'}
                </span>
              </span>

              <span className="hidden xs:flex px-2 py-0.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-[10.5px] font-medium text-neutral-300">
                {line.authorityFullName}
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Kapat"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-neutral-900/85 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/70 backdrop-blur-md transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Hero Overlay: Name & Terminals */}
          <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none">
            <div className="text-[11px] font-medium text-neutral-300 drop-shadow-sm flex items-center gap-1.5 mb-0.5">
              <Route className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{line.shortName || 'İstanbul Raylı Sistem Hattı'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight drop-shadow-md leading-tight">
              {line.name}
            </h2>
            {line.imageCaption && (
              <p className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5 drop-shadow">
                📷 {line.imageCaption}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Tabs (Overview, Vehicles Used, Stations, Milestones) */}
        <div className="px-4 py-2 border-b border-neutral-800/90 bg-neutral-950/90 shrink-0 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-neutral-800 text-white shadow-sm ring-1 ring-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Genel Bakış</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('vehicles')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'vehicles'
                ? 'bg-neutral-800 text-white shadow-sm ring-1 ring-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Train className="w-3.5 h-3.5 text-amber-400" />
            <span>Trenler & Araçlar</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 font-mono">
              Filo
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('stations')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'stations'
                ? 'bg-neutral-800 text-white shadow-sm ring-1 ring-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>İstasyonlar ({line.stationCount})</span>
          </button>

          {line.milestones && line.milestones.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('milestones')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'milestones'
                  ? 'bg-neutral-800 text-white shadow-sm ring-1 ring-neutral-700'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Kronoloji</span>
            </button>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-5 py-4 space-y-5 text-xs">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* PRIMARY 4 KPI CARDS: NAME, OPENING DATE, KILOMETER, STATION COUNT */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* 1. Opening Date (Açılış Tarihi) */}
                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between shadow-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Açılış Tarihi</span>
                  </span>
                  <span className="text-sm font-bold text-white mt-1.5">
                    {line.openingDate}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono mt-0.5">
                    İlk Hizmet Yılı: {line.openingDateFormatted || line.openingDate}
                  </span>
                </div>

                {/* 2. Kilometer (Hat Uzunluğu) */}
                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between shadow-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Route className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hat Uzunluğu</span>
                  </span>
                  <span className="text-sm font-bold text-emerald-300 font-mono mt-1.5">
                    {line.lengthKm.toFixed(1)} km
                  </span>
                  <span className="text-[10px] text-neutral-400 mt-0.5">
                    Çift Hat Raylı Güzergah
                  </span>
                </div>

                {/* 3. Station Count (İstasyon Sayısı) */}
                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between shadow-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>İstasyon Sayısı</span>
                  </span>
                  <span className="text-sm font-bold text-white mt-1.5">
                    {line.stationCount} İstasyon
                  </span>
                  <span className="text-[10px] text-neutral-400 mt-0.5">
                    {line.stations?.filter((s) => s.isInterchange).length || 0} Aktarma Noktası
                  </span>
                </div>

                {/* 4. Travel Time & Headway */}
                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between shadow-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-purple-400" />
                    <span>Sefer & Süre</span>
                  </span>
                  <span className="text-sm font-bold text-white mt-1.5">
                    {line.operatingSpecs?.travelTime || '30 Dakika'}
                  </span>
                  <span className="text-[10px] text-neutral-400 mt-0.5">
                    Sıklık: {line.operatingSpecs?.headway || '4-5 Dk'}
                  </span>
                </div>
              </div>

              {/* QUICK VEHICLE HIGHLIGHT CARD */}
              <div
                onClick={() => setActiveTab('vehicles')}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-neutral-900/80 to-neutral-900/80 border border-amber-500/30 hover:border-amber-400/60 transition-all cursor-pointer group flex items-center justify-between gap-3 shadow-md"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shrink-0">
                    <Train className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Kullanılan Araçlar & Filo
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-amber-200 transition-colors">
                      {vehicles?.model || 'Modern Metro Trenleri'}
                    </h4>
                    <p className="text-[10.5px] text-neutral-400 truncate">
                      {vehicles?.manufacturer} • {vehicles?.formation} ({vehicles?.fleetSize})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold shrink-0 group-hover:translate-x-1 transition-transform">
                  <span>İncele</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Operating Specs / Çalışma Saatleri & Yolcu */}
              {line.operatingSpecs && (
                <div className="p-3.5 rounded-2xl bg-neutral-900/70 border border-neutral-800 space-y-2.5">
                  <h4 className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>İşletme Bilgileri</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-neutral-950/60 p-2.5 rounded-xl border border-neutral-800/80">
                      <span className="text-neutral-400 block text-[10px]">İşletme Saatleri:</span>
                      <strong className="text-neutral-200 font-semibold">{line.operatingSpecs.operatingHours}</strong>
                    </div>
                    {line.operatingSpecs.dailyRidership && (
                      <div className="bg-neutral-950/60 p-2.5 rounded-xl border border-neutral-800/80">
                        <span className="text-neutral-400 block text-[10px]">Günlük Yolcu Hacmi:</span>
                        <strong className="text-emerald-300 font-semibold font-mono">{line.operatingSpecs.dailyRidership}</strong>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Description & Historical Context */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hat Hakkında & Tarihçe</span>
                </h4>
                <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-neutral-300 leading-relaxed space-y-2 text-[11.5px]">
                  <p>{line.description}</p>
                  {line.historicalContext && (
                    <div className="pt-2 border-t border-neutral-800/80">
                      <span className="text-[10.5px] font-semibold text-cyan-400 block mb-1">
                        Tarihsel Gelişim:
                      </span>
                      <p className="text-neutral-300">{line.historicalContext}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Focus on Line button */}
              {onFlyToLine && (
                <button
                  type="button"
                  onClick={handleFlyToLine}
                  style={{ backgroundColor: themeColor }}
                  className="w-full py-2.5 px-4 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:brightness-110 active:scale-98 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Haritayı Bu Hatta Odakla</span>
                </button>
              )}
            </div>
          )}

          {/* TAB 2: VEHICLES USED (KULLANILAN ARAÇLAR) - EXPLICIT USER REQUIREMENT */}
          {activeTab === 'vehicles' && (
            <div className="space-y-4">
              {/* Top Vehicle Hero Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    style={{ backgroundColor: themeColor }}
                    className="px-2 py-0.5 rounded text-[10px] font-black tracking-wider text-white uppercase"
                  >
                    {line.code} Filosu
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {vehicles?.automationLevel || 'Sürücülü İşletme'}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white font-heading leading-snug">
                  {vehicles?.model || 'Hat Tren Setleri'}
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  {vehicles?.manufacturer || 'Uluslararası & Yerli Demiryolu Araç Üreticileri'}
                </p>
              </div>

              {/* Vehicle Specifications Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* 1. Dizi Formasyonu */}
                <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Train className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Dizi Formasyonu</span>
                  </span>
                  <strong className="text-xs font-bold text-white mt-1">
                    {vehicles?.formation || '4 Vagonlu Dizi'}
                  </strong>
                </div>

                {/* 2. Filo Büyüklüğü */}
                <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Filo Büyüklüğü</span>
                  </span>
                  <strong className="text-xs font-bold text-emerald-300 font-mono mt-1">
                    {vehicles?.fleetSize || 'Belirtilmedi'}
                  </strong>
                </div>

                {/* 3. Maksimum Hız */}
                <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-purple-400" />
                    <span>Maksimum Hız</span>
                  </span>
                  <strong className="text-xs font-bold text-purple-300 font-mono mt-1">
                    {vehicles?.maxSpeed || '80 km/h'}
                  </strong>
                </div>

                {/* 4. Enerji & Besleme */}
                <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Güç & Besleme</span>
                  </span>
                  <strong className="text-xs font-bold text-amber-300 font-mono mt-1 truncate">
                    {vehicles?.powerSupply || '750V DC Katener'}
                  </strong>
                </div>
              </div>

              {/* Automation Level Card */}
              {vehicles?.automationLevel && (
                <div className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider block">
                      Otomasyon Seviyesi
                    </span>
                    <strong className="text-xs text-white font-bold">{vehicles.automationLevel}</strong>
                  </div>
                </div>
              )}

              {/* Technical Description of Vehicles */}
              {vehicles?.description && (
                <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <h4 className="text-[10.5px] font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Train className="w-3.5 h-3.5 text-amber-400" />
                    <span>Filo ve Araç Teknik Açıklaması</span>
                  </h4>
                  <p className="text-[11.5px] text-neutral-300 leading-relaxed">
                    {vehicles.description}
                  </p>
                </div>
              )}

              {/* Vehicle Features Checklist */}
              {vehicles?.features && vehicles.features.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tren Donanım ve Yolcu Özellikleri</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicles.features.map((featureItem: string, idx: number) => (
                      <div
                        key={idx}
                        className="px-3 py-2 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-center gap-2 text-[11px] text-neutral-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="leading-tight">{featureItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: STATIONS LIST (GÜZERGAH VE İSTASYONLAR) */}
          {activeTab === 'stations' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Güzergah İstasyon Sıralaması</span>
                </span>
                <span className="text-[10.5px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  {line.stations?.length || 0} İstasyon
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {line.stations && line.stations.length > 0 ? (
                  line.stations.map((st: LineStationItem, idx: number) => {
                    const isFirst = idx === 0;
                    const isLast = idx === line.stations.length - 1;

                    return (
                      <div
                        key={idx}
                        onClick={() => handleStationClick(st)}
                        className="p-2.5 sm:p-3 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all cursor-pointer flex items-center justify-between gap-2.5 group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* Station index number */}
                          <div
                            style={{
                              backgroundColor: isFirst || isLast ? themeColor : 'rgba(255,255,255,0.06)',
                              color: isFirst || isLast ? '#ffffff' : '#94a3b8',
                            }}
                            className="w-6 h-6 rounded-lg text-[10px] font-mono font-bold flex items-center justify-center shrink-0 border border-white/10"
                          >
                            {idx + 1}
                          </div>

                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate block">
                              {st.name}
                            </span>
                            {st.district && (
                              <span className="text-[10px] text-neutral-400 truncate block">
                                {st.district}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Interchanges pills */}
                        <div className="flex items-center gap-1 shrink-0 flex-wrap justify-end">
                          {st.transfers && st.transfers.length > 0 ? (
                            st.transfers.map((tr: string, tIdx: number) => {
                              const transferColor = getOfficialMetroColor(tr) || '#38bdf8';
                              return (
                                <span
                                  key={tIdx}
                                  style={{
                                    borderColor: `${transferColor}55`,
                                    color: '#f8fafc',
                                  }}
                                  className="text-[9.5px] font-black px-1.5 py-0.5 rounded bg-neutral-950/80 border shadow-xs"
                                >
                                  {tr}
                                </span>
                              );
                            })
                          ) : (
                            isFirst ? (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                Başlangıç
                              </span>
                            ) : isLast ? (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                Bitiş
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-4 text-center text-neutral-400 text-xs">
                    Bu hat için detaylı istasyon listesi yükleniyor...
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: CHRONOLOGICAL MILESTONES (KRONOLOJİ & AÇILIŞ AŞAMALARI) */}
          {activeTab === 'milestones' && line.milestones && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tarihsel Açılış Aşamaları</span>
                </span>
                <span className="text-[10.5px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  {line.milestones.length} Aşama
                </span>
              </div>

              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-800">
                {line.milestones.map((ms: LineMilestone, idx: number) => (
                  <div key={idx} className="relative group">
                    {/* Pip */}
                    <div
                      style={{ backgroundColor: themeColor }}
                      className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 border-neutral-950 shadow-md ring-2 ring-neutral-800 group-hover:scale-125 transition-transform"
                    />

                    <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-white font-heading">
                          {ms.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {ms.date}
                        </span>
                      </div>

                      <p className="text-[11px] text-neutral-300 leading-relaxed">
                        {ms.description}
                      </p>

                      {ms.lengthKm && (
                        <div className="pt-1 text-[10px] text-emerald-400 font-mono font-semibold">
                          +{ms.lengthKm} km yeni hat ilavesi
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
