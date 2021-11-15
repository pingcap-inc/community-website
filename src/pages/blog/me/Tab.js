import React from 'react';
import * as Styled from './Tab.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Tab = () => {
  const numPosts = 7;
  const numComments = 13;
  const numLike = 65;
  const numFav = 17;
  return (
    <Styled.Tab>
      <Styled.Tab>
        <TabItem name={`文章 ${numPosts}`} url="blog/me/posts" />
        <TabItem name={`评论 ${numComments}`} url="blog/me/comments" />
        <TabItem name={`赞 ${numLike}`} url="blog/me/like" />
        <TabItem name={`收藏 ${numFav}`} url="blog/me/fav" />
      </Styled.Tab>
    </Styled.Tab>
  );
};

const TabItem = ({ name, url }) => {
  const router = useRouter();
  // console.log('router.pathname', router.pathname)
  const selected = router.pathname === '/' + url;
  return (
    <Link href={`/${url}`}>
      <Styled.TabItem selected={!!selected}>{name}</Styled.TabItem>
    </Link>
  );
};

export default Tab;
