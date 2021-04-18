import React from 'react';
import { constants, createAppGlobalStyle } from '@tidb-community/ui';

import 'components/Button/Button.scss';
import 'components/Container/Container.scss';
import 'styles/globals.css';

const GlobalStyle = createAppGlobalStyle();

const App = ({ Component, pageProps }) => (
  <div className={constants.appClassName}>
    <GlobalStyle />
    <Component {...pageProps} />
  </div>
);

export default App;
