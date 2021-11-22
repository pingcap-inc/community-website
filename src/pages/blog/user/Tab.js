import React from 'react';
import * as Styled from './Tab.styled';
import Link from 'next/link';

const Tab = ({ id, selectedKey }) => {
  const numPosts = 7;
  const numComments = 13;
  const numLike = 65;
  const numFav = 17;
  return (
    <Styled.Tab>
      <Styled.Tab>
        <TabItem id={id} selectedKey={selectedKey} name={`文章 ${numPosts}`} urlKey="posts" />
        <TabItem id={id} selectedKey={selectedKey} name={`评论 ${numComments}`} urlKey="comments" />
        <TabItem id={id} selectedKey={selectedKey} name={`赞 ${numLike}`} urlKey="like" />
        <TabItem id={id} selectedKey={selectedKey} name={`收藏 ${numFav}`} urlKey="favorites" />
      </Styled.Tab>
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
