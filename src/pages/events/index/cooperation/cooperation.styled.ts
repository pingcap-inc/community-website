import styled, { css } from 'styled-components';

import { ActionButton, Container, TwoColumns as RawTwoColumns } from '~/pages/home/subscription/subscription.styled';
import { IProps } from '~/layouts/twoColumnsSection/TwoColumnsSection.component';
import { cdn } from '~/utils';

export { ActionButton, Container };

export const TwoColumns = styled(RawTwoColumns)<
  {
    $isSmallScreen: boolean;
  } & IProps
>`
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

export const Logo = styled.img.attrs({ src: cdn.getImageUrl('/images/events/event-logos.png') })`
  height: 150px;
`;
