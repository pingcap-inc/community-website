import client from '../client';

export const fetchRedDots = () =>
  client.get('/api/operation/red-dots', {
    shouldDispatchApiError: ({ status }) => {
      return status !== 401;
    },
  });

export const setRedDotRead = (dotName) => client.post(`/api/operation/red-dots/${dotName}`, { action: 'read' });
