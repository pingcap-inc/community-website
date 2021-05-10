import client from '../../client';

export const searchCompany = ({ word }) => {
  return client.get('/api/orgs/search-company', { params: { word } });
};
