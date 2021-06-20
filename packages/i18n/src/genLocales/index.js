const ExcelJS = require('exceljs');
const _ = require('lodash');
const fs = require('fs');
const jsonPointer = require('json-pointer');
const mkdirp = require('mkdirp');
const path = require('path');
const rimraf = require('rimraf');

const utils = require('./utils');
const { resolveRoot } = require('../utils');

const genLocale = async (namespace) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(path.resolve(`./excels/${namespace}.xlsx`));

  const sheet = workbook.getWorksheet(namespace);
  const data = utils.prepareLocaleData(sheet);

  for (const locale in data) {
    const r = {};
    _.toPairs(data[locale]).forEach(([langKey, value]) => {
      _.set(r, jsonPointer.parse(langKey), value);
    });

    const filename = resolveRoot(`./locales/${namespace}/${locale}.json`);
    mkdirp.sync(resolveRoot(`./locales/${namespace}`));
    fs.writeFileSync(filename, JSON.stringify(r, null, 2));
  }
};

(() => {
  const localesDir = resolveRoot('./locales');
  rimraf.sync(localesDir);

  const namespaces = utils.getNamespaces();
  namespaces.forEach((namespace) => {
    genLocale(namespace);
  });
})();
