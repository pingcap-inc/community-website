import * as React from 'react';
import { useEffect, useState } from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Divider, List, Skeleton, Spin } from 'antd';
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
} from '~/api/asktug/profile';
import { ParsedUrlQuery } from 'querystring';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useRouter } from 'next/router';
// import { getPageQuery } from '~/utils/pagination.utils';
import FavoriteTypeTab, { EFavoriteType } from '~/pages/u/[username]/favorite/_component/FavoriteTypeTab';
import { getPostFavoritesNumberByUsername, getPostsNumberByUsername } from '~/api/blog';
import { useCurrentLogonUser } from '~/pages/u/[username]/profile.hook';
import ErrorPage from '~/components/errorPage';
import EmptyStatus from '~/components/EmptyStatus';
import { blogUrl, forumUrl } from '~/pages/u/[username]/constant.data';
import { useRouter } from 'next/router';

interface IProps {
  badges: IRawBadges[];
  profile: IProfile;
  summary: IProfileSummary;
  postsNumber: number | null;
  postFavoritesNumber: number | null;
}
interface IQuery extends ParsedUrlQuery {
  username: string;
  page?: string;
  size?: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { username } = ctx.params;
  // const pageInfo = getPageQuery(ctx.query);
  const [i18nProps, badges, profile, summary, postsNumber, postFavoritesNumber] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername({ username }),
    getUserProfileByUsername({ username }),
    getSummaryByUsername({ username }),
    getPostsNumberByUsername({ username }),
    getPostFavoritesNumberByUsername({ username }),
  ]);
  return {
    props: {
      ...i18nProps,
      badges,
      profile,
      summary,
      postsNumber,
      postFavoritesNumber,
    },
  };
};

export default function ProfileFavoriteTopicPage(props: IProps) {
  const { badges, profile, summary, postsNumber, postFavoritesNumber } = props;
  const askTugFavoritesNumber = summary?.user_summary?.bookmark_count ?? 0;
  const allFavoritesNumber: number = askTugFavoritesNumber + (postFavoritesNumber ?? 0);
  const router = useRouter();
  const { username } = router.query as { username: string };
  // const pageInfo = getPageQuery(router.query);
  const [page, setPage] = useState(0);
  const [data, setData] = useState<IUserAction[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loadMoreData = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      const newData = await getAskTugFavoritesByUsername(username, nextPage);
      setData((data) => [...data, ...newData]);
      setHasMore(newData.length !== 0);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  const isCurrentLogonUser = useCurrentLogonUser(username);
  if (isCurrentLogonUser === undefined) {
    return <Spin size="large" />;
  } else if (isCurrentLogonUser === false) {
    return <ErrorPage statusCode={403} errorMsg={'无法查看其他人的收藏内容'} />;
  }
  const isEmpty: boolean = loading === false && data.length === 0;
  return (
    <ProfileLayout
      badges={badges}
      profile={profile}
      nums={{
        like: summary?.user_summary?.likes_received ?? 0,
        answer: summary?.user_summary?.post_count ?? 0,
        post: postsNumber,
      }}
    >
      <CommonStyled.Action>
        <Tab
          selected={EUgcType.favorite}
          nums={{
            answer: summary?.user_summary?.post_count ?? 0,
            question: summary?.user_summary?.topic_count ?? 0,
            post: postsNumber,
            favorite: allFavoritesNumber,
          }}
        />
      </CommonStyled.Action>
      <FavoriteTypeTab
        currentType={EFavoriteType.topic}
        username={username}
        nums={{
          article: postFavoritesNumber,
          topic: askTugFavoritesNumber,
        }}
      />
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
          {isEmpty ? (
            <EmptyStatus description={'你还没有收藏过任何内容'}>
              快前往 <a href={forumUrl}>【问答论坛】</a> 和 <a href={blogUrl}>【社区专栏】</a> 发现更多技术干货吧～
            </EmptyStatus>
          ) : (
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
          )}
        </InfiniteScroll>
      </CommonStyled.List>
    </ProfileLayout>
  );
}
