import styled from 'styled-components';
// import { colors, mixins } from '@tidb-community/ui';

import * as PostStyled from '~/pages/home/forum/post/post.styled';

export { TitleRow, InformationRow, User } from '~/pages/home/forum/post/post.styled';

export const Container = styled(PostStyled.Container)`
  position: relative;
  padding-left: 40px;

  ${PostStyled.TitleRow} {
    svg {
      height: 24px;
      position: absolute;
      left: 0;
      top: 1rem;
    }
  }
`;
