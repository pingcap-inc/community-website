import 'antd/dist/antd.css';
import * as R from 'ramda';
import React, { useEffect, useState } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { api, useApiErrorListener } from '@tidb-community/datasource';
import { constants, createAppGlobalStyle, utils } from '@tidb-community/ui';
import { message } from 'antd';

import 'components/Button/Button.scss';
import 'components/Container/Container.scss';
import 'styles/globals.css';
import ErrorPage from './_error.page';
import { MeContext } from 'context';

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

  const { data: meResp, mutate: mutateMe, isValidating: isMeValidating } = useSWR('me', fetcher);
  const meData = meResp?.data;

  if (errorStatus) return <ErrorPage statusCode={errorStatus} errorMsg={errorMsg} />;

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <GlobalStyle />
      <MeContext.Provider value={{ meData, mutateMe, isMeValidating }}>
        <Component {...pageProps} />
      </MeContext.Provider>
    </SWRConfig>
  );
};

export default App;
