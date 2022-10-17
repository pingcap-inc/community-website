import { NextPage } from 'next';
import { MeData } from '~/api/me';
import React, { createContext, useContext } from 'react';
import { authContext, MeContext } from '~/context';
import { SWRResponse } from 'swr';
import { ErrorPage } from '~/components';
import { usePrincipal } from '~/pages/blog/blog.hooks';

export type AuthenticateMethod = () => AuthenticateState;
export type NextAuthenticatedPage<P, IP = P> = NextPage<P, IP> & {
  useAuthenticated?: AuthenticateMethod;
};

type MeContextType = {
  meData: MeData | undefined;
  mutateMe: SWRResponse<MeData>['mutate'];
  isMeValidating: boolean;
};

type BlogPrincipalType = {
  loading: boolean;
  id: number;
  authorities: string[];
  roles: string[];
  hasAuthority: (authority: string) => boolean;
  hasRole: (role: string) => boolean;
  isAuthor: (blog: unknown) => boolean;
  isLogin: boolean;
  isPrincipalValidating: boolean;
};

export const enum AuthenticateState {
  OK = 'ok',
  LOADING = 'loading',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
}

const AuthenticateContext = createContext<{
  state: AuthenticateState;
}>({
  state: AuthenticateState.OK,
});

export function withAuthentication<P = Record<string, unknown>, IP = P>(Page: NextAuthenticatedPage<P, IP>) {
  const { useAuthenticated } = Page;
  if (!useAuthenticated) {
    return Page;
  }

  const AuthenticatedPage: NextPage<P, IP> = function (props: P) {
    const state = useAuthenticated();
    return (
      <AuthenticateContext.Provider value={{ state }}>
        {(() => {
          switch (state) {
            case AuthenticateState.OK:
            case AuthenticateState.LOADING:
              return <Page {...props} />;
            case AuthenticateState.FORBIDDEN:
              return <ErrorPage statusCode={403} errorMsg={undefined} />;
            case AuthenticateState.UNAUTHORIZED:
              authContext.login();
          }
        })()}
      </AuthenticateContext.Provider>
    );
  };

  AuthenticatedPage.displayName = `Authenticated${Page.displayName ?? 'Page'}`;

  return AuthenticatedPage;
}

export const useAuthenticatedState = () => {
  return useContext(AuthenticateContext).state;
};

export const useRequestLoggedIn: AuthenticateMethod = () => {
  const { isMeValidating, meData } = useContext<MeContextType>(MeContext);
  if (isMeValidating) {
    return AuthenticateState.LOADING;
  }

  if (meData) {
    return AuthenticateState.OK;
  }

  return AuthenticateState.UNAUTHORIZED;
};

export const blogAuthenticated = (auth: string[], role: string[]): AuthenticateMethod => {
  return function useBlogAuthenticated() {
    const state = useRequestLoggedIn();
    const { hasRole, hasAuthority, isPrincipalValidating } = usePrincipal() as BlogPrincipalType;
    if (state !== AuthenticateState.OK) {
      return state;
    }
    if (isPrincipalValidating) {
      return AuthenticateState.LOADING;
    }
    for (const item of auth) {
      if (!hasAuthority(item)) {
        return AuthenticateState.FORBIDDEN;
      }
    }
    for (const item of role) {
      if (!hasRole(item)) {
        return AuthenticateState.FORBIDDEN;
      }
    }

    return AuthenticateState.OK;
  };
};
