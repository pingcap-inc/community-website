import React, { useState } from 'react';
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
import { Input, Modal, Popconfirm, Tooltip } from 'antd';

const Interactions = ({ blogInfo, reload }) => {
  const { isLogin, isAuthor, hasAuthority } = usePrincipal();

  const { liked, like, likes } = useLikes(blogInfo, isLogin);
  const { favorited, favorite, favorites } = useFavorites(blogInfo, isLogin);
  const { share, shares } = useShares(blogInfo, isLogin);
  const { edit } = useEdit(blogInfo);
  const { publish, reject } = useReview(blogInfo, reload);
  const { remove } = useRemove(blogInfo);
  const { recommended, recommend } = useRecommend(blogInfo, reload);

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
  if (blogInfo.status === 'PUBLISHED') {
    actions.push(
      <Tooltip placement="rightTop" title={'评论'}>
        <Interaction
          key="comments"
          icon={<CommentOutlined />}
          count={blogInfo.comments}
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
  if (blogInfo.status === 'DRAFT' || isAuthor(blogInfo)) {
    adminActions.push(
      <Tooltip placement="rightTop" title={'删除'}>
        <Interaction key="remove" icon={<DeleteOutlined />} count={remove} onClick={remove} name="remove" />
      </Tooltip>
    );
  }
  if (isAuthor(blogInfo) || hasAuthority('REVIEW_POST')) {
    adminActions.push(
      <Tooltip placement="rightTop" title={'编辑'}>
        <Interaction key="edit" icon={<EditOutlined />} onClick={edit} />
      </Tooltip>
    );
  }
  if (blogInfo.status === 'PENDING' && hasAuthority('REVIEW_POST')) {
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
    <Styled.Interaction onClick={onClick} {...rest}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Count>{typeof count === 'number' && count}</Styled.Count>
    </Styled.Interaction>
  );
};

export default Interactions;
