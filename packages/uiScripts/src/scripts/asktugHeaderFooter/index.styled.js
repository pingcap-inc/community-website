import styled from 'styled-components';
import { Row } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

export const HeaderLogo = styled.img.attrs({
  alt: 'AskTUG',
  src: 'https://asktug.com/uploads/default/original/3X/4/2/42424ddde1f860052cf29097bbfa44312d111b1d.png',
})`
  && {
    ${mixins.size('146px', '55px')};
  }
`;

export const BottomBarContainer = styled(Row).attrs({
  gutter: { xs: 16, sm: 32 },
  justify: 'center',
})`
  margin-top: 1em;

  a {
    ${mixins.flexCenter()};
    ${mixins.typography('p2')};
    color: ${colors.F2} !important;

    img {
      margin-right: 0.2em;
    }
  }
`;
