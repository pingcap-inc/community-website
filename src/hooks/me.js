import { api } from '@tidb-community/datasource';
import { useAsyncData } from './api';

export const useMe = (prefetchedMeResp) => {
  const { data: meData, reload } = useAsyncData(() => api.me().then((res) => res.data), [], prefetchedMeResp.data);

  return {
    meData,
    reload,
  };
};
