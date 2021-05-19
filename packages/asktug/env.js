const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const loadOrder = ['.env', '.env.production', '.env.local'];

const envObject = {};

for (const suffix of loadOrder) {
  const filePath = path.resolve(__dirname, '../..', suffix);
  if (!fs.existsSync(filePath)) {
    continue;
  }
  Object.assign(envObject, dotenv.parse(fs.readFileSync(filePath)));
}

module.exports = envObject;
