import * as React from 'react';
import * as Styled from './index.styled';
import { Tabs } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Tab } from './index.styled';

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
  const [activeKey, setActiveKey] = useState(currentType);
  const router = useRouter();
  const handleChange = async (key: EFavoriteType) => {
    await router.push(`/u/${username}/favorite/${key}`);
    setActiveKey(key);
  };
  return (
    <Styled.FavoriteTypeTab>
      <Styled.Tab defaultActiveKey={currentType} onChange={handleChange} activeKey={activeKey} animated={false}>
        <Tabs.TabPane tab={'文章'} key={EFavoriteType.article} />
        <Tabs.TabPane tab={'帖子'} key={EFavoriteType.topic} />
      </Styled.Tab>
    </Styled.FavoriteTypeTab>
  );
}
