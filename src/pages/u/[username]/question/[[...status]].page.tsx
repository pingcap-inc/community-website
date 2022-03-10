import * as React from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Divider, List, Select, Skeleton, Space } from 'antd';
import ListItem from '../_components/ListItem';
import { EyeOutlined, MessageOutlined } from '@ant-design/icons';
import {
  getBadgesByUsername,
  getTopicUrl,
  getQuestionsByUsername,
  getUserProfileByUsername,
  IProfile,
  IQuestions,
  IRawBadges,
  getSummaryByUsername,
  IProfileSummary,
  ESolved,
} from '~/api/asktug/profile';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import { ParsedUrlQuery } from 'querystring';
import { getPageQuery } from '~/utils/pagination.utils';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { getPostFavoritesNumberByUsername, getPostsNumberByUsername } from '~/api/blog';
import { filterSelectWidth } from '../common.styled';
import EmptyStatus from '~/components/EmptyStatus';
import { forumUrl } from '~/pages/u/[username]/constant.data';
import useSWRInfinite from 'swr/infinite';
import { fetcher } from '~/api';
import useSWR from 'swr';
import { ErrorPage } from '~/components';

interface IProps {
  badges: IRawBadges[];
  profile: IProfile;
  summary: IProfileSummary;
  postsNumber: number | null;
  postFavoritesNumber: number | null;
  questions: IQuestions[];
}
interface IQuery extends ParsedUrlQuery {
  username: string;
  status: ESolved[];
  page?: string;
  size?: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { username, status } = ctx.params;
  const pageInfo = getPageQuery(ctx.query);
  const solved: ESolved = status?.[0] ?? ESolved.all;
  const [i18nProps, badges, profile, summary, questions, postsNumber, postFavoritesNumber] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername({ username }),
    getUserProfileByUsername({ username }),
    getSummaryByUsername({ username }),
    getQuestionsByUsername({ username, solved, page: pageInfo.page, per_page: pageInfo.size }),
    getPostsNumberByUsername({ username }),
    getPostFavoritesNumberByUsername({ username }),
  ]);
  return {
    props: {
      ...i18nProps,
      badges,
      profile,
      summary,
      questions,
      postsNumber,
      postFavoritesNumber,
    },
  };
};

