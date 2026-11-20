import { DatePoint, KmlLayerItem, TimeFilterMode } from '../types';

export const MONTH_NAMES_SHORT = [
  'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz',
  'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'
];

export const MONTH_NAMES_FULL = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

/**
 * Converts a { year, month } into a zero-based absolute continuous month index
 */
export function dateToMonthIndex(d: DatePoint): number {
  return d.year * 12 + (d.month - 1);
}

/**
 * Converts a continuous month index back into { year, month }
 */
export function monthIndexToDate(index: number): DatePoint {
  const year = Math.floor(index / 12);
  const month = (index % 12) + 1;
  return { year, month };
}

/**
 * Format a DatePoint to human readable text: "October 2024"
 */
export function formatDateLong(d: DatePoint): string {
  return `${MONTH_NAMES_FULL[d.month - 1]} ${d.year}`;
}

/**
 * Format a DatePoint to short text: "Oct 2024"
 */
export function formatDateShort(d: DatePoint): string {
  return `${MONTH_NAMES_SHORT[d.month - 1]} ${d.year}`;
}

/**
 * Format as YYYY-MM
 */
export function formatDateISO(d: DatePoint): string {
  const m = d.month.toString().padStart(2, '0');
  return `${d.year}-${m}`;
}

/**
 * Checks if a layer should be visible based on current selected date and filter mode
 */
export function isLayerActiveAtDate(
  layer: KmlLayerItem,
  currentDate: DatePoint,
  filterMode: TimeFilterMode
): boolean {
  if (!layer.visible) return false;

  const currentIdx = dateToMonthIndex(currentDate);
  const layerStartIdx = dateToMonthIndex(layer.date);
  const layerEndIdx = layer.endDate ? dateToMonthIndex(layer.endDate) : Infinity;

  switch (filterMode) {
    case 'exact-month':
      // Only show sections newly opened in this exact month
      return currentIdx === layerStartIdx;

    case 'cumulative':
    default:
      // Active public transport railway system at this date (from opening date onwards)
      return currentIdx >= layerStartIdx && currentIdx <= layerEndIdx;
  }
}

/**
 * Find next and previous dates from existing layers
 */
export function findAdjacentLayerDates(
  layers: KmlLayerItem[],
  currentDate: DatePoint
): { prevDate: DatePoint | null; nextDate: DatePoint | null } {
  const currentIdx = dateToMonthIndex(currentDate);
  const distinctIndices = Array.from(
    new Set(layers.map((l) => dateToMonthIndex(l.date)))
  ).sort((a, b) => a - b);

  let prevIdx: number | null = null;
  let nextIdx: number | null = null;

  for (const idx of distinctIndices) {
    if (idx < currentIdx) {
      prevIdx = idx;
    } else if (idx > currentIdx && nextIdx === null) {
      nextIdx = idx;
      break;
    }
  }

  return {
    prevDate: prevIdx !== null ? monthIndexToDate(prevIdx) : null,
    nextDate: nextIdx !== null ? monthIndexToDate(nextIdx) : null,
  };
}
