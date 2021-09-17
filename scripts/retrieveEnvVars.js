#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { env } = process;
const isPreview = env.CI_STAGE === 'preview';

const resolveRoot = (relativePath) => path.resolve(path.join(__dirname, '..'), relativePath);
const localFile = resolveRoot('.env.local');
const previewFile = resolveRoot('.env.preview');
const templeFile = resolveRoot('.env.circle-ci.template');

(() => {
  const envValues = {};

  const data = fs.readFileSync(templeFile, 'utf8');
  const names = data.split(/=?\n/).filter(Boolean);

  if (isPreview) {
    const re = /(.*?)=(.*)/;
    const data = fs.readFileSync(previewFile, 'utf8');
    const lines = data
      .split(/\n/)
      .filter(Boolean)
      .map((line) => line.replace(/\s*=\s*/, '='));

    lines.forEach((line) => {
      const [, name, value] = re.exec(line);
      envValues[name] = value;
    });
  }

  names.forEach((name) => {
    if (isPreview && !envValues[name]) {
      envValues[name] = env[`PREVIEW_${name}`] || env[name];
    } else {
      return (envValues[name] = env[name]);
    }
  });

  if (fs.existsSync(localFile)) {
    fs.renameSync(localFile, `${localFile}.bk`);
  }

  fs.writeFileSync(
    localFile,
    Object.entries(envValues)
      .map(([name, value]) => value && `${name}=${value}`)
      .filter(Boolean)
      .join('\n')
  );
})();
