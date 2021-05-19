module.exports = {
  apps: [
    {
      name: 'tug-website-next-server',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 2,
      exec_mode: 'cluster',
    },
  ],
};
