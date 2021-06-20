const ExcelJS = require('exceljs');

const utils = require('./utils');
const { resolveRoot } = require('../utils');

const genLocale = async (namespace) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(resolveRoot(`./excels/${namespace}.xlsx`));

  const sheet = workbook.getWorksheet(namespace);
  const data = utils.prepareLocaleData(sheet);

  console.log(data);
};

(() => {
  const namespaces = utils.getNamespaces();
  namespaces.forEach((namespace) => {
    genLocale(namespace);
  });
})();
