import styled from 'styled-components';

import LogoSvg from './logo.svg';

export { Container, TwoColumns, ActionButton } from '~/pages/home/subscription/subscription.styled';

export const LeftPanel = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 0;
  }
`;

export const Logo = styled(LogoSvg)`
  height: 150px;
`;
