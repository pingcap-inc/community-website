const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// Latter settings will overwrite former settings.
const loadOrder = ['.env', isDev ? '.env.development' : '.env.production', '.env.local'];

module.exports = (basePath = __dirname) => {
  const env = {};

  for (const suffix of loadOrder) {
    const filePath = path.resolve(basePath, suffix);
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const raw = dotenv.parse(fs.readFileSync(filePath));
    Object.assign(env, raw);
  }

  return env;
};
