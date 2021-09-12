import axios from 'axios';

const initStrapiClient = async () => {
  const { env } = process;
  const client = axios.create({
    baseURL: env.NEXT_PUBLIC_STRAPI_BASE_URL,
  });

  client.interceptors.response.use(({ data }) => data);

  const authResp = await client.post('/admin/login', {
    email: env.NEXT_PUBLIC_STRAPI_EMAIL,
    password: env.NEXT_PUBLIC_STRAPI_PASSWORD,
  });

  client.interceptors.request.use((config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${authResp.data.token}`,
    };

    return config;
  });

  return client;
};

export default initStrapiClient;
