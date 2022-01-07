import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Tab = styled.div`
  display: flex;
`;

export const TabItem = styled.a`
  display: block;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  border-bottom: 4px solid rgba(0, 0, 0, 0);
  border-bottom-color: ${(props) => (props.selected ? colors.B1 : `rgba(0,0,0,0)`)};
  color: ${(props) => (props.selected ? colors.B1 : `black`)};
`;
