import client from './client';

export const searchCompany = ({ word }) => {
  return client.post('/api/search-company', {
    word,
  });
};
