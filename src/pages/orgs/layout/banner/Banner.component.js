import React from 'react';
import { Tabs } from 'antd';

import * as Styled from './banner.styled';
import VerifiedSVG from 'pages/orgs/verified.svg';

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

        <Styled.Tabs defaultActiveKey="1">
          <TabPane tab="成员" key="1"></TabPane>
        </Styled.Tabs>
      </Styled.Information>
    </Styled.Content>
  </Styled.Container>
);

export default Banner;
