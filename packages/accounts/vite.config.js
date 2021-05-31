import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvg from 'vite-plugin-react-svg';
import { injectHtml } from 'vite-plugin-html';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const unifyNodeModules = (names) =>
  names.reduce(
    (acc, name) => ({
      ...acc,
      [name]: resolve(`./node_modules/${name}`),
    }),
    {}
  );

const RE_CAPTCHA_SITE_KEY = '6LfVrwAbAAAAAOXFlwun-5WYqgHbEGWQdZry-Rog';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    reactSvg({
      defaultExport: 'component',
      svgo: true,
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    injectHtml({
      injectData: { RE_CAPTCHA_SITE_KEY },
    }),
  ],

  build: {
    target: 'esnext',
  },

  define: {
    'process.env': {
      API_BASE_URL: 'http://localhost:4000',
      RE_CAPTCHA_SITE_KEY,
    },
  },

  resolve: {
    alias: {
      '@tidb-community/common': resolve(__dirname, '../common/src'),
      '@tidb-community/ui': resolve(__dirname, '../ui/src'),
      '@/public': resolve(__dirname, '../../public'),
      '@': resolve(__dirname, '../../src'),
      '~': resolve(__dirname, 'src'),
      ...unifyNodeModules(['antd', 'react', 'react-dom', 'react-is', 'ramda', 'styled-component']),
    },
  },

  server: {
    port: 3001,
  },
});
