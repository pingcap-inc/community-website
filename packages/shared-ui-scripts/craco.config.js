const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      ],
    },
    configure: (config) => {
      config.externals = {
        react: 'React',
        'react-dom': 'ReactDOM',
      };
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      config.optimization.runtimeChunk = false;
      config.output.filename = 'static/js/community-ui.js';
      config.plugins.forEach((plugin) => {
        if (plugin?.constructor?.name === 'MiniCssExtractPlugin') {
          plugin.options.filename = 'static/css/community-ui.css';
        }
      });
      config.resolve.plugins = config.resolve.plugins.filter(
        (plugin) => plugin?.constructor?.name !== 'ModuleScopePlugin'
      );
      config.resolve.alias = {
        '@tidb-community/datasource': path.resolve('../datasource/es'),
        '@tidb-community/ui': path.resolve('../ui/es'),
        '@tidb-community/common': path.resolve('../common/es'),
      };
      config.resolve.symlinks = false;
      return config;
    },
  },
  plugins: [
    {
      plugin: require('craco-antd'),
      options: {
        babelPluginImportOptions: {
          style: false,
        },
      },
    },
  ],
};
