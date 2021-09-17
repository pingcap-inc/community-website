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
  const previewValues = {};
  if (isPreview) {
    const data = fs.readFileSync(previewFile, 'utf8');
    console.log('data!!', data);
    const items = data.split(/\n/).filter(Boolean);
    console.log('items!!', items);
  }

  const data = fs.readFileSync(templeFile, 'utf8');
  const names = data.split(/=?\n/).filter(Boolean);
  const values = names.map((name) => {
    console.log(env[name], env[`PREVIEW_${name}`]);
    return env[name];
  });
})();
