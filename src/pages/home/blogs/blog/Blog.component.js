import React from 'react';
import dayjs from 'dayjs';

import * as Styled from './blog.styled';
import AsktugIcon from './asktug.svg';

const Blog = ({ title, link, user, createdTime, onClick }) => (
  <Styled.Container onClick={onClick(link)}>
    <Styled.TitleRow>
      <h3>{title}</h3>
      <AsktugIcon />
    </Styled.TitleRow>

    <Styled.InformationRow>
      <Styled.User>
        <img alt={user.name} src={user.avatar} />
        {user.name}
      </Styled.User>
      <span>{dayjs(createdTime).format('YYYY.MM.DD')}</span>
    </Styled.InformationRow>
  </Styled.Container>
);

export default Blog;
