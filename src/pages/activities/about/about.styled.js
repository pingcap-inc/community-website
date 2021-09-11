import styled from 'styled-components';
import { Col } from 'antd';
import { Styled, colors } from '@tidb-community/ui';

const { Content, Section, Title } = Styled;

export { Content, Title };

export const Container = styled(Section)`
  && {
    background: ${colors.M2};
  }
`;

export const LeftPanel = styled(Col).attrs({
  xs: { span: 24, order: 2 },
  md: { span: 12, order: 1 },
})`
  p {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const RightPanel = styled(Col).attrs({
  xs: { span: 24, order: 1 },
  md: { span: 12, order: 2 },
})``;
