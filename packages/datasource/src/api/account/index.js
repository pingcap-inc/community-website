import client from '../client';

export const settings = () => {
  return client.get('/api/account/settings');
};

export const setPhoneCode = ({ phone, re_token_v3 }) => {
  return client.phone('/api/account/settings', {
    phone,
    re_token_v3,
  });
};
