import Axios from 'axios';

const client = Axios.create({
  baseURL: process.env.API_BASE_URL,
});
export const callbackClient = Axios.create({});

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
      return Promise.reject('Network Error');
    }
  }
);

callbackClient.interceptors.response.use(undefined, () => {});

export default client;
