import * as R from 'ramda';
import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import * as Styled from './layout.styled';
import Banner from './banner';
import { CoreLayout } from 'layouts';

const Layout = ({ children }) => {
  const router = useRouter();
  const { data } = useSWR(['orgs.org.info', router.query]);
  const bannerProps = R.pipe(R.propOr({}, 'data'), R.pick(['introduction', 'logo', 'name']))(data);

  return (
    <CoreLayout domain="tidb.io" hasMargin>
      <Banner {...bannerProps} />
      <Styled.Container>{children}</Styled.Container>
    </CoreLayout>
  );
};

export default Layout;
