import client, { callbackClient } from './client';

const timeoutPromise = (ms) => new Promise((resolve, reject) => setTimeout(() => reject(new Error('timeout')), ms));

export const phoneLoginCheck = async ({ phone }) => {
  await client.post('/api/login/phone/check', { phone });
};

export const phoneLoginSendCode = async ({ phone, re_token_v3 }) => {
  await client.post('/api/login/phone/send-code', { phone, re_token_v3 });
};

const postLogin = async ({ redirect_to, sso_callbacks }) => {
  await Promise.all([Promise.all(sso_callbacks.map((url) => callbackClient.get(url))), timeoutPromise(500)]).catch(
    () => {}
  );

  return {
    redirectTo: redirect_to,
  };
};

export const phoneLogin = async ({ phone, code, re_token_v3, redirect_to }) => {
  const { data: resp } = await client.post('/api/login/phone', { phone, code, re_token_v3, redirect_to });
  return postLogin(resp);
};

export const passwordLogin = async ({ identifier, password, re_token_v3, redirect_to }) => {
  const { data: resp } = await client.post('/api/login/password', { identifier, password, re_token_v3, redirect_to });
  return postLogin(resp);
};

export const socialLogin = ({ provider, redirect_to }) => {
  window.open(
    `${client.defaults.baseURL}/social/login/${provider}?redirect_to=${encodeURIComponent(redirect_to || '')}`,
    '_top'
  );
};
