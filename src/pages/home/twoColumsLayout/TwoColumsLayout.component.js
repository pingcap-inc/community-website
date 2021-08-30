import React from 'react';
import { Row } from 'antd';

import * as Styled from './twoColumsLayout.styled';

const TwoColumnsLayout = ({ className, title, leftPanel, rightPanel, reverseOnSmallScreen }) => {
  const panelProps = {
    $reverseOnSmallScreen: reverseOnSmallScreen,
  };

  return (
    <Styled.Content className={className}>
      <Styled.Title>{title}</Styled.Title>
      <Row justify="space-between">
        <Styled.LeftPanel {...panelProps}>{leftPanel}</Styled.LeftPanel>
        <Styled.RightPanel {...panelProps}>{rightPanel}</Styled.RightPanel>
      </Row>
    </Styled.Content>
  );
};

export default TwoColumnsLayout;
