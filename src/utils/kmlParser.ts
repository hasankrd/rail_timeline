import JSZip from 'jszip';
import { DatePoint } from '../types';

export interface ParsedKmlResult {
  name: string;
  description: string;
  detectedDate?: DatePoint;
  features: GeoJSON.Feature[];
  geoJson: GeoJSON.FeatureCollection;
  bounds: [[number, number], [number, number]] | null;
  placemarksCount: number;
}

/**
 * Parses raw text coordinate string: "lng,lat,alt lng,lat,alt ..." into number arrays
 */
function parseCoordinateTuples(rawText: string): [number, number][] {
  const result: [number, number][] = [];
  const tokens = rawText.trim().split(/\s+/);
  for (const token of tokens) {
    if (!token) continue;
    const parts = token.split(',');
    if (parts.length >= 2) {
      const lng = parseFloat(parts[0]);
      const lat = parseFloat(parts[1]);
      if (!isNaN(lng) && !isNaN(lat)) {
        result.push([lng, lat]);
      }
    }
  }
  return result;
}

/**
 * Extracts inner text of direct child tag
 */
function getChildText(element: Element, tagName: string): string {
  const children = element.getElementsByTagName(tagName);
  if (children.length > 0) {
    return children[0].textContent?.trim() || '';
  }
  return '';
}

/**
 * Parses KML hex color string (aabbggrr or bbggrr) to CSS hex string (#rrggbb)
 */
export function kmlColorToCss(kmlColor?: string): string | undefined {
  if (!kmlColor || kmlColor.length < 6) return undefined;
  const clean = kmlColor.trim();
  // KML colors are aabbggrr
  if (clean.length === 8) {
    const r = clean.substring(6, 8);
    const g = clean.substring(4, 6);
    const b = clean.substring(2, 4);
    return `#${r}${g}${b}`;
  } else if (clean.length === 6) {
    const r = clean.substring(4, 6);
    const g = clean.substring(2, 4);
    const b = clean.substring(0, 2);
    return `#${r}${g}${b}`;
  }
  return undefined;
}

/**
 * Extracts a DatePoint from a date string (e.g. "2023-07-15", "2024-02", "2022")
 */
export function parseDateString(dateStr: string): DatePoint | undefined {
  if (!dateStr) return undefined;
  const match = dateStr.match(/(\d{4})(?:[-/](\d{1,2}))?/);
  if (match) {
    const year = parseInt(match[1], 10);
    const month = match[2] ? parseInt(match[2], 10) : 1;
    if (year >= 1900 && year <= 2100 && month >= 1 && month <= 12) {
      return { year, month };
    }
  }
  return undefined;
}

/**
 * Parse KML XML string into GeoJSON and metadata
 */
