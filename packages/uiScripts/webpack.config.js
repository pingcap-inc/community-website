const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SizePlugin = require('size-plugin');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = (process.env.NODE_ENV ?? 'production') === 'production';

const pathResolve = (relativePath) => path.resolve(__dirname, relativePath);

const unifyNodeModules = (names) =>
  names.reduce(
    (acc, name) => ({
      ...acc,
      [name]: pathResolve(`../../node_modules/${name}`),
    }),
    {}
  );

module.exports = {
  mode: process.env.NODE_ENV ?? 'production',

  entry: {
    'asktug-header-footer': './src/scripts/asktugHeaderFooter/index.js',
    'contact-us': './src/scripts/contactUs/index.js',
    'header-footer': './src/scripts/headerFooter/index.js',
  },

  output: {
    path: pathResolve('../../public/scripts'),
    filename: '[name].js',
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
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
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: ['url-loader'],
      },
    ],
  },

  resolve: {
    alias: {
      '~': pathResolve('./src'),
      '@': pathResolve('../../src'),
      '@tidb-community/common': pathResolve('../common/src'),
      '@tidb-community/datasource': pathResolve('../datasource/src'),
      '@tidb-community/ui': pathResolve('../ui/src'),
      ...unifyNodeModules(['antd', 'react', 'react-dom', 'react-is', 'ramda', 'styled-components']),
    },
    extensions: ['.js', '.jsx', '.json'],
  },

  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      `...`,
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    isProd &&
      new CleanWebpackPlugin({
        dry: false,
        dangerouslyAllowCleanPatternsOutsideProject: true,
      }),
    isProd && new SizePlugin(),
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin(require('./env').env),
  ].filter(Boolean),
};
