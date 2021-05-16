module.exports = {
  apps: [
    {
      name: 'tug-website-next-server',
      // call next CLI directly otherwise PM2 cluster won't work
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      // should be the current folder, otherwise PM2 will readlink first and break reload
      cwd: process.env.PWD,
      instances: 2,
      exec_mode: 'cluster',
    },
  ],
};
