import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';

const { Content, Section, Title } = Styled;

export { Content, Title };

export const Container = styled.div`
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
