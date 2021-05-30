import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import 'antd/dist/antd.css';
import PageRouter from './router';
import createAppGlobalStyle from '@tidb-community/ui/globalStyle';

const GlobalStyle = createAppGlobalStyle();

ReactDOM.render(
  <>
    <GlobalStyle />
    <PageRouter />
  </>,
  document.getElementById('app')
);
