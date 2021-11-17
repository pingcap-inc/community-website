import React, { useContext, useEffect, useState } from 'react';
import * as Styled from './comments.styled';
import { Alert, Avatar, Button, Col, Comment, Divider, Input, List, Pagination, Row, Skeleton } from 'antd';
import { AuthContext, MeContext } from '~/context';
import { api } from '@tidb-community/datasource';
import { useComments } from './components.hooks';

const Comments = ({ blogInfo }) => {
  const [tick, setTick] = useState(0);

  return (
    <Styled.CommentsContainer>
      <Styled.Title>评论</Styled.Title>

      <CommentInput blogInfo={blogInfo} onCommented={(tick) => setTick(tick + 1)} />

      <CommentList blogInfo={blogInfo} tick={tick} />
    </Styled.CommentsContainer>
  );
};

const CommentInput = ({ blogInfo, onCommented }) => {
  const { meData, isMeValidating } = useContext(MeContext);
  const { login } = useContext(AuthContext);
  const [comment, setComment] = useState('');

  const onComment = () => {
    api.blog.posts.post.comment(blogInfo.id, comment).then(() => {
      onCommented?.();
    });
  };

  if (isMeValidating) {
    return <Comment content={<Skeleton.Input active />} avatar={<Skeleton.Avatar active />} />;
  }

  if (!meData) {
    return (
      <Alert
        message={
          <p>
            请&nbsp;
            <a type="link" onClick={() => login()}>
              登录
            </a>
            &nbsp;以继续评论
          </p>
        }
      />
    );
  }

  return (
    <Comment
      avatar={<Avatar src={meData.avatar_url} />}
      content={
        <Row gutter={8}>
          <Col flex="auto">
            <Input placeholder="添加评论" value={comment} onChange={(event) => setComment(event.target.value)} />
          </Col>
          <Col span="56px">
            <Button htmlType="button" size="small" type="primary" onClick={onComment}>
              评论
            </Button>
          </Col>
        </Row>
      }
    />
  );
};

const CommentList = ({ blogInfo, tick }) => {
  const [page, setPage] = useState(1);

  const { loading, comments, totalComments, reload } = useComments(blogInfo.id, page);

  useEffect(() => {
    reload(tick);
  }, [reload, tick]);

  return (
    <>
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <li>
            <Comment
              author={item.commenter.username}
              avatar={item.commenter.avatarURL}
              content={item.content}
              datetime={item.createdAt}
            />
          </li>
        )}
      />
      <Pagination pageSize={10} current={page} onChange={(page) => setPage(page)} total={totalComments} />
    </>
  );
};

export default Comments;
