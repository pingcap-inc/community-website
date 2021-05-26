import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import 'antd/dist/antd.css';
import { createAppGlobalStyle } from '@tidb-community/ui/create-global-styles';
import PageRouter from './router';

const GlobalStyles = createAppGlobalStyle();

ReactDOM.render(
  <>
    <GlobalStyles />
    <PageRouter />
  </>,
  document.getElementById('app')
);
