import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Menu, { MenuProps } from './menu';
import { AuthContext } from '~/context';
import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LayoutProps extends MenuProps {}

const Layout = ({ children, ...menuProps }: PropsWithChildren<LayoutProps>) => {
  const { setIsAuthRequired } = useContext(AuthContext);

  useEffect(() => {
    setIsAuthRequired(true);
    return () => setIsAuthRequired(false);
  }, [setIsAuthRequired]);

  return (
    <>
      <CoreLayout>
        <CommunityHead title="消息中心" />
        <Styled.Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={8} md={6}>
              <Menu {...menuProps} />
            </Col>
            <Col xs={24} sm={16} md={18} style={{ height: '100%' }}>
              <Styled.Main>{children}</Styled.Main>
            </Col>
          </Row>
        </Styled.Container>
      </CoreLayout>
    </>
  );
};

export default Layout;
