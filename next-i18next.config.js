const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

const ONE_SECOND = 1 * 1000;
const ONE_MIN = 60 * ONE_SECOND;

module.exports = {
  i18n: {
    // defaultLocale: 'zh',
    defaultLocale: 'en',
    locales: ['zh', 'en'],
    fallbackLng: ['zh', 'en'],
  },
  use: [require('i18next-http-backend/cjs')],
  ns: ['common', 'page-community', 'page-contact-us', 'page-organization-benefits', 'page-orgs'],
  backend: {
    loadPath: `${process.env.NEXT_PUBLIC_LOCALES_BASE_URL}/{{lng}}/{{ns}}.json`,
    reloadInterval: isProd ? 5 * ONE_MIN : 30 * ONE_SECOND,
    crossDomain: true,

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
    requestOptions: {
      mode: 'cors',
      cache: 'default',
    },
  },
  debug: !isProd,
  serializeConfig: false,
};
