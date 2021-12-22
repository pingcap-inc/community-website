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
  DeleteOutlined,
  PushpinFilled,
  PushpinOutlined,
} from '@ant-design/icons';
import { scroller } from 'react-scroll';
import { useEdit, useFavorites, useLikes, useRecommend, useRemove, useReview, useShares } from './interactions.hooks';
import { usePrincipal } from '../../../blog.hooks';
import { Popconfirm } from 'antd';

const Interactions = ({ blogInfo, reload }) => {
  const { isLogin, isAuthor, hasAuthority } = usePrincipal();

  const { liked, like, likes } = useLikes(blogInfo, isLogin);
  const { favorited, favorite, favorites } = useFavorites(blogInfo, isLogin);
  const { share, shares } = useShares(blogInfo, isLogin);
  const { edit } = useEdit(blogInfo);
  const { publish, reject } = useReview(blogInfo, reload);
  const { remove } = useRemove(blogInfo);
  const { recommended, recommend } = useRecommend(blogInfo, reload);

  const actions = [];
  const adminActions = [];
  if (blogInfo.status === 'PUBLISHED') {
    actions.push(
      <Interaction
        key="comments"
        icon={<CommentOutlined />}
        count={blogInfo.comments}
        onClick={() => scroller.scrollTo('comments', { smooth: true })}
      />,
      <Interaction
        key="likes"
        icon={liked ? <HeartFilled style={{ color: '#be1d32' }} /> : <HeartOutlined />}
        count={likes}
        onClick={like}
      />,
      <Interaction
        key="favorites"
        icon={favorited ? <StarFilled style={{ color: '#f8c200' }} /> : <StarOutlined />}
        count={favorites}
        onClick={favorite}
      />,
      <Interaction key="shares" icon={<ShareAltOutlined />} count={shares} onClick={share} />
    );
    if (hasAuthority('RECOMMEND_POST')) {
      adminActions.push(
        <Interaction key="recommend" icon={recommended ? <PushpinFilled /> : <PushpinOutlined />} onClick={recommend} />
      );
    }
  }
  if (blogInfo.status === 'DRAFT' || isAuthor(blogInfo)) {
    adminActions.push(
      <Interaction key="remove" icon={<DeleteOutlined />} count={remove} onClick={remove} name="remove" />
    );
  }
  if (isAuthor(blogInfo) || hasAuthority('REVIEW_POST')) {
    adminActions.push(<Interaction key="edit" icon={<EditOutlined />} onClick={edit} />);
  }
  if (blogInfo.status === 'PENDING' && hasAuthority('REVIEW_POST')) {
    adminActions.push(
      <Interaction key="publish" icon={<SendOutlined />} onClick={publish} />,
      <Interaction key="reject" icon={<StopOutlined />} onClick={reject} />
    );
  }

  return (
    <Styled.Interactions>
      <Styled.Actions>{actions}</Styled.Actions>
      {adminActions.length !== 0 && <Styled.Divided />}
      <Styled.Actions>{adminActions}</Styled.Actions>
    </Styled.Interactions>
  );
};

const Interaction = ({ icon, count, onClick, name }) => {
  if (name === 'remove') {
    return (
      <Popconfirm
        placement="topLeft"
        title={'请确认是否删除？（此操作不可撤销）'}
        onConfirm={onClick}
        okText="确认"
        cancelText="取消"
      >
        <Styled.Interaction>
          <Styled.Icon>{icon}</Styled.Icon>
        </Styled.Interaction>
      </Popconfirm>
    );
  }
  return (
    <Styled.Interaction onClick={onClick}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Count>{typeof count === 'number' && count}</Styled.Count>
    </Styled.Interaction>
  );
};

export default Interactions;
