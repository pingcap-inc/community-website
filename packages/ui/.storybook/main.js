const path = require('path');

const packageRoot = path.resolve(__dirname, '..');
const resolveRoot = (relativePath) => path.resolve(packageRoot, relativePath);

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  babel: async (options) => ({
    ...options,
    plugins: ['styled-components', ...options.plugins],
  }),

  // https://storybook.js.org/docs/react/configure/webpack
  webpackFinal: async (config) => {
    const { module, resolve } = config;

    return {
      ...config,

      module: {
        ...module,
        rules: [
          // https://github.com/Negan1911/storybook-svgr-react-component/blob/master/index.js
          ...module.rules.map((_) => {
            if (_.test.toString().includes('svg|')) {
              return {
                ..._,
                test: new RegExp(_.test.source.replace('svg|', '')),
              };
            }
            return _;
          }),
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },

      resolve: {
        ...resolve,
        alias: {
          ...resolve.alias,
          '@tidb-community/ui': resolveRoot('src'),
        },
      },
    };
  },
};
