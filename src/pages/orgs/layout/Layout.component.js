import * as R from 'ramda';
import React, { useMemo } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import * as Styled from './layout.styled';
import Banner from './banner';
import Tabs from './tabs';
import { CoreLayout } from 'layouts';

const Layout = ({ children }) => {
  const router = useRouter();

  const routerQuery = useMemo(() => ({ slug: router.query.slug }), [router.query.slug]);

  const { data, isValidating } = useSWR(['orgs.org.info', routerQuery]);
  const bannerProps = {
    ...R.pipe(R.propOr({}, 'data'), R.pick(['introduction', 'logo', 'name']))(data),
    isLoading: !data && isValidating,
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
