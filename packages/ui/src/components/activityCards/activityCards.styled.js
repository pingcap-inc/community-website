import styled from 'styled-components';

import * as colors from '../../colors';
import * as mixins from '../../mixins';

export const Card = styled.div`
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.T2};
  height: 400px;
  cursor: pointer;
`;

export const Image = styled.div`
  &,
  img {
    position: relative;
    ${mixins.size('100%', '200px')};
  }

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 24px 32px;
`;

export const Title = styled.h3`
  ${mixins.reset()};
  ${mixins.typography('h2')};
  ${mixins.lineClamp(2)};
  margin-bottom: 16px;
`;

export const Desc = styled.p`
  ${mixins.reset()};
  ${mixins.typography('p2')};
  ${mixins.lineClamp(3)};
`;
