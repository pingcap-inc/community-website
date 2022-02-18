import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Tab = styled.div`
  display: flex;
`;

export const TabItem = styled.div`
  cursor: pointer;
  margin: 0 0.5rem;
  color: ${(props) => (props.selected ? colors.B1 : '')};
  border-bottom: ${(props) => (props.selected ? `4px solid ${colors.B1}` : 'none')};
`;
