module.exports = {
  apps: [
    {
      name: 'tug-website-next-server',
      script: 'node_modules/.bin/next',
      args: 'start',
      instances: 2,
      exec_mode: 'cluster',
    },
  ],
};
