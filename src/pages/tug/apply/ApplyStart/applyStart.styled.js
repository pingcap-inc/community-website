import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Wrapper = styled.div`
  max-width: 540px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${colors.F1};
  font-size: 30px;
`;

export const Post = styled.div`
  margin-bottom: 80px;
  img {
    width: 100%;
  }
`;

export const Question = styled.h2`
  margin-top: 60px;
  margin-bottom: 40px;
  color: ${colors.F1};
  font-size: 24px;
`;

export const Answer = styled.div`
  margin-bottom: 60px;
  color: ${colors.F2};
  font-size: 16px;
`;

export const WhyJoinTitle = styled.h2`
  margin-top: 60px;
  margin-bottom: 40px;
  color: ${colors.F1};
  font-size: 24px;
`;

export const WhyJoinList = styled.div`
  padding: 40px 20px;
  border: 1px solid ${colors.T2};
`;

export const WhyJoinListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const WhyJoinListItemIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const WhyJoinListItemText = styled.div`
  color: ${colors.F2};
  font-size: 16px;
`;
