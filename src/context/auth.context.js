import { createContext } from 'react';

const accountsBaseUrl = process.env.NEXT_PUBLIC_ACCOUNTS_BASE_URL;
const homeUrl = process.env.NEXT_PUBLIC_HOME_URL;
const loginUrl = `${accountsBaseUrl}/login`;
const logoutUrl = `${accountsBaseUrl}/logout`;

const login = function (redirectUrl) {
  const { location } = window;
  location.href = `${loginUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? window.location.href)}`;
};

const logout = function (redirectUrl) {
  const { location } = window;
  redirectUrl = redirectUrl ?? this.isAuthRequired ? homeUrl : location.href;
  location.href = `${logoutUrl}?redirect_to=${encodeURIComponent(redirectUrl)}`;
};

export const context = {
  isAnonymous: false,
  isLoggedIn: false,
  isAuthRequired: false,
};

context.login = login.bind(context);

context.logout = logout.bind(context);

context.setIsAuthRequired = (isRequired) => (context.isAuthRequired = isRequired);

export const AuthContext = createContext(context);

AuthContext.displayName = 'AuthContext';
