import { createContext } from 'react';

// FIXME: It is a temporary fix and the auth issue will be thoroughly handled in CPT-183
const REG_AUTH_PATH = /https?:\/\/([^/]+)\/(?:account|orgs|my)\//;
const accountsBaseUrl = process.env.NEXT_PUBLIC_ACCOUNTS_BASE_URL;
const loginUrl = `${accountsBaseUrl}/login`;
const logoutUrl = `${accountsBaseUrl}/logout`;
const homeUrl = 'https://tidb.io/';

const login = function (redirectUrl) {
  window.open(`${loginUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? window.location.href)}`, '_top');
};

const logout = function (redirectUrl) {
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

export const context = {
  isAuthRequired: false,
};

context.login = login.bind(context);

context.logout = logout.bind(logout);

context.setIsAuthRequired = (isRequired) => (context.isAuthRequired = isRequired);

export const AuthContext = createContext(context);
