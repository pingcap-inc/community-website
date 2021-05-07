import { api } from '@tidb-community/datasource';
import { useAsyncData } from './api';

export const useMe = (prefetchedMeResp) => {
  const fetchMeData = () =>
    api
      .me()
      .then((res) => res.data)
      .catch(() => undefined);
  const { data: meData, reload } = useAsyncData(fetchMeData, [], prefetchedMeResp?.data);

  return {
    meData,
    reload,
  };
};
