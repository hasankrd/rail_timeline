/**
 * Official Istanbul Rail Transit Line Colors
 * METRO Istanbul & UAB official visual identity color palette
 */

export const METRO_OFFICIAL_COLORS: Record<string, string> = {
  // Metro Lines
  'M1A': '#EE2229',
  'M1B': '#EE2229',
  'M1':  '#EE2229',
  'M2':  '#059A4D',
  'M3':  '#0CA6DF',
  'M4':  '#E81E77',
  'M5':  '#683166',
  'M6':  '#C9AA79',
  'M7':  '#F490B3',
  'M8':  '#487ABF',
  'M9':  '#FCD10D',
  'M10': '#4CAA3C',
  'M11': '#A1609B',
  'M12': '#CAD300',
  'M13': '#FF4B58',
  'M14': '#B16400',

  // Tram Lines
  'T1':  '#004B86',
  'T2':  '#90ABA0',
  'T3':  '#99562F',
  'T4':  '#FF7E42',
  'T5':  '#7B72B2',
  'T6':  '#E77C7C',
  'T7':  '#7B72B2',

  // Funicular Lines
  'F1':  '#7A745A',
  'F2':  '#7A745A',
  'F3':  '#7A745A',
  'F4':  '#7A745A',

  // Commuter Rail (Marmaray B1 - Official Slate Grey)
  'B1':  '#65656A',
  'MARMARAY': '#65656A',
};

/**
 * Returns the official hex color code for any given line code or line name.
 */
export function getOfficialMetroColor(code: string | undefined | null): string | undefined {
  if (!code) return undefined;
  const upper = code.trim().toUpperCase();

  // Exact match
  if (METRO_OFFICIAL_COLORS[upper]) {
    return METRO_OFFICIAL_COLORS[upper];
  }

  // Multi-line code handling like "M1A / M1B"
  if (upper.includes('/')) {
    const parts = upper.split('/');
    for (const part of parts) {
      const trimmed = part.trim();
      if (METRO_OFFICIAL_COLORS[trimmed]) {
        return METRO_OFFICIAL_COLORS[trimmed];
      }
    }
  }

  // Prefix matching (e.g., "M1A Yenikapı...", "M11 Gayrettepe...", "F2 Karaköy...")
  for (const [key, color] of Object.entries(METRO_OFFICIAL_COLORS)) {
    if (
      upper === key ||
      upper.startsWith(key + ' ') ||
      upper.startsWith(key + ':') ||
      upper.startsWith(key + '-') ||
      upper.startsWith(key + '–')
    ) {
      return color;
    }
  }

  return undefined;
}
