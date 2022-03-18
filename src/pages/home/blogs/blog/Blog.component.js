import React from 'react';
import dayjs from 'dayjs';
import * as Styled from './blog.styled';
import Anchor from '~/components/Anchor';
// import AsktugIcon from './asktug.svg';

const Blog = ({ title, link, creator, createdAt }) => (
  <Anchor href={link}>
    <Styled.Container>
      <Styled.TitleRow>
        <h3 title={title}>{title}</h3>
        {/*<AsktugIcon />*/}
      </Styled.TitleRow>

      <Styled.InformationRow>
        <Styled.User>
          <img alt={creator.username} src={creator.avatarUrl} />
          {creator.username}
        </Styled.User>
        <span>{dayjs(createdAt).format('YYYY.MM.DD')}</span>
      </Styled.InformationRow>
    </Styled.Container>
  </Anchor>
);

export default Blog;
