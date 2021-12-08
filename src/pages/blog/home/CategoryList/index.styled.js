import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';
import { borderRadiusSize } from '../../components/common.styled';

export const Container = styled.div`
  ${mixins.showOnDesktop()}
`;

export const List = styled.div``;

export const Item = styled.div`
  border-top-right-radius: ${borderRadiusSize};
  border-bottom-right-radius: ${borderRadiusSize};
  cursor: pointer;
  padding: 0 1rem;
  background-color: ${(props) => (props.selected ? colors.M1 : '')};
  border-left: ${(props) => (props.selected ? `4px solid ${colors.T7}` : 'none')};
  transition: color 0.25s ease;
  &:hover {
    color: ${colors.B1};
  }
  height: 40px;
  line-height: 40px;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
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
