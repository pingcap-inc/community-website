require('dotenv').config();

const chalk = require('chalk');
const initStrapiClient = require('@tidb-community/datasource/lib/api/initStrapiClient').default;

const { env } = process;
const { log } = console;

const SYNC_APIS = [
  'tidbio-activitiespage-activities',
  'tidbio-homepage-banner-promotions',
  'tidbio-asktug-blogs',
  'tidbio-asktug-qa-topics',
  'tidbio-blibli-recent-videos',
  'tidbio-github-info',
];

(async () => {
  const localClient = await initStrapiClient({
    baseUrl: env.LOCAL_BASE_URL,
    email: env.LOCAL_EMAIL,
    password: env.LOCAL_PASSWORD,
  });

  const sourceClient = await initStrapiClient({
    baseUrl: env.SOURCE_BASE_URL,
    email: env.SOURCE_EMAIL,
    password: env.SOURCE_PASSWORD,
  });

  SYNC_APIS.map(async (api) => {
    const r = await sourceClient.get(api);

    await localClient.put(api, {
      data: r.data,
    });

    log(`${chalk.blueBright(`${api}`)} ${chalk.green('has been synced successfully!')}`);
  });
})();
