import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';
import Anchor from '~/components/Anchor';

export const Container = styled.div`
  margin-bottom: 0.75rem;
  ${mixins.boxShadow()};
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  margin: 2rem;
`;

export const Title = styled.div`
  font-weight: bolder;
`;

export const Body = styled.div`
  a {
    color: ${colors.B1};
    &:hover {
      text-decoration: underline;
    }
  }
`;
