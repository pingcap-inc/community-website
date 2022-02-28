import { Footer, Header } from '@pingcap-inc/tidb-community-site-components';
import { FC, PropsWithChildren } from 'react';
import * as Styled from './site.styled';

interface SiteLayoutProps {
  MainWrapper?: FC;
  backgroundColor?: string;
}

const SiteLayout = ({ MainWrapper = Styled.Main, backgroundColor, children }: PropsWithChildren<SiteLayoutProps>) => {
  return (
    <Styled.Container style={{ backgroundColor }}>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Styled.Container>
  );
};

export default SiteLayout;
