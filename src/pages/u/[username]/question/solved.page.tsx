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
} from '../api';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import { ParsedUrlQuery } from 'querystring';
import { getPageQuery } from '~/utils/pagination.utils';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getPostFavoritesNumberByUsername, getPostsNumberByUsername } from '~/pages/u/[username]/username';
import { filterSelectWidth } from '../common.styled';
import EmptyStatus from '~/pages/u/[username]/_components/EmptyStatus';
import { forumUrl } from '~/pages/u/[username]/constant.data';

const solved: ESolved = ESolved.solved;

interface IProps {
  username: string;
  badges: IRawBadges[];
  profile: IProfile;
  summary: IProfileSummary;
  postsNumber: number | null;
  postFavoritesNumber: number | null;
  questions: IQuestions[];
}
interface IQuery extends ParsedUrlQuery {
  username: string;
  page?: string;
  size?: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { username } = ctx.params;
  const pageInfo = getPageQuery(ctx.query);
  const [i18nProps, badges, profile, summary, questions, postsNumber, postFavoritesNumber] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername(username),
    getUserProfileByUsername(username),
    getSummaryByUsername(username),
    getQuestionsByUsername(username, solved, pageInfo.page),
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
      questions,
      postsNumber,
      postFavoritesNumber,
    },
  };
};

export default function ProfileQuestionSolvedPage(props: IProps) {
  const { username, badges, profile, summary, questions, postsNumber, postFavoritesNumber } = props;
  const askTugFavoritesNumber = summary.user_summary.bookmark_count;
  const allFavoritesNumber: number = askTugFavoritesNumber + (postFavoritesNumber ?? 0);
  const router = useRouter();
  const pageInfo = getPageQuery(router.query);
  const [page, setPage] = useState(pageInfo.page);
  const [data, setData] = useState(questions);
  const [hasMore, setHasMore] = useState(data.length !== 0);
  const [loading, setLoading] = useState(false);
  const loadMoreData = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      const newData = await getQuestionsByUsername(username, solved, nextPage);
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
          selected={EUgcType.question}
          nums={{
            answer: summary.user_summary.post_count,
            question: summary.user_summary.topic_count,
            post: postsNumber,
            favorite: allFavoritesNumber,
          }}
        />
        <Select
          defaultValue={'solved'}
          value={'solved'}
          onChange={(value) => router.push(`/u/${username}/question/${value}`)}
          style={{ width: filterSelectWidth }}
        >
          <Select.Option value={''}>全部</Select.Option>
          <Select.Option value={'solved'}>已解决</Select.Option>
          <Select.Option value={'unsolved'}>未解决</Select.Option>
        </Select>
      </CommonStyled.Action>
      <CommonStyled.List>
        {/*{questions.map((value) => (*/}
        {/*  <ListItem*/}
        {/*    key={value.id}*/}
        {/*    url={getTopicUrl(value.id, 1)}*/}
        {/*    title={value.title}*/}
        {/*    summary={''}*/}
        {/*    metadataStart={*/}
        {/*      <Space size={24}>*/}
        {/*        <div>*/}
        {/*          <MessageOutlined /> {value.reply_count}*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <EyeOutlined /> {value.views}*/}
        {/*        </div>*/}
        {/*      </Space>*/}
        {/*    }*/}
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
          {data.length === 0 ? (
            <EmptyStatus description={'你还没有提出过任何问题'}>
              快前往 <a href={forumUrl}>【问答论坛】</a> 答疑解惑吧～
            </EmptyStatus>
          ) : (
            <List
              dataSource={data}
              locale={{ emptyText: '暂无数据' }}
              loading={loading}
              renderItem={(value) => (
                <ListItem
                  key={value.id}
                  url={getTopicUrl(value.id, 1)}
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
