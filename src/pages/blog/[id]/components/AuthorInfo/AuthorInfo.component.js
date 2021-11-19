import React from 'react';
import * as Styled from './author.styled';
import { Avatar } from 'antd';
import moment from 'moment';

const AuthorInfo = ({ blogInfo }) => {
  return (
    <Styled.AuthorContainer>
      <Avatar src={blogInfo.author.avatarURL} size={18} />
      &nbsp;
      <b>{blogInfo.author.username}</b>
      &nbsp; 发表于 &nbsp;
      <b>{moment(blogInfo.publishedAt).format('YYYY-MM-DD')}</b>
    </Styled.AuthorContainer>
  );
};

export default AuthorInfo;
