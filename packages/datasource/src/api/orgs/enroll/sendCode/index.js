import axios from 'axios';

export const sendCode = ({ email }) => {
  return axios.post('/api/orgs/enroll/send-code', { email });
};
