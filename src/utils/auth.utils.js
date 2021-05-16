import { getData } from '@tidb-community/datasource';

const loginUrl = 'https://accounts.pingcap.com/login';
const logoutUrl = 'https://accounts.pingcap.com/logout';
const REG_AUTH_PATH = /https?:\/\/([^/]+)\/(?:account|orgs)\//;

export const login = (redirectUrl) => {
  if (typeof window === 'undefined') return;
  window.open(`${loginUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? window.location.href)}`, '_top');
};

export const logout = (redirectUrl) => {
  if (typeof window === 'undefined') return;

  redirectUrl = redirectUrl ?? window.location.href;
  let url;
  // do not redirect back to needs-login pages
  if (REG_AUTH_PATH.test(redirectUrl)) {
    if (!/^http/.test(homeUrl)) {
      url = `${window.location.protocol}//${window.location.hostname}${
        window.location.port ? `:${window.location.port}` : ''
      }${homeUrl}`;
    } else {
      url = homeUrl;
    }
  } else {
    url = redirectUrl;
  }
  window.open(`${logoutUrl}?redirect_to=${encodeURIComponent(url)}`, '_top');
};
