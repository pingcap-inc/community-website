import * as R from 'ramda';
import { api } from '@tidb-community/datasource';

export const fetcher = (path, params) => {
  // SWR shallowly compares the arguments on every render, and triggers revalidation
  // if any of them has changed. Thus, if you'd like to pass an object as params to
  // the API call, you may use JSON.stringify to the object params to a string value.
  // Read more: https://swr.vercel.app/docs/arguments#passing-objects
  try {
    params = JSON.parse(params);
  } catch (err) {}

  return R.path(path.split('.'), api)(params);
};

// baseURL mapping please refer to
// https://internal.pingcap.net/jira/browse/CP-82
export const handleBaseUrlMapping = (baseURL) => {
  if (baseURL) {
    api.client.defaults.baseURL = baseURL;
    return;
  }

  baseURL = api.client.defaults.baseURL;

  // Mock APIs will be skipped.
  if (baseURL !== 'http://localhost:4000') {
    const { host, origin } = window.location;

    if (host === 'asktug.com') {
      baseURL = 'https://asktug.com/_/sso/api';
    } else if (host === 'dev-asktug.wangdi.ink') {
      baseURL = 'https://dev-asktug.wangdi.ink/_/sso/api';
    } else if (
      ['community-preview.tidb.io', 'dev-accounts.pingcap.com', 'accounts.pingcap.com', 'tidb.io'].includes(host)
    ) {
      baseURL = `${origin}/api`;
    }
  }

  api.client.defaults.baseURL = baseURL;
};

export const genStorageKey = (name) => `__tidb-${name}`;
