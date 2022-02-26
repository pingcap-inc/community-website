// The implementaion refers to
// https://github.com/locize/next-i18next-locize/tree/local-caching

module.exports = {
  i18n: {
    defaultLocale: 'zh',
    fallbackLng: ['zh', 'en'],
    localeDetection: false,
    locales: ['zh', 'en'],
  },
  ns: [
    'common',
    'page-events',
    'page-contact-us',
    'page-home',
    'page-organization-benefits',
    'page-orgs',
    'page-talent-plan',
  ],
  debug: false, //!isProd,
  serializeConfig: false,
  localePath: './packages/i18n/locales',
};
