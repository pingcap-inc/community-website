import React from 'react';
import dayjs from 'dayjs';

import * as Styled from './post.styled.js';

const Post = ({ title, link, user, tags, replyNum, updateTime, onClick, lang }) => (
  <Styled.Container onClick={onClick(link)}>
    <Styled.TitleRow>
      <h3>{title}</h3>
      <span>
        {replyNum} {lang.reply}
      </span>
    </Styled.TitleRow>

    <Styled.InformationRow>
      <div>
        <Styled.User>
          <img alt={user.name} src={user.avatar} />
          {user.name}
        </Styled.User>
        {tags.map((tag) => (
          <Styled.Tag key={tag}>{tag}</Styled.Tag>
        ))}
      </div>
      <span>{dayjs(updateTime).fromNow()}</span>
    </Styled.InformationRow>
  </Styled.Container>
);

export default Post;
