import Axios from 'axios';

export const sendCode = ({ email }) => {
  return Axios.post('/api/orgs/enroll/send-code', { email });
};
