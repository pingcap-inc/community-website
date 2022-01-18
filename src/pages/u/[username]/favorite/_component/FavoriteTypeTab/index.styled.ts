import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Tab = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const TabItem = styled.a`
  display: block;
  padding: 0.25rem 2rem;
  margin-right: 1rem;
  background-color: ${({ selected }) => (selected ? colors.M1 : colors.C2)};
  color: ${({ selected }) => (selected ? colors.B1 : colors.F1)};
  border: 1px solid ${colors.C4};
`;
