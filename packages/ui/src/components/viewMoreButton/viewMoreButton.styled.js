import styled from 'styled-components';
import { ArrowRightOutlined } from '@ant-design/icons';

import * as colors from '../../colors';

export const ArrowIcon = styled(ArrowRightOutlined)`
  width: 0;

  svg {
    position: relative;
    left: -16px;
    opacity: 0;
  }

  &,
  svg {
    transition: 0.5s;
  }
`;

export const Container = styled.div`
  color: ${colors.B1};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    ${ArrowIcon} {
      width: 16px;
      margin-right: 8px;

      svg {
        left: 0;
        opacity: 1;
      }
    }
  }
`;
