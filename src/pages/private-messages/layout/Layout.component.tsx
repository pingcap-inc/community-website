import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Menu from './menu';
import { AuthContext, MeContext } from '~/context';
import { SiteLayout } from '~/layouts';
import useSWRInfinite from 'swr/infinite';
import { fetcher } from '~/api';
import { NotificationType, PrivateMessages } from '~/api/asktug';
import {} from '@pingcap-inc/tidb-community-site-components';

const Layout: React.FC = ({ children }) => {
  const { setIsAuthRequired } = useContext(AuthContext);
  const { meData } = useContext(MeContext);

  useEffect(() => {
    setIsAuthRequired(true);
    return () => setIsAuthRequired(false);
  }, [setIsAuthRequired]);

  const { data, mutate, size, setSize, isValidating } = useSWRInfinite<PrivateMessages>(
    (n) => (meData.username ? ['asktug.getPrivateMessages', { username: meData.username }] : null),
    { fetcher }
  );

  return (
    <>
      <SiteLayout>
        <Styled.Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={8} md={6}>
              <Menu />
            </Col>
            <Col xs={24} sm={16} md={18}>
              <Styled.Main>{children}</Styled.Main>
            </Col>
          </Row>
        </Styled.Container>
      </SiteLayout>
    </>
  );
};

export default Layout;
