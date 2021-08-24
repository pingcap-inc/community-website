import React from 'react';
import { Row } from 'antd';

import * as Styled from './twoColumsLayout.styled';

const TwoColumnsLayout = ({ className, title, leftPanel, rightPanel }) => (
  <Styled.Content className={className}>
    <Styled.Title>{title}</Styled.Title>
    <Row justify="space-between">
      <Styled.LeftPanel>{leftPanel}</Styled.LeftPanel>
      <Styled.RightPanel>{rightPanel}</Styled.RightPanel>
    </Row>
  </Styled.Content>
);

export default TwoColumnsLayout;
