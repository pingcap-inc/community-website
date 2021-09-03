import styled from 'styled-components';

import * as PostStyled from '~/pages/home/forum/post/post.styled';

export { TitleRow, InformationRow, User } from '~/pages/home/forum/post/post.styled';

export const Container = styled(PostStyled.Container)`
  position: relative;
  padding-left: 40px;

  ${PostStyled.TitleRow} {
    svg {
      position: absolute;
      height: 24px;
      left: 0;
      margin-top: 6px;
    }
  }
`;
