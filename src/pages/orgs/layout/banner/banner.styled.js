import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid ${colors.T2};
`;

export const Content = styled.div`
  ${mixins.responsive()};
  position: relative;
  padding: 3rem 0;
`;

export const Information = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  margin-right: 1rem;

  img {
    ${mixins.size('48px')};
    border-radius: 50%;
  }
`;

export const TextWrapper = styled.div``;

export const Name = styled.h2`
  ${mixins.typography('h1')};

  svg {
    margin-left: 0.5rem;
  }
`;

export const Introduction = styled.p`
  ${mixins.typography('p2')};
  margin-bottom: 0;
`;
