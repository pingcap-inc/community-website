import React, { useContext, useEffect } from 'react';
import { Button, Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Menu from './menu';
import { AuthContext } from '~/context';
import { SiteLayout } from '~/layouts';
import { MailOutlined } from '@ant-design/icons';

import { useRouter } from 'next/router';
const Layout: React.FC = ({ children }) => {
  const { setIsAuthRequired } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setIsAuthRequired(true);
    return () => setIsAuthRequired(false);
  }, [setIsAuthRequired]);

  return (
    <>
      <SiteLayout>
        <Styled.Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={8} md={6}>
              <Row>
                <Button
                  type="primary"
                  style={{ width: '100%' }}
                  icon={<MailOutlined />}
                  onClick={() => router.push('https://asktug.com/new-message')}
                >
                  写新私信
                </Button>
              </Row>
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
