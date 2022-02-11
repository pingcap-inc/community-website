import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Tab = styled.div`
  display: flex;
  overflow: auto;
  margin-right: 1rem;
`;

export const TabItem = styled.a<{ selected?: boolean }>`
  border-bottom: 4px solid ${(props) => (props.selected ? colors.B1 : `rgba(0,0,0,0)`)};
  color: ${(props) => (props.selected ? colors.B1 : `black`)};
  display: block;
  padding: 0.25rem 0;
  margin-right: 1.5rem;
  white-space: nowrap;
`;
