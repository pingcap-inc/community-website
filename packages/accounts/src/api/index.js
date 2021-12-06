import client, { callbackClient } from './client';
import { expectedError } from '~/utils/errors';

const timeoutPromise = (ms) => new Promise((resolve, reject) => setTimeout(() => reject(new Error('timeout')), ms));

// server will return 429 if call send code too frequency
const handleSendCodeLimitError = (error) => {
  if (error.response?.status === 429) {
    return Promise.reject(expectedError('验证码发送失败，请稍后再试'));
  }
  return Promise.reject(error);
};

export const phoneLoginCheck = async ({ phone }) => {
  await client.post('/api/login/phone/check', { phone });
};

export const sendCode = async (path, { phone }) => {
  await client.post(`/api/${path}/send-code`, { phone }).catch(handleSendCodeLimitError);
};

const postLogin = async ({ redirect_to, sso_callbacks }) => {
  await Promise.all([Promise.all(sso_callbacks.map((url) => callbackClient.get(url))), timeoutPromise(500)]).catch(
    () => {}
  );

  return {
    redirectTo: redirect_to,
  };
};

export const phoneLogin = async ({ phone, code, redirect_to }) => {
  const { data: resp } = await client.post('/api/login/phone', { phone, code, redirect_to });
  return postLogin(resp);
};

export const passwordLogin = async ({ identifier, password, redirect_to }) => {
  const { data: resp } = await client.post('/api/login/password', { identifier, password, redirect_to });
  return postLogin(resp);
};

export const socialLogin = ({ provider, redirect_to }) => {
  window.open(
    `${client.defaults.baseURL || ''}/social/login/${provider}?redirect_to=${encodeURIComponent(redirect_to || '')}`,
    '_top'
  );
};

export const signup = async ({ company, email, phone, code, redirect_to }) => {
  const { data: resp } = await client.post('/api/signup', { company, email, phone, code, redirect_to });
  return postLogin(resp);
};

export const forgetSendCode = async ({ identifier }) => {
  await client.post(`/api/forget/send-code`, { identifier }).catch(handleSendCodeLimitError);
};

export const forgetVerifyCode = async ({ identifier, code }) => {
  return client.post('/api/forget/verify', { identifier, code });
};

export const forgetResetPassword = async ({ new_password }) => {
  return client.post('/api/forget/reset-password', { new_password });
};

export const canForgetResetPassword = async () => {
  return client
    .head('/api/forget/reset-password')
    .then(() => Promise.resolve(true))
    .catch((err) => {
      if (err.response && err.response.status === 428) {
        return Promise.resolve(false);
      } else {
        return Promise.reject(err);
      }
    });
};

export const fetchOrganizationOptions = (word) =>
  client.get('/api/search-company', { params: { word } }).then((result) =>
    result.data.map(({ name }) => ({
      value: name,
    }))
  );
