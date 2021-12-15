import React from 'react';
import * as Styled from './interactions.styled';
import {
  CommentOutlined,
  EditOutlined,
  HeartTwoTone,
  HeartOutlined,
  SendOutlined,
  ShareAltOutlined,
  StarTwoTone,
  StarOutlined,
  StopOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { scroller } from 'react-scroll';
import { useEdit, useFavorites, useLikes, useRemove, useReview, useShares } from './interactions.hooks';
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

  const actions = [];
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
        icon={liked ? <HeartTwoTone twoToneColor={'#be1d32'} /> : <HeartOutlined />}
        count={likes}
        onClick={like}
      />,
      <Interaction
        key="favorites"
        icon={favorited ? <StarTwoTone twoToneColor={'#f8c200'} /> : <StarOutlined />}
        count={favorites}
        onClick={favorite}
      />,
      <Interaction key="shares" icon={<ShareAltOutlined />} count={shares} onClick={share} />
    );
  }
  if (blogInfo.status === 'DRAFT' || isAuthor(blogInfo)) {
    actions.push(<Interaction key="remove" icon={<DeleteOutlined />} count={remove} onClick={remove} name="remove" />);
  }
  if (isAuthor(blogInfo)) {
    actions.push(<Interaction key="edit" icon={<EditOutlined />} onClick={edit} />);
  }
  if (blogInfo.status === 'PENDING' && hasAuthority('REVIEW_POST')) {
    actions.push(
      <Interaction key="publish" icon={<SendOutlined />} onClick={publish} />,
      <Interaction key="reject" icon={<StopOutlined />} onClick={reject} />
    );
  }

  return <>{actions}</>;
};

const Interaction = ({ icon, twoToneColor, count, onClick, name }) => {
  if (name === 'remove') {
    return (
      <Popconfirm
        placement="topLeft"
        title={'请确认是否删除？（此操作不可撤销）'}
        onConfirm={onClick}
        okText="确认"
        cancelText="取消"
      >
        <Styled.Interaction>{icon}</Styled.Interaction>
      </Popconfirm>
    );
  }
  return (
    <Styled.Interaction onClick={onClick}>
      {icon}

      {typeof count === 'number' ? <span className="count">{count}</span> : undefined}
    </Styled.Interaction>
  );
};

export default Interactions;
