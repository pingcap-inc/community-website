import * as R from 'ramda';
import React from 'react';

import * as Styled from './layout.styled';
import Banner from './banner';
import data from 'pages/orgs/organization.data';
import { CoreLayout } from 'layouts';

const Layout = ({ children }) => {
  const bannerProps = R.pick(['description', 'logo', 'name'], data);

  return (
    <CoreLayout domain="tidb.io" hasMargin>
      <Banner {...bannerProps} />
      <Styled.Container>{children}</Styled.Container>
    </CoreLayout>
  );
};

export default Layout;
