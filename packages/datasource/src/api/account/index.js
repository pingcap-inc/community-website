import client from '../client';

export const settings = () => client.get('/api/account/settings');

export const sendPhoneCode = ({ phone }) =>
  client.post('/api/account/set-phone/send-code', {
    phone,
  });

export const setPhone = ({ phone, code }) =>
  client.post('/api/account/set-phone', {
    phone,
    code,
  });

export const sendEmailCode = ({ email }) =>
  client.post('/api/account/set-email/send-code', {
    email,
  });

export const setEmail = ({ email, code }) =>
  client.post('/api/account/set-email', {
    email,
    code,
  });

export const setPassword = ({ new_password }) =>
  client.post('/api/account/set-password', {
    new_password,
  });

export const resetPassword = ({ old_password, new_password }) =>
  client.post('/api/account/reset-password', {
    old_password,
    new_password,
  });