export function parseKmlXml(xmlText: string, fallbackName: string): ParsedKmlResult {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

  // Check for XML parse errors
  const parseError = xmlDoc.getElementsByTagName('parsererror');
  if (parseError.length > 0) {
    throw new Error('Invalid KML format: Unable to parse XML.');
  }

  const docName = getChildText(xmlDoc.documentElement, 'name') || fallbackName;
  const docDesc = getChildText(xmlDoc.documentElement, 'description') || '';

  // Check for TimeStamp / TimeSpan in Document or Folder or first placemark
  let detectedDate: DatePoint | undefined;
  const timeWhens = xmlDoc.getElementsByTagName('when');
  if (timeWhens.length > 0) {
    detectedDate = parseDateString(timeWhens[0].textContent?.trim() || '');
  }
  if (!detectedDate) {
    const timeBegins = xmlDoc.getElementsByTagName('begin');
    if (timeBegins.length > 0) {
      detectedDate = parseDateString(timeBegins[0].textContent?.trim() || '');
    }
  }

  // Extract Style elements
  const styles: Record<string, { color?: string; width?: number; fill?: string }> = {};
  const styleNodes = xmlDoc.getElementsByTagName('Style');
  for (let i = 0; i < styleNodes.length; i++) {
    const s = styleNodes[i];
    const id = s.getAttribute('id');
    if (id) {
      const lineStyle = s.getElementsByTagName('LineStyle')[0];
      const polyStyle = s.getElementsByTagName('PolyStyle')[0];
      const lineCol = lineStyle ? kmlColorToCss(getChildText(lineStyle, 'color')) : undefined;
      const lineWidth = lineStyle ? parseFloat(getChildText(lineStyle, 'width')) || 2 : 2;
      const polyCol = polyStyle ? kmlColorToCss(getChildText(polyStyle, 'color')) : undefined;
      styles[id] = { color: lineCol || polyCol, width: lineWidth, fill: polyCol };
    }
  }

  const placemarks = xmlDoc.getElementsByTagName('Placemark');
  const features: GeoJSON.Feature[] = [];

  let minLat = 90;
  let maxLat = -90;
  let minLng = 180;
  let maxLng = -180;
  let hasCoords = false;

  const updateBounds = (lng: number, lat: number) => {
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
    hasCoords = true;
  };

  for (let i = 0; i < placemarks.length; i++) {
    const pm = placemarks[i];
    const name = getChildText(pm, 'name') || `Placemark #${i + 1}`;
    const desc = getChildText(pm, 'description') || '';
    const styleUrl = getChildText(pm, 'styleUrl').replace(/^#/, '');
    const customStyle = styles[styleUrl];

    // Extended data
    const extendedData: Record<string, string> = {};
    const extDataNodes = pm.getElementsByTagName('Data');
    for (let j = 0; j < extDataNodes.length; j++) {
      const dName = extDataNodes[j].getAttribute('name');
      const dVal = getChildText(extDataNodes[j], 'value');
      if (dName) extendedData[dName] = dVal;
    }

    // Placemark timestamp if document didn't have one
    if (!detectedDate) {
      const pmWhen = getChildText(pm, 'when');
      if (pmWhen) detectedDate = parseDateString(pmWhen);
    }

    // Geometry: Point
    const pointNode = pm.getElementsByTagName('Point')[0];
    if (pointNode) {
      const coordsText = getChildText(pointNode, 'coordinates');
      const coords = parseCoordinateTuples(coordsText);
      if (coords.length > 0) {
        updateBounds(coords[0][0], coords[0][1]);
        features.push({
          type: 'Feature',
          properties: {
            name,
            description: desc,
            extendedData,
            style: customStyle,
          },
          geometry: {
            type: 'Point',
            coordinates: coords[0],
          },
        });
        continue;
      }
    }

    // Geometry: LineString
    const lineNode = pm.getElementsByTagName('LineString')[0];
    if (lineNode) {
      const coordsText = getChildText(lineNode, 'coordinates');
      const coords = parseCoordinateTuples(coordsText);
      if (coords.length > 0) {
        coords.forEach(([lng, lat]) => updateBounds(lng, lat));
        features.push({
          type: 'Feature',
          properties: {
            name,
            description: desc,
            extendedData,
            style: customStyle,
          },
          geometry: {
            type: 'LineString',
            coordinates: coords,
          },
        });
        continue;
      }
    }

    // Geometry: Polygon
    const polyNode = pm.getElementsByTagName('Polygon')[0];
    if (polyNode) {
      const outerBoundary = polyNode.getElementsByTagName('outerBoundaryIs')[0];
      if (outerBoundary) {
        const coordsText = getChildText(outerBoundary, 'coordinates');
        const coords = parseCoordinateTuples(coordsText);
        if (coords.length > 0) {
          coords.forEach(([lng, lat]) => updateBounds(lng, lat));
          features.push({
            type: 'Feature',
            properties: {
              name,
              description: desc,
              extendedData,
              style: customStyle,
            },
            geometry: {
              type: 'Polygon',
              coordinates: [coords],
            },
          });
          continue;
        }
      }
    }

    // Geometry: MultiGeometry
    const multiNode = pm.getElementsByTagName('MultiGeometry')[0];
    if (multiNode) {
      const innerLines = multiNode.getElementsByTagName('LineString');
      for (let k = 0; k < innerLines.length; k++) {
        const coords = parseCoordinateTuples(getChildText(innerLines[k], 'coordinates'));
        if (coords.length > 0) {
          coords.forEach(([lng, lat]) => updateBounds(lng, lat));
          features.push({
            type: 'Feature',
            properties: {
              name: `${name} (Segment ${k + 1})`,
              description: desc,
              extendedData,
              style: customStyle,
            },
            geometry: {
              type: 'LineString',
              coordinates: coords,
            },
          });
        }
      }
    }
  }

  const geoJson: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features,
  };

  const bounds: [[number, number], [number, number]] | null = hasCoords
    ? [
        [minLat, minLng],
        [maxLat, maxLng],
      ]
    : null;

  return {
    name: docName,
    description: docDesc,
    detectedDate,
    features,
    geoJson,
    bounds,
    placemarksCount: features.length,
  };
}

/**
 * Handle both KML and KMZ file uploads
 */
export async function parseKmlOrKmzFile(file: File): Promise<ParsedKmlResult> {
  const fileName = file.name;
  const isKmz = fileName.toLowerCase().endsWith('.kmz');

  if (isKmz) {
    const zip = new JSZip();
    const contents = await zip.loadAsync(file);
    // Find .kml file inside
    let kmlFile = contents.file('doc.kml');
    if (!kmlFile) {
      const kmlNames = Object.keys(contents.files).filter((f) => f.toLowerCase().endsWith('.kml'));
      if (kmlNames.length > 0) {
        kmlFile = contents.file(kmlNames[0]);
      }
    }

    if (!kmlFile) {
      throw new Error('No valid .kml file found inside this KMZ archive.');
    }

    const xmlText = await kmlFile.async('text');
    return parseKmlXml(xmlText, fileName.replace(/\.kmz$/i, ''));
  } else {
    const xmlText = await file.text();
    return parseKmlXml(xmlText, fileName.replace(/\.kml$/i, ''));
  }
}
