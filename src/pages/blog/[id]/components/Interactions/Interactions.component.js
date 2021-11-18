import React from 'react';
import * as Styled from './interactions.styled';
import {
  CommentOutlined,
  HeartFilled,
  HeartOutlined,
  ShareAltOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';
import { scroller } from 'react-scroll';
import { useFavorites, useLikes, useShares } from './interactions.hooks';

const Interactions = ({ blogInfo }) => {
  const { liked, like, likes } = useLikes(blogInfo);
  const { favorited, favorite, favorites } = useFavorites(blogInfo);
  const { share, shares } = useShares(blogInfo);

  return (
    <>
      <Interaction
        icon={CommentOutlined}
        count={blogInfo.comments}
        onClick={() => scroller.scrollTo('comments', { smooth: true })}
      />
      <Interaction icon={liked ? HeartFilled : HeartOutlined} count={likes} onClick={like} />
      <Interaction icon={favorited ? StarFilled : StarOutlined} count={favorites} onClick={favorite} />
      <Interaction icon={ShareAltOutlined} count={shares} onClick={share} />
    </>
  );
};

const Interaction = ({ icon: Icon, count, onClick }) => {
  return (
    <Styled.Interaction onClick={onClick}>
      <Icon />

      <span className="count">{count}</span>
    </Styled.Interaction>
  );
};

export default Interactions;
