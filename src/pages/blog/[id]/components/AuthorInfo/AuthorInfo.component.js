import React from 'react';
import * as Styled from './author.styled';
import { Avatar } from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';

const AuthorInfo = ({ blogInfo }) => {
  const router = useRouter();

  return (
    <Styled.AuthorContainer>
      <Avatar
        src={blogInfo.author.avatarURL}
        size={18}
        onClick={() => router.push(`/blog/user/${blogInfo.author.id}`)}
      />
      &nbsp;
      <b>{blogInfo.author.username}</b>
      &nbsp; 发表于 &nbsp;
      <b>{moment(blogInfo.publishedAt).format('YYYY-MM-DD')}</b>
    </Styled.AuthorContainer>
  );
};

export default AuthorInfo;
