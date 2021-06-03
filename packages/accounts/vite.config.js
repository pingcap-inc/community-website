import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvg from 'vite-plugin-react-svg';
import { injectHtml } from 'vite-plugin-html';
import { defineConfig, loadEnv } from 'vite';
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
export default ({ mode }) => {
  const env = loadEnv(mode, __dirname, '');

  return defineConfig({
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
        injectData: { RE_CAPTCHA_SITE_KEY: env.VITE_RE_CAPTCHA_SITE_KEY },
      }),
    ],

    base: '/',

    build: {
      target: 'esnext',
      assetsDir: 'static/sso/assets',
    },

    resolve: {
      alias: {
        '@tidb-community/common': resolve(__dirname, '../common/src'),
        '@tidb-community/ui': resolve(__dirname, '../ui/src'),
        '@/public': resolve(__dirname, '../../public'),
        '@': resolve(__dirname, '../../src'),
        '~': resolve(__dirname, 'src'),
        ...unifyNodeModules([
          'antd',
          'formik',
          'formik-antd',
          'ramda',
          'react',
          'react-dom',
          'react-is',
          'styled-component',
        ]),
      },
    },

    server: {
      port: env.SERVER_PORT || 3001,
      proxy: {
        '^/api': `${env.PROXY_URL}`,
        '^/social': `${env.PROXY_URL}`,
      },
    },
  });
};
