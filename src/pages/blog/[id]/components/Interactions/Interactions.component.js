import React from 'react';
import * as Styled from './interactions.styled';
import {
  CommentOutlined,
  EditOutlined,
  HeartFilled,
  HeartOutlined,
  SendOutlined,
  ShareAltOutlined,
  StarFilled,
  StarOutlined,
  StopOutlined,
} from '@ant-design/icons';
import { scroller } from 'react-scroll';
import { useEdit, useFavorites, useLikes, useReview, useShares } from './interactions.hooks';
import { usePrincipal } from '../../../blog.hooks';

const Interactions = ({ blogInfo, reload }) => {
  const { liked, like, likes } = useLikes(blogInfo);
  const { favorited, favorite, favorites } = useFavorites(blogInfo);
  const { share, shares } = useShares(blogInfo);
  const { edit } = useEdit(blogInfo);
  const { publish, reject } = useReview(blogInfo, reload);

  const { isAuthor, hasAuthority } = usePrincipal();

  const actions = [];
  if (blogInfo.status === 'PUBLISHED') {
    actions.push(
      <Interaction
        key="comments"
        icon={CommentOutlined}
        count={blogInfo.comments}
        onClick={() => scroller.scrollTo('comments', { smooth: true })}
      />,
      <Interaction key="likes" icon={liked ? HeartFilled : HeartOutlined} count={likes} onClick={like} />,
      <Interaction key="favorites" icon={favorited ? StarFilled : StarOutlined} count={favorites} onClick={favorite} />,
      <Interaction key="shares" icon={ShareAltOutlined} count={shares} onClick={share} />
    );
  }
  if (isAuthor(blogInfo)) {
    actions.push(<Interaction key="edit" icon={EditOutlined} onClick={edit} />);
  }
  if (blogInfo.status === 'PENDING' && hasAuthority('REVIEW_POST')) {
    actions.push(
      <Interaction key="publish" icon={SendOutlined} onClick={publish} />,
      <Interaction key="reject" icon={StopOutlined} onClick={reject} />
    );
  }

  return <>{actions}</>;
};

const Interaction = ({ icon: Icon, count, onClick }) => {
  return (
    <Styled.Interaction onClick={onClick}>
      <Icon />

      {typeof count === 'number' ? <span className="count">{count}</span> : undefined}
    </Styled.Interaction>
  );
};

export default Interactions;
