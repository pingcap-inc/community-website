import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { Link } from '~/components';

export const Container = styled.div`
  margin-right: -1rem;
  margin-bottom: -1rem;
`;

export const Tag = styled(Link)`
  ${mixins.verticalLineMiddle('36px')};
  text-decoration: none;
  font-size: 14px;
  color: ${colors.F2};
  background: ${colors.M1};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  border: 1px solid ${colors.T2};

  &:hover {
    color: ${colors.M1};
    background: ${colors.B1};
    border-color: ${colors.B1};
  }
`;
