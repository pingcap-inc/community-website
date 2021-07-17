const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// Latter settings will overwrite former settings.
const loadOrder = ['.env', isDev ? '.env.development' : '.env.production', '.env.local'];

const r = {};

for (const suffix of loadOrder) {
  const filePath = path.resolve(__dirname, suffix);
  if (!fs.existsSync(filePath)) {
    continue;
  }

  const raw = dotenv.parse(fs.readFileSync(filePath));
  Object.assign(r, raw);
}

module.exports = r;
