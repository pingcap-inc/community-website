import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvg from 'vite-plugin-react-svg';
import { defineConfig, loadEnv } from 'vite';
import { injectHtml } from 'vite-plugin-html';
import { resolve } from 'path';

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
        '@/public': resolve(__dirname, '../../public'),
        '@': resolve(__dirname, '../../src'),
        '~': resolve(__dirname, 'src'),
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
