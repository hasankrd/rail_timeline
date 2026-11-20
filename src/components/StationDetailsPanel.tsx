import React, { useState } from 'react';
import { KmlLayerItem } from '../types';
import { formatDateLong } from '../utils/dateUtils';
import { getM1StationDetail, StationDetail, StationInterchange } from '../data/m1StationsData';
import { getT1StationDetail } from '../data/t1StationsData';
import { getM2StationDetail } from '../data/m2StationsData';
import { getT3StationDetail } from '../data/t3StationsData';
import { getF1StationDetail } from '../data/f1StationsData';
import { getT2StationDetail } from '../data/t2StationsData';
import { getT4StationDetail } from '../data/t4StationsData';
import { getM4StationDetail } from '../data/m4StationsData';
import { getM3StationDetail } from '../data/m3StationsData';
import { getM6StationDetail } from '../data/m6StationsData';
import { getM5StationDetail } from '../data/m5StationsData';
import { getM7StationDetail } from '../data/m7StationsData';
import { getT5StationDetail } from '../data/t5StationsData';
import { getM9StationDetail } from '../data/m9StationsData';
import { getF4StationDetail } from '../data/f4StationsData';
import { getM8StationDetail } from '../data/m8StationsData';
import { getMarmarayStationDetail } from '../data/marmarayStationsData';
import { getM11StationDetail } from '../data/m11StationsData';
import { getT6StationDetail } from '../data/t6StationsData';
import { getF2StationDetail } from '../data/f2StationsData';
import { getF3StationDetail } from '../data/f3StationsData';
import { getOfficialMetroColor } from '../data/metroColors';
import { LineDetail, getLineDetail } from '../data/linesData';
import {
  Calendar,
  Layers,
  MapPin,
  Navigation,
  Train,
  X,
  Building,
  CheckCircle2,
  Compass
} from 'lucide-react';

interface StationDetailsPanelProps {
  feature: any | null;
  layer: KmlLayerItem | null;
  onClose: () => void;
  onFlyToCoordinates?: (coords: [number, number]) => void;
  onSelectLine?: (line: LineDetail) => void;
}

