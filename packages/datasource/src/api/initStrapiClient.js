import axios from 'axios';

const initStrapiClient = async () => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_BASE_URL,
  });

  client.interceptors.response.use(({ data }) => data);

  const authResp = await client.post('/admin/login', {
    email: process.env.NEXT_PUBLIC_STRAPI_EMAIL,
    password: process.env.NEXT_PUBLIC_STRAPI_PASSWORD,
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
