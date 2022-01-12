import React from 'react';
import * as Styled from './Tab.styled';
import Link from 'next/link';

const Tab = ({ id, selectedKey, posts = 0, likes = 0, comments = 0, favorites = 0 }) => {
  return (
    <Styled.Tab>
      <TabItem id={id} selectedKey={selectedKey} name={`文章 ${posts}`} urlKey="posts" />
      <TabItem id={id} selectedKey={selectedKey} name={`评论 ${comments}`} urlKey="comments" />
      <TabItem id={id} selectedKey={selectedKey} name={`赞 ${likes}`} urlKey="like" />
      <TabItem id={id} selectedKey={selectedKey} name={`收藏 ${favorites}`} urlKey="favorites" />
    </Styled.Tab>
  );
};

const TabItem = ({ id, selectedKey, name, urlKey }) => {
  const url = `/blog/user/${id}/${urlKey}`;
  const selected = selectedKey === urlKey;
  return (
    <Link href={url}>
      <Styled.TabItem selected={!!selected}>{name}</Styled.TabItem>
    </Link>
  );
};

export default Tab;
