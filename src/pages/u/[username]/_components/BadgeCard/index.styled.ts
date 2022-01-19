import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';
import Anchor from '~/components/Anchor';

export const Container = styled.div.attrs({})`
  ${mixins.boxShadow()};
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const TitleText = styled.div`
  ${mixins.typography('h3')};
  color: ${colors.F2};
`;
export const TitleNums = styled.div`
  ${mixins.typography('p2')};
  margin-left: 0.5rem;
`;
export const ActiveMore = styled(Anchor)`
  color: ${colors.B1};
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const Badge = styled.div`
  ${mixins.boxShadow()};
  opacity: ${(props) => (props.hasBadge ? '100%' : '30%')};
  width: 2.5rem;
  margin: 0.5rem;
  //height: 2.5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
