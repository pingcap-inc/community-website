const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/headerFooter.js',

  output: {
    path: path.resolve(__dirname, '../../public/asktug'),
    filename: 'header-footer.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
