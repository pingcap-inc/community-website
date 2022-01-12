import React from 'react';
import Link from 'next/link';
import * as Styled from './author.styled';
import { Avatar } from 'antd';
import moment from 'moment';

const AuthorInfo = ({ blogInfo }) => {
  const userPageURL = `/blog/user/${blogInfo.author.id}`;

  return (
    <Styled.AuthorContainer>
      <Styled.Profile>
        <Link href={userPageURL}>
          <Avatar src={blogInfo.author.avatarURL} size={18} />
        </Link>
        &nbsp;
        <Link href={userPageURL}>
          <b>{blogInfo.author.username}</b>
        </Link>
      </Styled.Profile>
      {blogInfo.publishedAt ? (
        <>
          &nbsp; 发表于 &nbsp;
          <b>{moment(blogInfo.publishedAt).format('YYYY-MM-DD')}</b>
        </>
      ) : undefined}
    </Styled.AuthorContainer>
  );
};

export default AuthorInfo;
