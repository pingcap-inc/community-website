import React from 'react';
import { Tabs } from 'antd';

import * as Styled from './banner.styled';
import VerifiedSVG from 'pages/organization/verified.svg';

const { TabPane } = Tabs;

const Banner = ({ description, logo, name }) => (
  <Styled.Container>
    <Styled.Content>
      <Styled.Information>
        <Styled.ImageWrapper>
          <img alt={name} src={logo} />
        </Styled.ImageWrapper>
        <Styled.TextWrapper>
          <Styled.Name>
            {name}
            <VerifiedSVG />
          </Styled.Name>
          <Styled.Description>{description}</Styled.Description>
        </Styled.TextWrapper>

        <Styled.Tabs defaultActiveKey="2">
          <TabPane tab="首页" key="1"></TabPane>
          <TabPane tab="成员" key="2"></TabPane>
          <TabPane tab="设置" key="3"></TabPane>
        </Styled.Tabs>
      </Styled.Information>
    </Styled.Content>
  </Styled.Container>
);

export default Banner;
