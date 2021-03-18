const path = require('path');

const packageRoot = path.resolve(__dirname, '..');
const resolveRoot = (relativePath) => path.resolve(packageRoot, relativePath);

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  // https://storybook.js.org/docs/react/configure/webpack
  webpackFinal: async (config) => {
    const { resolve } = config;

    return {
      ...config,

      resolve: {
        ...resolve,
        alias: {
          ...resolve.alias,
          '@pingcap/pingcap-ui': resolveRoot('src'),
        },
      },
    };
  },
};
