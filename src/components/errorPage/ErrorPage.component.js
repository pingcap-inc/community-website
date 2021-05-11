import React from 'react';

import * as Styled from './errorPage.styled';
import { CoreLayout } from 'layouts';

const ErrorPage = ({ statusCode }) => {
  return (
    <CoreLayout>
      <Styled.Container>ErrorPage: {statusCode}</Styled.Container>;
    </CoreLayout>
  );
};

export default ErrorPage;
