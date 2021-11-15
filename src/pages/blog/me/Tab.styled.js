import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Tab = styled.div`
  display: flex;
  padding: 1rem 0;
`;

export const TabItem = styled.div`
  cursor: pointer;
  margin: 0 0.5rem;
  color: ${(props) => (props.selected ? colors.T7 : '')};
  border-bottom: ${(props) => (props.selected ? `4px solid ${colors.T7}` : 'none')};
`;
