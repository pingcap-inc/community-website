const path = require('path');

const unifyNodeModules = (names) =>
  names.reduce(
    (acc, name) => ({
      ...acc,
      [name]: path.resolve(`./node_modules/${name}`),
    }),
    {}
  );

module.exports = {
  future: {
    webpack5: true,
  },

  pageExtensions: ['page.js'],

  images: {
    domains: ['pingcap.com', 'contributor.tidb.io'],
  },

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, options) => {
    const { alias } = config.resolve;

    config.resolve.alias = {
      ...alias,

      ...unifyNodeModules(['antd', 'react', 'react-dom', 'react-is', 'ramda', 'styled-component']),

      // Make sure we will build directly from the source code for internal comsumers,
      // which gives us an instant reaction if anything updates
      '@tidb-community/ui': path.resolve('./packages/ui/src'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
