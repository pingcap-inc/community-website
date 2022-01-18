import * as React from 'react';
import Link from 'next/link';
import * as Styled from './index.styled';

export enum EFavoriteType {
  // eslint-disable-next-line no-unused-vars
  article = 'article',
  // eslint-disable-next-line no-unused-vars
  topic = 'topic',
}

export interface IProps {
  username: string;
  currentType: EFavoriteType;
}

export default function FavoriteTypeTab({ username, currentType }: IProps) {
  return (
    <Styled.Tab>
      <Link href={`/u/${username}/favorite/${EFavoriteType.article}`} passHref>
        <Styled.TabItem selected={currentType === EFavoriteType.article}>文章</Styled.TabItem>
      </Link>
      <Link href={`/u/${username}/favorite/${EFavoriteType.topic}`} passHref>
        <Styled.TabItem selected={currentType === EFavoriteType.topic}>帖子</Styled.TabItem>
      </Link>
    </Styled.Tab>
  );
}
