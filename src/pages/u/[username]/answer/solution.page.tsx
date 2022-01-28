import * as React from 'react';
import { ParsedUrlQuery } from 'querystring';
// import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
// import { getPageQuery } from '~/utils/pagination.utils';
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
import { getPostFavoritesNumberByUsername, getPostsNumberByUsername } from '~/pages/u/[username]/username';
import { useRouter } from 'next/router';
import { filterSelectWidth } from '../common.styled';

interface IProps {
  username: string;
  badges: IRawBadges[];
  profile: IProfile;
  summary: IProfileSummary;
  postsNumber: number | null;
  postFavoritesNumber: number | null;
  answers: IUserAction[];
}
interface IQuery extends ParsedUrlQuery {
  username: string;
  page?: string;
  size?: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { username } = ctx.params;
  // const pageInfo = getPageQuery(ctx.query);
  const [i18nProps, badges, profile, summary, answers, postsNumber, postFavoritesNumber] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername(username),
    getUserProfileByUsername(username),
    getSummaryByUsername(username),
    getAnswersByUsername(username, true),
    getPostsNumberByUsername(username),
    getPostFavoritesNumberByUsername(username),
  ]);
  return {
    props: {
      ...i18nProps,
      username,
      badges,
      profile,
      summary,
      answers,
      postsNumber,
      postFavoritesNumber,
    },
  };
};

export default function ProfileAnswerPage(props: IProps) {
  const router = useRouter();
  const { badges, profile, summary, answers, username, postsNumber, postFavoritesNumber } = props;
  const askTugFavoritesNumber = summary.user_summary.bookmark_count;
  const allFavoritesNumber: number = askTugFavoritesNumber + (postFavoritesNumber ?? 0);
  // const router = useRouter();
  // const pageInfo = getPageQuery(router.query);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(answers);
  const [hasMore, setHasMore] = useState(data.length !== 0);
  const [loading, setLoading] = useState(false);
  const loadMoreData = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      const newData = await getAnswersByUsername(username, true, nextPage);
      setData((data) => [...data, ...newData]);
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
        post: postsNumber,
      }}
    >
      <CommonStyled.Action>
        <Tab
          selected={EUgcType.answer}
          nums={{
            answer: summary.user_summary.post_count,
            question: summary.user_summary.topic_count,
            post: postsNumber,
            favorite: allFavoritesNumber,
          }}
        />
        <Select
          defaultValue={'solution'}
          value={'solution'}
          onChange={(value) => router.push(`/u/${username}/answer/${value}`)}
          style={{ width: filterSelectWidth }}
        >
          <Select.Option value={''}>全部</Select.Option>
          <Select.Option value={'solution'}>被标记为解决方案</Select.Option>
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
