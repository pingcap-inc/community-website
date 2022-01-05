import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

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
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
`;
export const TitleText = styled.div`
  ${mixins.typography('h2')};
`;
export const TitleNums = styled.div`
  ${mixins.typography('p1')};
`;
export const ActiveMore = styled.div``;

export const Body = styled.div``;

export const Badge = (props) => styled.div`
  ${props.active && 'opacity: 80%;'}
`;
