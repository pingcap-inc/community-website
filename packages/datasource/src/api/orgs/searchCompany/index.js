import client from '../../client';

export const searchCompany = ({ word }) => {
  return client.post('/api/orgs/search-company', { word });
};
