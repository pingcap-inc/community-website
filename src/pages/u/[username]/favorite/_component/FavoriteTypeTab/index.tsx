import * as React from 'react';
import { Radio } from 'antd';
import Link from 'next/link';
import * as CommonStyled from './index.styled';

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
    <CommonStyled.Tab>
      <Radio.Group defaultValue={currentType}>
        <Link href={`/u/${username}/favorite/${EFavoriteType.article}`} passHref>
          <Radio.Button value={EFavoriteType.article}>文章</Radio.Button>
        </Link>
        <Link href={`/u/${username}/favorite/${EFavoriteType.topic}`} passHref>
          <Radio.Button value={EFavoriteType.topic}>帖子</Radio.Button>
        </Link>
      </Radio.Group>
    </CommonStyled.Tab>
  );
}