export const StationDetailsPanel: React.FC<StationDetailsPanelProps> = ({
  feature,
  layer,
  onClose,
  onFlyToCoordinates,
  onSelectLine,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!feature) return null;

  const props = feature.properties || {};
  const rawName = props.name || 'Site Feature';
  const cleanName = rawName
    .replace(/\s+Station(\s*\([A-Za-z0-9]+\))?$/i, '')
    .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
    .replace(/\s+İstasyonu$/i, '')
    .trim();
  const desc = props.description || '';
  const geomType = feature.geometry?.type || '';
  const isPoint = geomType === 'Point';
  const coordinates = feature.geometry?.coordinates;

  const isM11 = layer?.category?.includes('M11') || layer?.name?.includes('M11') || props?.lineCode === 'M11' || rawName.includes('(M11)');
  const isMarmaray = layer?.category?.toLowerCase().includes('marmaray') || layer?.name?.toLowerCase().includes('marmaray') || props?.lineCode === 'B1' || props?.lineCode === 'Marmaray' || rawName.includes('(Marmaray)') || rawName.includes('(B1)');
  const isM8 = layer?.category?.includes('M8') || layer?.name?.includes('M8') || props?.lineCode === 'M8' || rawName.includes('(M8)');
  const isF4 = layer?.category?.includes('F4') || layer?.name?.includes('F4') || props?.lineCode === 'F4' || rawName.includes('(F4)');
  const isM9 = layer?.category?.includes('M9') || layer?.name?.includes('M9') || props?.lineCode === 'M9' || rawName.includes('(M9)');
  const isT6 = layer?.category?.includes('T6') || layer?.name?.includes('T6') || props?.lineCode === 'T6' || rawName.includes('(T6)');
  const isT5 = layer?.category?.includes('T5') || layer?.name?.includes('T5') || props?.lineCode === 'T5' || rawName.includes('(T5)');
  const isM7 = layer?.category?.includes('M7') || layer?.name?.includes('M7') || props?.lineCode === 'M7' || rawName.includes('(M7)');
  const isM5 = layer?.category?.includes('M5') || layer?.name?.includes('M5') || props?.lineCode === 'M5' || rawName.includes('(M5)');
  const isM6 = layer?.category?.includes('M6') || layer?.name?.includes('M6') || props?.lineCode === 'M6' || rawName.includes('(M6)');
  const isM1 = layer?.category?.includes('M1') || layer?.name?.includes('M1') || props?.lineCode === 'M1' || props?.lineCode === 'M1B' || rawName.includes('(M1)') || rawName.includes('(M1B)');
  const isM4 = layer?.category?.includes('M4') || layer?.name?.includes('M4') || props?.lineCode === 'M4' || rawName.includes('(M4)');
  const isM3 = layer?.category?.includes('M3') || layer?.name?.includes('M3') || props?.lineCode === 'M3' || rawName.includes('(M3)');
  const isT4 = layer?.category?.includes('T4') || layer?.name?.includes('T4') || props?.lineCode === 'T4' || rawName.includes('(T4)');
  const isT2 = layer?.category?.includes('T2') || layer?.name?.includes('T2') || props?.lineCode === 'T2' || rawName.includes('(T2)');
  const isF3 = layer?.category?.includes('F3') || layer?.name?.includes('F3') || props?.lineCode === 'F3' || rawName.includes('(F3)');
  const isF2 = layer?.category?.includes('F2') || layer?.name?.includes('F2') || props?.lineCode === 'F2' || rawName.includes('(F2)');
  const isF1 = layer?.category?.includes('F1') || layer?.name?.includes('F1') || props?.lineCode === 'F1' || rawName.includes('(F1)');
  const isT3 = layer?.category?.includes('T3') || layer?.name?.includes('T3') || props?.lineCode === 'T3' || rawName.includes('(T3)');
  const isM2 = layer?.category?.includes('M2') || layer?.name?.includes('M2') || props?.lineCode === 'M2' || rawName.includes('(M2)');
  const isT1 = layer?.category?.includes('T1') || layer?.name?.includes('T1') || props?.lineCode === 'T1' || rawName.includes('(T1)');
  const isM10 = props?.lineCode === 'M10' || rawName.includes('(M10)');
  const isM12 = props?.lineCode === 'M12' || rawName.includes('(M12)');
  const isM13 = props?.lineCode === 'M13' || rawName.includes('(M13)');
  const isM14 = props?.lineCode === 'M14' || rawName.includes('(M14)');

  // Look up curated station details (supports F3, F2, M11, Marmaray, M1, M2, M3, M4, M5, M6, M7, M8, M9, T1, T2, T3, T4, T5, T6, F1, and F4 lines)
  const stationDetail: StationDetail | null = isPoint
    ? isF3
      ? getF3StationDetail(rawName) || getM2StationDetail(rawName)
      : isF2
      ? getF2StationDetail(rawName) || getT1StationDetail(rawName) || getT2StationDetail(rawName)
      : isT6
      ? getT6StationDetail(rawName)
      : isM11
      ? getM11StationDetail(rawName) || getM7StationDetail(rawName)
      : isMarmaray
      ? getMarmarayStationDetail(rawName) || getT6StationDetail(rawName) || getM1StationDetail(rawName) || getM2StationDetail(rawName) || getM4StationDetail(rawName) || getM5StationDetail(rawName)
      : isM8
      ? getM8StationDetail(rawName) || getM4StationDetail(rawName) || getM5StationDetail(rawName)
      : isF4
      ? getF4StationDetail(rawName) || getM6StationDetail(rawName)
      : isM9
      ? getM9StationDetail(rawName) || getM3StationDetail(rawName)
      : isT5
      ? getT5StationDetail(rawName)
      : isM7
      ? getM7StationDetail(rawName)
      : isM5
      ? getM5StationDetail(rawName)
      : isM6
      ? getM6StationDetail(rawName) || getM2StationDetail(rawName)
      : isM1
      ? getM1StationDetail(rawName)
      : isM4
      ? getM4StationDetail(rawName)
      : isM3
      ? getM3StationDetail(rawName)
      : isT4
      ? getT4StationDetail(rawName)
      : isT2
      ? getT2StationDetail(rawName) || getT1StationDetail(rawName)
      : isF1
      ? getF1StationDetail(rawName) || getM2StationDetail(rawName) || getT1StationDetail(rawName)
      : isT3
      ? getT3StationDetail(rawName) || getM1StationDetail(rawName) || getT1StationDetail(rawName) || getM2StationDetail(rawName)
      : isM2
      ? getM2StationDetail(rawName) || getM7StationDetail(rawName) || getM6StationDetail(rawName) || getM1StationDetail(rawName) || getT1StationDetail(rawName) || getT3StationDetail(rawName)
      : isT1
      ? getT1StationDetail(rawName) || getM1StationDetail(rawName) || getM2StationDetail(rawName) || getT3StationDetail(rawName)
      : getF3StationDetail(rawName) || getF2StationDetail(rawName) || getT6StationDetail(rawName) || getM11StationDetail(rawName) || getMarmarayStationDetail(rawName) || getM8StationDetail(rawName) || getF4StationDetail(rawName) || getM9StationDetail(rawName) || getT5StationDetail(rawName) || getM7StationDetail(rawName) || getM5StationDetail(rawName) || getM6StationDetail(rawName) || getM1StationDetail(rawName) || getM3StationDetail(rawName) || getM4StationDetail(rawName) || getT4StationDetail(rawName) || getT1StationDetail(rawName) || getM2StationDetail(rawName) || getT3StationDetail(rawName) || getF1StationDetail(rawName) || getT2StationDetail(rawName)
    : null;

  const lineBadgeText = stationDetail?.lineCode || (
    isM10 ? 'M10' :
    isM12 ? 'M12' :
    isM13 ? 'M13' :
    isM14 ? 'M14' :
    isF4 ? 'F4' :
    isF3 ? 'F3' :
    isF2 ? 'F2' :
    isF1 ? 'F1' :
    isT6 ? 'T6' :
    isM11 ? 'M11' :
    isMarmaray ? 'B1' :
    isM8 ? 'M8' :
    isM9 ? 'M9' :
    isT5 ? 'T5' :
    isM7 ? 'M7' :
    isM5 ? 'M5' :
    isM6 ? 'M6' :
    props?.lineCode === 'M1B' ? 'M1B' :
    isM4 ? 'M4' :
    isM3 ? 'M3' :
    isT4 ? 'T4' :
    isT2 ? 'T2' :
    isT3 ? 'T3' :
    isM2 ? 'M2' :
    isT1 ? 'T1' :
    isM1 ? 'M1' : 'Transit'
  );

  const themeColor =
    getOfficialMetroColor(stationDetail?.lineCode || lineBadgeText) ||
    layer?.color ||
    '#EE2229';

  const handleFlyTo = () => {
    if (isPoint && Array.isArray(coordinates) && onFlyToCoordinates) {
      onFlyToCoordinates([coordinates[0], coordinates[1]]);
    }
  };

  return (
    <>
      {/* Mobile backdrop to allow easy tapping outside to dismiss */}
      <div
        onClick={onClose}
        className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-xs z-[490] animate-in fade-in"
      />

      <aside
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        className="fixed inset-x-0 bottom-0 sm:absolute sm:top-4 sm:right-4 sm:bottom-4 sm:left-auto z-[500] w-full sm:max-w-md lg:max-w-[450px] max-h-[82vh] sm:max-h-none bg-neutral-950/98 backdrop-blur-2xl border-t sm:border border-neutral-800 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-100 select-text pointer-events-auto animate-in slide-in-from-bottom duration-300 sm:animate-slide-in-right"
        aria-label="İstasyon Detay Paneli"
      >
        {/* Mobile Swipe Handle */}
        <div 
          onClick={onClose}
          className="sm:hidden flex items-center justify-center py-2 shrink-0 cursor-pointer"
        >
          <div className="w-12 h-1.5 bg-neutral-700 hover:bg-neutral-600 rounded-full transition-colors" />
        </div>

        {/* Top Media Hero Area */}
        <div className="relative w-full h-40 sm:h-64 bg-neutral-900 shrink-0 overflow-hidden">
          {isPoint && stationDetail?.imageUrl && !imageError ? (
            <>
              <img
                src={stationDetail.imageUrl}
                alt={stationDetail.cleanName}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
              {/* Top dark gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-black/60 pointer-events-none" />
            </>
          ) : (
            /* High-grade architectural transit pattern fallback */
            <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col justify-end p-6 relative overflow-hidden">
              <div
                style={{
                  backgroundImage: `radial-gradient(${themeColor} 1px, transparent 1px)`
                }}
                className="absolute inset-0 opacity-20 [background-size:16px_16px]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-800 pointer-events-none">
                <Train className="w-32 h-32 opacity-15" />
              </div>
              <div className="relative z-10">
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                  {isPoint ? `${lineBadgeText} Raylı Sistem Hattı` : 'Hat Güzergahı'}
                </span>
              </div>
            </div>
          )}

          {/* Top Badges & Close Button */}
          <div className="absolute top-3 sm:top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span
                style={{ backgroundColor: themeColor }}
                className="px-2.5 py-1 rounded-md text-white text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1.5"
              >
                <Train className="w-3.5 h-3.5" />
                <span>{lineBadgeText}</span>
              </span>

              {onSelectLine && (
                <button
                  type="button"
                  onClick={() => {
                    const ld = getLineDetail(lineBadgeText);
                    if (ld) onSelectLine(ld);
                  }}
                  title={`${lineBadgeText} hattının tüm detaylarını incele`}
                  className="px-2 py-1 rounded-md bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 text-cyan-300 hover:text-white text-[11px] font-semibold flex items-center gap-1 shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <Train className="w-3 h-3 text-cyan-400" />
                  <span>Hat Detayı</span>
                </button>
              )}

              <span className="hidden xs:flex px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-neutral-200 text-xs font-semibold items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isPoint ? 'Aktif İstasyon' : 'Demiryolu Hattı'}</span>
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Kapat"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/60 backdrop-blur-md transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        {/* Bottom Hero Overlay Title */}
        <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none">
          <div className="text-[11px] font-medium text-neutral-300 drop-shadow-sm flex items-center gap-1.5 mb-0.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>{stationDetail?.district || (isPoint ? 'İstanbul, Türkiye' : layer?.category || layer?.name || 'İstanbul Raylı Sistemleri')}</span>
          </div>
          <h2 className="text-2xl font-black text-white font-heading tracking-tight drop-shadow-md leading-tight">
            {stationDetail?.cleanName || cleanName}
          </h2>
          {stationDetail?.imageCaption && (
            <p className="text-[10px] text-neutral-400 line-clamp-1 mt-1 drop-shadow">
              📷 {stationDetail.imageCaption}
            </p>
          )}
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6 text-xs">
        {/* Quick Information Cards */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/80 flex flex-col justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Açılış Tarihi</span>
            </span>
            <span className="text-xs font-bold text-white mt-1">
              {stationDetail?.openedDate || (layer?.date ? formatDateLong(layer.date) : 'Hizmette')}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/80 flex flex-col justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-amber-400" />
              <span>İstasyon Yapısı</span>
            </span>
            <span className="text-xs font-bold text-white mt-1">
              {stationDetail?.structureType || (isPoint ? 'Hemzemin' : 'Demiryolu Hattı')}
            </span>
          </div>

          {stationDetail?.platforms && (
            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/80 col-span-2 flex flex-col justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Peron Düzeni</span>
              </span>
              <span className="text-xs font-bold text-neutral-200 mt-1">
                {stationDetail.platforms}
              </span>
            </div>
          )}
        </div>

        {/* RAILWAY INTERCHANGES SECTION */}
        {isPoint && stationDetail && stationDetail.interchanges && stationDetail.interchanges.length > 0 ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2">
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-bold tracking-wider uppercase text-neutral-200">
                  Raylı Sistem Aktarmaları
                </h3>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {stationDetail.interchanges.length} Hat Bağlantısı
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {stationDetail.interchanges.map((ic: StationInterchange, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col gap-2.5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectLine) {
                            const ld = getLineDetail(ic.lineCode);
                            if (ld) onSelectLine(ld);
                          }
                        }}
                        style={{
                          backgroundColor: getOfficialMetroColor(ic.lineCode) || ic.color,
                          color: ic.textColor || '#ffffff'
                        }}
                        className="px-2 py-0.5 rounded text-[11px] font-black tracking-wide shrink-0 shadow-sm hover:scale-105 transition-transform cursor-pointer"
                        title={`${ic.lineCode} hattı detaylarını görüntüle`}
                      >
                        {ic.lineCode}
                      </button>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white leading-tight">
                          {ic.lineName}
                        </span>
                        {ic.stationName && (
                          <span className="text-[10.5px] text-neutral-400">
                            {ic.stationName}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 shrink-0 border border-neutral-700/60">
                      {ic.transferType}
                    </span>
                  </div>

                  {/* PROMINENT DISTANCE TO INTERCHANGE */}
                  <div className="flex items-center gap-2 text-[11px] bg-neutral-950/70 px-2.5 py-1.5 rounded-lg border border-neutral-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-neutral-400">Aktarma Mesafesi:</span>
                    <strong className="text-cyan-300 font-bold ml-auto font-mono text-[11.5px]">
                      {ic.distance}
                    </strong>
                    {ic.walkingTime && (
                      <span className="text-neutral-400 text-[10px]">({ic.walkingTime})</span>
                    )}
                  </div>

                  <p className="text-[11.5px] text-neutral-300 leading-relaxed pl-1 border-l-2 border-neutral-800">
                    {ic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : isPoint && stationDetail && stationDetail.interchanges.length === 0 ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2 border-b border-neutral-800/80 pb-2">
              <Train className="w-4 h-4 text-neutral-400" />
              <h3 className="text-xs font-bold tracking-wider uppercase text-neutral-300">
                Raylı Sistem Aktarmaları
              </h3>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-center gap-2.5 text-neutral-400">
              <Train className="w-4 h-4 text-neutral-500 shrink-0" />
              <span className="text-[11.5px]">Bu istasyonda doğrudan raylı sistem aktarması bulunmamaktadır.</span>
            </div>
          </div>
        ) : null}

        {/* Generic Interchange placeholder for non-cataloged stations */}
        {isPoint && !stationDetail && (
          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3 text-neutral-400">
            <Train className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-neutral-300">Raylı Sistem Aktarmaları</span>
              <p className="text-[11px] leading-relaxed">
                Bu istasyon için raylı sistem aktarma bilgileri sonraki aşamada eklenecektir.
              </p>
            </div>
          </div>
        )}

        {/* Station Description & Historical Notes */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold tracking-wider uppercase text-neutral-400 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>İstasyon Bilgisi ve Tarihçe</span>
          </h3>

          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-300 leading-relaxed space-y-2 text-[11.5px]">
            <p>{stationDetail?.description || desc || 'İstanbul raylı sistemler ulaşım tesisi.'}</p>
            {stationDetail?.historicalContext && (
              <div className="pt-2 border-t border-neutral-800/80">
                <span className="text-[10.5px] font-semibold text-cyan-400 block mb-1">
                  Tarihsel Süreç:
                </span>
                <p className="text-neutral-300">{stationDetail.historicalContext}</p>
              </div>
            )}
          </div>
        </div>

        {/* Facilities & Accessibility Features */}
        {stationDetail?.features && stationDetail.features.length > 0 && (
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold tracking-wider uppercase text-neutral-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Özellikler ve Erişilebilirlik</span>
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {stationDetail.features.map((featureItem: string, idx: number) => (
                <div
                  key={idx}
                  className="px-2.5 py-1.5 rounded-lg bg-neutral-900/70 border border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="truncate">{featureItem}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button: Center Camera on Station (without coordinates) */}
        {isPoint && onFlyToCoordinates && (
          <button
            type="button"
            onClick={handleFlyTo}
            style={{ backgroundColor: themeColor }}
            className="w-full py-2.5 px-4 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:brightness-110 active:scale-98"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Haritayı İstasyona Odakla</span>
          </button>
        )}
      </div>
    </aside>
    </>
  );
};
