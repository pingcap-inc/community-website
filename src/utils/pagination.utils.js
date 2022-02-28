import { useRouter } from 'next/router';
import { useCallback } from 'react';

const toNumber = (value, defaultValue) => {
  value = Number(value);
  return isNaN(value) ? defaultValue : value;
};

export const getPageQuery = (query, defaults = { page: 1, size: 20 }) => {
  const { page, size } = query;
  return {
    page: toNumber(page, defaults.page),
    size: toNumber(size, defaults.size),
  };
};

export const useRouterPage = () => {
  const router = useRouter();

  const onPageChange = useCallback(
    (page, pageSize) => {
      router
        .push({
          query: Object.assign({}, router.query, { page, size: pageSize }),
        })
        .then();
    },
    [router]
  );

  return { onPageChange };
};
