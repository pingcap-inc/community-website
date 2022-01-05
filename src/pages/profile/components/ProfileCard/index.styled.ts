import styled from 'styled-components';
import { Row, Col } from 'antd';
import { mixins, colors, Styled, constants } from '@tidb-community/ui';

export const Container = styled.div.attrs({})`
  ${mixins.boxShadow()};
  background-color: #fff;
  border-radius: 4px;
  border-top: 4px solid ${colors.B1};
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Edit = styled.div``;
export const Chat = styled.div``;

export const AvatarSize = `6rem`;
export const Avatar = styled.div`
  ${mixins.radius(AvatarSize)};
  ${mixins.boxShadow()};
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Name = styled.div`
  display: flex;
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
  margin-left: 0.5rem;
  margin-top: 1rem;
`;

export const Nums = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
export const NumsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    border-right: 2px solid ${colors.C2};
  }
  margin: 1rem 0;
  padding: 0 1rem;
`;
export const NumsItemKeyName = styled.div`
  ${mixins.typography('p2')};
`;
export const NumsItemValue = styled.div`
  ${mixins.typography('h1')};
`;
