import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { Link } from '~/components';

export const Container = styled.div``;

export const Tag = styled(Link)`
  ${mixins.verticalLineMiddle('36px')};
  display: inline-block;
  padding: 0 8px;
  border: 1px solid ${colors.T2};
  border-radius: 6px;
`;
