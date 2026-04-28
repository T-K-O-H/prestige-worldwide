import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// On GitHub Pages, the app is served from /<repo-name>/.
// Override with VITE_BASE when deploying elsewhere (custom domain → '/').
const base = process.env.VITE_BASE ?? '/prestige-worldwide/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
});
