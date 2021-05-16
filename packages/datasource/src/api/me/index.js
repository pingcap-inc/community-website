import client from '../client';

export const me = () =>
  client.get('/api/me', {
    shouldDispatchApiError: ({ status }) => {
      console.log('status', status);
      return status !== 401;
    },
  });
