// Learnt from:
// https://git.vnv.ch/snippets/17#more-documentations-options
// https://www.digitalocean.com/community/tutorials/how-to-automate-your-node-js-production-deployments-with-shipit-on-centos-7
module.exports = (shipit) => {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '.',
      deployTo: process.env.DEPLOY_SERVICE_PATH,

      // The node_modules of packages are not sent since they've been bundled in the
      // main server. The root node_modules is still needed for starting the app.
      ignores: ['.git', 'packages/**/node_modules'],
      keepReleases: 3,

      // The workspace dir won't be removed after deploy
      keepWorkspace: true,

      // Disable the setup of Git repository (fetch, pull, merge, submodules, etc.)
      // because the current context is already up to date(CI/ CD)
      shallowClone: false,
      branch: 'HEAD',
      copy: false,
    },

    production: {
      servers: {
        user: process.env.HOST_HK_1_USER,
        host: process.env.HOST_HK_1_IP,
      },
    },
  });

  shipit.on('published', () => {
    shipit.start('server:reload');
  });

  shipit.blTask('server:reload', async () => {
    await shipit.remote(`npm run server:reload`, {
      cwd: `${process.env.DEPLOY_SERVICE_PATH}/current/project`,
    });
  });
};
