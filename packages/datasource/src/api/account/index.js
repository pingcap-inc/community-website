import client from '../client';

export const settings = () => client.get('/api/account/settings');

export const sendPhoneCode = ({ phone, re_token_v3 }) =>
  client.post('/api/account/set-phone/send-code', {
    phone,
    re_token_v3,
  });

export const setPhone = ({ phone, code, re_token_v3 }) =>
  client.post('/api/account/set-phone', {
    phone,
    code,
    re_token_v3,
  });

export const sendEmailCode = ({ email, re_token_v3 }) =>
  client.post('/api/account/set-email/send-code', {
    email,
    re_token_v3,
  });

export const setEmail = ({ email, code, re_token_v3 }) =>
  client.post('/api/account/set-email', {
    email,
    code,
    re_token_v3,
  });

export const setPassword = ({ new_password, re_token_v3 }) =>
  client.post('/api/account/set-password', {
    new_password,
    re_token_v3,
  });

export const resetPassword = ({ old_password, new_password, re_token_v3 }) =>
  client.post('/api/account/reset-password', {
    old_password,
    new_password,
    re_token_v3,
  });
