import React, { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';
import { Avatar, Badge, Button, Divider, List, Tag } from 'antd';
import { MessageOutlined, ThunderboltFilled, LikeOutlined, EyeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import * as Styled from './home.styled';
import { CommunityHead } from 'components/head';
import Layout from 'pages/orgs/layout';

const Home = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { slug } = router.query;
  const params = useMemo(() => ({ slug, page, pageSize }), [slug, page, pageSize]);
  const { data, isValidating } = useSWR(['orgs.org.topics', params]);

  const { meta, topics } = data?.data ?? {};

  return (
    <>
      <CommunityHead title="团队主页" />

      <Layout>
        <Styled.List
          loading={isValidating}
          dataSource={topics}
          pagination={{
            current: page,
            pageSize: pageSize,
            total: meta?.topics ?? 0,
            hideOnSinglePage: true,
            size: 'small',
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
          header={
            <Styled.ListHeading>
              全部主题
              <Badge count={meta?.topics ?? 0} />
            </Styled.ListHeading>
          }
          renderItem={(topic) => (
            <List.Item>
              <div>
                <h3>{topic.title}</h3>
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
                  <Button icon={<ThunderboltFilled />} size="small">
                    {topic.urgencies.length ? '已加急' : '加急'}
                  </Button>
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
