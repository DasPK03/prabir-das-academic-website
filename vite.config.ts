import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site is served from /<repo>/, so the base path must match.
// If you rename the repository, update this single value (and package.json "homepage").
export default defineConfig({
  base: '/prabir-das-academic-website/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
});
