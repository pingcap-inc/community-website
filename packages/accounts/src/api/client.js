import Axios from 'axios';
import { getCaptcha } from '~/form/utils';

const client = Axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
});
export const callbackClient = Axios.create({
  withCredentials: true,
});

// the account site often needs to check captcha, so we put the get captcha logic in client.
// any api demands captcha just needs to declare a param 're_token_v3' and it will automatically injected into
// request body.
// this should only working for requests with body.
client.interceptors.request.use(async (config) => {
  if (config.data && typeof config.data === 'object' && 're_token_v3' in config.data) {
    config.data.re_token_v3 = await getCaptcha();
  }
  return Promise.resolve(config);
});

client.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    if (err.response) {
      const { status, data } = err.response;
      if (status === 400) {
        return Promise.reject(data);
      }
      return Promise.reject(err);
    } else {
      return Promise.reject(err);
    }
  }
);

callbackClient.interceptors.response.use(undefined, () => {});

export default client;
