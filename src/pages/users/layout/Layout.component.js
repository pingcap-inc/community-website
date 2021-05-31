import React from 'react';
import { Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Menu from './menu';
import { CommunityHead } from '~/components/head';
import { CoreLayout } from '~/layouts';

const Layout = ({ children, title }) => {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  return (
    <>
      <CommunityHead title={title}>
        <script src={`https://www.recaptcha.net/recaptcha/api.js?render=${recaptchaKey}`} />
      </CommunityHead>

      <CoreLayout domain="tidb.io" hasMargin>
        <Styled.Container>
          <Row gutter={32}>
            <Col xs={12} sm={8} md={6}>
              <Menu />
            </Col>
            <Col xs={12} sm={16} md={18}>
              <Styled.Main>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Content>{children}</Styled.Content>
              </Styled.Main>
            </Col>
          </Row>
        </Styled.Container>
      </CoreLayout>
    </>
  );
};

export default Layout;
