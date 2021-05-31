import client from '../client';

export const disconnect = (provider) => {
  return client.post(`/api/social/disconnect/${provider}`);
};
