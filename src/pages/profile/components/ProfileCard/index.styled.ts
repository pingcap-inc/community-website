import styled from 'styled-components';
import { Row, Col } from 'antd';
import { mixins, colors, Styled, constants } from '@tidb-community/ui';

export const Container = styled.div.attrs({})`
  background-color: #fff;
  border-radius: 4px;
  border-top: 4px solid ${colors.B1};
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Edit = styled.div``;
export const Chat = styled.div``;

export const AvatarSize = `4rem`;
export const Avatar = styled.div`
  width: ${AvatarSize};
  height: ${AvatarSize};
`;
export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
export const NameText = styled.div`
  ${mixins.typography('h3')};
`;
export const Level = styled.div`
  ${mixins.typography('h3')};
  margin-left: 0.5rem;
  color: ${colors.B1};
`;
export const Description = styled.div`
  ${mixins.typography('p2')};
  margin-top: 1rem;
`;
export const JoinDate = styled.div`
  ${mixins.typography('p2')};
  display: flex;
  justify-content: center;
  margin-left: 0.5rem;
  margin-top: 1rem;
`;

export const Nums = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
export const NumsItem = styled.div`
  &:not(:last-child) {
    border-right: 2px solid ${colors.C4};
  }
`;
export const NumsItemKeyName = styled.div`
  ${mixins.p2};
`;
export const NumsItemValue = styled.div`
  ${mixins.h2};
`;
