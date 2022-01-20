import * as React from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import { getPageQuery } from '~/utils/pagination.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Divider, List, Select, Skeleton } from 'antd';
import ListItem from '../_components/ListItem';
import {
  getAnswersByUsername,
  getBadgesByUsername,
  getSummaryByUsername,
  getTopicUrl,
  getUserProfileByUsername,
  IProfile,
  IProfileSummary,
  IRawBadges,
  IUserAction,
} from '../api';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

interface IProps {
  badges: IRawBadges[];
  profile: IProfile;
  summary: IProfileSummary;
  answers: IUserAction[];
  username: string;
}
interface IQuery extends ParsedUrlQuery {
  username: string;
  page?: string;
  size?: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { username } = ctx.params;
  const pageInfo = getPageQuery(ctx.query);
  const [i18nProps, badges, profile, summary, answers] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername(username),
    getUserProfileByUsername(username),
    getSummaryByUsername(username),
    getAnswersByUsername(username, pageInfo.page, pageInfo.size),
  ]);
  return { props: { ...i18nProps, badges, profile, summary, answers, username } };
};

export default function ProfileAnswerPage(props: IProps) {
  const { badges, profile, summary, answers, username } = props;
  const router = useRouter();
  const pageInfo = getPageQuery(router.query);
  const [page, setPage] = useState(pageInfo.page);
  const [data, setData] = useState(answers);
  const [hasMore, setHasMore] = useState(data.length !== 0);
  const [loading, setLoading] = useState(false);
  const loadMoreData = async () => {
    setLoading(true);
    try {
      const newData = await getAnswersByUsername(username, page, pageInfo.size);
      setData((data) => [...data, ...newData]);
      setPage((page) => page + 1);
      setHasMore(newData.length !== 0);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <ProfileLayout
      badges={badges}
      profile={profile}
      nums={{
        like: summary.user_summary.likes_received,
        answer: summary.user_summary.post_count,
      }}
    >
      <CommonStyled.Action>
        <Tab
          selected={EUgcType.answer}
          nums={{
            answer: summary.user_summary.post_count,
            question: summary.user_summary.topic_count,
            // post: summary.user_summary.post_count,
            // favorite: summary.user_summary.post_count,
          }}
        />
        <Select defaultValue={''}>
          <Select.Option value={''}>回答状态</Select.Option>
          <Select.Option value={'1'}>回答状态</Select.Option>
          <Select.Option value={'2'}>回答状态</Select.Option>
        </Select>
      </CommonStyled.Action>
      <CommonStyled.List>
        {/*{answers.map((value) => (*/}
        {/*  <ListItem*/}
        {/*    key={value.post_id}*/}
        {/*    url={getTopicUrl(value.topic_id, value.post_number)}*/}
        {/*    title={value.title}*/}
        {/*    summary={value.excerpt}*/}
        {/*    metadataEnd={getRelativeDatetime(value.created_at)}*/}
        {/*  />*/}
        {/*))}*/}
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={
            loading && (
              <div style={{ marginTop: '16px' }}>
                <Skeleton avatar paragraph={{ rows: 1 }} active />
              </div>
            )
          }
          endMessage={data.length !== 0 && <Divider plain>没有更多内容了</Divider>}
        >
          <List
            dataSource={data}
            loading={loading}
            locale={{ emptyText: '暂无数据' }}
            renderItem={(value) => {
              return (
                <ListItem
                  key={value.post_id}
                  url={getTopicUrl(value.topic_id, value.post_number)}
                  title={value.title}
                  summary={value.excerpt}
                  metadataEnd={getRelativeDatetime(value.created_at)}
                />
              );
            }}
          />
        </InfiniteScroll>
      </CommonStyled.List>
    </ProfileLayout>
  );
}
