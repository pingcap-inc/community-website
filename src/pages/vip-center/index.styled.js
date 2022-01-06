import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Link as RawLink } from '~/components';

export const Title = styled.div`
  ${mixins.typography('h3')};
  padding-bottom: 1rem;
`;

export const LevelContainer = styled.div`
  background-color: ${colors.M1};
  border-radius: 6px;
  width: 100%;
  padding: 1rem;
`;

export const Name = styled.span`
  font-size: 18px;
  margin-right: 4px;
  color: ${colors.F2};
`;

export const Level = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-left: 0.5rem;
  color: #e30c34;
`;

export const Score = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: ${colors.B1};
`;

export const Rank = styled(Name)``;

export const Tip = styled.div`
  ${mixins.typography('p2')};
  color: ${colors.F2};
  margin-top: 1rem;
`;

export const Container = styled.div`
  ${mixins.responsive()};
  padding-top: 2rem;
`;

export const Link = styled(RawLink)`
  font-size: 14px;
  text-decoration: none;
  color: ${colors.B1};
`;

export const Main = styled.div``;
