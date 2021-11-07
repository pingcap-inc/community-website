import styled from 'styled-components';
import { colors, mixins, Styled } from '@tidb-community/ui';
import { Avatar, Col } from 'antd';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    padding: 0;
  }
`;

export const CardWrapper = styled(Col)`
  padding-bottom: 1rem;
`;

export const MemberCard = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${colors.M2};
  padding: 1rem;
  height: 100%;
  display: flex;
`;

export const MemberCardAvatar = styled(Avatar)`
  min-width: 48px;
`;

export const MemberCardContent = styled.div`
  margin-left: 1rem;
  color: ${colors.F1};
`;

export const MemberCardHeader = styled.div`
  font-weight: bold;
`;

export const MemberCardLine = styled.div`
  color: ${colors.F2};
  font-size: 14px;
  font-weight: normal;
  word-wrap: break-word;
  text-overflow: ellipsis;
  ${mixins.lineClamp(1)};
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding: 5rem 1rem 7.5rem;
`;
