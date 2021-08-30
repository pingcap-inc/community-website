import axios from 'axios';

const initStrapiClient = async ({ baseUrl, email, password }) => {
  const client = axios.create({
    baseURL: baseUrl,
  });

  client.interceptors.response.use(({ data }) => data);

  const authResp = await client.post('/admin/login', {
    email,
    password,
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
