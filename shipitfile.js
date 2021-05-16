module.exports = (shipit) => {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '.',
      deployTo: process.env.DEPLOY_SERVICE_PATH,
      // don't send node_modules of packages since they've been bundled,
      // send root node_modules since we need them to start the app.
      ignores: ['packages/**/node_modules'],
      keepReleases: 5,
      keepWorkspace: true,
      shallowClone: false,
      branch: 'HEAD',
    },
    production: {
      servers: {
        user: process.env.HOST_HK_1_USER,
        host: process.env.HOST_HK_1_IP,
      },
    },
  });

  shipit.on('published', async () => {
    shipit.start('server:restart');
  });

  shipit.blTask('server:restart', async () => {
    await shipit.remote(`npm run server:restart`, {
      cwd: `${process.env.DEPLOY_SERVICE_PATH}/current`,
    });
  });
};
