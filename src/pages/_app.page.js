import 'antd/dist/antd.css';
import * as R from 'ramda';
import React, { useEffect } from 'react';
import { SWRConfig } from 'swr';
import { api } from '@tidb-community/datasource';
import { constants, createAppGlobalStyle } from '@tidb-community/ui';
import { message } from 'antd';

import 'components/Button/Button.scss';
import 'components/Container/Container.scss';
import 'styles/globals.css';

const GlobalStyle = createAppGlobalStyle();

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    document.body.classList.add(constants.appClassName);

    api.events.addApiErrorListener(({ status, statusText, data }) => {
      if (status === 401) {
        // TODO: jump to login page
      } else {
        message.error(`${data?.detail || statusText}`, 5);
      }
    });

    return () => {
      api.events.removeApiErrorListener();
    };
  }, []);

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
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default App;
