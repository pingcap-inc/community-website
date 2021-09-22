import React from 'react';
import { Row } from 'antd';

import * as Styled from './twoColumnsSection.styled';

const TwoColumnsSection = ({ className, title, leftPanel, rightPanel, reverseOnSmallScreen }) => {
  const panelProps = {
    $reverseOnSmallScreen: reverseOnSmallScreen,
  };

  return (
    <Styled.Content className={className}>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Row justify="space-between">
        <Styled.LeftPanel {...panelProps}>{leftPanel}</Styled.LeftPanel>
        <Styled.RightPanel {...panelProps}>{rightPanel}</Styled.RightPanel>
      </Row>
    </Styled.Content>
  );
};

export default TwoColumnsSection;
