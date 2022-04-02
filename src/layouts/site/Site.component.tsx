import { Footer, Header } from '@pingcap-inc/tidb-community-site-components';
import { FC, PropsWithChildren } from 'react';
import * as Styled from './site.styled';
import ActivityBanner from '~/layouts/site/ActivityBanner.component';

interface SiteLayoutProps {
  MainWrapper?: FC;
  backgroundColor?: string;
}

const SiteLayout = ({ MainWrapper = Styled.Main, backgroundColor, children }: PropsWithChildren<SiteLayoutProps>) => {
  return (
    <Styled.Container style={{ backgroundColor }}>
      <ActivityBanner />
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer
        copyright="©2021 TiDB Community"
        icp="京ICP备16046278号-7"
        icpUrl="https://beian.miit.gov.cn"
        number={
          (
            <span>
              <img src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/beian.png`} alt="beian" />
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
