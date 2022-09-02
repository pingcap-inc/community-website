import * as React from 'react';

import * as Styled from './index.styled';
import TitleImage from './title.svg';
import BannerImage from './banner_image.svg';
import qrCodeImage from './qrcode.png';
import { signUpFormUrl } from '../data';
import { Tooltip } from 'antd';
import Image from 'next/image';

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
            <TitleImage />
          </Styled.HeaderStartTitle>
          <Styled.HeaderStartButton>
            <Styled.HeaderStartButtonSignUp href={signUpFormUrl}>立即报名</Styled.HeaderStartButtonSignUp>
            <Tooltip placement="leftTop" color={'#FFF'} trigger={['click', 'focus']} title={<Image {...qrCodeImage} />}>
              <Styled.HeaderStartButtonJoinGroup>加入官方群</Styled.HeaderStartButtonJoinGroup>
            </Tooltip>
            <Styled.HeaderStartButtonAsk>我要咨询</Styled.HeaderStartButtonAsk>
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
          <BannerImage />
        </Styled.HeaderEnd>
      </Styled.Header>
    </Styled.Container>
  );
};

export default Header;
