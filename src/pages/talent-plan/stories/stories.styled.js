import styled from 'styled-components';
import { colors, mixins, Styled } from '@tidb-community/ui';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M2};
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: ${colors.F1};
`;

export const CardWrap = styled.div`
  height: 100%;
  padding-bottom: 1rem;
`;

export const StoryCard = styled.div`
  ${mixins.boxShadow()}
  border-radius: 4px;
  background-color: ${colors.M2};

  cursor: pointer;
  height: 100%;

  padding: 2rem 2rem calc(2rem + 64px) 2rem;
  border-top: 4px solid ${colors.B1};
`;

export const StoryCardBottom = styled.div`
  height: 64px;
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 2rem;
`;

export const StoryCardInfoName = styled.div`
  font-size: 20px;
  line-height: 1.2;
`;
export const StoryCardInfoDesc = styled.div`
  font-size: 16px;
`;
export const StoryCardInfo = styled.div`
  padding-left: 1rem;
`;
