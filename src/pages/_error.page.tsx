import React from 'react';
import {createAppGlobalStyle} from '@tidb-community/ui';

import {ErrorPage} from '~/components';

const GlobalStyle = createAppGlobalStyle();

const Error = (props) => {
  return (
    <>
      <GlobalStyle />
      <ErrorPage {...props} />
    </>
  );
};

export default Error;
