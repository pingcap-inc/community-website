import 'antd/dist/antd.css';
import * as R from 'ramda';
import Error from 'next/error';
import React, { useEffect, useState } from 'react';
import { SWRConfig } from 'swr';
import { api, useApiErrorListener } from '@tidb-community/datasource';
import { constants, createAppGlobalStyle } from '@tidb-community/ui';
import { message } from 'antd';

import 'components/Button/Button.scss';
import 'components/Container/Container.scss';
import 'styles/globals.css';
import { useMe } from '../hooks/me';
import { MeContext } from '../context';

const GlobalStyle = createAppGlobalStyle();

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    document.body.classList.add(constants.appClassName);
  }, []);

  const [has403, setHas403] = useState(false);

  useApiErrorListener(({ status, statusText, data }) => {
    if (status === 401) {
      // TODO: jump to login page
    } else if (status === 403) {
      setHas403(true);
    } else {
      message.error(`${data?.detail || statusText}`, 5);
    }
  });

  const { meData, reload } = useMe(pageProps.meResp)

  if (has403) return <Error statusCode={403} />;

  return (
    <SWRConfig
      value={{
        fetcher: (path, params) => {
          // SWR shallowly compares the arguments on every render, and triggers revalidation
          // if any of them has changed. Thus, if you'd like to pass an object as params to
          // the API call, you may use JSON.stringify to the object params to a string value.
          // Read more: https://swr.vercel.app/docs/arguments#passing-objects
          try {
            params = JSON.parse(params);
          } catch (err) {}

          return R.path(path.split('.'), api)(params);
        },
      }}
    >
      <GlobalStyle />
      <MeContext.Provider value={{meData, reload}}>
        <Component {...pageProps} />
      </MeContext.Provider>
    </SWRConfig>
  );
};

export default App;
