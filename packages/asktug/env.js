const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const loadOrder = ['.env', '.env.production', '.env.local'];

const envObject = {};
const defineObject = {};

for (const suffix of loadOrder) {
  const filePath = path.resolve(__dirname, '../..', suffix);
  if (!fs.existsSync(filePath)) {
    continue;
  }
  const raw = dotenv.parse(fs.readFileSync(filePath));
  Object.assign(envObject, raw);
  for (const key of Object.keys(raw)) {
    defineObject[`process.env.${key}`] = raw[key];
  }
}

module.exports = {
  env: envObject,
  define: defineObject,
};
