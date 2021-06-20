const fs = require('fs');
const path = require('path');

const rootPath = fs.realpathSync(process.cwd());

const resolveRoot = (relativePath) => path.resolve(rootPath, relativePath);

module.exports = {
  resolveRoot,
};
