import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';
import { Avatar, Divider, List, Modal, Tag } from 'antd';
import { MessageOutlined, LikeOutlined, EyeOutlined } from '@ant-design/icons';
import { api } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

import * as Styled from './home.styled';
import Layout from '~/pages/orgs/layout';
import { AuthContext, MeContext } from '~/context';
import { CommunityHead } from '~/components';
import { PageLoader } from '~/components';
import { errors } from '~/utils';
import { getI18nProps } from '~/utils/i18n.utils';
import UrgeButton from './urgeButton.component';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-orgs'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const PageContent = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { login, isAnonymous } = useContext(AuthContext);
  const { meData } = useContext(MeContext);
  const [urging, setUrging] = useState(false);
  const { slug } = router.query;
  const {
    data: topicsData,
    isValidating: isTopicsValidating,
    mutate,
  } = useSWR(slug && ['orgs.org.topics', JSON.stringify({ slug, page, pageSize })]);

  const { meta, topics } = topicsData?.data ?? {};

  if (isAnonymous) {
    login();
    return null;
  }

  if (!meData) {
    return <PageLoader />;
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
        await mutate();
        setUrging(false);
      });
  };

  const preUrge = (topicId) => {
    return api.orgs.org.urgeTopicCheck({ slug, topicId }).catch((err) => {
      Modal.warn({
        title: '无法加急主题',
        content: errors.getFirstApiErrorMsg(err),
        centered: true,
      });
    });
  };

  const jump = (topicSlug, topicId) => {
    window.open(`https://asktug.com/t/${topicSlug}/${topicId}`);
  };

  return (
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
                {topic.is_qa_topic && <UrgeButton topic={topic} urging={urging} urge={urge} preUrge={preUrge} />}
              </div>
            </div>
          </List.Item>
        )}
      />
    </Layout>
  );
};

const Page = () => (
  <>
    <CommunityHead title="团队主页" />
    <PageContent />
  </>
);

export default Page;
