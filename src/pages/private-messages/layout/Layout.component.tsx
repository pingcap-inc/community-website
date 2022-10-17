import React, { useContext } from 'react';
import { Button, Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Menu from './menu';
import { AuthContext } from '~/context';
import { CoreLayout } from '~/layouts';
import { MailOutlined } from '@ant-design/icons';

import { useRouter } from 'next/router';
import { CommunityHead } from '~/components';

const Layout: React.FC = ({ children }) => {
  const { isAnonymous, login } = useContext(AuthContext);
  const router = useRouter();

  if (isAnonymous) {
    login();
    return null;
  }
  return (
    <>
      <CoreLayout>
        <CommunityHead title="私信" />
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
      </CoreLayout>
    </>
  );
};

export default Layout;
