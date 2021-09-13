// The configuration is referred to
// https://pm2.keymetrics.io/docs/tutorials/capistrano-like-deployments
module.exports = {
  apps: [
    {
      name: 'tug-website-next-server',

      // Provide the relative address otherwise PM2 cannot identify the next command
      script: 'node_modules/.bin/next',
      args: 'start',

      // `cwd` is used for resolving a symlink related issue mentioned below:
      // https://pm2.keymetrics.io/docs/tutorials/capistrano-like-deployments#the-main-issue
      // Otherwise, PM2 will readlink first and break the server reload.
      cwd: process.env.PWD,
      instances: process.env.INSTANCES_NUM,
      exec_mode: 'cluster',
    },
  ],
};
