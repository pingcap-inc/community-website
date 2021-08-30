import axios from 'axios';

export default async ({ baseUrl, email, password }) => {
  const client = axios.create({
    baseURL: baseUrl,
  });

  client.interceptors.response.use(({ data }) => data);

  const authResp = await client.post('/admin/login', {
    email,
    password,
  });

  console.log('authResp', authResp);

  return client;
};
