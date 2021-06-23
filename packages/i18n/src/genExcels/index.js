const ExcelJS = require('exceljs');
const chalk = require('chalk');
const fs = require('fs');
const rimraf = require('rimraf');

const utils = require('./utils');
const { locales } = require('../constants');
const { resolveRoot } = require('../utils');

const { log } = console;

const genExcel = (namespace) => {
  // Format: { localeKey: { en, cn } }
  const data = {};
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet(namespace, {
    views: [{ state: 'frozen', xSplit: 1, ySplit: 1 }],
  });

  utils.generateHeaderRow(sheet);
  utils.formatHeaderRow(sheet);

  locales.forEach((locale) => {
    let json = {};
    try {
      json = JSON.parse(fs.readFileSync(resolveRoot(`./locales/${locale}/${namespace}.json`), 'utf8'));
    } catch (err) {}

    utils.prepareExcelData({ json, data, locale });
  });

  utils.generateDataRows({
    sheet,
    data: utils.sortObjByKey(data),
  });

  workbook.xlsx.writeFile(resolveRoot(`./excels/${namespace}.xlsx`)).then(() => {
    log(`${chalk.blueBright(`${namespace}.xlsx`)} ${chalk.green('generated successfully!')}`);
  });
};

(() => {
  const excelsDir = resolveRoot('./excels');
  rimraf.sync(excelsDir);
  fs.mkdirSync(excelsDir);

  const namespaces = utils.getNamespaces();
  namespaces.forEach((namespace) => {
    genExcel(namespace);
  });
})();
