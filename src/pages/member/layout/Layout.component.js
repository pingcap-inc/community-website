import React from 'react';
import { Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Sidebar from './menu';
import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';
import { useIsSmallScreen } from '~/hooks';
import { useRequestLoggedIn, withAuthentication } from '~/utils/auth.utils';

const Layout = ({ children }) => {
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <>
      <CoreLayout MainWrapper={Styled.Wrapper}>
        <CommunityHead
          title="会员中心"
          description="欢迎来到会员中心！来这里查看升级小攻略，获取更多积分和经验，解锁更高级的荣誉成就！"
        />
        <Styled.Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={8} md={6}>
              <Sidebar isMobile={isSmallScreen} />
            </Col>
            <Col xs={24} sm={16} md={18}>
              <Styled.Main>{children}</Styled.Main>
            </Col>
          </Row>
        </Styled.Container>
      </CoreLayout>
    </>
  );
};

Layout.displayName = 'MemberLayout';
Layout.useAuthenticated = useRequestLoggedIn;

export default withAuthentication(Layout);
