let nextConfig;

const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

const { i18n } = require('./next-i18next.config');

const os = require('os');
const platform = os.platform();
const outputStandaloneEnable = platform === 'linux';

const unifyNodeModules = (names) =>
  names.reduce(
    (acc, name) => ({
      ...acc,
      [name]: path.resolve(`./node_modules/${name}`),
    }),
    {}
  );

/**
 * @type {import('next').NextConfig}
 **/
const config = {
  i18n,

  pageExtensions: ['page.js', 'page.jsx', 'page.tsx'],

  images: {
    domains: [
      'localhost',
      'tidb.net',
      'contributor.tidb.io',
      'cms.tidb.net',
      'img3.pingcap.com',
      'i0.hdslb.com',
      'i1.hdslb.com',
      'i2.hdslb.com',
    ],
  },

  styledComponents: true,

  /**
   * because it is an open-source project,
   * so we could allow next.js to build the source-maps files and publish them to the production environment,
   * it will help us debug more efficiently
   */
  productionBrowserSourceMaps: true,

  /**
   * using the Next.js compiler for minification. This is 7x faster than Terser.
   */
  swcMinify: true,

  /**
   * for building the docker image
   */
  experimental: {
    outputStandalone: outputStandaloneEnable,
  },

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, options) => {
    const { alias } = config.resolve;

    config.resolve.alias = {
      ...alias,

      ...unifyNodeModules(['antd', 'polished', 'ramda', 'react', 'react-dom', 'react-is', 'styled-components']),

      // Make sure we will build directly from the source code for internal consumers,
      // which gives us an instant reaction if anything updates
      '@tidb-community/common': path.resolve('./packages/common/src'),
      '@tidb-community/datasource': path.resolve('./packages/datasource/src'),
      '@tidb-community/tracking-script': path.resolve('./packages/trackingScript/src'),
      '@tidb-community/ui': path.resolve('./packages/ui/src'),
      '@': path.resolve('./'),
      '~': path.resolve('./src'),
      '@pingcap-inc/tidb-community-editor/dist/style.css': path.resolve(
        './node_modules/@pingcap-inc/tidb-community-editor/dist/style.css'
      ),
      '@pingcap-inc/tidb-community-editor': path.resolve(
        './node_modules/@pingcap-inc/tidb-community-editor/dist/index.full-es.js'
      ),
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

  //TODO: move the redirection rules to the {path}/index.tsx file using getStaticProps(context).
  // it will be high cohesion and easily to maintenance
  async redirects() {
    return [
      {
        source: '/u/:username',
        destination: '/u/:username/answer',
        permanent: false,
      },
      {
        source: '/u/:username/favorite',
        destination: '/u/:username/favorite/article',
        permanent: false,
      },
    ];
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
      ignoreMissing: true,
      ignoreEmpty: true,
    },
  };
  nextConfig = withSentryConfig(config, SentryWebpackPluginOptions);
} else {
  nextConfig = config;
}

if (process.env.NEXT_PUBLIC_CDN_URL) {
  nextConfig.assetPrefix = process.env.NEXT_PUBLIC_CDN_URL;
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
]);

const finalConfig = withTM(nextConfig);

if (process.env.ANALYZE === 'true') {
  module.exports = require('@next/bundle-analyzer')({ enabled: true })(finalConfig);
} else {
  module.exports = finalConfig;
}
// module.exports = nextConfig
