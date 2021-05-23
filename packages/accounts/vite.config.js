import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
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
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],

  build: {
    target: 'esnext',
  },

  resolve: {
    alias: {
      '@/public': resolve(__dirname, '../../public'),
      '@': resolve(__dirname, '../../src'),
      '~': resolve(__dirname, 'src'),
      ...unifyNodeModules(['antd', 'react', 'react-dom', 'react-is', 'ramda', 'styled-component']),
    },
  },
});
