const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SizePlugin = require('size-plugin');
const path = require('path');
const webpack = require('webpack');

const isProd = (process.env.NODE_ENV ?? 'production') === 'production';

const unifyNodeModules = (names) =>
  names.reduce(
    (acc, name) => ({
      ...acc,
      [name]: path.resolve(`../../node_modules/${name}`),
    }),
    {}
  );

module.exports = {
  mode: process.env.NODE_ENV ?? 'production',

  entry: {
    'header-footer': './src/headerFooter.js',
  },

  output: {
    path: path.resolve(__dirname, '../../public/asktug'),
    filename: '[name].js',
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
      '~': path.resolve('./src'),
      '@': path.resolve('../../src'),
      '@tidb-community/common': path.resolve('../common/src'),
      '@tidb-community/datasource': path.resolve('../datasource/src'),
      '@tidb-community/ui': path.resolve('../ui/src'),
      'antd-global.css': path.resolve('../ui/es/antd/global.css'),
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
    isProd && new SizePlugin(),
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin(require('./env').env),
  ].filter(Boolean),
};
