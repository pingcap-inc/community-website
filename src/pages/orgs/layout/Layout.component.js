import * as R from 'ramda';
import React, { useEffect, useContext } from 'react';
import useSWR from 'swr';
import { QuestionOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
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

  const onGuideButtonClick = (e) => {
    window.open('https://asktug.com/t/topic/93405', '_blank').focus();
  };

  return (
    <CoreLayout domain="tidb.io" MainWrapper={Styled.Main}>
      <Banner {...bannerProps}>
        <Tabs slug={query.slug} />
      </Banner>

      <Styled.Container>{children}</Styled.Container>

      <Tooltip placement="left" title="查看操作指南">
        <Styled.GuidButton onClick={onGuideButtonClick}>
          <QuestionOutlined />
        </Styled.GuidButton>
      </Tooltip>
    </CoreLayout>
  );
};

export default Layout;
