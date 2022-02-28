import { useCallback, useContext, useMemo } from 'react';
import { api } from '@tidb-community/datasource';
import useSWR from 'swr';
import { MeContext } from '~/context';

const usePrincipalSsr = () => {
  return {
    loading: false,
    id: undefined,
    authorities: [],
    roles: [],
    hasAuthority: () => false,
    hasRole: () => false,
    isAuthor: () => false,
    isLogin: false,
  };
};

const UNAUTHORIZED = {
  id: undefined,
  roles: [],
  authorities: [],
};

const usePrincipalBrowser = () => {
  const { meData, isMeValidating } = useContext(MeContext);
  const { data: principal } = useSWR([meData?.username], {
    fetcher: () => api.blog.common.principal(),
  });

  const { id, roles, authorities } = principal ?? UNAUTHORIZED;

  const hasRole = useCallback(
    (auth) => {
      return roles.indexOf(auth) >= 0;
    },
    [roles]
  );

  const hasAuthority = useCallback(
    (auth) => {
      return authorities.indexOf(auth) >= 0;
    },
    [authorities]
  );

  const isAuthor = useCallback(
    (target) => {
      return id !== undefined && target?.author?.id === id;
    },
    [id]
  );

  const isLogin = useMemo(() => {
    return typeof id === 'number';
  }, [id]);

  // TODO: some thing not correct with principal.isValidating
  const loading = useMemo(() => {
    if (meData) {
      return isMeValidating || typeof principal?.id === 'undefined';
    } else {
      return isMeValidating;
    }
  }, [meData, principal, isMeValidating]);

  return { roles, authorities, hasRole, hasAuthority, isAuthor, isLogin, id, loading };
};

export const usePrincipal = typeof window === 'undefined' ? usePrincipalSsr : usePrincipalBrowser;
