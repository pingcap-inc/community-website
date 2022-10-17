import React from 'react';
import type { FC } from 'react';
import Image from 'next/image'
import { Footer, Header } from '@pingcap-inc/tidb-community-site-components';

import * as Styled from './site.styled';
import beianIconImage from './beian.png'
import {ActivityBanner} from "../../../packages/ui";
import * as bannerData from "~/data/banner";

export interface IProps {
  MainWrapper?: FC;
  backgroundColor?: string;
}

const CoreLayout: FC<IProps> = ({ MainWrapper = Styled.Main, backgroundColor, children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <Styled.Container style={{ backgroundColor }}>
      <ActivityBannerComponent />
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer
        copyright={`©${currentYear} TiDB Community`}
        icp="京ICP备16046278号-7"
        icpUrl="https://beian.miit.gov.cn"
        number={
          (
            <span>
              <Image {...beianIconImage} alt="beian" />
              京公网安备 11010802039111号
            </span>
          ) as any
        }
        numberUrl="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802039111"
      />
    </Styled.Container>
  );
};

const ActivityBannerComponent = () => {
  return (
    <ActivityBanner
      // backgroundColor={'#2c2c2c'}
      style={{backgroundImage: 'linear-gradient(to right, #6E545B, #2C2C2C, #6E545B)'}}
      text={(
        <>
          <svg
            style={{fill: '#FFF'}}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8486"
            width="20"
            height="20"
          >
            <path
              d="M848 359.3H627.7L825.8 109c4.1-5.3 0.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3 0.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"
              p-id="8487"
            ></path>
          </svg>
          {bannerData.text}
        </>
      )}
      // backgroundImage={'https://tidb.net/images/activity/banner.svg'}
      // buttonImage={'https://tidb.net/images/activity/button.svg'}
      link={bannerData.link}
      onClick={undefined}
      // onClick={() => onNavClick({ link: 'https://tidb.net/blog', target: '_blank' })}
    />
  );
};

export default CoreLayout;
