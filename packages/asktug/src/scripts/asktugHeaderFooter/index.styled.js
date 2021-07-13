import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const HeaderLogo = styled.img.attrs({
  alt: 'AskTUG',
  src: 'https://asktug.com/uploads/default/original/3X/4/2/42424ddde1f860052cf29097bbfa44312d111b1d.png',
})`
  && {
    ${mixins.size('146px', '55px')};
  }
`;

export const BottomBarContainer = styled.a`
  ${mixins.flexCenter()};
  ${mixins.typography('p2')};
  color: ${colors.F2} !important;
  margin-top: 1rem;

  img {
    margin-right: 0.2em;
  }
`;
