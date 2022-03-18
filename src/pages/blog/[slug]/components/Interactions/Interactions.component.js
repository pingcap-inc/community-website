import React, { useState } from 'react';
import * as Styled from './interactions.styled';
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartFilled,
  HeartOutlined,
  PushpinFilled,
  PushpinOutlined,
  SendOutlined,
  ShareAltOutlined,
  StarFilled,
  StarOutlined,
  StopOutlined,
} from '@ant-design/icons';
import { scroller } from 'react-scroll';
import { useEdit, useFavorites, useLikes, useRecommend, useRemove, useReview, useShares } from './interactions.hooks';
import { usePrincipal } from '../../../blog.hooks';
import { Input, Modal, Popconfirm, Tooltip } from 'antd';

const Interactions = ({ blog, reload }) => {
  const { isLogin, isAuthor, hasAuthority } = usePrincipal();
  const isReviewer = hasAuthority('REVIEW_POST');

  const { liked, like, likes } = useLikes(blog, isLogin);
  const { favorited, favorite, favorites } = useFavorites(blog, isLogin);
  const { share, shares } = useShares(blog, isLogin);
  const { edit } = useEdit(blog);
  const { publish, reject } = useReview(blog, reload);
  const { remove } = useRemove(blog);
  const { recommended, recommend } = useRecommend(blog, reload);

  const [isRejectReasonModalVisible, setIsRejectReasonModalVisible] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const handleOk = () => {
    reject(rejectReason);
    setIsRejectReasonModalVisible(false);
  };
  const handleCancel = () => {
    setIsRejectReasonModalVisible(false);
  };

  const actions = [];
  const adminActions = [];
  if (blog.status === 'PUBLISHED') {
    actions.push(
      <Tooltip placement="rightTop" title={'评论'}>
        <Interaction
          key="comments"
          icon={<CommentOutlined />}
          count={blog.comments}
          onClick={() => scroller.scrollTo('comments', { smooth: true })}
        />
      </Tooltip>,
      <Tooltip placement="rightTop" title={'点赞'}>
        <Interaction
          key="likes"
          icon={liked ? <HeartFilled style={{ color: '#be1d32' }} /> : <HeartOutlined />}
          count={likes}
          onClick={like}
        />
      </Tooltip>,
      <Tooltip placement="rightTop" title={'收藏'}>
        <Interaction
          key="favorites"
          icon={favorited ? <StarFilled style={{ color: '#f8c200' }} /> : <StarOutlined />}
          count={favorites}
          onClick={favorite}
        />
      </Tooltip>,
      <Tooltip placement="rightTop" title={'分享'}>
        <Interaction key="shares" icon={<ShareAltOutlined />} count={shares} onClick={share} />
      </Tooltip>
    );
    if (hasAuthority('RECOMMEND_POST')) {
      adminActions.push(
        <Tooltip placement="rightTop" title={'置顶'}>
          <Interaction
            key="recommend"
            icon={recommended ? <PushpinFilled /> : <PushpinOutlined />}
            onClick={recommend}
          />
        </Tooltip>
      );
    }
  }
  if (isAuthor(blog) || isReviewer) {
    adminActions.push(
      <Tooltip placement="rightTop" title={'删除'}>
        <Interaction key="remove" icon={<DeleteOutlined />} count={remove} onClick={remove} name="remove" />
      </Tooltip>
    );
    adminActions.push(
      <Tooltip placement="rightTop" title={'编辑'}>
        <Interaction key="edit" icon={<EditOutlined />} onClick={edit} />
      </Tooltip>
    );
  }
  if (blog.status === 'PENDING' && isReviewer) {
    adminActions.push(
      <Tooltip placement="rightTop" title={'发布'}>
        <Interaction key="publish" icon={<SendOutlined />} onClick={publish} />
      </Tooltip>,
      <Tooltip placement="rightTop" title={'拒绝'}>
        <Interaction key="reject" icon={<StopOutlined />} onClick={() => setIsRejectReasonModalVisible(true)} />
      </Tooltip>
    );
  }

  return (
    <>
      <Styled.Interactions>
        <Styled.Actions>{actions}</Styled.Actions>
        {adminActions.length !== 0 && actions.length !== 0 && <Styled.Divided />}
        <Styled.Actions>{adminActions}</Styled.Actions>
      </Styled.Interactions>
      <Modal
        title="请输入拒绝理由"
        visible={isRejectReasonModalVisible}
        o
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Input.TextArea onChange={(event) => setRejectReason(event.target.value)} />
      </Modal>
    </>
  );
};

const Interaction = ({ icon, count, onClick, name, ...rest }) => {
  if (name === 'remove') {
    return (
      <Popconfirm
        placement="topLeft"
        title={'是否确定删除该文章？删除后将自动扣减该文章带来的所有积分&经验值（此操作不可撤销）'}
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
    <Styled.Interaction onClick={onClick} {...rest}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Count>{typeof count === 'number' && count}</Styled.Count>
    </Styled.Interaction>
  );
};

export default Interactions;
