const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

const ONE_MIN = 60 * 1000;

module.exports = {
  i18n: {
    // defaultLocale: 'zh',
    defaultLocale: 'en',
    locales: ['zh', 'en'],
  },
  use: [require('i18next-http-backend/cjs')],
  ns: ['common', 'page-community', 'page-organization-benefits', 'page-orgs'],
  backend: {
    loadPath: `${process.env.LOCALES_BASE_URL}/{{lng}}/{{ns}}.json`,
    reloadInterval: ONE_MIN,

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
    requestOptions: {
      mode: 'cors',
      credentials: 'include',
      cache: 'default',
    },
  },
  debug: !isProd,
  serializeConfig: false,
};
