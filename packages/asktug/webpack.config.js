const path = require('path');
const webpack = require('webpack');

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

  entry: './src/headerFooter.js',

  output: {
    path: path.resolve(__dirname, '../../public/asktug'),
    filename: 'header-footer.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve('../../src'),
      '@tidb-community/datasource': path.resolve('../datasource/src'),
      '@tidb-community/ui': path.resolve('../ui/src'),
      '@tidb-community/common': path.resolve('../common/src'),
      'antd-global.css': path.resolve('../ui/es/antd/global.css'),
      ...unifyNodeModules(['antd', 'react', 'react-dom', 'react-is', 'ramda', 'styled-component']),
    },
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [new webpack.EnvironmentPlugin(require('./env').env)],
};
