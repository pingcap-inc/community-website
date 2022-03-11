import * as React from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Divider, List, Skeleton, Space } from 'antd';
import ListItem from '../_components/ListItem';
import { HeartOutlined, MessageOutlined } from '@ant-design/icons';
import {
  getBadgesByUsername,
  getSummaryByUsername,
  getUserProfileByUsername,
  IProfile,
  IProfileSummary,
  IRawBadges,
} from '~/api/asktug/profile';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPostUrlBySlug, getPostFavoritesNumberByUsername, getListNumberFromResponse } from '~/api/blog';
import EmptyStatus from '~/components/EmptyStatus';
import { blogUrl } from '~/pages/u/[username]/constant.data';
import { api } from '@tidb-community/datasource';
import { ErrorPage } from '~/components';
import useSWRInfinite from 'swr/infinite';
import { getPageInfo } from '~/pages/blog/user/[id]/posts/page-info';
import StatusSelect from './StatusSelect.component';
import { usePrincipal } from '~/pages/blog/blog.hooks';
import { IResponseList, IResponsePostDetail } from '../../../../../packages/datasource/src/api/blog';
import { useContext, useEffect } from 'react';
import { MeContext } from '~/context';

interface IProps {
  badges: IRawBadges[];
  profile: IProfile;
  summary: IProfileSummary;
  postFavoritesNumber: number | null;
  posts: IResponseList<IResponsePostDetail>;
}
interface IQuery extends ParsedUrlQuery {
  status?: string[];
  username: string;
  page?: string;
  size?: string;
}

const pageSize = 20;

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { status, username } = ctx.params;
  const pageInfo = getPageInfo(status);
  const [i18nProps, badges, profile, summary, posts, postFavoritesNumber] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername({ username }),
    getUserProfileByUsername({ username }),
    getSummaryByUsername({ username }),
    api.blog.username.getPostsByUsername({ status: pageInfo.status, username }),
    getPostFavoritesNumberByUsername({ username }),
  ]);
  return {
    props: {
      ...i18nProps,
      badges,
      profile,
      summary,
      posts,
      postFavoritesNumber,
    },
  };
};

export default function ProfilePostPage(props: IProps): JSX.Element {
  const { badges, profile, summary, posts: postsFromSSR, postFavoritesNumber } = props;
  const askTugFavoritesNumber = summary.user_summary.bookmark_count;
  const allFavoritesNumber: number = askTugFavoritesNumber + (postFavoritesNumber ?? 0);

  const router = useRouter();
  const { status, username } = router.query;
  const pageInfo = getPageInfo(status as string[]);

  const { hasAuthority } = usePrincipal();
  const { meData } = useContext(MeContext);

  const showFilter = meData?.username === username || hasAuthority('READ_OTHERS_POST');
  const tabExtendDOM = showFilter && <StatusSelect value={pageInfo.status} shallow />;

  const isShowStatusBadge: boolean = pageInfo.status === '' && meData?.username === username;

  const getKey = (page) => {
    return ['blog.username.getPostsByUsername', { status: pageInfo.status, username, page, size: pageSize }];
  };
  const {
    data: postsResp,
    error: postsError,
    size,
    setSize,
    mutate,
  } = useSWRInfinite<IResponseList<IResponsePostDetail>>(getKey, {
    fallbackData: [postsFromSSR],
    revalidateOnMount: true,
  });

  useEffect(() => {
    mutate(() => undefined, false).then();
  }, [mutate, pageInfo.status]);

  const error = postsError;
  const loading = !postsResp;
  if (error) return <ErrorPage statusCode={500} errorMsg={'暂时无法获取专栏数据，请稍候再试'} />;
  if (loading) return <Skeleton active />;

  const loadMoreData = async () => {
    await setSize((size) => size + 1);
  };
  const hasMore = postsResp[0].page.totalPages > size;
  const posts: IResponsePostDetail[] = [];
  postsResp.forEach(({ content }) => posts.push(...content));
  const isEmpty: boolean = loading === false && posts.length === 0;

  const postsNumber = getListNumberFromResponse(postsResp[0]);

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
          selected={EUgcType.post}
          nums={{
            answer: summary.user_summary.post_count,
            question: summary.user_summary.topic_count,
            post: postsNumber,
            favorite: allFavoritesNumber,
          }}
          extendDom={tabExtendDOM}
        />
      </CommonStyled.Action>
      <CommonStyled.List>
        <InfiniteScroll
          dataLength={posts.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={
            loading && (
              <div style={{ marginTop: '16px' }}>
                <Skeleton avatar paragraph={{ rows: 1 }} active />
              </div>
            )
          }
          endMessage={posts.length !== 0 && <Divider plain>没有更多内容了</Divider>}
        >
          {isEmpty ? (
            <EmptyStatus description={`你还没有${pageInfo.statusText}文章`}>
              快前往 <a href={blogUrl}>【社区专栏】</a> 撰写技术文章吧～
            </EmptyStatus>
          ) : (
            <List
              dataSource={posts}
              locale={{ emptyText: '暂无数据' }}
              loading={loading}
              renderItem={(value) => (
                <ListItem
                  key={value.id}
                  url={getPostUrlBySlug(value.slug)}
                  title={value.title}
                  summary={value.summary}
                  status={isShowStatusBadge ? value.status : undefined}
                  metadataStart={
                    <Space size={24}>
                      <div>
                        <HeartOutlined /> {value.likes}
                      </div>
                      <div>
                        <MessageOutlined /> {value.comments}
                      </div>
                      {/*<div>*/}
                      {/*  <StarOutlined /> xx*/}
                      {/*</div>*/}
                      {/*<div>*/}
                      {/*  <EyeOutlined /> xx*/}
                      {/*</div>*/}
                    </Space>
                  }
                  metadataEnd={<MetadataEnd value={value} />}
                />
              )}
            />
          )}
        </InfiniteScroll>
      </CommonStyled.List>
    </ProfileLayout>
  );
}

function MetadataEnd({ value }: { value: IResponsePostDetail }) {
  const { status } = value;
  let datetime: Date | undefined;
  switch (status) {
    case 'PUBLISHED':
      datetime = value.publishedAt;
      break;
    case 'DRAFT':
      datetime = value.createdAt;
      break;
    case 'PENDING':
      datetime = value.lastModifiedAt;
      break;
    //case 'REJECTED':
    //  datetime = value.createdAt;
    //  break;
  }
  return <>{datetime !== undefined ? getRelativeDatetime(datetime) : ''}</>;
}
