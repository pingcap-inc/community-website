import * as React from 'react';
import { ParsedUrlQuery } from 'querystring';
// import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useMemo } from 'react';
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
import EmptyStatus from '~/components/EmptyStatus';
import { forumUrl } from '~/pages/u/[username]/constant.data';
import useSWRInfinite from 'swr/infinite';

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
  solution?: string | string[];
  page?: string;
  size?: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { username, status } = ctx.params;
  const markedSolution: boolean = status?.[0] === 'solution';
  const [i18nProps, badges, profile, summary, answers, postsNumber, postFavoritesNumber] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername(username),
    getUserProfileByUsername(username),
    getSummaryByUsername(username),
    getAnswersByUsername({ username, markedSolution }),
    getPostsNumberByUsername({ username }),
    getPostFavoritesNumberByUsername(username),
  ]);
  return {
    props: {
      ...i18nProps,
      badges,
      profile,
      summary,
      answers,
      postsNumber,
      postFavoritesNumber,
    },
  };
};

export default function ProfileAnswerSolutionPage(props: IProps) {
  const { badges, profile, summary, answers: answersFromSSR, postsNumber, postFavoritesNumber } = props;
  const askTugFavoritesNumber = summary.user_summary.bookmark_count;
  const allFavoritesNumber: number = askTugFavoritesNumber + (postFavoritesNumber ?? 0);

  const router = useRouter();
  const { status, username } = router.query;
  const statusPathInfo: string = status?.[0] ?? '';
  const markedSolution: boolean = status?.[0] === 'solution';

  const pageSize = 20;
  const fallbackData: IUserAction[][] = [answersFromSSR];

  const {
    data: infiniteData,
    error,
    setSize,
    isValidating,
    mutate,
  } = useSWRInfinite((pageNumber) => ({ pageNumber, pageSize, username, markedSolution }), {
    fallbackData,
    initialSize: 1,
    //revalidateOnMount: false,
    //revalidateFirstPage: false,
    //revalidateIfStale: true,
    fetcher: getAnswersByUsername,
  });

  // use swr infinite holds all the resp lists
  const data = useMemo(() => {
    const result: IUserAction[] = [];
    infiniteData?.forEach((value) => result.push(...value));
    return result;
  }, [infiniteData]);

  const isLoading = !data && !error;

  const hasMore: boolean = useMemo<boolean>(() => {
    // if not loaded, has more
    if (!infiniteData) {
      return true;
    }
    if (isLoading) {
      return true;
    }
    return infiniteData[infiniteData.length - 1] !== undefined;
  }, [infiniteData, isValidating]);

  const loadMoreData = () => setSize((size) => size + 1);

  useEffect(() => {
    mutate([]).then();
  }, [status, mutate]);

  console.log('!!fallbackData', fallbackData);
  console.log('!!infiniteData', infiniteData);

  const isEmpty: boolean = !isLoading && data.length === 0;
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
          defaultValue={statusPathInfo}
          value={statusPathInfo}
          onChange={(value) => router.push(`/u/${username}/answer/${value}`, undefined, { shallow: true })}
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
            <div style={{ marginTop: '16px' }}>
              <Skeleton avatar paragraph={{ rows: 1 }} active />
            </div>
          }
          endMessage={data.length !== 0 && <Divider plain>没有更多内容了</Divider>}
        >
          {isEmpty ? (
            <EmptyStatus description={'你还没有回答过任何问题'}>
              快前往 <a href={forumUrl}>【问答论坛】</a> 答疑解惑吧～
            </EmptyStatus>
          ) : (
            <List
              dataSource={data}
              //loading={loading}
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
          )}
        </InfiniteScroll>
      </CommonStyled.List>
    </ProfileLayout>
  );
}
