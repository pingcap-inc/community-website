const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

module.exports = {
  i18n: {
    // defaultLocale: 'zh',
    defaultLocale: 'en',
    locales: ['zh', 'en'],
  },
  use: [require('i18next-http-backend/cjs')],
  backend: {
    // FIXME: please update domain for the production env
    loadPath: `${isProd ? 'http://localhost:5000' : 'http://localhost:5000'}/{{lng}}/{{ns}}.json`,
  },
  debug: !isProd,
  serializeConfig: false,
};
