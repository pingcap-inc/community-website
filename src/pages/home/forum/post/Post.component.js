import React from 'react';
import dayjs from 'dayjs';
import { colors } from '@tidb-community/ui';

import * as Styled from './post.styled.js';

const tagColors = [colors.T1, colors.T3, colors.T5];

const Post = ({ title, link, user, tags, replyNum, createdTime, onClick, lang, isSmallScreen }) => (
  <Styled.Container onClick={onClick(link)}>
    <Styled.TitleRow>
      <h3>{title}</h3>
      {!isSmallScreen && (
        <span>
          {replyNum} {lang.reply}
        </span>
      )}
    </Styled.TitleRow>

    <Styled.InformationRow>
      <div>
        <Styled.User>
          <img alt={user.name} src={user.avatar} />
          {user.name}
        </Styled.User>
        {!isSmallScreen &&
          tags.map((tag, idx) => <Styled.Tag key={idx} color={tagColors[idx] || tagColors[0]} text={tag} />)}
      </div>
      <span>
        {isSmallScreen && (
          <span>
            {replyNum} {lang.reply}
          </span>
        )}
        <span> {dayjs(createdTime).fromNow()}</span>
      </span>
    </Styled.InformationRow>
  </Styled.Container>
);

export default Post;
