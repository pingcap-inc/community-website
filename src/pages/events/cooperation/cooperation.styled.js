import styled, { css } from 'styled-components';

import LogoSvg from './logo.svg';
import { ActionButton, Container, TwoColumns as RawTwoColumns } from '~/pages/home/subscription/subscription.styled';

export { ActionButton, Container };

export const TwoColumns = styled(RawTwoColumns)`
  ${(props) =>
    props.isSmallScreen &&
    css`
      ${RightPanel} {
        text-align: center;
      }
    `}
`;

export const LeftPanel = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 0;
  }
`;

export const RightPanel = styled.div`
  text-align: right;
`;

export const Logo = styled(LogoSvg)`
  height: 150px;
`;
