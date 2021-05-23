import 'antd/dist/antd.css';
import * as R from 'ramda';
import React, { useEffect, useState } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { api, useApiErrorListener } from '@tidb-community/datasource';
import { constants, createAppGlobalStyle, utils } from '@tidb-community/ui';
import { message } from 'antd';
import { withLayouts } from '@tidb-community/common';

import 'components/Button/Button.scss';
import 'components/Container/Container.scss';
import 'styles/globals.css';
import ErrorPage from './_error.page';
import { MeContext, NavContext } from 'context';

// FIXME: It is a temporary fix and the auth issue will be thoroughly handled in CPT-183
const REG_AUTH_PATH = /https?:\/\/([^/]+)\/(?:account|orgs)\//;
const loginUrl = 'https://accounts.pingcap.com/login';
const logoutUrl = 'https://accounts.pingcap.com/logout';
const homeUrl = 'https://tidb.io/';

const doLogin = (redirectUrl) => {
  window.open(`${loginUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? window.location.href)}`, '_top');
};

const doLogout = (redirectUrl) => {
  redirectUrl = redirectUrl ?? window.location.href;
  let url;
  // do not redirect back to needs-login pages
  if (REG_AUTH_PATH.test(redirectUrl)) {
    if (!/^http/.test(homeUrl)) {
      url = `${window.location.protocol}//${window.location.hostname}${
        window.location.port ? `:${window.location.port}` : ''
      }${homeUrl}`;
    } else {
      url = homeUrl;
    }
  } else {
    url = redirectUrl;
  }
  window.open(`${logoutUrl}?redirect_to=${encodeURIComponent(url)}`, '_top');
};

const GlobalStyle = createAppGlobalStyle();

const fetcher = (path, params) => {
  // SWR shallowly compares the arguments on every render, and triggers revalidation
  // if any of them has changed. Thus, if you'd like to pass an object as params to
  // the API call, you may use JSON.stringify to the object params to a string value.
  // Read more: https://swr.vercel.app/docs/arguments#passing-objects
  try {
    params = JSON.parse(params);
  } catch (err) {}

  return R.path(path.split('.'), api)(params);
};

const App = ({ Component, pageProps, router }) => {
  const [errorStatus, setErrorStatus] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useApiErrorListener((err) => {
    if (!err.status) {
      message.error(utils.errors.getErrorMessage(err));
      return;
    }

    const { status, statusText, data } = err;
    const errorMsg = data?.detail || statusText;

    if (status === 401) {
      // TODO: jump to login page
    } else if ([403, 404].includes(status)) {
      setErrorStatus(status);
      setErrorMsg(errorMsg);
    } else {
      message.error(`${errorMsg}`, 5);
    }
  });

  useEffect(() => {
    document.body.classList.add(constants.appClassName);
  }, []);

  useEffect(() => {
    setErrorStatus();
    setErrorMsg();
  }, [router.pathname]);

  const {
    data: meResp,
    mutate: mutateMe,
    isValidating: isMeValidating,
  } = useSWR('me', fetcher, {
    revalidateOnFocus: false,
  });
  const meData = meResp?.data;

  if (errorStatus) {
    return <ErrorPage statusCode={errorStatus} errorMsg={errorMsg} />;
  }

  const WrappedComponent = withLayouts(Component);

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
      }}
    >
      <GlobalStyle />
      <NavContext.Provider value={{ login: doLogin, logout: doLogout }}>
        <MeContext.Provider value={{ meData, mutateMe, isMeValidating }}>
          <WrappedComponent {...pageProps} />
        </MeContext.Provider>
      </NavContext.Provider>
    </SWRConfig>
  );
};

export default App;
