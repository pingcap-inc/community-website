import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvg from 'vite-plugin-react-svg';
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
  ],

  build: {
    target: 'esnext',
  },

  define: {
    'process.env': {
      API_BASE_URL: 'http://localhost:4000',
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
});
