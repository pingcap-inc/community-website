import axios from 'axios';

export const searchCompany = ({ word }) => {
  return axios.post('/api/orgs/search-company', { word });
};
