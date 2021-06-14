module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
  ns: ['common', 'page-community'],
  use: [require('i18next-http-backend/cjs')],
  backend: {
    loadPath: 'http://localhost:5000/{{lng}}/{{ns}}.json',
  },
  debug: true,
  serializeConfig: false,
};
