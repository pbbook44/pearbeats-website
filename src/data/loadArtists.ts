import fs from 'fs/promises';
import path from 'path';

export interface Artist {
  ensemble: string;
  shortname: string;
  active: boolean;
  epk?: string;
  bandcamp?: string;
  video?: string;
  gage?: string;
  techrider?: string;
  beschreibung_de: string;
  beschreibung_en: string;
  photo_url?: string;
}

export async function loadArtists(): Promise<Artist[]> {
  try {
    const csvPath = path.join(process.cwd(), 'src/data/artists.csv');
    const csvContent = await fs.readFile(csvPath, 'utf-8');
    
    const lines = csvContent.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
      
      const artist: any = {};
      headers.forEach((header, idx) => {
        artist[header] = values[idx];
      });
      
      // ja/nein → boolean
      artist.active = artist.active === 'ja' || artist.active === 'true';
      
      return artist as Artist;
    }).filter(artist => artist.active);
    
  } catch (error) {
    console.error('Error loading artists:', error);
    return [];
  }
}