import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.showOnDesktop()}
  margin-top: 2rem;
  a {
    color: ${colors.T7};
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  cursor: pointer;
  margin: 0.5rem;
  color: ${(props) => (props.selected ? colors.T7 : '')};
`;
