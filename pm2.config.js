module.exports = {
  apps: [
    {
      name: 'tug-website-next-server',
      script: 'next',
      args: 'start',
      instances: 2,
      exec_mode: 'cluster',
    },
  ],
};
