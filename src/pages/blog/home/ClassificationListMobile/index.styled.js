import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div.attrs({
})`
  ${mixins.showOnMobile()}
`;

export const List = styled.div.attrs({
})`
  display: flex;
`;

export const Item = styled.div.attrs({
})`
  color: ${colors.C4};
  padding: .125rem .5rem;
  margin: .5rem .25rem;
  border-radius: .25rem;
  border: 1px solid ${colors.C4};
  font-size: 14px;
`;
