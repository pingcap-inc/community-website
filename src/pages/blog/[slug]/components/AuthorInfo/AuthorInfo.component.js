import React from 'react';
import Link from 'next/link';
import * as Styled from './author.styled';
import { Avatar } from 'antd';
import moment from 'moment';

const AuthorInfo = ({ blog }) => {
  const userPageURL = `/blog/user/${blog.author.id}`;

  return (
    <Styled.AuthorContainer>
      <Styled.Profile>
        <Link href={userPageURL}>
          <Avatar src={blog.author.avatarURL} size={18} />
        </Link>
        &nbsp;
        <Link href={userPageURL}>
          <b>{blog.author.username}</b>
        </Link>
      </Styled.Profile>
      {blog.publishedAt ? (
        <>
          &nbsp; 发表于 &nbsp;
          <b>{moment(blog.publishedAt).format('YYYY-MM-DD')}</b>
        </>
      ) : undefined}
    </Styled.AuthorContainer>
  );
};

export default AuthorInfo;
