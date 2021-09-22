const ChainedBackend = require('i18next-chained-backend');
const FsBackend = require('i18next-fs-backend/cjs');
const HttpBackend = require('i18next-http-backend/cjs');

const config = require('./index');

const { backend } = config;

module.exports = {
  ...config,

  use: [ChainedBackend],

  backend: {
    backends: [FsBackend, HttpBackend],

    backendOptions: [
      {
        loadPath: './packages/i18n/locales/{{lng}}/{{ns}}.json',
        expirationTime: backend.reloadInterval,
      },
      backend,
    ],
  },
};
