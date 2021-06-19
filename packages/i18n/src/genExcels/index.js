const fs = require('fs');
const glob = require('glob');
const path = require('path');
const jsonPointer = require('json-pointer');

const rootPath = fs.realpathSync(process.cwd());
const resolveRoot = (relativePath) => path.resolve(rootPath, relativePath);

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

const genExcel = (namespace, locales) => {
  // Format: { localeKey: { en, cn } }
  const data = {};

  locales.forEach((locale) => {
    console.log({
      namespace,
      locale,
    });

    let json = {};
    try {
      json = JSON.parse(fs.readFileSync(resolveRoot(`locales/${locale}/${namespace}.json`), 'utf8'));
    } catch (err) {}

    fillExcelData({ json, data, locale });

    console.log('data!!', data);
  });
};

(async () => {
  const namespaces = getNamespaces();

  namespaces.forEach((ns) => {
    genExcel(ns, ['zh', 'en']);
  });
})();
