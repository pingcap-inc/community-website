import * as React from 'react';

import * as Styled from './index.styled';
import TitleImage from './title.png';
import BannerImage from './banner_image.png';
import qrCodeImage from './qrcode.png';
import { askCompetitionUrl, signUpFormUrl } from '../data';
import { Tooltip } from 'antd';
import Image from 'next/image';
import ArrowLink from '~/components/ArrowLink';
import Anchor from '~/components/Anchor';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { children, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Header>
        <Styled.HeaderStart>
          <Styled.HeaderStartTitle>
            {/*<img src={titleImage} alt={seo.title} />*/}
            <img {...TitleImage} alt={'TiDB Hackathon 2022'} />
          </Styled.HeaderStartTitle>
          <Styled.HeaderStartImage>
            <img {...BannerImage} alt={''} />
          </Styled.HeaderStartImage>
          <Styled.HeaderStartButton>
            <Styled.HeaderStartButtonSignUp href={signUpFormUrl}>立即报名</Styled.HeaderStartButtonSignUp>
            <Tooltip
              placement="bottomLeft"
              color={'#FFF'}
              trigger={['click', 'focus']}
              title={<Image {...qrCodeImage} />}
            >
              <Styled.HeaderStartButtonJoinGroup>
                <ArrowLink>加入官方群</ArrowLink>
              </Styled.HeaderStartButtonJoinGroup>
            </Tooltip>
            <Styled.HeaderStartButtonAsk>
              <ArrowLink>
                <Anchor href={askCompetitionUrl}>我要咨询</Anchor>
              </ArrowLink>
            </Styled.HeaderStartButtonAsk>
          </Styled.HeaderStartButton>
          <Styled.HeaderStartNav>
            <Styled.HeaderStartNavItem href={'#intro'}>{'介  绍'}</Styled.HeaderStartNavItem>
            <Styled.HeaderStartNavItem href={'#prize'}>{'奖  项'}</Styled.HeaderStartNavItem>
            <Styled.HeaderStartNavItem href={'#judges'}>{'评  委'}</Styled.HeaderStartNavItem>
            <Styled.HeaderStartNavItem href={'#faq'}>常见问题</Styled.HeaderStartNavItem>
            <Styled.HeaderStartNavItem href={'#partner'}>合作伙伴</Styled.HeaderStartNavItem>
          </Styled.HeaderStartNav>
        </Styled.HeaderStart>
        <Styled.HeaderEnd>
          {/*<img src={bannerImage} alt="" />*/}
          <img {...BannerImage} alt={''} />
        </Styled.HeaderEnd>
      </Styled.Header>
    </Styled.Container>
  );
};

export default Header;
