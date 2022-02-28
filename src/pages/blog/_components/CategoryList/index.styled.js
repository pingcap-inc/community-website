import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';
import { borderRadiusSize } from '../../_components/common.styled';

export const Container = styled.div`
  ${mixins.showOnDesktop()};
`;

export const List = styled.div``;

export const Item = styled.a`
  display: block;
  border-top-right-radius: ${borderRadiusSize};
  border-bottom-right-radius: ${borderRadiusSize};
  cursor: pointer;
  padding: 0 1rem;
  background-color: ${(props) => (props.selected ? colors.M1 : '')};
  border-left: ${(props) => (props.selected ? `4px solid ${colors.T7}` : 'none')};
  transition: color 0.25s ease;
  color: ${colors.F1} !important;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &:hover {
    color: ${colors.B1} !important;
  }
  height: 40px;
  line-height: 40px;
`;

export const FixedLink = styled.a`
  display: block;
  padding: 0.25rem 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: color 0.25s ease;
  &:hover {
    color: ${colors.B1};
  }
`;
