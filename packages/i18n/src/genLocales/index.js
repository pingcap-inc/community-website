const ExcelJS = require('exceljs');
const _ = require('lodash');
const chalk = require('chalk');
const fs = require('fs');
const jsonPointer = require('json-pointer');
const mkdirp = require('mkdirp');
const path = require('path');
const rimraf = require('rimraf');

const utils = require('./utils');
const { resolveRoot } = require('../utils');

const { log } = console;

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

    const filename = resolveRoot(`./locales/${locale}/${namespace}.json`);
    mkdirp.sync(resolveRoot(`./locales/${locale}`));
    fs.writeFileSync(filename, JSON.stringify(r, null, 2));
    log(`${chalk.blueBright(`${locale}/${namespace}.json`)} ${chalk.green('generated successfully!')}`);
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
