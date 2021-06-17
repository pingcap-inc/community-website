const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = function (webpackEnv) {
  return {
    mode: 'production',
    bail: true,
    entry: {
      'community-ui': path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, '../../public/scripts'),
      filename: '[name].js',
      futureEmitAssets: true,
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          sourceMap: false,
          extractComments: false,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: require('postcss-safe-parser'),
            map: false,
          },
          cssProcessorPluginOptions: {
            preset: ['default', { minifyFontValues: { removeQuotes: false } }],
          },
        }),
      ],
      splitChunks: {
        cacheGroups: {
          default: false,
        },
      },
      runtimeChunk: false,
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@tidb-community/datasource': path.resolve('../datasource/es'),
        '@tidb-community/ui': path.resolve('../ui/es'),
        '@tidb-community/common': path.resolve('../common/es'),
      },
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                cache: true,
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                resolvePluginsRelativeTo: __dirname,
                baseConfig: {
                  extends: ['eslint-config-react-app'],
                },
                useEslintrc: false,
              },
              loader: 'eslint-loader',
            },
          ],
          include: path.resolve(__dirname, 'src'),
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: [
                path.resolve(__dirname, 'src'),
                path.resolve('../datasource/es'),
                path.resolve('../ui/es'),
                path.resolve('../common/es'),
              ],
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve('babel-preset-react-app/webpack-overrides'),
                babelrc: false,
                configFile: false,
                presets: [require.resolve('babel-preset-react-app')],
                plugins: [
                  [
                    'inline-react-svg',
                    {
                      svgo: false,
                    },
                  ],
                ],
                compact: true,
              },
            },
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
                sourceMaps: false,
                inputSourceMap: false,
              },
            },
            {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: { publicPath: '../../' },
                },
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    sourceMap: false,
                  },
                },
              ],
              sideEffects: true,
            },
            {
              test: /\.less$/,
              loader: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: { publicPath: '../../' },
                },
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    sourceMap: false,
                  },
                },
                {
                  loader: 'less-loader',
                  options: {
                    lessOptions: {
                      javascriptEnabled: true,
                    },
                  },
                },
              ],
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
    performance: false,
  };
};
