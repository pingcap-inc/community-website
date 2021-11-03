import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Container = styled.div``;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  cursor: pointer;
  margin: 0.5rem;
  color: ${(props) => (props.selected ? colors.T7 : '')};
  border-bottom: ${(props) => (props.selected ? `4px solid ${colors.T7}` : 'none')};
`;
