const glob = require('glob');

const { locales } = require('../constants');

const getNamespaces = () => {
  const files = glob.sync('excels/*.xlsx');
  const re = /excels\/(.*)\.xlsx$/;

  return files
    .map((file) => {
      const m = re.exec(file);
      return m && m[1];
    })
    .filter(Boolean);
};

const prepareLocaleData = (sheet) => {
  const data = {};

  sheet.eachRow((row, rowNum) => {
    if (rowNum === 1) return;
    const langKey = row.getCell(1).value;

    row.eachCell((cell, colNum) => {
      if (colNum === 1) return;
      const locale = locales[colNum - 2];

      data[locale]
        ? (data[locale][langKey] = cell.value)
        : (data[locale] = {
            [langKey]: cell.value,
          });
    });
  });

  return data;
};

module.exports = {
  getNamespaces,
  prepareLocaleData,
};
