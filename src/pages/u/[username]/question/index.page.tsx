import * as React from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { List, Select, Skeleton, Space } from 'antd';
import ListItem from '../_components/ListItem';
import { EyeOutlined, MessageOutlined } from '@ant-design/icons';
import {
  getBadgesByUsername,
  getPostUrl,
  getQuestionsByUsername,
  getUserProfileByUsername,
  IProfile,
  IQuestions,
  IRawBadges,
} from '../api';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import { ParsedUrlQuery } from 'querystring';
import { getPageQuery } from '~/utils/pagination.utils';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface IProps {
  badges: IRawBadges[];
  profile: IProfile;
  questions: IQuestions[];
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
  const [i18nProps, badges, profile, questions] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername(username),
    getUserProfileByUsername(username),
    getQuestionsByUsername(username, pageInfo.page, pageInfo.size),
  ]);
  return { props: { ...i18nProps, badges, profile, questions, username } };
};

export default function ProfileAnswerPage(props: IProps) {
  const { badges, profile, questions, username } = props;
  const router = useRouter();
  const pageInfo = getPageQuery(router.query);
  const [page, setPage] = useState(pageInfo.page);
  const [data, setData] = useState(questions);
  const loadMoreData = async () => {
    const newData = await getQuestionsByUsername(username, page, pageInfo.size);
    setData((data) => [...data, ...newData]);
    setPage((page) => page + 1);
  };
  return (
    <ProfileLayout badges={badges} profile={profile}>
      <CommonStyled.Action>
        <Tab selected={EUgcType.question} nums={{ answer: 3, question: 4, post: 5, favorite: 6 }} />
        <Select defaultValue={''}>
          <Select.Option value={''}>提问状态</Select.Option>
          <Select.Option value={'1'}>提问状态</Select.Option>
          <Select.Option value={'2'}>提问状态</Select.Option>
        </Select>
      </CommonStyled.Action>
      <CommonStyled.List>
        {/*{questions.map((value) => (*/}
        {/*  <ListItem*/}
        {/*    key={value.id}*/}
        {/*    url={getPostUrl(value.id, 1)}*/}
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
          hasMore={data.length !== 0}
          loader={
            <div style={{ marginTop: '16px' }}>
              <Skeleton avatar paragraph={{ rows: 1 }} active />
            </div>
          }
        >
          <List
            dataSource={data}
            locale={{ emptyText: '暂无数据' }}
            renderItem={(value) => (
              <ListItem
                key={value.id}
                url={getPostUrl(value.id, 1)}
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
        </InfiniteScroll>
      </CommonStyled.List>
    </ProfileLayout>
  );
}
