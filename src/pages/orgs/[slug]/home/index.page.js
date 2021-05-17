import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';
import { Avatar, Button, Divider, List, Modal, Popconfirm, Tag } from 'antd';
import { MessageOutlined, ThunderboltFilled, LikeOutlined, EyeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { api } from '@tidb-community/datasource';

import * as Styled from './home.styled';
import { CommunityHead } from 'components/head';
import Layout from 'pages/orgs/layout';
import { MeContext, NavContext } from 'context';
import PageLoader from 'components/pageLoader';
import { errors, featureToggle } from 'utils';

export const getServerSideProps = async ({ req }) => {
  const host = process.env.VERCEL_URL || req.headers.host;

  const isEabled = featureToggle.isFeatureEnabled({
    host,
    name: featureToggle.FEATURES.ORGANIZATOIN_MEMBERS,
  });

  if (!isEabled) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

const Home = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { meData, isMeValidating, mutateMe } = useContext(MeContext);
  const { login } = useContext(NavContext);
  const [urging, setUrging] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const {
    data: topicsData,
    isValidating: isTopicsValidating,
    revalidate,
  } = useSWR(['orgs.org.topics', JSON.stringify({ slug, page, pageSize })]);
  const { data: orgData } = useSWR(['orgs.org.info', JSON.stringify({ slug })]);

  const { meta, topics } = topicsData?.data ?? {};
  const { topic_urgency_remain_times: topicUrgencyRemainTimes = 0 } = orgData?.data ?? {};

  if (!meData) {
    if (isMeValidating) {
      return <PageLoader />;
    } else {
      login();
      return null;
    }
  }

  const urge = (topicId) => {
    setUrging(true);
    return api.orgs.org
      .urgeTopic({ slug, topicId })
      .catch((err) => {
        Modal.warn({
          title: '无法加急主题',
          content: errors.getFirstApiErrorMsg(err),
          centered: true,
        });
      })
      .finally(async () => {
        await mutateMe();
        await revalidate();
        setUrging(false);
      });
  };

  const jump = (topicSlug, topicId) => {
    window.open(`https://asktug.com/t/${topicSlug}/${topicId}`);
  };

  return (
    <>
      <CommunityHead title="团队主页" />

      <Layout>
        <Styled.List
          loading={isTopicsValidating}
          dataSource={topics}
          pagination={{
            current: page,
            pageSize: pageSize,
            total: meta?.topics_count ?? 0,
            size: 'small',
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
          header={
            <Styled.ListHeading>
              全部主题
              <Styled.Badge count={meta?.topics_count ?? 0} />
            </Styled.ListHeading>
          }
          renderItem={(topic) => (
            <List.Item>
              <div>
                <Styled.TopicTitle onClick={() => jump(topic.slug, topic.id)}>{topic.title}</Styled.TopicTitle>
                <div>
                  {[topic.category.name].map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <p>{topic.excerpt}</p>
                <div className="meta">
                  <div className="author">
                    <Avatar src={topic.creator.avatar_url} size={20} />
                    <span className="name">{topic.creator.username}</span>
                    发布了主题
                  </div>
                  <span className="time">{dayjs(topic.created_at).format('YYYY-MM-DD HH:mm')}</span>
                </div>
                <div className="stats">
                  <span className="stat">
                    <EyeOutlined />
                    &nbsp;
                    {topic.views}
                  </span>
                  <span className="stat">
                    <LikeOutlined />
                    &nbsp;
                    {topic.like_count}
                  </span>
                  <span className="stat">
                    <MessageOutlined />
                    &nbsp;
                    {topic.reply_count}
                  </span>
                  <Divider type="vertical" />
                  <Popconfirm
                    placement="rightTop"
                    icon={<Styled.InfoCircleFilled />}
                    okText="确定"
                    cancelText="取消"
                    onConfirm={() => urge(topic.id)}
                    disabled={urging || topic.urgencies.length}
                    title={
                      <Styled.PopContent>
                        发送主题至社区用户组，加快相应
                        <br />
                        速度（今日剩余 {topicUrgencyRemainTimes} 次机会）
                      </Styled.PopContent>
                    }
                    okButtonProps={{
                      disabled: topicUrgencyRemainTimes === 0 || topic.urgencies.length,
                      loading: urging,
                    }}
                  >
                    <Button icon={<ThunderboltFilled />} size="small" disabled={urging || topic.urgencies.length}>
                      {topic.urgencies.length ? '已加急' : '加急'}
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Layout>
    </>
  );
};

export default Home;
