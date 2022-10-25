/** @type {import('next-sitemap').IConfig} */

const getAllBlogs = require('./scripts/sitemap');

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_HOME_URL || 'https://tidb.net',
  generateRobotsTxt: true, // (optional)
  // ...other options
  additionalPaths: async (config) => {
    return await getAllBlogs();
  },
};
