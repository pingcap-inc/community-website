import React, { useCallback, useEffect, useMemo } from 'react';
import * as Styled from './index.styled';
import BlogInfo from '../BlogInfo';
import { Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import EmptyStatus from '~/components/EmptyStatus';
import Anchor from '~/components/Anchor';
import useSWRInfinite from 'swr/infinite';

const BlogList = ({ blogs, usernameExtends, bottomExtends, api, params }) => {
  const {
    data: infiniteData,
    setSize,
    isValidating,
    mutate,
  } = useSWRInfinite((page) => ({ page: page + 1, size: 20, ...params }), {
    fallbackData: [blogs],
    initialSize: blogs.page.number + 1,
    revalidateOnMount: false,
    revalidateFirstPage: false,
    revalidateIfStale: true,
    fetcher: api,
  });

  // use swr infinite holds all the resp lists
  const data = useMemo(() => {
    const set = new Set();
    return infiniteData
      ?.flatMap((data) => data.content)
      ?.filter((item) => {
        // filter repeated posts
        if (set.has(item.slug)) {
          return false;
        } else {
          set.add(item.slug);
          return true;
        }
      });
  }, [infiniteData]);

  const hasMore = useMemo(() => {
    // if not loaded, has more
    if (!infiniteData) {
      return true;
    }
    const pageData = infiniteData[infiniteData.length - 1];

    if (isValidating) {
      return true;
    } else if (!pageData) {
      return false;
    }
    return pageData.page.number + 1 < pageData.page.totalPages;
  }, [infiniteData, isValidating]);

  const loadMoreData = useCallback(() => {
    setSize((size) => size + 1).then();
  }, [setSize]);

  useEffect(() => {
    mutate([]).then();
  }, [params.categoryID, params.tagID, mutate]);

  if (!data) {
    return <Skeleton active />;
  }

  return (
    <Styled.Container>
      <Styled.List>
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={
            <div>
              <Skeleton avatar paragraph={{ rows: 3 }} active />
              <Skeleton avatar paragraph={{ rows: 3 }} active />
              <Skeleton avatar paragraph={{ rows: 3 }} active />
              <Skeleton avatar paragraph={{ rows: 3 }} active />
            </div>
          }
          endMessage={<Divider plain>没有更多文章了</Divider>}
        >
          {!isValidating && data.length === 0 ? (
            <EmptyStatus
              description={
                <>
                  该分类下暂无文章，<Anchor href={'/blog/new/edit'}>【发表一篇】</Anchor>
                </>
              }
            />
          ) : (
            <List
              dataSource={data}
              locale={{ emptyText: ' ' }}
              renderItem={(value) => {
                return (
                  <Styled.Item key={value.id}>
                    <BlogInfo {...value} usernameExtends={usernameExtends} bottomExtends={bottomExtends} />
                  </Styled.Item>
                );
              }}
            />
          )}
        </InfiniteScroll>
      </Styled.List>
    </Styled.Container>
  );
};

export default BlogList;
