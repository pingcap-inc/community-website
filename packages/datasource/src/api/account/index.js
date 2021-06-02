import client from '../client';

export const settings = () => {
  return client.get('/api/account/settings');
};

export const sendPhoneCode = ({ phone, re_token_v3 }) => {
  return client.post('/api/account/set-phone/send-code', {
    phone,
    re_token_v3,
  });
};

export const setPhone = ({ phone, code, re_token_v3 }) => {
  return client.post('/api/account/set-phone', {
    phone,
    re_token_v3,
  });
};
