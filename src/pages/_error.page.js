import React from 'react';

import ErrorPage from 'components/errorPage';

const Error = (props) => <ErrorPage {...props} />;

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
