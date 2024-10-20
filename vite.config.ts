import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: 'assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: 'api', replacement: fileURLToPath(new URL('./src/api', import.meta.url)) },
      { find: 'components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: 'constants', replacement: fileURLToPath(new URL('./src/constants', import.meta.url)) },
      { find: 'hooks', replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)) },
      { find: 'pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: 'providers', replacement: fileURLToPath(new URL('./src/providers', import.meta.url)) },
      { find: 'routes', replacement: fileURLToPath(new URL('./src/routes', import.meta.url)) },
      { find: 'store', replacement: fileURLToPath(new URL('./src/store', import.meta.url)) },
      { find: 'styles', replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) },
      { find: 'types', replacement: fileURLToPath(new URL('./src/types', import.meta.url)) },
      { find: 'utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url)) },
    ],
  },
});
