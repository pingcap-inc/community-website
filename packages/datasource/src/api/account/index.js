import client from '../client';

export const settings = () => {
  return client.get('/api/account/settings');
};
