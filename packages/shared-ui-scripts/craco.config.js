const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (config) => {
      // exclude them from bundle since we will import from CDN
      config.externals = {
        react: 'React',
        'react-dom': 'ReactDOM',
      };
      // disable any chunk generation since we want a single file
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      config.optimization.runtimeChunk = false;
      // set js and css output filename
      config.output.filename = 'static/js/community-ui.js';
      config.plugins.forEach((plugin) => {
        if (plugin?.constructor?.name === 'MiniCssExtractPlugin') {
          plugin.options.filename = 'static/css/community-ui.css';
        }
      });
      // let babel-loader transform other packages (and their included svg) as well
      const oneOf = config.module.rules.find((obj) => 'oneOf' in obj).oneOf;
      const jsRule = oneOf.find(({ test }) => String(test) === String(/\.(js|mjs|jsx|ts|tsx)$/));
      jsRule.include = [
        jsRule.include,
        path.resolve('../datasource/es'),
        path.resolve('../ui/es'),
        path.resolve('../common/es'),
      ];
      // use svg files as react components to conform to Next.js behavior
      jsRule.options.plugins.splice(0, 1, [
        'inline-react-svg',
        {
          svgo: false,
        },
      ]);
      // remove ModuleScopePlugin since it prevents us to import from out of src/
      config.resolve.plugins = config.resolve.plugins.filter(
        (plugin) => plugin?.constructor?.name !== 'ModuleScopePlugin'
      );
      // cannot use (default) symlink behavior due unknown reasons
      config.resolve.alias = {
        '@tidb-community/datasource': path.resolve('../datasource/es'),
        '@tidb-community/ui': path.resolve('../ui/es'),
        '@tidb-community/common': path.resolve('../common/es'),
      };
      config.resolve.symlinks = false;
      // new config
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
