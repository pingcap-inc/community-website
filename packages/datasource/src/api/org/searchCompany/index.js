import Axios from 'axios';

export const searchCompany = ({ word }) => {
  return Axios.post('/api/org/search-company', { word });
};
