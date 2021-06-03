import React from 'react';
import ReactDOM from 'react-dom';
import { HeadProvider } from 'react-head';

import './app.css';
import 'antd/dist/antd.css';
import PageRouter from './router';
import createAppGlobalStyle from '@tidb-community/ui/globalStyle';

const GlobalStyle = createAppGlobalStyle();

ReactDOM.render(
  <HeadProvider>
    <GlobalStyle />
    <PageRouter />
  </HeadProvider>,
  document.getElementById('app')
);
