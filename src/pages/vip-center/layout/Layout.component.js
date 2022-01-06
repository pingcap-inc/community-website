import React, { useEffect, useContext } from 'react';
import { Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Sidebar from './menu';
import { AuthContext } from '~/context';
import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';

const Layout = ({ children }) => {
  const { setIsAuthRequired } = useContext(AuthContext);

  useEffect(() => {
    setIsAuthRequired(true);
    return () => setIsAuthRequired(false);
  }, [setIsAuthRequired]);

  return (
    <>
      <CoreLayout MainWrapper={Styled.Wrapper}>
        <CommunityHead title="会员中心" />
        <Styled.Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={8} md={6}>
              <Sidebar />
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

export default Layout;
