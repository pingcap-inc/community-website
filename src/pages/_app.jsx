import 'antd/dist/antd.css';
import React from 'react';
import { createAppGlobalStyle } from '@pingcap/pingpac-ui';

import 'components/Button/Button.scss';
import 'components/Container/Container.scss';
import 'styles/globals.css';

const GlobalStyle = createAppGlobalStyle();

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
