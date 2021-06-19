const R = require('ramda');
const glob = require('glob');
const jsonPointer = require('json-pointer');

const fontStyles = {
  name: 'Calibri',
  size: 12,
  color: { argb: 'FFFF0000' },
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
  R.map((val) => `${val}1`, [...'GHIJKLMNO']).forEach((id) => {
    sheet.getCell(id).font = {
      ...fontStyles,
      bold: true,
    };
    sheet.getCell(id).alignment = { vertical: 'middle', horizontal: 'center' };
  });
  sheet.getRow(1).height = 42.5;
};

const generateLocalColumns = (cellWidth, allHeaders) =>
  R.reduce(
    (acc, value) =>
      R.concat(acc, [
        {
          header: value,
          key: value === 'Entry/Code Reference' ? 'code' : R.toLower(value),
          width: cellWidth,
          style: {
            font: {
              ...fontStyles,
              color: { argb: 'FF000000' },
            },
            alignment: { vertical: 'middle', horizontal: 'left' },
          },
        },
      ]),
    [],
    allHeaders
  );

module.exports = {
  fontStyles,
  getNamespaces,
  fillExcelData,
  formatHeaderRow,
  generateLocalColumns,
};
