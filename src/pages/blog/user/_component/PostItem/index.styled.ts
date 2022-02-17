import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Card as AntdCard } from 'antd';
import { borderRadiusSize } from '~/pages/blog/_components/common.styled';
import Anchor from '~/components/Anchor';

export const Container = styled(AntdCard)`
  ${borderRadiusSize};
`;

export const Header = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const TitleAnchor = styled(Anchor)`
  margin-right: 0.5rem;
`;

//export const StatusBadge = styled.div`
//`;

export const Author = styled(Anchor)`
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
`;

const avatarSize = `1.5rem`;
export const AuthorAvatar = styled.div`
  ${mixins.radius(avatarSize)};
  //width: ${avatarSize};
  //height: ${avatarSize};
  img {
    width: 100%;
    height: 100%;
  }
`;

export const AuthorUsername = styled.div`
  margin-left: 0.5rem;
`;
