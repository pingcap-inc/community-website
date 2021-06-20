const micromatch = require('micromatch');

module.exports = (allStagedFiles) => {
  const codeFiles = micromatch(allStagedFiles, ['**/*.{js,jsx,css,json,md,scss,ts,tsx}']);
  const localeFiles = micromatch(allStagedFiles, ['**/packages/i18n/locales/*/*.json']);

  return [
    codeFiles.length && `prettier --write ${codeFiles.join(' ')}`,
    localeFiles.length && 'npm run i18n:genExcels',
    'git add .',
  ].filter(Boolean);
};
