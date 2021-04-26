import Axios from 'axios';

export const checkName = ({ name }) => {
  return Axios.post('/api/orgs/check-name', { name });
};
