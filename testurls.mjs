import Axios from 'axios';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs/promises';

const checkingUrls = [
  // blogs
  '/blog/682535b5',
  '/blog?latest=true',
  '/blog/c/management-and-operation',
  '/blog/c/management-and-operation?latest=true',
  '/blog/tag/practical-case',
  '/blog/tag/practical-case?latest=true',
  '/blog/user/644/posts/all',
  '/blog/user/644/comments',
  '/blog/user/644/like',
  '/blog/user/644/favorites',
  // user home page
  '/u/orgadmin/answer',
  '/u/orgadmin/post',
  '/u/orgadmin/question',
];

const urls = [
  ...checkingUrls,
  ...await getPages(),
];

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOME_URL,
});

async function test (url) {
  try {
    await axios.get(url);
    console.log(url, chalk.gray('...'), chalk.green('[OK]'));
  } catch (e) {
    if (!e.response) {
      console.error(url, chalk.gray('...'), chalk.red(`[ERROR]`), e);
    } else {
      console.log(url, chalk.gray('...'), chalk.red(`[${e?.response.status} ${e?.response.statusText}]`));
    }
    throw e;
  }
}

const res = await Promise.allSettled(urls.map(test));

const failed = res.filter(res => res.status === 'rejected');

if (failed.length > 0) {
  console.error(`${chalk.red('[FAILED]')} ${failed.length}/${urls.length} failed`);
  process.exit(1)
} else {
  console.log(`${chalk.green('[SUCCESS]')} all tests passed`);
}

async function getPages (base = './src/pages') {
  const urls = [];
  const files = await fs.readdir(base, { withFileTypes: true });
  for (let file of files) {
    if (file.isFile() && /^index\.page\.[jt]sx?$/.test(file.name)) {
      urls.push('/' + path.relative('./src/pages', base));
    } else if (file.isDirectory()) {
      if (!/^\[.+]$/.test(file.name)) {
        urls.push(...await getPages(path.join(base, file.name)));
      } else {
        console.log(chalk.gray('ignore', await getPages(path.join(base, file.name))));
      }
    }
  }
  return urls;
}
