import NextHead from 'next/head';
import React, { useEffect, useContext } from 'react';
import { Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Menu from './menu';
import { AuthContext } from '~/context';
import { CoreLayout } from '~/layouts';

const Layout = ({ children, title }) => {
  const { setIsAuthRequired } = useContext(AuthContext);

  useEffect(() => {
    setIsAuthRequired(true);
    return () => setIsAuthRequired(false);
  }, [setIsAuthRequired]);

  return (
    <>
      <NextHead>
        <script src={`https://www.recaptcha.net/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`} />
      </NextHead>

      <CoreLayout domain="tidb.io" hasMargin>
        <Styled.Container>
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
        </Styled.Container>
      </CoreLayout>
    </>
  );
};

export default Layout;
