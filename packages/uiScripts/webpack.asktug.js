const webpack = require('webpack');
const SizePlugin = require('size-plugin');

const commonConfig = require('./webpack.common');

const isProd = (process.env.NODE_ENV ?? 'production') === 'production';

const filteredPlugins = commonConfig.plugins.filter((item) => {
  if (item instanceof SizePlugin || item instanceof webpack.EnvironmentPlugin) {
    return false;
  }

  return item;
});

module.exports = {
  ...commonConfig,
  entry: {
    'asktug-header-footer': './src/scripts/asktugHeaderFooter/index.js',
  },
  plugins: [
    ...filteredPlugins,
    isProd &&
      new SizePlugin({
        filename: 'asktug.size-plugin.json',
      }),
    new webpack.EnvironmentPlugin(require('./env')('./src/scripts/asktugHeaderFooter')),
  ],
};
