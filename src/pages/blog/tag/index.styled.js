import styled from 'styled-components';
import { Row, Col } from 'antd';

export const List = styled(Row).attrs({
  gutter: [24, 24],
})`
  padding: 2rem 0;
`;

export const Item = styled(Col).attrs({
  span: 6,
})``;
