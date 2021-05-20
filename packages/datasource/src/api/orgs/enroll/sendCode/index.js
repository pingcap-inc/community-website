import client from '../../../client';

export const sendCode = ({ email }) => {
  return client.post('/api/orgs/enroll/send-code', { email });
};
