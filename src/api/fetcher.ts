import { Fetcher } from 'swr';
import * as api from './api';
import * as R from 'ramda';

const fetcher: Fetcher<any> = async (key: string, ...params: any[]) => {
  if (process.env.NEXT_PUBLIC_RUNTIME_ENV !== 'production') {
    console.debug('[api.v2] fetch', key, ...params);
  }

  try {
    const result = R.path(key.split('.'), api)(...params);
    if (process.env.NEXT_PUBLIC_RUNTIME_ENV !== 'production') {
      console.debug('[api.v2] fetch', key, ...params, ' => ', await result);
    }
    return result;
  } catch (e) {
    if (process.env.NEXT_PUBLIC_RUNTIME_ENV !== 'production') {
      console.error('[api.v2] fetch failed', key, ...params, e);
    }
    throw e;
  }
};

export default fetcher;
