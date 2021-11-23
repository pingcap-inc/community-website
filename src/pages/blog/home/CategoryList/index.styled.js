import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.showOnDesktop()}
`;

export const List = styled.div``;

export const Item = styled.div`
  cursor: pointer;
  padding: 0.25rem 1rem;
  margin: 0.5rem 0;
  background-color: ${(props) => (props.selected ? colors.M1 : '')};
  border-left: ${(props) => (props.selected ? `4px solid ${colors.T7}` : 'none')};
`;

export const FixedLink = styled.div`
  padding: 0.25rem 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: color 0.25s ease;
  &:hover {
    color: ${colors.B1};
  }
`;
