import React from 'react';
import dayjs from 'dayjs';

import * as Styled from './post.styled.js';

const Post = ({ title, link, creator, categories, postNum, createdAt, onClick, lang, isSmallScreen }) => (
  <Styled.Container onClick={onClick(link)}>
    <Styled.TitleRow>
      <h3 title={title}>{title}</h3>
      {!isSmallScreen && (
        <span>
          {postNum} {lang.reply}
        </span>
      )}
    </Styled.TitleRow>

    <Styled.InformationRow>
      <div>
        <Styled.User>
          <img alt={creator.username} src={creator.avatarUrl} />
          {creator.username}
        </Styled.User>
        {!isSmallScreen &&
          categories.map(({ id, color, name }) => {
            const props = {
              key: id,
              color: `#${color}`,
              text: name,
            };
            return <Styled.Tag {...props} />;
          })}
      </div>
      <span>
        {isSmallScreen && (
          <span>
            {postNum} {lang.reply}
          </span>
        )}
        <span>{dayjs(createdAt).fromNow()}</span>
      </span>
    </Styled.InformationRow>
  </Styled.Container>
);

export default Post;
