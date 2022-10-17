import React from 'react';
import {Col, Row} from 'antd';

import * as Styled from './layout.styled';
import Menu from './menu';
import {CoreLayout} from '~/layouts';
import {useAccount} from "~/hooks/account";
import {PageLoader} from "~/components";

const Layout = ({ children, title }) => {
  const account = useAccount()
  
  return (
    <>
      <CoreLayout hasMargin>
        <Styled.Container>
          {account.isValidating ? (
            <PageLoader />
          ): (
            <Row gutter={[32, 32]}>
              <Col xs={24} sm={8} md={6}>
                <Menu />
              </Col>
              <Col xs={24} sm={16} md={18}>
                <Styled.Main>
                  <Styled.Title>{title}</Styled.Title>
                  <Styled.Content>{children}</Styled.Content>
                </Styled.Main>
              </Col>
            </Row>
          )}
        </Styled.Container>
      </CoreLayout>
    </>
  );
};

export default Layout;
