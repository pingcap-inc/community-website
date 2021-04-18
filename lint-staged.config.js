module.exports = {
  '*.{js,json,css,scss,md}': ['prettier-eslint --write', 'git add'],
  'packages/{asktug,ui}/src/**': () => ['npm run build:asktug', 'git add .'],
};
