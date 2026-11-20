import React, { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import { BaseMapStyle, DatePoint, KmlLayerItem, TimeFilterMode } from '../types';
import { isLayerActiveAtDate, formatDateLong } from '../utils/dateUtils';
import { Compass, Navigation, ZoomIn, ZoomOut, Satellite, Map as MapIcon, Moon, X, HardHat, Train } from 'lucide-react';
import { getOfficialMetroColor } from '../data/metroColors';
import { FutureProjectLine } from '../data/futureProjectsData';
import { LineDetail, getLineDetail } from '../data/linesData';

interface EarthMapProps {
  layers: KmlLayerItem[];
  currentDate: DatePoint;
  filterMode: TimeFilterMode;
  baseMapStyle: BaseMapStyle;
  onChangeBaseMapStyle?: (style: BaseMapStyle) => void;
  onSelectPlacemark?: (feature: any, layer: KmlLayerItem) => void;
  onUnselect?: () => void;
  activePlacemark?: any;
  flyToCoords?: [number, number] | null; // [lng, lat]
  selectedConstructionLine?: FutureProjectLine | null;
  onUnselectConstructionLine?: () => void;
  onOpenConstructionList?: () => void;
  selectedLine?: LineDetail | null;
  onSelectLine?: (line: LineDetail | null) => void;
}

// Wayback releases per year from official Esri Wayback archive
export const WAYBACK_YEAR_RELEASES: Record<number, { releaseId: string; dateStr: string }> = {
  2014: { releaseId: '10', dateStr: '2014-02-20' },
  2015: { releaseId: '1431', dateStr: '2015-09-16' },
  2016: { releaseId: '388', dateStr: '2016-04-20' },
  2017: { releaseId: '577', dateStr: '2017-01-11' },
  2018: { releaseId: '239', dateStr: '2018-11-29' },
  2019: { releaseId: '645', dateStr: '2019-06-26' },
  2020: { releaseId: '119', dateStr: '2020-10-14' },
  2021: { releaseId: '1049', dateStr: '2021-01-13' },
  2022: { releaseId: '4905', dateStr: '2022-06-29' },
  2023: { releaseId: '1034', dateStr: '2023-10-11' },
  2024: { releaseId: '12428', dateStr: '2024-06-06' },
  2025: { releaseId: '6543', dateStr: '2025-03-27' },
  2026: { releaseId: '10842', dateStr: '2026-05-28' },
};

export interface SatelliteEraInfo {
  year: number;
  label: string;
  source: string;
  isWayback: boolean;
  isVintage1989: boolean;
  url: string;
  attribution: string;
}

export function getSatelliteEra(year: number, forceModern: boolean = false): SatelliteEraInfo {
  if (forceModern || year >= 2026) {
    return {
      year,
      label: '2026 Modern Satellite',
      source: 'Current High-Resolution Earth Imagery',
      isWayback: false,
      isVintage1989: false,
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri, Maxar, Earthstar Geographics',
    };
  }

  if (year >= 2014) {
    const wb = WAYBACK_YEAR_RELEASES[year] || WAYBACK_YEAR_RELEASES[2014];
    return {
      year,
      label: `${year} Wayback Satellite Archive`,
      source: `Esri Wayback Archive (${wb.dateStr})`,
      isWayback: true,
      isVintage1989: false,
      url: `https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/${wb.releaseId}/{z}/{y}/{x}`,
      attribution: `Esri Wayback Imagery (${wb.dateStr})`,
    };
  }

  // Pre-2014 era (1989 - 2013)
  return {
    year,
    label: year === 1989 ? '1989 Historical Satellite' : `${year} Historical Satellite Era`,
    source: year === 1989 ? 'Landsat 5 Era Archival Tone' : 'Archival Satellite Base',
    isWayback: false,
    isVintage1989: true,
    url: 'https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/10/{z}/{y}/{x}',
    attribution: 'Archival Orbital Imagery (1989 Landsat-5 multispectral tone)',
  };
}

// Tile layer definitions
const TILE_PROVIDERS: Record<BaseMapStyle, { url: string; attribution: string; maxZoom?: number; subdomains?: string[] }> = {
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19,
  },
  hybrid: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19,
  },
  terrain: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: 'OpenTopoMap',
    maxZoom: 17,
  },
  night: {
    url: 'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg',
    attribution: 'NASA Earth at Night',
    maxZoom: 8,
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: 'CARTO',
    maxZoom: 19,
    subdomains: ['a', 'b', 'c', 'd'],
  },
};

// ESRI Reference Labels & Borders overlay (for hybrid view)
const HYBRID_LABELS_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';

// Strict geographical bounds for Türkiye: [SouthWest, NorthEast]
// Latitude: ~35.4°N to ~42.6°N, Longitude: ~25.2°E to ~45.0°E
const TURKEY_BOUNDS: L.LatLngBoundsExpression = [
  [35.4, 25.2],
  [42.6, 45.0],
];

