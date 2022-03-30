import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import * as Styled from './comments.styled';
import { Avatar, Button, Col, Comment, Input, List, message, Pagination, Popconfirm, Row, Skeleton } from 'antd';
import { AuthContext, MeContext } from '~/context';
import { api } from '@tidb-community/datasource';
import { useComments } from './components.hooks';
import { Element } from 'react-scroll';
import { formatIsoDatetime } from '~/utils/common.utils';
import { usePrincipal } from '~/pages/blog/blog.hooks';

const Comments = ({ blog, onTotalCommentsChange }) => {
  const [tick, setTick] = useState(0);
  const [replyTo, setReplyTo] = useState(undefined);

  const onCommented = () => {
    setReplyTo(undefined);
    setTick((tick) => tick + 1);
  };

  const onClearReplyTo = () => {
    setReplyTo(undefined);
  };

  const onClickDelete = async (blog, commentInfo, reload) => {
    const blogId = blog.id;
    const commentId = commentInfo.id;
    try {
      await api.blog.posts.post.delComment(blogId, commentId);
      reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Element name="comments">
      <Styled.CommentsContainer>
        <Styled.Title>评论</Styled.Title>

        <CommentInput blog={blog} onCommented={onCommented} onClearReplyTo={onClearReplyTo} replyTo={replyTo} />

        <CommentList
          blog={blog}
          tick={tick}
          onClickReply={setReplyTo}
          onClickDelete={onClickDelete}
          onTotalCommentsChange={onTotalCommentsChange}
        />
      </Styled.CommentsContainer>
    </Element>
  );
};

const CommentInput = ({ blog, onCommented, onClearReplyTo, replyTo }) => {
  const { meData, isMeValidating } = useContext(MeContext);
  const { login } = useContext(AuthContext);
  const [comment, setComment] = useState('');

  const onComment = () => {
    api.blog.posts.post
      .comment(blog.id, comment, replyTo?.id)
      .then(() => {
        setComment('');
        onCommented?.();
      })
      .catch((error) => {
        message.error(error.message);
      });
  };

  const onChange = (event) => {
    setComment(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.code === 'Backspace' && comment === '') {
      onClearReplyTo();
    }
  };

  if (isMeValidating) {
    return <Comment content={<Skeleton.Input active />} avatar={<Skeleton.Avatar active />} />;
  }

  if (!meData) {
    return (
      <Styled.LoginAlert>
        请 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a type="link" onClick={() => login()}>
          登录
        </a>{' '}
        以继续评论
      </Styled.LoginAlert>
    );
  }

  return (
    <Comment
      avatar={<Avatar src={meData.avatar_url} />}
      content={
        <Row gutter={8}>
          <Col flex="auto">
            <Input
              placeholder="添加评论"
              value={comment}
              onChange={onChange}
              onKeyDown={onKeyDown}
              prefix={replyTo ? <span>回复 @{replyTo.commenter.username || replyTo.commenter.name}</span> : undefined}
            />
          </Col>
          <Col span="56px">
            <Button disabled={comment === ''} htmlType="button" size="small" type="primary" onClick={onComment}>
              评论
            </Button>
          </Col>
        </Row>
      }
    />
  );
};

const CommentList = ({ blog, tick, onClickReply, onClickDelete, onTotalCommentsChange }) => {
  const { meData } = useContext(MeContext);
  const [page, setPage] = useState(1);

  const { loading, comments, totalComments, reload } = useComments(blog.id, page);

  useEffect(() => {
    onTotalCommentsChange?.(totalComments);
  }, [onTotalCommentsChange, totalComments]);

  const { id, isAuthor, hasAuthority } = usePrincipal();
  const hasDeleteCommentPermission = isAuthor(blog) || hasAuthority('REVIEW_POST');

  useEffect(() => {
    reload(tick);
  }, [reload, tick]);

  return (
    <>
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={comments}
        locale={{ emptyText: '暂无评论' }}
        renderItem={(item) => {
          const commenterUserURL = `/u/${item.commenter.username}`;
          return (
            <li>
              <Comment
                author={<Link href={commenterUserURL}>{item.commenter.username}</Link>}
                avatar={
                  <Link href={commenterUserURL}>
                    <Avatar src={item.commenter.avatarURL} />
                  </Link>
                }
                content={
                  (item.repliedTo ? `回复 @${item.repliedTo.username || item.repliedTo.name}：` : '') + item.content
                }
                datetime={formatIsoDatetime(item.createdAt)}
                actions={
                  meData
                    ? [
                        <span key="reply" onClick={() => onClickReply(item)}>
                          回复
                        </span>,
                        (hasDeleteCommentPermission || item.commenter.id === id) && (
                          <Popconfirm
                            placement="topLeft"
                            title={'你确认要删除此评论吗？'}
                            onConfirm={() => onClickDelete(blog, item, reload)}
                            okText="确认"
                            cancelText="取消"
                          >
                            <span key="delete">删除</span>
                          </Popconfirm>
                        ),
                      ]
                    : undefined
                }
              />
            </li>
          );
        }}
      />
      <Styled.CommentListPagination>
        <Pagination pageSize={10} current={page} onChange={(page) => setPage(page)} total={totalComments} />
      </Styled.CommentListPagination>
    </>
  );
};

export default Comments;
