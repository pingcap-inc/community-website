import * as React from 'react';
import { useState } from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Divider, List, Skeleton } from 'antd';
import ListItem from '../_components/ListItem';
import {
  getAskTugFavoritesByUsername,
  getBadgesByUsername,
  getSummaryByUsername,
  getTopicUrl,
  getUserProfileByUsername,
  IProfile,
  IProfileSummary,
  IRawBadges,
  IUserAction,
} from '../api';
import { ParsedUrlQuery } from 'querystring';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/router';
import { getPageQuery } from '~/utils/pagination.utils';
import FavoriteTypeTab, { EFavoriteType } from '~/pages/u/[username]/favorite/_component/FavoriteTypeTab';

interface IProps {
  badges: IRawBadges[];
  profile: IProfile;
  summary: IProfileSummary;
  favoriteTopics: IUserAction[];
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
  const [i18nProps, badges, profile, summary, favoriteTopics] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername(username),
    getUserProfileByUsername(username),
    getSummaryByUsername(username),
    getAskTugFavoritesByUsername(username, pageInfo.page, pageInfo.size),
  ]);
  return { props: { ...i18nProps, badges, profile, summary, favoriteTopics, username } };
};

export default function ProfileAnswerPage(props: IProps) {
  const { badges, profile, summary, favoriteTopics, username } = props;
  const router = useRouter();
  const pageInfo = getPageQuery(router.query);
  const [page, setPage] = useState(pageInfo.page);
  const [data, setData] = useState(favoriteTopics);
  const [hasMore, setHasMore] = useState(favoriteTopics.length !== 0);
  const [loading, setLoading] = useState(false);
  const loadMoreData = async () => {
    setLoading(true);
    try {
      const newData = await getAskTugFavoritesByUsername(username, page, pageInfo.size);
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
          selected={EUgcType.favorite}
          nums={{
            answer: summary.user_summary.post_count,
            question: summary.user_summary.topic_count,
            // post: summary.user_summary.post_count,
            // favorite: summary.user_summary.post_count,
          }}
        />
      </CommonStyled.Action>
      <FavoriteTypeTab currentType={EFavoriteType.topic} username={username} />
      <CommonStyled.List>
        {/*{favorites.map((value) => (*/}
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
            locale={{ emptyText: '暂无数据' }}
            loading={loading}
            renderItem={(value) => (
              <ListItem
                key={value.post_id}
                url={getTopicUrl(value.topic_id, value.post_number)}
                title={value.title}
                summary={value.excerpt}
                metadataEnd={getRelativeDatetime(value.created_at)}
              />
            )}
          />
        </InfiniteScroll>
      </CommonStyled.List>
    </ProfileLayout>
  );
}
