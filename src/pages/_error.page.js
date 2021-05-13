import React, { useEffect, useState } from 'react';
import { createAppGlobalStyle } from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';

import ErrorPage from 'components/errorPage';
import { MeContext } from 'context';

const GlobalStyle = createAppGlobalStyle();

const Error = (props) => {
  const [meData, setMeData] = useState(undefined);

  useEffect(() => {
    api
      .me()
      .then(({ data }) => setMeData(data))
      .catch(() => {});
  });

  return (
    <>
      <GlobalStyle />
      <MeContext.Provider value={{ meData }}>
        <ErrorPage {...props} />
      </MeContext.Provider>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
