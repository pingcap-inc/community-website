import styled, { css } from 'styled-components';

import { ActionButton, Container, TwoColumns as RawTwoColumns } from '~/pages/home/subscription/subscription.styled';

export { ActionButton, Container };

export const TwoColumns = styled(RawTwoColumns)<{
  title: any;
  className: any;
  leftPanel: any;
  rightPanel: any;
  reverseOnSmallScreen: any;
  $isSmallScreen: boolean;
}>`
  ${(props) =>
    props.$isSmallScreen &&
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

export const Logo = styled.img.attrs({ src: '/images/events/event-logos.png' })`
  height: 150px;
`;