// Istanbul Coordinates (centered on M1 Emniyet - Kocatepe corridor)
const ISTANBUL_CENTER: L.LatLngExpression = [41.033, 28.918];
const ISTANBUL_DEFAULT_ZOOM = 13;
const TURKEY_MIN_ZOOM = 6; // Strict min zoom to never allow zooming out of Türkiye

export const EarthMap: React.FC<EarthMapProps> = ({
  layers,
  currentDate,
  filterMode,
  baseMapStyle,
  onChangeBaseMapStyle,
  onSelectPlacemark,
  onUnselect,
  activePlacemark,
  flyToCoords,
  selectedConstructionLine,
  onUnselectConstructionLine,
  onOpenConstructionList,
  selectedLine,
  onSelectLine,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const baseTileLayerRef = useRef<L.TileLayer | null>(null);
  const overlayLabelsLayerRef = useRef<L.TileLayer | null>(null);
  const geoJsonGroupRef = useRef<L.FeatureGroup | null>(null);
  const constructionGroupRef = useRef<L.FeatureGroup | null>(null);
  const stationMarkersRef = useRef<Map<string, L.Marker>>(new Map());

  const onUnselectRef = useRef(onUnselect);
  const lastFeatureClickTimeRef = useRef<number>(0);
  useEffect(() => {
    onUnselectRef.current = onUnselect;
  }, [onUnselect]);

  const [is3DView, setIs3DView] = useState<boolean>(false);
  const [currentZoom, setCurrentZoom] = useState<number>(ISTANBUL_DEFAULT_ZOOM);

  // Zoom percentage calculation: Istanbul default zoom 13 is calibrated as 100%.
  const zoomPercent = Math.max(5, Math.round(100 + (currentZoom - ISTANBUL_DEFAULT_ZOOM) * 20));
  // Only hide stations when completely zoomed out to all-Turkey view (< 10.5)
  const isZoomVeryFar = currentZoom < 10.5;
  const isZoomGte120 = zoomPercent >= 120 || currentZoom >= 13.2;

  const satelliteEra = useMemo(
    () => getSatelliteEra(currentDate.year),
    [currentDate.year]
  );

  // Initialize Map focused on Istanbul and strictly bound to Türkiye
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const initialZoom = isMobile ? 12 : ISTANBUL_DEFAULT_ZOOM;

    // Create Leaflet Map with strict Türkiye bounding box and minZoom
    const map = L.map(mapContainerRef.current, {
      center: ISTANBUL_CENTER,
      zoom: initialZoom,
      minZoom: TURKEY_MIN_ZOOM, // Cannot zoom out of Türkiye
      maxZoom: 19,
      maxBounds: TURKEY_BOUNDS, // Cannot pan outside Türkiye
      maxBoundsViscosity: 1.0, // Hard impenetrable boundary
      zoomControl: false,
      attributionControl: false,
    });

    const onZoom = () => {
      setCurrentZoom(map.getZoom());
    };
    map.on('zoom', onZoom);
    map.on('zoomend', onZoom);

    // Unselect station or line only when clicking truly empty map surface
    const handleMapClick = (e: any) => {
      // If a feature, station, or line was clicked recently, do not unselect
      if (Date.now() - lastFeatureClickTimeRef.current < 550) {
        return;
      }
      const target = e?.originalEvent?.target as HTMLElement | null;
      if (
        target &&
        target.closest(
          '.station-marker-container, .metro-station-divicon, .leaflet-marker-icon, .station-roundel, .station-label-pill, aside, path.leaflet-interactive, .metro-line-path'
        )
      ) {
        return;
      }
      onUnselectRef.current?.();
    };
    map.on('click', handleMapClick);

    // Also unselect when popup is closed, unless a new feature was just clicked
    const handlePopupClose = () => {
      if (Date.now() - lastFeatureClickTimeRef.current < 550) {
        return;
      }
      onUnselectRef.current?.();
    };
    map.on('popupclose', handlePopupClose);

    // Custom attribution (minimal)
    L.control.attribution({ position: 'bottomright', prefix: false }).addTo(map);

    // Initial base layer (dynamically configured for date)
    const isSat = baseMapStyle === 'satellite' || baseMapStyle === 'hybrid';
    const config = isSat
      ? {
          url: satelliteEra.url,
          attribution: satelliteEra.attribution,
          maxZoom: 19,
          subdomains: ['a', 'b', 'c'],
        }
      : TILE_PROVIDERS[baseMapStyle] || TILE_PROVIDERS.satellite;

    const tileLayer = L.tileLayer(config.url, {
      attribution: config.attribution,
      maxZoom: config.maxZoom || 19,
      subdomains: config.subdomains || ['a', 'b', 'c'],
    }).addTo(map);
    baseTileLayerRef.current = tileLayer;

    if (isSat && satelliteEra.isVintage1989) {
      setTimeout(() => {
        tileLayer.getContainer()?.classList.add('vintage-1989-satellite');
      }, 50);
    }

    // Hybrid labels
    if (baseMapStyle === 'hybrid' || baseMapStyle === 'satellite') {
      const labels = L.tileLayer(HYBRID_LABELS_URL, {
        maxZoom: 19,
        opacity: 0.85,
      }).addTo(map);
      overlayLabelsLayerRef.current = labels;
    }

    // Feature group for GeoJSON overlays
    const fg = L.featureGroup().addTo(map);
    geoJsonGroupRef.current = fg;

    // Feature group for selected construction line overlay
    const constrFg = L.featureGroup().addTo(map);
    constructionGroupRef.current = constrFg;

    mapInstanceRef.current = map;

    return () => {
      map.off('click', handleMapClick);
      map.off('popupclose', handlePopupClose);
      map.off('zoom', onZoom);
      map.off('zoomend', onZoom);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // ResizeObserver to automatically adjust Leaflet viewport when side panel toggles
  useEffect(() => {
    if (!mapContainerRef.current) return;
    const observer = new ResizeObserver(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    });
    observer.observe(mapContainerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Close popup if placemark is unselected
  useEffect(() => {
    if (!activePlacemark && mapInstanceRef.current) {
      mapInstanceRef.current.closePopup();
    }
  }, [activePlacemark]);

  // Handle external flyTo requests (e.g. from FeatureInspector)
  useEffect(() => {
    if (!flyToCoords || !mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([flyToCoords[1], flyToCoords[0]], 16, {
      duration: 1.0,
      easeLinearity: 0.25,
    });
  }, [flyToCoords]);

  // Update base tile layer on style change, year change, or forceModernSatellite toggle
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const map = mapInstanceRef.current;
    const isSat = baseMapStyle === 'satellite' || baseMapStyle === 'hybrid';
    const config = isSat
      ? {
          url: satelliteEra.url,
          attribution: satelliteEra.attribution,
          maxZoom: 19,
          subdomains: ['a', 'b', 'c'],
        }
      : TILE_PROVIDERS[baseMapStyle] || TILE_PROVIDERS.satellite;

    if (baseTileLayerRef.current) {
      map.removeLayer(baseTileLayerRef.current);
    }
    if (overlayLabelsLayerRef.current) {
      map.removeLayer(overlayLabelsLayerRef.current);
      overlayLabelsLayerRef.current = null;
    }

    const newBase = L.tileLayer(config.url, {
      attribution: config.attribution,
      maxZoom: config.maxZoom || 19,
      subdomains: config.subdomains || ['a', 'b', 'c'],
    }).addTo(map);
    baseTileLayerRef.current = newBase;

    // Apply or remove vintage filter container class
    if (isSat && satelliteEra.isVintage1989) {
      const applyVintageClass = () => {
        const container = newBase.getContainer();
        if (container) {
          container.classList.add('vintage-1989-satellite');
        }
      };
      applyVintageClass();
      setTimeout(applyVintageClass, 50);
    }

    if (baseMapStyle === 'hybrid' || baseMapStyle === 'satellite') {
      const labels = L.tileLayer(HYBRID_LABELS_URL, {
        maxZoom: 19,
        opacity: 0.85,
      }).addTo(map);
      overlayLabelsLayerRef.current = labels;
    }
  }, [baseMapStyle, satelliteEra]);

  // Update features and interactive station markers
  useEffect(() => {
    if (!mapInstanceRef.current || !geoJsonGroupRef.current) return;

    const group = geoJsonGroupRef.current;
    group.clearLayers();
    stationMarkersRef.current.clear();

    // Filter active layers matching current timeline date
    const activeLayers = layers.filter((layer) => isLayerActiveAtDate(layer, currentDate, filterMode));

    activeLayers.forEach((layer) => {
      if (!layer.geoJson || !layer.geoJson.features) return;

      const isT1Layer = layer.category?.includes('T1') || layer.name.includes('T1');
      const isMarmarayLayer =
        layer.category?.toLowerCase().includes('marmaray') ||
        layer.name.toLowerCase().includes('marmaray') ||
        layer.id.toLowerCase().includes('marmaray');
      const defaultColor = isT1Layer ? '#004B86' : isMarmarayLayer ? '#65656A' : '#EE2229';
      const layerColor = layer.color || defaultColor;

      const leafletGeoJson = L.geoJSON(layer.geoJson, {
        style: (feature) => {
          const props = feature?.properties || {};
          const style = props.style || {};
          const isMarmarayFeature =
            isMarmarayLayer ||
            props.lineCode === 'B1' ||
            props.lineCode === 'Marmaray' ||
            props.name?.includes('(Marmaray)') ||
            props.name?.includes('(B1)');
          const lineCode = props.lineCode || (isMarmarayFeature ? 'B1' : undefined);
          const officialColor = lineCode ? getOfficialMetroColor(lineCode) : undefined;
          const finalColor = officialColor || style.color || layerColor;
          const isLine = feature?.geometry?.type === 'LineString' || feature?.geometry?.type === 'MultiLineString';
          const isSelectedThisLine = Boolean(
            selectedLine &&
            (selectedLine.code === lineCode ||
             props.lineCode === selectedLine.code ||
             layer.name.toUpperCase().includes(selectedLine.code) ||
             layer.category?.toUpperCase().includes(selectedLine.code) ||
             props.name?.toUpperCase().includes(selectedLine.code))
          );
          const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 640;

          return {
            color: isSelectedThisLine ? '#38bdf8' : finalColor,
            weight: isLine ? (isSelectedThisLine ? 9 : (isMobileDevice ? 7 : 5)) : 4,
            opacity: isSelectedThisLine ? 1.0 : 0.95,
            fillColor: style.fill || finalColor,
            fillOpacity: style.fill ? 0.35 : 0.25,
            lineCap: 'round',
            lineJoin: 'round',
            className: isLine ? 'metro-line-path' : '',
          };
        },
        pointToLayer: (feature, latlng) => {
          const props = feature?.properties || {};
          const fullStationName = props.name || 'Station';
          const cleanStationName = fullStationName
            .replace(/\s+Station(\s*\([A-Za-z0-9]+\))?$/i, '')
            .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
            .trim();
          const isM11 = layer.category?.includes('M11') || layer.name.includes('M11') || props.lineCode === 'M11' || props.name?.includes('(M11)');
          const isMarmaray = layer.category?.toLowerCase().includes('marmaray') || layer.name.toLowerCase().includes('marmaray') || props.lineCode === 'B1' || props.lineCode === 'Marmaray' || props.name?.includes('(Marmaray)') || props.name?.includes('(B1)');
          const isM8 = layer.category?.includes('M8') || layer.name.includes('M8') || props.lineCode === 'M8';
          const isF4 = layer.category?.includes('F4') || layer.name.includes('F4') || props.lineCode === 'F4';
          const isM9 = layer.category?.includes('M9') || layer.name.includes('M9') || props.lineCode === 'M9';
          const isT6 = layer.category?.includes('T6') || layer.name.includes('T6') || props.lineCode === 'T6' || props.name?.includes('(T6)');
          const isT5 = layer.category?.includes('T5') || layer.name.includes('T5') || props.lineCode === 'T5';
          const isM7 = layer.category?.includes('M7') || layer.name.includes('M7') || props.lineCode === 'M7';
          const isM5 = layer.category?.includes('M5') || layer.name.includes('M5') || props.lineCode === 'M5';
          const isM6 = layer.category?.includes('M6') || layer.name.includes('M6') || props.lineCode === 'M6';
          const isM4 = layer.category?.includes('M4') || layer.name.includes('M4') || props.lineCode === 'M4';
          const isM3 = layer.category?.includes('M3') || layer.name.includes('M3') || props.lineCode === 'M3';
          const isT4 = layer.category?.includes('T4') || layer.name.includes('T4') || props.lineCode === 'T4';
          const isT2 = layer.category?.includes('T2') || layer.name.includes('T2') || props.lineCode === 'T2';
          const isF3 = layer.category?.includes('F3') || layer.name.includes('F3') || props.lineCode === 'F3' || props.name?.includes('(F3)');
          const isF2 = layer.category?.includes('F2') || layer.name.includes('F2') || props.lineCode === 'F2' || props.name?.includes('(F2)');
          const isF1 = layer.category?.includes('F1') || layer.name.includes('F1') || props.lineCode === 'F1';
          const isT3 = layer.category?.includes('T3') || layer.name.includes('T3') || props.lineCode === 'T3';
          const isM2 = layer.category?.includes('M2') || layer.name.includes('M2') || props.lineCode === 'M2';
          const isT1 = isT1Layer || props.name?.includes('(T1)') || props.lineCode === 'T1';
          const isM1B = layer.name.includes('M1B') || props.lineCode === 'M1B' || props.name?.includes('(M1B)');
          const lineCode = props.lineCode || (isF3 ? 'F3' : isF2 ? 'F2' : isT6 ? 'T6' : isM11 ? 'M11' : isMarmaray ? 'B1' : isM8 ? 'M8' : isF4 ? 'F4' : isM9 ? 'M9' : isT5 ? 'T5' : isM7 ? 'M7' : isM5 ? 'M5' : isM6 ? 'M6' : isM4 ? 'M4' : isM3 ? 'M3' : isT4 ? 'T4' : isT2 ? 'T2' : isF1 ? 'F1' : isT3 ? 'T3' : isM2 ? 'M2' : isT1 ? 'T1' : isM1B ? 'M1B' : 'M1');
          const markerColor =
            getOfficialMetroColor(lineCode) ||
            props.style?.color ||
            layer.color ||
            '#EE2229';
          const isSelected = activePlacemark?.properties?.name === fullStationName;

          // Custom Interactive Station DivIcon with Visible Name Badge & Touch-Friendly Hit Target
          const icon = L.divIcon({
            className: 'metro-station-divicon',
            html: `
              <div class="station-marker-container ${isSelected ? 'is-active' : ''}" style="
                width: 32px;
                height: 32px;
                position: relative;
                cursor: pointer;
                user-select: none;
                pointer-events: auto;
                touch-action: manipulation;
              ">
                <!-- Transit Roundel Pin: exactly centered at (16, 16) directly on the track line -->
                <div class="station-roundel" style="
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 32px;
                  height: 32px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                  <div style="
                    width: ${isSelected ? '18px' : '14px'};
                    height: ${isSelected ? '18px' : '14px'};
                    border-radius: 50%;
                    background: #ffffff;
                    border: 3.5px solid ${markerColor};
                    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.9)${isSelected ? ', 0 0 0 2px #ffffff' : ''};
                    transition: all 0.2s ease;
                  "></div>
                </div>

                <!-- Prominent Station Name Pill: floats to the right without ever displacing the roundel pin -->
                <div class="station-label-pill" style="
                  position: absolute;
                  left: 34px;
                  top: 50%;
                  display: flex;
                  align-items: center;
                  gap: 6px;
                  padding: 4px 10px 4px 6px;
                  border-radius: 20px;
                  background: rgba(10, 15, 29, 0.94);
                  border: 1px solid ${isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.25)'};
                  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.7);
                  backdrop-filter: blur(12px);
                  -webkit-backdrop-filter: blur(12px);
                  white-space: nowrap;
                  pointer-events: auto;
                ">
                  <span style="
                    background: ${markerColor};
                    color: #ffffff;
                    font-size: 9px;
                    font-weight: 800;
                    padding: 1.5px 5.5px;
                    border-radius: 6px;
                    line-height: 1.2;
                    letter-spacing: 0.5px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
                  ">${lineCode}</span>
                  <span style="
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: 600;
                    white-space: nowrap;
                    letter-spacing: -0.01em;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.9);
                  ">${cleanStationName}</span>
                </div>
              </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -18],
          });

          const marker = L.marker(latlng, { icon, riseOnHover: true });
          stationMarkersRef.current.set(fullStationName, marker);
          return marker;
        },
        onEachFeature: (feature, leafletLayer) => {
          const props = feature.properties || {};
          const title = props.name || 'Site Feature';
          const cleanTitle = title
            .replace(/\s+Station(\s*\([A-Za-z0-9]+\))?$/i, '')
            .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
            .trim();
          const desc = props.description || '';
          const layerDate = formatDateLong(layer.date);
          const isStation = feature.geometry?.type === 'Point';
          const isM11 = layer.category?.includes('M11') || layer.name.includes('M11') || props.lineCode === 'M11' || props.name?.includes('(M11)');
          const isMarmaray = layer.category?.toLowerCase().includes('marmaray') || layer.name.toLowerCase().includes('marmaray') || props.lineCode === 'B1' || props.lineCode === 'Marmaray' || props.name?.includes('(Marmaray)') || props.name?.includes('(B1)');
          const isM8 = layer.category?.includes('M8') || layer.name.includes('M8') || props.lineCode === 'M8';
          const isF4 = layer.category?.includes('F4') || layer.name.includes('F4') || props.lineCode === 'F4';
          const isM9 = layer.category?.includes('M9') || layer.name.includes('M9') || props.lineCode === 'M9';
          const isT6 = layer.category?.includes('T6') || layer.name.includes('T6') || props.lineCode === 'T6' || props.name?.includes('(T6)');
          const isT5 = layer.category?.includes('T5') || layer.name.includes('T5') || props.lineCode === 'T5';
          const isM7 = layer.category?.includes('M7') || layer.name.includes('M7') || props.lineCode === 'M7';
          const isM5 = layer.category?.includes('M5') || layer.name.includes('M5') || props.lineCode === 'M5';
          const isM6 = layer.category?.includes('M6') || layer.name.includes('M6') || props.lineCode === 'M6';
          const isM4 = layer.category?.includes('M4') || layer.name.includes('M4') || props.lineCode === 'M4';
          const isM3 = layer.category?.includes('M3') || layer.name.includes('M3') || props.lineCode === 'M3';
          const isT4 = layer.category?.includes('T4') || layer.name.includes('T4') || props.lineCode === 'T4';
          const isT2 = layer.category?.includes('T2') || layer.name.includes('T2') || props.lineCode === 'T2';
          const isF3 = layer.category?.includes('F3') || layer.name.includes('F3') || props.lineCode === 'F3' || props.name?.includes('(F3)');
          const isF2 = layer.category?.includes('F2') || layer.name.includes('F2') || props.lineCode === 'F2' || props.name?.includes('(F2)');
          const isF1 = layer.category?.includes('F1') || layer.name.includes('F1') || props.lineCode === 'F1';
          const isT3 = layer.category?.includes('T3') || layer.name.includes('T3') || props.lineCode === 'T3';
          const isM2 = layer.category?.includes('M2') || layer.name.includes('M2') || props.lineCode === 'M2';
          const isT1 = isT1Layer || props.name?.includes('(T1)') || props.lineCode === 'T1';
          const isM1B = layer.name.includes('M1B') || props.lineCode === 'M1B' || props.name?.includes('(M1B)');
          const lineCode = props.lineCode || (isF3 ? 'F3' : isF2 ? 'F2' : isT6 ? 'T6' : isM11 ? 'M11' : isMarmaray ? 'B1' : isM8 ? 'M8' : isF4 ? 'F4' : isM9 ? 'M9' : isT5 ? 'T5' : isM7 ? 'M7' : isM5 ? 'M5' : isM6 ? 'M6' : isM4 ? 'M4' : isM3 ? 'M3' : isT4 ? 'T4' : isT2 ? 'T2' : isF1 ? 'F1' : isT3 ? 'T3' : isM2 ? 'M2' : isT1 ? 'T1' : isM1B ? 'M1B' : 'M1');
          const markerColor =
            getOfficialMetroColor(lineCode) ||
            props.style?.color ||
            layer.color ||
            '#EE2229';

          const popupContent = `
            <div style="min-width: 230px; max-width: 320px; font-family: 'Inter', sans-serif;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="background: ${markerColor}; color: #ffffff; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">
                    ${isStation ? `${lineCode} İSTASYONU` : `${lineCode} HATTI`}
                  </span>
                </div>
                <span style="padding: 2px 7px; border-radius: 4px; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; font-size: 11px; font-weight: 600;">
                  📅 ${layerDate}
                </span>
              </div>
              <h4 style="font-size: 15px; font-weight: 700; color: #f8fafc; margin: 0 0 6px 0; line-height: 1.3;">
                ${cleanTitle}
              </h4>
              ${
                desc
                  ? `<div style="font-size: 12px; color: #cbd5e1; line-height: 1.5; margin-bottom: 8px; max-height: 140px; overflow-y: auto;">
                      ${desc}
                    </div>`
                  : ''
              }
              ${
                isStation
                  ? `<div style="display: flex; align-items: center; justify-content: flex-end; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 11px; color: #94a3b8;">
                      <span style="color: #38bdf8; font-weight: 600;">Opened ${String(layer.date.month).padStart(2, '0')}-${layer.date.year}</span>
                    </div>`
                  : ''
              }
            </div>
          `;

          if (!isStation) {
            leafletLayer.on('mouseover', () => {
              (leafletLayer as any).setStyle?.({
                weight: 9,
                opacity: 1,
              });
            });
            leafletLayer.on('mouseout', () => {
              (leafletLayer as any).setStyle?.({
                weight: selectedLine?.code === lineCode ? 9 : (typeof window !== 'undefined' && window.innerWidth < 640 ? 7 : 5),
                opacity: 0.95,
              });
            });
          }

          leafletLayer.on('click', (e: any) => {
            lastFeatureClickTimeRef.current = Date.now();
            if (e?.originalEvent) {
              L.DomEvent.stopPropagation(e.originalEvent);
              if (e.originalEvent.stopPropagation) {
                e.originalEvent.stopPropagation();
              }
            }

            if (!isStation) {
              // Line clicked! Open rich Line Detail panel
              const lineDetail = getLineDetail(lineCode || props.lineCode || layer.category || layer.name || props.name);
              if (lineDetail && onSelectLine) {
                onSelectLine(lineDetail);
                return;
              }
            }

            const map = mapInstanceRef.current;
            if (map && isStation && e.latlng) {
              map.flyTo(e.latlng, Math.max(map.getZoom(), 15), {
                duration: 0.8,
                easeLinearity: 0.25,
              });
            }
            if (onSelectPlacemark) {
              onSelectPlacemark(feature, layer);
            }
          });
        },
      });

      group.addLayer(leafletGeoJson);
    });
  }, [layers, currentDate, filterMode, onSelectPlacemark, activePlacemark, selectedLine, onSelectLine]);

  // Render selected construction line on map if user selected one from the list
  useEffect(() => {
    if (!mapInstanceRef.current || !constructionGroupRef.current) return;
    const group = constructionGroupRef.current;
    group.clearLayers();

    if (!selectedConstructionLine) return;

    // Convert [lng, lat] coordinates to Leaflet's [lat, lng]
    const latLngs: L.LatLngExpression[] = selectedConstructionLine.coordinates.map(
      ([lng, lat]) => [lat, lng]
    );

    if (latLngs.length === 0) return;

    // Glowing casing under-stroke for high visibility
    L.polyline(latLngs, {
      color: selectedConstructionLine.color,
      weight: 12,
      opacity: 0.35,
      lineCap: 'round',
      lineJoin: 'round',
    }).addTo(group);

    // Main dashed construction track
    const mainLine = L.polyline(latLngs, {
      color: selectedConstructionLine.color,
      weight: 6,
      opacity: 0.95,
      dashArray: '10, 6',
      lineCap: 'round',
      lineJoin: 'round',
      className: 'metro-line-path cursor-pointer',
    }).addTo(group);

    // Wide transparent touch buffer for effortless touch target on mobile
    const touchBuffer = L.polyline(latLngs, {
      color: 'transparent',
      weight: 24,
      opacity: 0.001,
      className: 'cursor-pointer',
    }).addTo(group);

    const handleConstructionLineClick = (e: any) => {
      lastFeatureClickTimeRef.current = Date.now();
      if (e?.originalEvent) {
        L.DomEvent.stopPropagation(e.originalEvent);
        if (e.originalEvent.stopPropagation) e.originalEvent.stopPropagation();
      }
      const detail = getLineDetail(selectedConstructionLine.code) || getLineDetail(selectedConstructionLine.name);
      if (detail && onSelectLine) {
        onSelectLine(detail);
      }
    };

    mainLine.on('click', handleConstructionLineClick);
    touchBuffer.on('click', handleConstructionLineClick);

    // Add station markers along the construction route
    if (selectedConstructionLine.stations) {
      selectedConstructionLine.stations.forEach((st) => {
        const [lng, lat] = st.coordinates;
        const icon = L.divIcon({
          className: 'construction-station-divicon',
          html: `
            <div style="display: flex; flex-direction: column; align-items: center; cursor: pointer; user-select: none;">
              <div style="
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #0a0a0a;
                border: 3px solid ${selectedConstructionLine.color};
                box-shadow: 0 0 10px ${selectedConstructionLine.color}aa, inset 0 0 4px ${selectedConstructionLine.color};
              "></div>
              <div style="
                margin-top: 3px;
                background: rgba(10, 10, 10, 0.9);
                border: 1px solid ${selectedConstructionLine.color}88;
                border-radius: 5px;
                padding: 1px 6px;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 700;
                color: #ffffff;
                white-space: nowrap;
                box-shadow: 0 2px 6px rgba(0,0,0,0.8);
              ">
                ${st.name}
              </div>
            </div>
          `,
          iconSize: [80, 32],
          iconAnchor: [40, 7],
        });

        const marker = L.marker([lat, lng], { icon }).addTo(group);
        marker.bindPopup(`
          <div style="font-family: 'Inter', sans-serif; min-width: 190px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span style="background: ${selectedConstructionLine.color}; color: #ffffff; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">
                ${selectedConstructionLine.code}
              </span>
              <span style="font-size: 10px; color: #fbbf24; font-weight: 700;">İnşaatı Sürüyor</span>
            </div>
            <h4 style="font-size: 13px; font-weight: 700; color: #f8fafc; margin: 0 0 4px 0;">
              ${st.name} İstasyonu
            </h4>
            <div style="font-size: 11px; color: #94a3b8;">
              ${selectedConstructionLine.name}
            </div>
            ${
              st.transfers && st.transfers.length > 0
                ? `<div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 10px; color: #38bdf8; display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                    <span style="font-weight: 600;">🔄 Aktarma:</span>
                    ${st.transfers
                      .map(
                        (t: string) =>
                          `<span style="background: rgba(56, 189, 248, 0.2); border: 1px solid rgba(56, 189, 248, 0.4); color: #bae6fd; padding: 1px 5px; border-radius: 4px; font-weight: 700;">${t}</span>`
                      )
                      .join(' ')}
                  </div>`
                : ''
            }
          </div>
        `);
      });
    }

    // Smoothly fly map to center the construction line
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    mapInstanceRef.current.fitBounds(mainLine.getBounds(), {
      padding: isMobile ? [32, 32] : [80, 80],
      maxZoom: 15,
      animate: true,
      duration: 1.0,
    });
  }, [selectedConstructionLine]);

  // Zoom controls
  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();

  // Reset to Istanbul view
  const handleResetToIstanbul = () => {
    mapInstanceRef.current?.flyTo(ISTANBUL_CENTER, ISTANBUL_DEFAULT_ZOOM, { duration: 1.2 });
  };

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-neutral-950">
      {/* 3D Tilt perspective wrapper */}
      <div
        className={`w-full h-full transition-transform duration-700 ease-out ${
          is3DView ? 'scale-105 [transform:perspective(1200px)_rotateX(25deg)] origin-bottom' : ''
        } ${isZoomVeryFar ? 'zoom-very-far' : ''} ${isZoomGte120 ? 'zoom-gte-120' : 'zoom-lt-120'}`}
      >
        <div ref={mapContainerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      </div>

      {/* Floating Pill Banner when a construction line is selected on the map */}
      {selectedConstructionLine && (
        <div className="absolute top-2.5 sm:top-4 left-2.5 right-2.5 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:max-w-xl z-[450] flex items-center justify-between sm:justify-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 rounded-2xl bg-neutral-950/95 backdrop-blur-xl border border-amber-500/50 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span
              style={{ backgroundColor: selectedConstructionLine.color }}
              className="w-2.5 h-2.5 rounded-full ring-2 ring-amber-400 animate-pulse shrink-0"
            />
            <span className="font-bold text-white text-xs font-heading shrink-0">
              {selectedConstructionLine.code}
            </span>
            <span className="text-xs text-neutral-300 font-medium truncate max-w-[120px] sm:max-w-none">
              {selectedConstructionLine.shortName}
            </span>
            <span className="text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
              %{selectedConstructionLine.progressPercent}
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {onSelectLine && (
              <button
                type="button"
                onClick={() => {
                  const detail = getLineDetail(selectedConstructionLine.code) || getLineDetail(selectedConstructionLine.name);
                  if (detail) onSelectLine(detail);
                }}
                className="flex items-center gap-1 text-[11px] font-semibold text-amber-300 hover:text-white px-2 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 transition-colors cursor-pointer"
                title="İnşaat hattının detaylarını görüntüle"
              >
                <Train className="w-3 h-3" />
                <span>Detaylar</span>
              </button>
            )}

            {onOpenConstructionList && (
              <button
                type="button"
                onClick={onOpenConstructionList}
                className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 px-2 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-amber-500/30 transition-colors cursor-pointer"
                title="İnşaat hatları listesini aç"
              >
                Liste
              </button>
            )}

            <button
              type="button"
              onClick={onUnselectConstructionLine}
              className="flex items-center gap-1 text-[11px] font-medium text-neutral-400 hover:text-white px-2 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
              title="Seçili inşaat hattını haritadan kaldır"
            >
              <span>Kaldır</span>
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Top Right: Base Map Style Switcher & 3D Perspective Tilt Toggle */}
      <div className={`absolute ${selectedConstructionLine ? 'top-12 sm:top-4' : 'top-2.5 sm:top-4'} right-2.5 sm:right-4 z-[400] flex items-center gap-1 sm:gap-2 pointer-events-auto transition-all`}>
        {onChangeBaseMapStyle && (
          <div className="flex items-center bg-neutral-950/90 backdrop-blur-md rounded-xl p-0.5 border border-neutral-800 shadow-xl">
            <button
              type="button"
              onClick={() => onChangeBaseMapStyle('hybrid')}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
                baseMapStyle === 'hybrid'
                  ? 'bg-cyan-500 text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="İlçe ve cadde etiketli hibrit uydu haritası"
            >
              <MapIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Hibrit</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeBaseMapStyle('satellite')}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
                baseMapStyle === 'satellite'
                  ? 'bg-cyan-500 text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Yüksek çözünürlüklü uydu haritası"
            >
              <Satellite className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Uydu</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeBaseMapStyle('night')}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
                baseMapStyle === 'night'
                  ? 'bg-cyan-500 text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Gece şehir ışıkları görünümü"
            >
              <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Gece</span>
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIs3DView(!is3DView)}
          title="3B Perspektif Eğimi Aç / Kapat"
          className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-2 rounded-xl border shadow-xl backdrop-blur-md text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
            is3DView
              ? 'bg-cyan-500 text-neutral-950 border-cyan-400 shadow-cyan-500/20 font-semibold'
              : 'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border-neutral-700/60'
          }`}
        >
          <Navigation className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${is3DView ? 'text-neutral-950' : 'text-cyan-400'}`} />
          <span>3B</span>
          <span className="hidden sm:inline">{is3DView ? ' Açık' : ' Görünüm'}</span>
        </button>
      </div>

      {/* Right Side Navigation Tools: placed bottom-right on mobile to stay clear of top headers */}
      <div className="absolute right-2.5 sm:right-4 bottom-4 sm:bottom-auto sm:top-18 z-[400] flex flex-col gap-1.5 sm:gap-2 pointer-events-auto">
        {/* Reset to Istanbul Center */}
        <button
          type="button"
          onClick={handleResetToIstanbul}
          title="İstanbul'a Odaklan"
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-cyan-400 rounded-xl border border-neutral-700/60 shadow-xl backdrop-blur-md transition-transform active:scale-95"
        >
          <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        </button>

        {/* Zoom In */}
        <button
          type="button"
          onClick={handleZoomIn}
          title="Yakınlaştır"
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white rounded-xl border border-neutral-700/60 shadow-xl backdrop-blur-md transition-colors"
        >
          <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Zoom Percentage / Toggle Station Names Display at %120 */}
        <button
          type="button"
          onClick={() => {
            if (currentZoom < 14) {
              mapInstanceRef.current?.flyTo(mapInstanceRef.current.getCenter(), 14, { duration: 0.8 });
            } else {
              mapInstanceRef.current?.flyTo(mapInstanceRef.current.getCenter(), 13, { duration: 0.8 });
            }
          }}
          title={
            isZoomGte120
              ? `Ölçek: %${zoomPercent} (İstasyon isimleri görünür). %100'e dönmek için tıklayın`
              : `Ölçek: %${zoomPercent}. %120'ye geçip istasyon isimlerini görmek için tıklayın`
          }
          className={`w-8 sm:w-10 py-0.5 sm:py-1 flex flex-col items-center justify-center rounded-xl border shadow-xl backdrop-blur-md transition-all text-center cursor-pointer select-none ${
            isZoomGte120
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-cyan-500/10'
              : 'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 border-neutral-700/60'
          }`}
        >
          <span className="text-[9px] sm:text-[10px] font-mono font-bold leading-tight">%{zoomPercent}</span>
          <span className="text-[7px] sm:text-[7.5px] font-semibold tracking-wider text-neutral-400 uppercase leading-none hidden sm:inline">
            {isZoomGte120 ? 'İsimler' : 'Noktalar'}
          </span>
        </button>

        {/* Zoom Out */}
        <button
          type="button"
          onClick={handleZoomOut}
          title="Uzaklaştır (Türkiye Sınırları İçinde)"
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white rounded-xl border border-neutral-700/60 shadow-xl backdrop-blur-md transition-colors"
        >
          <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};
