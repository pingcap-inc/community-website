import React from 'react';

import * as Styled from './layout.styled';
import { CoreLayout } from '~/layouts';

const Layout = ({ children }) => {
  return (
    <CoreLayout hasMargin>
      <Styled.Container>{children}</Styled.Container>
    </CoreLayout>
  );
};

export default Layout;
