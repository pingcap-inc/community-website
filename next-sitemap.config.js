/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_HOME_URL || 'https://tidb.net',
  generateRobotsTxt: true, // (optional)
  /**
   * set generateIndexSitemap to false because baidu tongji doesn't accept the index-sitemap file
   * limit of baidu tongji sitemap.xml at 2022-10: max count < 50,000 and file size < 10 MB
   * comment by cw1997<changwei@pingcap.com>
   */
  generateIndexSitemap: false,
  exclude: [
    '/my',
    '/my/*',
    '/member',
    '/member/*',
    '/blog/audits',
    '/blog/audits/*',
    '/notification',
    '/notification/*',
    '/private-messages',
    '/private-messages/*',
  ],
  // ...other options
  additionalPaths: async (config) => {
    return await getAllBlogs();
  },
};

const getAllBlogs = require('./scripts/sitemap');
