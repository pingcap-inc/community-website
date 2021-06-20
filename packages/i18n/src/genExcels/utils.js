const glob = require('glob');
const jsonPointer = require('json-pointer');

const { locales, allHeaders, colors } = require('../constants');

const fontStyles = {
  name: 'Calibri',
  size: 12,
  color: { argb: colors.black },
};

const getNamespaces = (filePattern = 'locales/*/*.json') => {
  const files = glob.sync(filePattern);
  const re = /\/(((?!\/).)*)\.json$/;

  return new Set(
    files
      .map((file) => {
        const m = re.exec(file);
        return m && m[1];
      })
      .filter(Boolean)
  );
};

const fillExcelData = ({ json, locale, data }) => {
  const dict = jsonPointer.dict(json);
  for (const k in dict) {
    const v = dict[k];
    if (data[k]) {
      data[k][locale] = v;
    } else {
      data[k] = {
        [locale]: v,
      };
    }
  }
};

const formatHeaderRow = (sheet) => {
  const headerRow = sheet.getRow(1);
  headerRow.height = 40;

  const alignment = {
    vertical: 'middle',
    horizontal: 'center',
  };

  headerRow.getCell(1).alignment = alignment;

  locales.forEach((_, idx) => {
    // Begin from the second column
    const cell = headerRow.getCell(2 + idx);
    cell.font = {
      ...fontStyles,
      color: { argb: colors.blue },
      bold: true,
    };
    cell.alignment = alignment;
  });
};

const generateColumns = (sheet) => {
  const columns = allHeaders.map((header, idx) => {
    const isFirstCol = idx === 0;

    return {
      header,
      width: isFirstCol ? 50 : 150,
      key: header,
      style: {
        font: fontStyles,
        alignment: { vertical: 'middle', horizontal: 'left' },
      },
    };
  });

  sheet.columns = columns;
};

module.exports = {
  fontStyles,
  getNamespaces,
  fillExcelData,
  formatHeaderRow,
  generateColumns,
};
