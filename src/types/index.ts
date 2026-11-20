/**
 * Types for Google Earth KML & Timeline Explorer
 */

export interface DatePoint {
  year: number;
  month: number; // 1 - 12
}

export interface KmlPlacemark {
  id: string;
  name: string;
  description: string;
  geometryType: 'Point' | 'LineString' | 'Polygon' | 'MultiGeometry' | 'GeometryCollection';
  coordinates: any;
  extendedData?: Record<string, string>;
  style?: {
    color?: string;
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWidth?: number;
    iconUrl?: string;
  };
}

export interface KmlLayerItem {
  id: string;
  name: string;
  date: DatePoint; // Associated month and year
  endDate?: DatePoint; // Optional end date for time ranges
  fileName: string;
  fileSize?: number;
  color: string;
  visible: boolean;
  isSample?: boolean;
  description?: string;
  category?: string;
  geoJson: GeoJSON.FeatureCollection;
  placemarksCount: number;
  bounds?: [[number, number], [number, number]]; // [southWest, northEast]
  uploadedAt: string;
}

export type BaseMapStyle = 'satellite' | 'hybrid' | 'night' | 'terrain' | 'dark';

export type TimeFilterMode = 'exact-month' | 'cumulative' | 'window-3m';

export interface MapViewport {
  lat: number;
  lng: number;
  zoom: number;
}
