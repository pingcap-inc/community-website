import client from './client';

export const searchCompany = ({ word }) => {
  return client.get('/api/search-company', {
    word,
  });
};
