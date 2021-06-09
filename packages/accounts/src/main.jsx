import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HeadProvider } from 'react-head';
import { createAppGlobalStyle } from '@tidb-community/ui';

import './sentry';
import './app.css';
import PageRouter from './router';

const GlobalStyle = createAppGlobalStyle();

ReactDOM.render(
  <HeadProvider>
    <GlobalStyle />
    <PageRouter />
  </HeadProvider>,
  document.getElementById('app')
);
