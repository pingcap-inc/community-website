import styled from 'styled-components';
import { Col, Row } from 'antd';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
`;

export const Content = styled(Row).attrs({
  gutter: [64, 32],
})`
  margin: 4rem auto;
`;

export const Panel = styled(Col).attrs({
  md: 12,
  sm: 24,
})``;
