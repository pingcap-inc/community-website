// The implementaion refers to
// https://github.com/locize/next-i18next-locize/tree/local-caching
const HttpBackend = require('i18next-http-backend/cjs');

const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

const ONE_SECOND = 1 * 1000;
const ONE_MIN = 60 * ONE_SECOND;
const reloadInterval = 999999; // isProd ? 10 * ONE_MIN : 30 * ONE_SECOND;

module.exports = {
  i18n: {
    defaultLocale: 'zh',
    fallbackLng: ['zh', 'en'],
    localeDetection: false,
    locales: ['zh', 'en'],
  },
  use: [HttpBackend],
  ns: [
    'common',
    'page-events',
    'page-contact-us',
    'page-home',
    'page-organization-benefits',
    'page-orgs',
    'page-talent-plan',
  ],
  backend: {
    loadPath: `${process.env.NEXT_PUBLIC_LOCALES_BASE_URL}/{{lng}}/{{ns}}.json`,
    reloadInterval,
    crossDomain: true,

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
    requestOptions: {
      mode: 'cors',
      cache: 'default',
    },
  },
  debug: false, //!isProd,
  serializeConfig: false,
};
