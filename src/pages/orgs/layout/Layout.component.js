import * as R from 'ramda';
import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import * as Styled from './layout.styled';
import Banner from './banner';
import Tabs from './tabs';
import { CoreLayout } from 'layouts';

const Layout = ({ children }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useSWR(['orgs.org.info', JSON.stringify({ slug })]);

  const bannerProps = {
    ...R.pipe(R.propOr({}, 'data'), R.pick(['introduction', 'logo', 'name']))(data),
    isLoading: !data,
  };

  return (
    <CoreLayout domain="tidb.io" MainWrapper={Styled.Main}>
      <Banner {...bannerProps}>
        <Tabs slug={data?.data?.slug} />
      </Banner>
      <Styled.Container>{children}</Styled.Container>
    </CoreLayout>
  );
};

export default Layout;
