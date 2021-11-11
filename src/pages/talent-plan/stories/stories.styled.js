import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';

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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${colors.M2};

  cursor: pointer;
  height: 100%;

  padding: 1.5rem 1.5rem calc(1.5rem + 64px) 1.5rem;
  border-top: 4px solid ${colors.B1};
`;

export const StoryCardBottom = styled.div`
  height: 64px;
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 1.5rem;
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
