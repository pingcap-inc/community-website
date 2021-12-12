import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 16px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  cursor: pointer;
  margin: 0 0.5rem;
  color: ${(props) => (props.selected ? colors.B1 : '')};
  border-bottom: ${(props) => (props.selected ? `4px solid ${colors.B1}` : 'none')};
`;

export const AllTag = styled.div`
  ${mixins.showOnMobile()}
`;
