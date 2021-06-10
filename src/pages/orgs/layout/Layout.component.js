import * as R from 'ramda';
import React, { useEffect, useContext } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import * as Styled from './layout.styled';
import Banner from './banner';
import Tabs from './tabs';
import { AuthContext } from '~/context';
import { CoreLayout } from '~/layouts';

const Layout = ({ children }) => {
  const router = useRouter();
  const { setIsAuthRequired } = useContext(AuthContext);

  useEffect(() => {
    setIsAuthRequired(true);
    return () => setIsAuthRequired(false);
  }, [setIsAuthRequired]);

  const { isReady, query } = router;
  const { data, error } = useSWR(isReady && ['orgs.org.info', query]);

  const bannerProps = {
    ...R.pipe(R.propOr({}, 'data'), R.pick(['introduction', 'logo', 'name']))(data),
    isLoading: !data && !error,
  };

  return (
    <CoreLayout domain="tidb.io" MainWrapper={Styled.Main}>
      <Banner {...bannerProps}>
        <Tabs slug={query.slug} />
      </Banner>
      <Styled.Container>{children}</Styled.Container>
    </CoreLayout>
  );
};

export default Layout;
