import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pearbeats.eu',
  output: 'static',
  build: {
    format: 'directory'
  },
  outDir: 'docs'
});
