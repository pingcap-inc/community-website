require('dotenv').config();

const initStrapiClient = require('@tidb-community/datasource/lib/api/initStrapiClient').default;

const { env } = process;

(async () => {
  console.log('initStrapiClient!!', initStrapiClient);
  const localClient = initStrapiClient({
    baseUrl: env.LOCAL_BASE_URL,
    email: env.LOCAL_EMAIL,
    password: env.LOCAL_PASSWORD,
  });
})();
