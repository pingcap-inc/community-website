const fs = require('fs');
const path = require('path');
const glob = require('glob');

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

const genExcel = (namespace, locales) => {
  locales.forEach((locale) => {
    console.log({
      namespace,
      locale,
    });

    let json = {};
    try {
      json = fs.readFileSync(resolveRoot(`locales/${locale}/${namespace}.json`), 'utf8');
    } catch (err) {}
    console.log(json);
  });
};

(async () => {
  const namespaces = getNamespaces();

  namespaces.forEach((ns) => {
    genExcel(ns, ['zh', 'en']);
  });
})();
