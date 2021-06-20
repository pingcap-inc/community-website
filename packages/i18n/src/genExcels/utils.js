const R = require('ramda');
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

const prepareExcelData = ({ json, locale, data }) => {
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

const generateHeaderRow = (sheet) => {
  const columns = allHeaders.map((header, idx) => {
    const isFirstCol = idx === 0;

    return {
      header,
      width: isFirstCol ? 50 : 100,
      key: header,
      style: {
        font: fontStyles,
        alignment: { vertical: 'middle', horizontal: 'left' },
      },
    };
  });

  sheet.columns = columns;
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

const generateDataRows = ({ sheet, data }) => {
  R.toPairs(data).forEach(([langKey, translations], idx) => {
    const row = sheet.getRow(2 + idx);

    allHeaders.forEach((cellKey) => {
      const value = cellKey === allHeaders[0] ? langKey : translations[cellKey];
      row.getCell(cellKey).value = value;

      // The row will be highlighted if missing a translation for any locale
      if (!value) {
        row.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: colors.yellow },
        };
      }
    });
  });
};

// Sort data by its keys alphabetically
// https://stackoverflow.com/a/31102605/14257627
const sortObjByKey = (unordered) =>
  Object.keys(unordered)
    .sort()
    .reduce((obj, key) => {
      obj[key] = unordered[key];
      return obj;
    }, {});

module.exports = {
  fontStyles,
  getNamespaces,
  prepareExcelData,
  generateHeaderRow,
  formatHeaderRow,
  generateDataRows,
  sortObjByKey,
};
