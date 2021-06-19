const ExcelJS = require('exceljs');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const utils = require('./utils');
const { locales, allHeaders } = require('../constants');

const { log } = console;
const rootPath = fs.realpathSync(process.cwd());
const resolveRoot = (relativePath) => path.resolve(rootPath, relativePath);

const genExcel = (namespace) => {
  // Format: { localeKey: { en, cn } }
  const data = {};
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet(namespace, {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  sheet.columns = utils.generateLocalColumns(50, allHeaders);

  locales.forEach((locale) => {
    let json = {};
    try {
      json = JSON.parse(fs.readFileSync(resolveRoot(`locales/${locale}/${namespace}.json`), 'utf8'));
    } catch (err) {}

    utils.fillExcelData({ json, data, locale });
  });

  log('data!!', data);

  workbook.xlsx.writeFile(resolveRoot(`excels/${namespace}.xlsx`)).then(() => {
    log(`${chalk.blueBright(`${namespace}.xlsx`)} ${chalk.green('generated successfully!')}`);
  });
};

(async () => {
  const namespaces = utils.getNamespaces();

  namespaces.forEach((namespace) => {
    genExcel(namespace);
  });
})();
