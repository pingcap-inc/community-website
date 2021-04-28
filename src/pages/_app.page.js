import 'antd/dist/antd.css';
import React from 'react';
import axios from 'axios';
import { SWRConfig } from 'swr';
import { api } from '@tidb-community/datasource';
import { constants, createAppGlobalStyle } from '@tidb-community/ui';
import { message } from 'antd';

import 'components/Button/Button.scss';
import 'components/Container/Container.scss';
import 'styles/globals.css';

api.initApi(({ status, statusText }) => {
  if (status === 401) {
    // TODO: jump to login page
  } else if (status === 403) {
    // TODO: forbidden
  } else {
    message.warn(`${status}: ${statusText}`, 1.5).then();
  }
});

const GlobalStyle = createAppGlobalStyle();

const App = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      fetcher: axios.get,
    }}
  >
    <div className={constants.appClassName}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  </SWRConfig>
);

export default App;
