import React from 'react';
import dayjs from 'dayjs';

import * as Styled from './post.styled.js';

const Post = ({ title, link, user, tags, replyNum, updateTime, onClick, lang }) => (
  <Styled.Container>
    <Styled.LeftPanel>
      <h3 onClick={onClick(link)}>{title}</h3>
    </Styled.LeftPanel>
    <Styled.RightPanel>
      <span>
        {replyNum} {lang.reply}
      </span>
      <span>{dayjs(updateTime).fromNow()}</span>
    </Styled.RightPanel>
  </Styled.Container>
);

export default Post;
