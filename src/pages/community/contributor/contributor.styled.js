import styled from 'styled-components';
import { colors, mixins } from '@pingcap/pingcap-ui';

import { Header } from 'pages/community/activities';

export const Container = styled.div`
  ${mixins.responsive()};
  padding: 5rem 0;
`;

export const Title = styled(Header)`
  margin-bottom: 3rem;
`;

export const Card = styled.div`
  ${mixins.flexCenter()}
  flex-direction: column;
  box-shadow: 0px 0px 8px rgba(219, 228, 240, 0.8);
  border-radius: 8px;
  height: 480px;
  padding: 2rem 4rem;
  text-align: center;

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
  }
`;

export const CardImg = styled.div``;
