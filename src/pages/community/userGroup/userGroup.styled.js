import styled from 'styled-components';
import { mixins } from '@pingcap/pingcap-ui';

import { Container as LearningContainer } from 'pages/community/learning/learning.styled';

export { Content, Title, Buttons, Button } from 'pages/community/learning/learning.styled';

export const Container = styled(LearningContainer)`
  margin-top: -6rem;
`;

export const Desc = styled.p`
  ${mixins.reset()};
  ${mixins.typography('p1')};
  margin-bottom: 2rem;
`;
