import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Mesmo alias "@/" do jsconfig.json
    alias: { '@': fileURLToPath(new URL('./', import.meta.url)) },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
    exclude: ['node_modules/**', '.next/**', 'design_handoff_portfolio/**'],
  },
});
