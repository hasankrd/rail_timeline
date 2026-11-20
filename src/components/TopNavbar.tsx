import React from 'react';
import { BaseMapStyle, DatePoint } from '../types';
import { formatDateLong } from '../utils/dateUtils';
import { Globe, Map as MapIcon, Moon, Satellite } from 'lucide-react';

interface TopNavbarProps {
  currentDate: DatePoint;
  baseMapStyle: BaseMapStyle;
  onChangeBaseMapStyle: (style: BaseMapStyle) => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  currentDate,
  baseMapStyle,
  onChangeBaseMapStyle,
}) => {
  return (
    <header className="h-14 bg-neutral-900/90 backdrop-blur-xl border-b border-neutral-800/80 px-4 flex items-center justify-between z-30 shrink-0 select-none">
      {/* Brand / Title */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
          <Globe className="w-5 h-5 text-neutral-950 stroke-[2.5]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading font-bold text-sm sm:text-base text-white tracking-tight">
              İstanbul <span className="text-cyan-400 font-normal">Raylı Sistemler Tarihi</span>
            </h1>
            <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              METRO & TRAMVAY
            </span>
          </div>
          <p className="text-[10px] text-neutral-400 hidden sm:block">
            Seçili Tarihteki Aktif Raylı Sistemler Ağı (1875 Tarihi Tünel & 1989'dan Günümüze)
          </p>
        </div>
      </div>

      {/* Center: Selected Month & Year Pill */}
      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-neutral-950/80 border border-cyan-500/40 shadow-inner">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span className="text-xs sm:text-sm font-heading font-bold text-white tracking-wide">
          {formatDateLong(currentDate)}
        </span>
      </div>

      {/* Right: Map Imagery Mode Switcher */}
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-neutral-950/80 rounded-xl p-0.5 border border-neutral-800">
          <button
            type="button"
            onClick={() => onChangeBaseMapStyle('satellite')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              baseMapStyle === 'satellite'
                ? 'bg-cyan-500 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Yüksek Çözünürlüklü Uydu Haritası"
          >
            <Satellite className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Uydu</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeBaseMapStyle('hybrid')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              baseMapStyle === 'hybrid'
                ? 'bg-cyan-500 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="İlçe ve Cadde Etiketli Hibrit Uydu"
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hibrit</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeBaseMapStyle('night')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              baseMapStyle === 'night'
                ? 'bg-cyan-500 text-neutral-950 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Gece Şehir Işıkları Görünümü"
          >
            <Moon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Gece</span>
          </button>
        </div>
      </div>
    </header>
  );
};
