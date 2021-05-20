import styled from 'styled-components';
import { Button } from 'antd';

import * as colors from '../../colors';
import * as mixins from '../../mixins';

export const UserButton = styled(Button)`
  ${mixins.flexCenter()};
  background-color: rgba(0, 0, 0, 0) !important;
  padding: 0 !important;
  color: ${colors.F1};
`;
