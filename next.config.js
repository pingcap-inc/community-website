let nextConfig;

const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

const { i18n } = require('./next-i18next.config.js');

const unifyNodeModules = (names) =>
  names.reduce(
    (acc, name) => ({
      ...acc,
      [name]: path.resolve(`./node_modules/${name}`),
    }),
    {}
  );

const config = {
  i18n,

  pageExtensions: ['page.js'],

  images: {
    domains: ['localhost', 'tidb.io', 'contributor.tidb.io', 'cms.tidb.io', 'img3.pingcap.com'],
  },

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, options) => {
    const { alias } = config.resolve;

    config.resolve.alias = {
      ...alias,

      ...unifyNodeModules(['antd', 'polished', 'ramda', 'react', 'react-dom', 'react-is', 'styled-components']),

      // Make sure we will build directly from the source code for internal comsumers,
      // which gives us an instant reaction if anything updates
      '@tidb-community/common': path.resolve('./packages/common/src'),
      '@tidb-community/datasource': path.resolve('./packages/datasource/src'),
      '@tidb-community/tracking-script': path.resolve('./packages/trackingScript/src'),
      '@tidb-community/ui': path.resolve('./packages/ui/src'),
      '@': path.resolve('./'),
      '~': path.resolve('./src'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  async rewrites() {
    return [{ source: '/next-api/:path*', destination: '/api/:path*' }];
  },
};

if (process.env.ENABLE_SENTRY === 'true') {
  // sentry will set dryRun automatically in development so nothing will be uploaded
  const SentryWebpackPluginOptions = {
    // Additional config options fsor the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
    silent: process.env.NODE_ENV === 'development',
    release: process.env.SENTRY_RELEASE,
    setCommits: {
      auto: true,
    },
  };
  nextConfig = withSentryConfig(config, SentryWebpackPluginOptions);
} else {
  nextConfig = config;
}

// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require('next-transpile-modules')([
  // Need to specify all @fullcalendar modules separately
  // with next-transpile-modules^6.x …
  // refer to https://github.com/fullcalendar/fullcalendar-example-projects/pull/19 for more detail
  '@fullcalendar/core',
  '@fullcalendar/react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/list',
]);

module.exports = withTM(nextConfig);
// module.exports = nextConfig
