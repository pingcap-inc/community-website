import styled from 'styled-components';
// @ts-ignore
import { colors, mixins } from '@tidb-community/ui';
// @ts-ignore
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
  margin-bottom: 1rem;
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

export const Rank = styled(Name)`
  padding-left: 4px;
`;

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

export const BadgesContainer = styled.div``;

export const Badge = styled.div`
  // two columns with equal width; first is icon, second is name
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${colors.M1};
  ${(props) => !props.owned && `filter: grayscale(100%)}; opacity: 50%;`};
`;

export const BadgeIcon = styled.img`
  width: 64px;
  height: 64px;
`;

export const BadgeName = styled.span``;
