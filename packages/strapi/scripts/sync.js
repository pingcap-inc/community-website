require('dotenv').config();

const initStrapiClient = require('@tidb-community/datasource/lib/api/initStrapiClient').default;

const { env } = process;

const SYNC_APIS = [
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

    console.log(`${api} has been synced successfully!`);
  });
})();
