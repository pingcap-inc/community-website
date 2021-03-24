import styled from 'styled-components';

import * as colors from '../../colors';
import * as mixins from '../../mixins';

export const Card = styled.div`
  height: 400px;
  border: 1px solid ${colors.T2};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);

  img {
    ${mixins.size('100%', '200px')};
    object-fit: cover;
  }
`;

export const Image = styled.div``;

export const Content = styled.div``;
