import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pbbook44.github.io/pearbeats-website/',
  output: 'static',
  base: '/pearbeats-website/',  // ← WICHTIG: Subpath für GitHub Pages!
  outDir: 'docs'
});
