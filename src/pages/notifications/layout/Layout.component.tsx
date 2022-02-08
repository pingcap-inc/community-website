import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { Col, Row } from 'antd';

import * as Styled from './layout.styled';
import Menu, { MenuProps } from './menu';
import { AuthContext } from '~/context';
import { SiteLayout } from '~/layouts';

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
      <SiteLayout>
        <Styled.Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={8} md={6}>
              <Menu {...menuProps} />
            </Col>
            <Col xs={24} sm={16} md={18}>
              <Styled.Main>
                <Styled.Content>{children}</Styled.Content>
              </Styled.Main>
            </Col>
          </Row>
        </Styled.Container>
      </SiteLayout>
    </>
  );
};

export default Layout;
