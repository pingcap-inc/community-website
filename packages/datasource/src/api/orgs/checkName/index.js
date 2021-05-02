import axios from 'axios';

export const checkName = ({ name }) => {
  return axios.post('/api/orgs/check-name', { name });
};
