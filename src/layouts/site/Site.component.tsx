import { Footer, Header } from '@pingcap-inc/tidb-community-site-components';
import { FC, PropsWithChildren } from 'react';
import { cdn } from '~/utils';
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
      <Footer
        copyright="©2021 TiDB Community"
        icp="京ICP备20022552号-6"
        icpUrl="https://beian.miit.gov.cn"
        number={
          (
            <span>
              <img src={cdn.getImageUrl(`/images/beian.png`)} alt="beian" />
              京公网安备 11010802039111号
            </span>
          ) as any
        }
        numberUrl="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802039111"
      />
    </Styled.Container>
  );
};

export default SiteLayout;
