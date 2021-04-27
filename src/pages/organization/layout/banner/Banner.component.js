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

        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1"></TabPane>
          <TabPane tab="Tab 2" key="2"></TabPane>
          <TabPane tab="Tab 3" key="3"></TabPane>
        </Tabs>
      </Styled.Information>
    </Styled.Content>
  </Styled.Container>
);

export default Banner;
