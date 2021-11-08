import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

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
  interactions = undefined,
  bottomExtends,
  coverImageUrl = undefined,
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

  return (
    <Container>
      {coverImageUrl && (
        <Styled.CoverImageContainer>
          <Styled.CoverImage style={{ backgroundImage: `url(${coverImageUrl})` }} onClick={handleClick} />
        </Styled.CoverImageContainer>
      )}
      <Styled.Content>
        <Styled.Author>
          <Styled.AuthorAvatar onClick={handleClickAuthor}>
            <Avatar size={Styled.avatarSize} src={author.avatarUrl} />
          </Styled.AuthorAvatar>
          <Styled.AuthorInfo>
            <Styled.AuthorName onClick={handleClickAuthor}>
              {author.username}
              {usernameExtends}
            </Styled.AuthorName>
            <Styled.AuthorPublishedAt>{publishedAt}</Styled.AuthorPublishedAt>
          </Styled.AuthorInfo>
        </Styled.Author>
        <Styled.Title onClick={handleClick}>
          {title}
          {titleExtends}
        </Styled.Title>
        <Styled.Meta>
          {category && <Styled.Category onClick={handleClickCategory}>{category.name}</Styled.Category>}
          {tags.map((tag, i) => (
            <Styled.Tag key={tag.id} onClick={() => onClickTag(tag)}>
              {tag.name}
            </Styled.Tag>
          ))}
        </Styled.Meta>
        {interactions && (
          <Styled.Interactions>
            <Styled.InteractionItem>
              <HeartOutlined />
              <span className="text">{interactions.likes}</span>
            </Styled.InteractionItem>
            <Styled.InteractionItem>
              <MessageOutlined />
              <span className="text">{interactions.comments}</span>
            </Styled.InteractionItem>
          </Styled.Interactions>
        )}
        {bottomExtends}
      </Styled.Content>
    </Container>
  );
};

const AuthorShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
});

const MetaShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.number.isRequired,
});

BlogInfo.propTypes = {
  el: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: AuthorShape.isRequired,
  category: MetaShape,
  tags: PropTypes.arrayOf(MetaShape.isRequired).isRequired,
  publishedAt: PropTypes.string.isRequired,
  interactions: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }),
  coverImageUrl: PropTypes.string,
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
