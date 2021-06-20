const ExcelJS = require('exceljs');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const utils = require('./utils');
const { locales } = require('../constants');

const { log } = console;
const rootPath = fs.realpathSync(process.cwd());
const resolveRoot = (relativePath) => path.resolve(rootPath, relativePath);

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

  utils.generateDataRows({ sheet, data });

  workbook.xlsx.writeFile(resolveRoot(`./excels/${namespace}.xlsx`)).then(() => {
    log(`${chalk.blueBright(`${namespace}.xlsx`)} ${chalk.green('generated successfully!')}`);
  });
};

(async () => {
  const excelsDir = resolveRoot('./excels');
  rimraf.sync(excelsDir);
  fs.mkdirSync(excelsDir);

  const namespaces = utils.getNamespaces();
  namespaces.forEach((namespace) => {
    genExcel(namespace);
  });
})();
