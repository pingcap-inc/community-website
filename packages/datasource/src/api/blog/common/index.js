import blogClient from '../../blogClient';

export const principal = () => {
  return blogClient.get('/api/principal', {
    isDispatchApiError: ({ status }) => status !== 403 && status !== 401,
    isReturnErrorResponse: true,
  });
};
