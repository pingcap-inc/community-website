module.exports = {
  presets: [
    '@babel/preset-react',
    // Fix the error of regeneratorRuntime is not defined
    // https://stackoverflow.com/a/61517521/14257627
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        targets: '> 0.25%, not dead',
      },
    ],
  ],
  plugins: [['styled-components']],
};
