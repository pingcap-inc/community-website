import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import * as Styled from './blogInfo.styled';
import { Avatar } from 'antd';
import { HeartOutlined, MessageOutlined } from '@ant-design/icons';

const BlogInfo = ({
  el = 'div',
  id,
  usernameExtends = undefined,
  publishedAt,
  title,
  titleExtends = undefined,
  category = undefined,
  onClickCategory,
  tags,
  onClickTag,
  likes,
  comments,
  bottomExtends,
  coverImageURL = undefined,
  onClick,
  onClickAuthor,
  author,
}) => {
  const Container = Styled.makeContainer(el);

  const handleClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  const handleClickAuthor = useCallback(() => {
    onClickAuthor(author);
  }, [author, onClickAuthor]);

  const handleClickCategory = useCallback(() => {
    onClickCategory(category);
  }, [category, onClickCategory]);

  const publishedAtFormatted = useMemo(() => dayjs(publishedAt).format('YYYY-MM-DD HH:mm'), [publishedAt]);

  return (
    <Container>
      {coverImageURL && coverImageURL.length !== 0 && (
        <Styled.CoverImageContainer>
          <Styled.CoverImage style={{ backgroundImage: `url(${coverImageURL})` }} onClick={handleClick} />
        </Styled.CoverImageContainer>
      )}
      <Styled.Content>
        <Styled.Author>
          <Styled.AuthorAvatar onClick={handleClickAuthor}>
            <Avatar size={Styled.avatarSize} src={author.avatarURL} />
          </Styled.AuthorAvatar>
          <Styled.AuthorInfo>
            <Styled.AuthorName onClick={handleClickAuthor}>
              {author.username || author.name}
              {usernameExtends}
            </Styled.AuthorName>
            <Styled.AuthorPublishedAt>{publishedAtFormatted}</Styled.AuthorPublishedAt>
          </Styled.AuthorInfo>
        </Styled.Author>
        <Styled.Title onClick={handleClick}>
          {title}
          {titleExtends}
        </Styled.Title>
        <Styled.Meta>
          {category && <Styled.Category onClick={handleClickCategory}>{category.name}</Styled.Category>}
          {tags?.map((tag) => (
            <Styled.Tag key={tag.id} onClick={() => onClickTag(tag)}>
              {tag.name}
            </Styled.Tag>
          ))}
        </Styled.Meta>
        <Styled.Interactions>
          <Styled.InteractionItem>
            <HeartOutlined />
            <span className="text">{likes}</span>
          </Styled.InteractionItem>
          <Styled.InteractionItem>
            <MessageOutlined />
            <span className="text">{comments}</span>
          </Styled.InteractionItem>
        </Styled.Interactions>
        {bottomExtends}
      </Styled.Content>
    </Container>
  );
};

const AuthorShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
});

const MetaShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
});

BlogInfo.propTypes = {
  el: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: AuthorShape.isRequired,
  category: MetaShape,
  tags: PropTypes.arrayOf(MetaShape.isRequired),
  publishedAt: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  coverImageURL: PropTypes.string,
  onClick: PropTypes.func,
  onClickAuthor: PropTypes.func,
  onClickCategory: PropTypes.func.isRequired,
  onClickTag: PropTypes.func.isRequired,
  titleExtends: PropTypes.node,
  usernameExtends: PropTypes.node,
  bottomExtends: PropTypes.node,
};

BlogInfo.Tag = Styled.Tag;

export default BlogInfo;
