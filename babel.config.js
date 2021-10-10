module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true }]],
  overrides: [{
    include: [
      './node_modules',
      './packages',
    ],
    plugins: [
      ['babel-plugin-transform-require-ignore', {
        extensions: ['.css'],
      }]
    ]
  }]
};
