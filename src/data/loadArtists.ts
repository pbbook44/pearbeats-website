import fs from 'fs/promises';
import path from 'path';

export interface Artist {
  shortname: string;
  active: boolean;
  ensemble: string;
  genre: string;
  stadt: string;
  epk?: string;
  bandcamp?: string;
  video?: string;
  gage_intern?: string;
  techrider_intern?: string;
  description_de: string;
  description_en: string;
  photo_url?: string;
}

// Mappt CSV-Spaltnamen auf Interface-Feldnamen
const FIELD_MAP: Record<string, string> = {
  Ensemble: 'ensemble',
  Shortname: 'shortname',
  active: 'active',
  EPK: 'epk',
  Bandcamp: 'bandcamp',
  Video: 'video',
  Gage: 'gage_intern',
  genre: 'genre',
  Techrider: 'techrider_intern',
  beschreibung_de: 'description_de',
  beschreibung_en: 'description_en',
};

export async function loadArtists(): Promise<Artist[]> {
  try {
    const csvPath = path.join(process.cwd(), 'src/data/artists.csv');
    const csvContent = await fs.readFile(csvPath, 'utf-8');

    const lines = csvContent.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());

    return lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());

      const artist: any = {};
      headers.forEach((header, idx) => {
        const mappedKey = FIELD_MAP[header] ?? header;
        artist[mappedKey] = values[idx];
      });

      // FIX: CSV hat "ja"/"nein", nicht "true"/"false"
      artist.active = ['ja', 'true', '1', 'yes'].includes(
        String(artist.active).toLowerCase()
      );

      return artist as Artist;
    }).filter(artist => artist.active);

  } catch (error) {
    console.error('Error loading artists:', error);
    return [];
  }
}