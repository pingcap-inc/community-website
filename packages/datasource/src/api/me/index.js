import client from '../client';

export const me = () =>
  client.get('/api/me', {
    isDispatchApiError: ({ status }) => {
      return status !== 401;
    },
  });
