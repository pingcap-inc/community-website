import styled, { css } from 'styled-components';
import { mixins } from '@pingcap/pingcap-ui';

import { Header } from 'pages/community/activities';

export { Container } from 'pages/community/activities/activities.styled';

export const Title = styled(Header)`
  margin-bottom: 3rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 8px rgba(219, 228, 240, 0.8);
  border-radius: 8px;
  height: 480px;
  padding: 0 3rem;
  text-align: center;
  cursor: pointer;

  h3,
  p {
    ${mixins.reset()};
  }

  h3 {
    ${mixins.typography('h2')};
    margin-bottom: 1rem;
  }

  p {
    ${mixins.typography('p1')};
    ${mixins.lineClamp(5)};
  }
`;

export const CardImg = styled.div`
  ${mixins.flexVerticalCenter()};
  height: 300px;

  ${(props) =>
    props.small &&
    css`
      height: 260px;
    `};
`;
