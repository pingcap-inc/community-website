import * as React from 'react';
import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';

export default function PostItem({ blogInfo, actionText, statusBadge }) {
  return (
    <Styled.Container>
      <Styled.Header>{actionText}</Styled.Header>
      <Styled.Title>
        <Styled.TitleAnchor href={`/blog/${blogInfo.slug}`}>{blogInfo.title}</Styled.TitleAnchor>
        {/*<Styled.StatusBadge>*/}
        {statusBadge}
        {/*</Styled.StatusBadge>*/}
      </Styled.Title>
      <Styled.Author href={`/blog/${blogInfo.slug}`}>
        <Styled.AuthorAvatar>
          <img src={blogInfo.author.avatarURL} alt={blogInfo.author.username} />
        </Styled.AuthorAvatar>
        <Styled.AuthorUsername>{blogInfo.author.username}</Styled.AuthorUsername>
      </Styled.Author>
    </Styled.Container>
  );
}
