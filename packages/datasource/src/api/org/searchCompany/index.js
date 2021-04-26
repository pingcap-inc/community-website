import Axios from 'axios';

export const searchCompany = ({ word }) => {
  return Axios.post('/api/orgs/search-company', { word });
};
