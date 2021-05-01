import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import * as colors from '../../colors';
import * as mixins from '../../mixins';

export const SendEmailButton = styled(AntButton)`
  height: 22px !important;
  line-height: 22px !important;
  padding: 0 4px !important;

  span {
    ${mixins.typography('p2')}
    &:hover {
      color: ${colors.B1}
    }
  }

  &::before {
    background-color: transparent;
  }
`;
