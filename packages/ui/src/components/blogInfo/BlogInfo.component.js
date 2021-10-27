import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './blogInfo.styled';
import { Avatar } from 'antd';
import { HeartOutlined, MessageOutlined } from '@ant-design/icons';

const BlogInfo = ({
  el = 'div',
  avatarUrl,
  username,
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
}) => {
  const Container = useMemo(() => {
    return Styled.makeContainer(el);
  }, [el]);

  return (
    <Container>
      <Styled.Content>
        <Styled.Author>
          <Styled.AuthorAvatar>
            <Avatar size={Styled.avatarSize} src={avatarUrl} />
          </Styled.AuthorAvatar>
          <Styled.AuthorInfo>
            <Styled.AuthorName>
              {username}
              {usernameExtends}
            </Styled.AuthorName>
            <Styled.AuthorPublishedAt>{publishedAt}</Styled.AuthorPublishedAt>
          </Styled.AuthorInfo>
        </Styled.Author>
        <Styled.Title>
          {title}
          {titleExtends}
        </Styled.Title>
        <Styled.Meta>
          {category && <Styled.Category onClick={() => onClickCategory(category)}>{category}</Styled.Category>}
          {tags.map((tag, i) => (
            <Styled.Tag key={tag} onClick={() => onClickTag(tag, i)}>
              {tag}
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

BlogInfo.propTypes = {
  el: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleExtends: PropTypes.node,
  category: PropTypes.string,
  onClickCategory: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClickTag: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string.isRequired, // DEV: https://cdn.fakercloud.com/avatars/bassamology_128.jpg
  username: PropTypes.string.isRequired,
  usernameExtends: PropTypes.node,
  publishedAt: PropTypes.string.isRequired,
  interactions: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }),
  bottomExtends: PropTypes.node,
};

export default BlogInfo;