export default function ProfileQuestionIndexPage(props: IProps) {
  const {
    badges: badgesFromSSR,
    profile: profileFromSSR,
    summary: summaryFromSSR,
    questions: questionsFromSSR,
    postsNumber: postsNumberFromSSR,
    postFavoritesNumber: postFavoritesNumberFromSSR,
  } = props;

  const router = useRouter();
  const pageInfo = getPageQuery(router.query);
  const { status, username } = router.query;
  const solved: ESolved = (status?.[0] as ESolved) ?? ESolved.all;

  const fallbackData = [questionsFromSSR];

  const { data, error, setSize } = useSWRInfinite<IQuestions[]>(
    (page) => ['asktug.profile.getQuestionsByUsername', { username, solved, page: page + 1, per_page: pageInfo.size }],
    {
      fetcher,
      fallbackData,
    }
  );
  if (error) console.error('error', error);

  // use swr infinite holds all the resp lists
  const questions = useMemo(() => {
    const result: IQuestions[] = [];
    data?.flatMap((value) => result.push(...value));
    return result;
  }, [data]);

  const loadMoreData = useCallback(async () => {
    await setSize((size) => size + 1);
  }, [setSize]);

  const hasMore: boolean = useMemo<boolean>(() => {
    // if not loaded, has more
    if (!data) {
      return true;
    }
    return data[data.length - 1].length >= pageInfo.size;
  }, [data, pageInfo.size]);

  const { data: profileData, error: profileError } = useSWR(['asktug.profile.getUserProfileByUsername', { username }], {
    fallbackData: profileFromSSR,
  });
  if (profileError) console.error('profileError', profileError);

  const { data: badgesData, error: badgesError } = useSWR(['asktug.profile.getBadgesByUsername', { username }], {
    fallbackData: badgesFromSSR,
  });
  if (badgesError) console.error('badgesError', badgesError);

  const { data: postFavoritesNumberData, error: postFavoritesNumberError } = useSWR(
    ['blog.getPostFavoritesNumberByUsername', { username }],
    {
      fallbackData: postFavoritesNumberFromSSR,
    }
  );
  if (postFavoritesNumberError) console.error('postFavoritesNumberError', postFavoritesNumberError);

  const postFavoritesNumber: number | null = postFavoritesNumberError ? null : postFavoritesNumberData;

  const { data: summaryData, error: summaryError } = useSWR(['asktug.profile.getSummaryByUsername', { username }], {
    fallbackData: summaryFromSSR,
  });
  if (summaryError) console.error('summaryError', summaryError);

  const askTugFavoritesNumber: number | null = summaryError ? null : summaryData?.user_summary?.bookmark_count ?? 0;
  const allFavoritesNumber: number | null = summaryError ? null : askTugFavoritesNumber + (postFavoritesNumber ?? 0);
  const likeNumber: number | null = summaryData?.user_summary?.likes_received ?? null;
  const answerNumber: number | null = summaryData?.user_summary?.post_count ?? null;
  const questionNumber: number | null = summaryData?.user_summary?.topic_count ?? null;

  const { data: postsNumberData, error: postsNumberError } = useSWR(['blog.getPostsNumberByUsername', { username }], {
    fallbackData: postsNumberFromSSR,
  });
  if (postsNumberError) console.error('postsNumberError', postsNumberError);

  const postsNumber: number | null = postsNumberData;

  if (profileData === null) {
    return <ErrorPage statusCode={404} errorMsg={`用户 ${username} 不存在`} />;
  }

  const isLoading = !data && !error;
  const isEmpty: boolean = !isLoading && questions.length === 0;

  return (
    <ProfileLayout
      badges={badgesData}
      profile={profileData}
      nums={{
        like: likeNumber,
        answer: answerNumber,
        post: postsNumber,
      }}
    >
      <CommonStyled.Action>
        <Tab
          selected={EUgcType.question}
          nums={{
            answer: answerNumber,
            question: questionNumber,
            post: postsNumber,
            favorite: allFavoritesNumber,
          }}
        />
        <Select
          defaultValue={solved}
          value={solved}
          onChange={(value) => router.push(`/u/${username}/question/${value}`, undefined, { shallow: true })}
          style={{ width: filterSelectWidth }}
        >
          <Select.Option value={''}>全部</Select.Option>
          <Select.Option value={'solved'}>已解决</Select.Option>
          <Select.Option value={'unsolved'}>未解决</Select.Option>
        </Select>
      </CommonStyled.Action>
      <CommonStyled.List>
        <InfiniteScroll
          dataLength={questions.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={
            <div style={{ marginTop: '16px' }}>
              <Skeleton avatar paragraph={{ rows: 1 }} active />
            </div>
          }
          endMessage={questions.length !== 0 && <Divider plain>没有更多内容了</Divider>}
        >
          {isEmpty ? (
            <EmptyStatus description={'你还没有提出过任何问题'}>
              快前往 <a href={forumUrl}>【问答论坛】</a> 答疑解惑吧～
            </EmptyStatus>
          ) : (
            <List
              dataSource={questions}
              locale={{ emptyText: '暂无数据' }}
              loading={isLoading}
              renderItem={(value) => (
                <ListItem
                  key={value.id ?? value.topic_id}
                  url={getTopicUrl(value.id ?? value.topic_id, 1)}
                  title={value.title}
                  summary={''}
                  metadataStart={
                    <Space size={24}>
                      <div>
                        <MessageOutlined /> {value.reply_count}
                      </div>
                      <div>
                        <EyeOutlined /> {value.views}
                      </div>
                    </Space>
                  }
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
