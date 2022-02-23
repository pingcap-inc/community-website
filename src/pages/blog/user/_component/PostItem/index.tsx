import * as React from 'react';
import * as Styled from './index.styled';
//import Anchor from '~/components/Anchor';

export default function PostItem({
  blogInfo,
  actionText,
  statusBadge,
  getUrlBySlugCallback = (slug) => (slug ? `/blog/${slug}` : '#'),
}) {
  const isDeleted = blogInfo === undefined || blogInfo === null;
  return (
    <Styled.Container>
      {actionText && actionText.length !== 0 && <Styled.Header>{actionText}</Styled.Header>}
      <Styled.Title>
        {isDeleted ? (
          <Styled.TitleAnchor href={'#'}>文章已删除</Styled.TitleAnchor>
        ) : (
          <Styled.TitleAnchor href={getUrlBySlugCallback(blogInfo?.slug)}>{blogInfo?.title}</Styled.TitleAnchor>
        )}
        {/*<Styled.StatusBadge>*/}
        {!isDeleted && statusBadge}
        {/*</Styled.StatusBadge>*/}
      </Styled.Title>
      {!isDeleted && (
        <Styled.Author href={`/blog/user/${blogInfo?.author.id}`}>
          <Styled.AuthorAvatar>
            <img src={blogInfo?.author.avatarURL} alt={blogInfo?.author.username} />
          </Styled.AuthorAvatar>
          <Styled.AuthorUsername>{blogInfo?.author.username}</Styled.AuthorUsername>
        </Styled.Author>
      )}
    </Styled.Container>
  );
}
