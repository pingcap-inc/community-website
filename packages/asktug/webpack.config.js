const path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/headerFooter.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'header-footer.js',
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
