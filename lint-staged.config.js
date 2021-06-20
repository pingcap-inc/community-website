const micromatch = require('micromatch');

module.exports = (allStagedFiles) => {
  const codeFiles = micromatch(allStagedFiles, ['**/*.{js,jsx,css,json,md,scss,ts,tsx}']);
  const excelFiles = micromatch(allStagedFiles, ['**/packages/i18n/excels/*.xlsx']);
  const localeFiles = micromatch(allStagedFiles, ['**/packages/i18n/locales/*/*.json']);

  return [
    excelFiles.length && 'npm run i18n:genLocales',
    localeFiles.length && 'npm run i18n:genExcels',
    codeFiles.length && `prettier --write ${codeFiles.join(' ')}`,
    'git add .',
  ].filter(Boolean);
};
