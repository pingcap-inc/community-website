import * as React from 'react';
import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';

export default function CommentPostItem({ blogInfo, commentContent }) {
  return (
    <Styled.Container>
      <Styled.Header>
        <span>评论了文章 </span>
        <Anchor href={`/blog/${blogInfo.slug}`}>{blogInfo.title} </Anchor>
      </Styled.Header>
      <Styled.Content>{commentContent}</Styled.Content>
    </Styled.Container>
  );
}
