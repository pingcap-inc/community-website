import * as React from 'react';
import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';

export default function CommentPostItem({ value }) {
  const { post, content } = value;
  const isDeleted = post === undefined || post === null;
  return (
    <Styled.Container>
      <Styled.Header>
        <span>评论了文章 </span>
        {isDeleted ? <Anchor href={'#'}>文章已删除</Anchor> : <Anchor href={`/blog/${post.slug}`}>{post.title}</Anchor>}
      </Styled.Header>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Container>
  );
}
