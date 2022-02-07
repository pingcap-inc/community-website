import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';
import * as polished from 'polished';
import Anchor from '~/components/Anchor';
import { IdcardOutlined } from '@ant-design/icons';

export const Container = styled.div.attrs({})`
  ${mixins.boxShadow()};
  background-color: #fff;
  border-radius: 4px;
  border-top: 4px solid ${colors.B1};
  padding: 0.5rem 1rem;
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

export const Edit = styled.a``;
export const Chat = styled(Anchor)``;

export const AvatarSize = `5rem`;
export const Avatar = styled.div`
  ${mixins.radius(AvatarSize)};
  box-shadow: 0 2px 6px 0 ${polished.rgba('#000', 0.5)};
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Name = styled.div`
  display: flex;
  margin-top: 1.5rem;
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
  margin-top: 1.5rem;
`;
export const JoinDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
export const JoinDateIcon = styled(IdcardOutlined)`
  font-size: 1.5rem;
  color: ${colors.F2};
`;
export const JoinDateText = styled.div`
  ${mixins.typography('p2')};
  margin-left: 0.5rem;
`;

export const Nums = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
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
  padding: 0 1.5rem;
`;
export const NumsItemKeyName = styled.div`
  ${mixins.typography('p2')};
`;
export const NumsItemValue = styled.div`
  ${mixins.typography('h1')};
`;
