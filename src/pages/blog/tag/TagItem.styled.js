import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Title = styled.div`
  ${mixins.typography('h3')}
`;

export const Description = styled.div`
  ${mixins.lineClamp(3)}
  ${mixins.typography('p2')}
  margin-top: 1rem;
`;

export const Footer = styled.div`
  ${mixins.typography('p2')}
  color: ${colors.C4};
  margin-top: 1rem;
`;
