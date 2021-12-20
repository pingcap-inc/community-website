import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Link from 'next/link';

import * as Styled from './blogInfo.styled';
import { Avatar } from 'antd';
import { HeartOutlined, MessageOutlined, PushpinOutlined } from '@ant-design/icons';

const BlogInfo = ({
  id,
  slug,
  usernameExtends = undefined,
  publishedAt,
  title,
  titleExtends = undefined,
  category = undefined,
  tags,
  likes,
  comments,
  bottomExtends,
  coverImageURL = undefined,
  author,
  recommended = false,
}) => {
  const publishedAtFormatted = useMemo(() => {
    if (publishedAt) {
      return dayjs(publishedAt).format('YYYY-MM-DD HH:mm');
    } else {
      return '未发布';
    }
  }, [publishedAt]);

  return (
    <Styled.Container>
      {coverImageURL && coverImageURL.length !== 0 && (
        <Styled.CoverImageContainer>
          <Styled.CoverImage style={{ backgroundImage: `url(${JSON.stringify(coverImageURL)})` }} />
        </Styled.CoverImageContainer>
      )}
      <Styled.Content>
        <Styled.Author>
          <Link href={`/blog/user/${author.id}`} passHref>
            <Styled.AuthorAvatar>
              <Avatar size={Styled.avatarSize} src={author.avatarURL} />
            </Styled.AuthorAvatar>
          </Link>
          <Styled.AuthorInfo>
            <Styled.AuthorName>
              <Link href={`/blog/user/${author.id}`} passHref>
                <Styled.AuthorNameBase>{author.username || author.name}</Styled.AuthorNameBase>
              </Link>
              <Styled.AuthorNameExtend>{usernameExtends}</Styled.AuthorNameExtend>
            </Styled.AuthorName>
            <Styled.AuthorPublishedAt>{publishedAtFormatted}</Styled.AuthorPublishedAt>
          </Styled.AuthorInfo>
        </Styled.Author>
        <Styled.Title>
          {recommended && <PushpinOutlined style={{ marginRight: 8, fontSize: 20 }} />}
          <Link href={`/blog/${slug}`}>{title === '' ? ' [未填写文章标题] ' : title}</Link>
          {titleExtends}
        </Styled.Title>
        <Styled.Meta>
          {category && (
            <Link href={`/blog/c/${category.slug}`} passHref>
              <Styled.Category>{category.name}</Styled.Category>
            </Link>
          )}
          {tags?.map((tag) => (
            <Link key={tag.slug} href={`/blog/tag/${tag.slug}`} passHref>
              <Styled.Tag key={tag.id}>{tag.name}</Styled.Tag>
            </Link>
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
    </Styled.Container>
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
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: AuthorShape.isRequired,
  category: MetaShape,
  tags: PropTypes.arrayOf(MetaShape.isRequired),
  publishedAt: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  coverImageURL: PropTypes.string,
  titleExtends: PropTypes.node,
  usernameExtends: PropTypes.node,
  bottomExtends: PropTypes.node,
};

BlogInfo.Tag = Styled.Tag;

export default BlogInfo;
