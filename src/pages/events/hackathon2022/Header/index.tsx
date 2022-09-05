import * as React from 'react';
import { Tooltip } from 'antd';
import Image from 'next/image';

import ArrowLink from '~/components/ArrowLink';
import Anchor from '~/components/Anchor';
import * as Styled from './index.styled';
import cubeImage from './cube.png';
import titleImage from './title.png';
import bannerImage from './banner_image.png';
import qrCodeImage from './qrcode.png';
import { askCompetitionUrl, signUpFormUrl } from '../data';

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
            <div style={{
              paddingLeft: '20%',
            }}>
              <Image {...cubeImage} alt={''} />
            </div>
            <Image {...titleImage} alt={'TiDB Hackathon 2022'} />
          </Styled.HeaderStartTitle>
          <Styled.HeaderStartImage>
            <Image {...bannerImage} alt={''} />
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
          <Image {...bannerImage} alt={''} />
        </Styled.HeaderEnd>
      </Styled.Header>
    </Styled.Container>
  );
};

export default Header;
