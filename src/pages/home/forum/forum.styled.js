import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

import { Section, Content, Title } from '~/pages/home/index.styled';

export { Content, Title };

export const Container = styled(Section)`
  && {
    background: ${colors.M2};
  }
`;

export const Posts = styled.div``;
