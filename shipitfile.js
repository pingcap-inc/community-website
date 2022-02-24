// Learnt from:
// https://git.vnv.ch/snippets/17#more-documentations-options
// https://www.digitalocean.com/community/tutorials/how-to-automate-your-node-js-production-deployments-with-shipit-on-centos-7
module.exports = (shipit) => {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '.',
      deployTo: process.env.DEPLOY_PATH,

      // The node_modules of packages are not sent since they've been bundled in the
      // main server. The root node_modules is still needed for starting the app.
      ignores: ['.git', '.circle-ci*', '.github', '.husky', 'config', 'scripts', 'packages', 'src'],
      keepReleases: 3,

      // The workspace dir won't be removed after deploy
      keepWorkspace: true,

      // Disable the setup of Git repository (fetch, pull, merge, submodules, etc.)
      // because the current context is already up to date(CI/ CD)
      shallowClone: false,
      branch: 'HEAD',
      copy: false,
    },

    preview: {
      servers: {
        user: process.env.DEPLOY_USER,
        host: process.env.DEPLOY_HOST,
      },
    },

    production: {
      servers: {
        user: process.env.DEPLOY_USER,
        host: process.env.DEPLOY_HOST,
      },
    },
  });

  shipit.on('published', () => {
    shipit.remote(`export INSTANCES_NUM=${process.env.DEPLOY_INSTANCES_NUM}`);
    shipit.start('server:reload');
  });

  shipit.blTask('server:reload', async () => {
    await shipit.remote(`npm run server:reload`, {
      cwd: `${process.env.DEPLOY_PATH}/current/project`,
    });
  });
};
