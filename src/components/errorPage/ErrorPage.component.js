import * as R from 'ramda';
import React from 'react';

import * as Styled from './errorPage.styled';
import Svg403 from './403.svg';
import Svg404 from './404.svg';
import Svg500 from './500.svg';
import { CoreLayout } from 'layouts';

const icons = {
  403: Svg403,
  404: Svg404,
  500: Svg500,
};

const ErrorPage = ({ statusCode }) => {
  const Icon = R.propOr(icons[500], statusCode)(icons);

  return (
    <CoreLayout MainWrapper={Styled.Container}>
      <Styled.IconWrapper>
        <Icon />
      </Styled.IconWrapper>
      ErrorPage: {statusCode}
    </CoreLayout>
  );
};

export default ErrorPage;
