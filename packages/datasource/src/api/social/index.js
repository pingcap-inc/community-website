import client from '../client';

export const login = ({ provider, redirect_to }) => {
  let url = `${client.defaults.baseURL}/social/login/${provider}`;

  if (redirect_to) {
    url = `${url}?redirect_to=${encodeURIComponent(redirect_to)}`;
  }

  window.location.href = url;
};

export const disconnect = (provider) => {
  return client.post(`/api/social/disconnect/${provider}`);
};
