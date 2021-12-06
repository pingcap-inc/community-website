import client from '../client';

export const settings = () => client.get('/api/account/settings');

export const sendPhoneCode = ({ phone, re_token_v3 }) =>
  client.post('/api/account/set-phone/send-code', {
    phone,
  });

export const setPhone = ({ phone, code, re_token_v3 }) =>
  client.post('/api/account/set-phone', {
    phone,
    code,
  });

export const sendEmailCode = ({ email, re_token_v3 }) =>
  client.post('/api/account/set-email/send-code', {
    email,
  });

export const setEmail = ({ email, code, re_token_v3 }) =>
  client.post('/api/account/set-email', {
    email,
    code,
  });

export const setPassword = ({ new_password, re_token_v3 }) =>
  client.post('/api/account/set-password', {
    new_password,
  });

export const resetPassword = ({ old_password, new_password, re_token_v3 }) =>
  client.post('/api/account/reset-password', {
    old_password,
    new_password,
  });
