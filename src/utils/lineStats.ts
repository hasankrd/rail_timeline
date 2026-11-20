import { DatePoint, KmlLayerItem, TimeFilterMode } from '../types';
import { isLayerActiveAtDate } from './dateUtils';

export type LineAuthority = 'UAB' | 'Metro İstanbul';

/**
 * Calculates geographical length of a coordinate path using the Haversine formula
 */
export function haversineDistanceKm(coord1: [number, number], coord2: [number, number]): number {
  const [lng1, lat1] = coord1;
  const [lng2, lat2] = coord2;
  const R = 6371.0;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Calculate total route length in kilometers of a KML layer item
 */
export function getLayerLengthKm(layer: KmlLayerItem): number {
  let totalKm = 0;
  if (!layer.geoJson || !layer.geoJson.features) return 0;

  for (const feature of layer.geoJson.features) {
    if (feature.geometry) {
      if (feature.geometry.type === 'LineString') {
        const coords = (feature.geometry as GeoJSON.LineString).coordinates as [number, number][];
        for (let i = 0; i < coords.length - 1; i++) {
          totalKm += haversineDistanceKm(coords[i], coords[i + 1]);
        }
      } else if (feature.geometry.type === 'MultiLineString') {
        const lineStrings = (feature.geometry as GeoJSON.MultiLineString).coordinates as [number, number][][];
        for (const line of lineStrings) {
          for (let i = 0; i < line.length - 1; i++) {
            totalKm += haversineDistanceKm(line[i], line[i + 1]);
          }
        }
      }
    }
  }

  return totalKm;
}

/**
 * Determines whether the line was built by UAB (T.C. Ulaştırma ve Altyapı Bakanlığı / TCDD)
 * or by Metro İstanbul (İBB - İstanbul Büyükşehir Belediyesi).
 */
export function getLayerAuthority(layer: KmlLayerItem): LineAuthority {
  const id = layer.id.toLowerCase();
  const name = layer.name.toLowerCase();

  // UAB (Ulaştırma ve Altyapı Bakanlığı / AYGM / TCDD) projects:
  if (
    id.includes('marmaray') ||
    id.includes('m11-') ||
    id.includes('m11_') ||
    id.includes('t6-sirkeci-kazlicesme') ||
    name.includes('t6: sirkeci') ||
    id.includes('m4-tavsantepe-saw') ||
    id.includes('m3-metrokent-kayasehir') ||
    id.includes('m3-kirazli-bakirkoy-sahil')
  ) {
    return 'UAB';
  }

  return 'Metro İstanbul';
}

export interface NetworkStats {
  totalKm: number;
  uabKm: number;
  metroIstanbulKm: number;
  activeLayersCount: number;
}

/**
 * Computes network length and builder breakdown for the specified date and filter mode
 */
export function calculateNetworkStats(
  layers: KmlLayerItem[],
  currentDate: DatePoint,
  filterMode: TimeFilterMode
): NetworkStats {
  const activeLayers = layers.filter((layer) => isLayerActiveAtDate(layer, currentDate, filterMode));

  let uabKm = 0;
  let metroIstanbulKm = 0;

  for (const layer of activeLayers) {
    const km = getLayerLengthKm(layer);
    const authority = getLayerAuthority(layer);
    if (authority === 'UAB') {
      uabKm += km;
    } else {
      metroIstanbulKm += km;
    }
  }

  return {
    totalKm: uabKm + metroIstanbulKm,
    uabKm,
    metroIstanbulKm,
    activeLayersCount: activeLayers.length,
  };
}

/**
 * Counts the number of Point stations in a layer's GeoJSON
 */
export function getLayerStationCount(layer: KmlLayerItem): number {
  let count = 0;
  if (!layer.geoJson || !layer.geoJson.features) return 0;
  for (const feature of layer.geoJson.features) {
    if (feature.geometry && feature.geometry.type === 'Point') {
      count++;
    }
  }
  return count;
}

export interface YearlySectionItem {
  id: string;
  name: string;
  category?: string;
  color: string;
  lengthKm: number;
  authority: LineAuthority;
  stationsCount: number;
  date: DatePoint;
}

export interface YearStatRecord {
  year: number;
  newKm: number;
  newMetroIstanbulKm: number;
  newUabKm: number;
  newStationsCount: number;
  cumulativeTotalKm: number;
  cumulativeMetroIstanbulKm: number;
  cumulativeUabKm: number;
  cumulativeStationsCount: number;
  sections: YearlySectionItem[];
}

/**
 * Calculates historical year-by-year transit statistics across all layers
 */
export function calculateYearlyStats(layers: KmlLayerItem[]): YearStatRecord[] {
  // Find all distinct years in data
  const yearMap = new Map<number, KmlLayerItem[]>();
  for (const layer of layers) {
    const y = layer.date.year;
    if (!yearMap.has(y)) {
      yearMap.set(y, []);
    }
    yearMap.get(y)!.push(layer);
  }

  const distinctYears = Array.from(yearMap.keys()).sort((a, b) => a - b);
  const records: YearStatRecord[] = [];

  for (const year of distinctYears) {
    const sectionsInYear = yearMap.get(year) || [];
    let newKm = 0;
    let newMetroIstanbulKm = 0;
    let newUabKm = 0;
    let newStationsCount = 0;

    const sectionItems: YearlySectionItem[] = sectionsInYear.map((l) => {
      const lengthKm = getLayerLengthKm(l);
      const authority = getLayerAuthority(l);
      const stationsCount = getLayerStationCount(l);

      newKm += lengthKm;
      newStationsCount += stationsCount;
      if (authority === 'UAB') {
        newUabKm += lengthKm;
      } else {
        newMetroIstanbulKm += lengthKm;
      }

      return {
        id: l.id,
        name: l.name,
        category: l.category,
        color: l.color,
        lengthKm,
        authority,
        stationsCount,
        date: l.date,
      };
    });

    // Calculate cumulative network at end of this year
    const activeAtYearEnd = layers.filter((l) =>
      isLayerActiveAtDate(l, { year, month: 12 }, 'cumulative')
    );

    let cumulativeTotalKm = 0;
    let cumulativeMetroIstanbulKm = 0;
    let cumulativeUabKm = 0;
    let cumulativeStationsCount = 0;

    for (const l of activeAtYearEnd) {
      const km = getLayerLengthKm(l);
      const auth = getLayerAuthority(l);
      cumulativeTotalKm += km;
      cumulativeStationsCount += getLayerStationCount(l);
      if (auth === 'UAB') {
        cumulativeUabKm += km;
      } else {
        cumulativeMetroIstanbulKm += km;
      }
    }

    records.push({
      year,
      newKm,
      newMetroIstanbulKm,
      newUabKm,
      newStationsCount,
      cumulativeTotalKm,
      cumulativeMetroIstanbulKm,
      cumulativeUabKm,
      cumulativeStationsCount,
      sections: sectionItems,
    });
  }

  return records;
}
