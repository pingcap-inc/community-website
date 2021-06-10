import 'antd/dist/antd.css';
import * as R from 'ramda';
import React, { useEffect, useState } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { api, useApiErrorListener } from '@tidb-community/datasource';
import { constants, createAppGlobalStyle, utils } from '@tidb-community/ui';
import { message } from 'antd';
import { withLayout } from '@tidb-community/common';

import '~/components/Button/Button.scss';
import '~/components/Container/Container.scss';
import '~/styles/globals.css';
import ErrorPage from './_error.page';
import { authContext, AuthContext, MeContext } from '~/context';
import { isEmptyOrNil } from '~/utils/common.utils';

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

    if ([403, 404].includes(status)) {
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
    error: meError,
    isValidating: isMeValidating,
    mutate: mutateMe,
  } = useSWR('me', fetcher, {
    revalidateOnFocus: false,
  });

  const meData = meResp?.data;

  authContext.isAnonymous = !!meError;
  authContext.isLoggedIn = !isEmptyOrNil(meData);

  if (errorStatus) {
    return <ErrorPage statusCode={errorStatus} errorMsg={errorMsg} />;
  }

  const WrappedComponent = withLayout(Component);

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
      }}
    >
      <GlobalStyle />
      <AuthContext.Provider value={authContext}>
        <MeContext.Provider value={{ meData, mutateMe, isMeValidating }}>
          <WrappedComponent {...pageProps} />
        </MeContext.Provider>
      </AuthContext.Provider>
    </SWRConfig>
  );
};

export default App;
