import styled from 'styled-components';
import { ArrowRightOutlined } from '@ant-design/icons';
import { colors } from '@pingcap/pingcap-ui';

export const ArrowIcon = styled(ArrowRightOutlined)`
  width: 0;

  svg {
    opacity: 0;
    position: relative;
    left: -1rem;
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
      width: 1rem;
      margin-right: 0.5rem;

      svg {
        opacity: 1;
        left: 0;
      }
    }
  }
`;
