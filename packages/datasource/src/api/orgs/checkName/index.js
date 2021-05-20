import client from '../../client';

export const checkName = ({ name }) => {
  return client.post('/api/orgs/check-name', { name });
};
