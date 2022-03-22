import React from 'react';
import { Row } from 'antd';

import * as Styled from './twoColumnsSection.styled';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
  $reverseOnSmallScreen?: boolean;
}

const TwoColumnsSection = (props: IProps) => {
  const { title, leftPanel, rightPanel, $reverseOnSmallScreen, ...rest } = props;
  const panelProps = {
    $reverseOnSmallScreen,
  };

  return (
    <Styled.Content {...rest}>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Row justify="space-between">
        <Styled.LeftPanel {...panelProps}>{leftPanel}</Styled.LeftPanel>
        <Styled.RightPanel {...panelProps}>{rightPanel}</Styled.RightPanel>
      </Row>
    </Styled.Content>
  );
};

export default TwoColumnsSection;
