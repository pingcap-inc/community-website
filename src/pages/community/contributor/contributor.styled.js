import styled from 'styled-components';
import { colors, mixins } from '@pingcap/pingcap-ui';

export const Container = styled.div`
  ${mixins.responsive()};
  padding: 5rem 0;
`;

export const Title = styled.h2`
  ${mixins.typography('h2')};
  text-align: center;
`;

export const Card = styled.div`
  ${mixins.boxShadow()};
  border: 1px solid ${colors.T2};
  height: 400px;
`;
