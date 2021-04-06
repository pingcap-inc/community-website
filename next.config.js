module.exports = {
  pageExtensions: ['page.js'],

  images: {
    domains: ['pingcap.com', 'developer.tidb.io'],
  },

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
