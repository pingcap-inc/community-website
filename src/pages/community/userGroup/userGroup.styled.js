import styled from 'styled-components';
import { mixins } from '@pingcap/pingcap-ui';

export { Container, Content, Title, Buttons, Button } from 'pages/community/learning/learning.styled';

export const Desc = styled.p`
  ${mixins.reset()};
  ${mixins.typography('p1')};
  margin-bottom: 2rem;
`;
