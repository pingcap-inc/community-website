import { useCallback, useEffect, useMemo, useState } from 'react';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';

const storage = getStorage();

const KEY_ID = 'b.p.i';
const KEY_ROLES = 'b.p.r';
const KEY_AUTHORITIES = 'b.p.a';

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

const usePrincipalBrowser = () => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(() => Number(storage.getItem(KEY_ID)) || undefined);
  const [roles, setRoles] = useState(() => JSON.parse(storage.getItem(KEY_ROLES) || '[]'));
  const [authorities, setAuthorities] = useState(() => JSON.parse(storage.getItem(KEY_AUTHORITIES) || '[]'));

  useEffect(() => {
    api.blog.common
      .principal()
      .then(({ id, roles, authorities }) => {
        setId(id);
        setRoles(roles);
        setAuthorities(authorities);
        storage.setItem(KEY_ID, String(id));
        storage.setItem(KEY_ROLES, JSON.stringify(roles));
        storage.setItem(KEY_AUTHORITIES, JSON.stringify(authorities));
      })
      .catch((e) => {
        if (!e || !/^40[13]$/.test(e.status)) {
          return message.error(String(e?.data?.message ?? e?.message ?? e));
        } else {
          storage.removeItem(KEY_ID);
          storage.removeItem(KEY_ROLES);
          storage.removeItem(KEY_AUTHORITIES);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
      return id !== undefined && (target.authorId === id || target.author?.id === id);
    },
    [id]
  );

  const isLogin = useMemo(() => {
    return typeof id === 'number';
  }, [id]);

  return { roles, authorities, hasRole, hasAuthority, isAuthor, isLogin, id, loading };
};

export const usePrincipal = typeof window === 'undefined' ? usePrincipalSsr : usePrincipalBrowser;

/**
 *
 * @param storage {Storage | undefined}
 * @returns boolean
 */
function check(storage) {
  if (!storage) {
    return false;
  }
  const checkKey = '__check';
  storage.setItem(checkKey, 'ok');
  if (storage.getItem(checkKey) === 'ok') {
    storage.removeItem(checkKey);
    return true;
  } else {
    return false;
  }
}

/**
 * Returns sessionStorage or localStorage or a mock storage
 *
 * @returns Storage
 */
function getStorage() {
  if (typeof window !== 'undefined') {
    if (check(window.sessionStorage)) {
      return window.sessionStorage;
    }

    if (check(window.localStorage)) {
      return window.localStorage;
    }
  }

  let mockStorage = {};

  return {
    getItem(key) {
      return mockStorage[key];
    },
    setItem(key, value) {
      mockStorage[key] = String(value);
    },
    removeItem(key) {
      delete mockStorage[key];
    },
    key(index) {
      return Object.keys(mockStorage)[index];
    },
    get length() {
      return Object.keys(mockStorage).length;
    },
    clear() {
      mockStorage = {};
    },
  };
}
