import styled from 'styled-components';
import { Styled } from '@tidb-community/ui';
import { Row, Col } from 'antd';

const { Content } = Styled;
export { Content };

export const Breadcrumb = styled.div`
  padding-top: 2rem;
`;

export const List = styled(Row).attrs({
  gutter: [24, 24],
})`
  padding: 2rem 0;
`;

export const Item = styled(Col).attrs({
  xs: 24,
  md: 12,
  lg: 6,
})``;
