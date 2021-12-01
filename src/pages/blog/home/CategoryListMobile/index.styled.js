import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div.attrs({})`
  ${mixins.showOnMobile()}
`;

export const List = styled.div.attrs({})`
  display: flex;
  overflow: scroll;
  // code at below is for hidden scroll on different browser
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

export const Item = styled.div.attrs({})`
  color: ${colors.C4};
  padding: 0.125rem 0.5rem;
  margin: 0.5rem 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid ${colors.C4};
  font-size: 14px;
  white-space: nowrap;
`;
