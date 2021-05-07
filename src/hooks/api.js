import { useCallback, useEffect, useState } from 'react';

export const useAsyncData = (fetcher, params, prefetchedData) => {
  const [data, setData] = useState(prefetchedData);

  const reload = useCallback(async () => {
    setData(await fetcher(...params));
  }, [fetcher, params]);

  useEffect(() => {
    if (!prefetchedData) {
      reload().catch();
    }
  }, [reload, prefetchedData, params]);

  return {
    data,
    reload,
  };
};
