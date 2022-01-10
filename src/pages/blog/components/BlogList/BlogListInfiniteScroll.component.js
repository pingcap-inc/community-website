import React, { useEffect, useState } from 'react';
import * as Styled from './index.styled';
import BlogInfo from '../blogInfo';
import { Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const BlogList = ({
  blogs: {
    content,
    page: { number, totalPages },
  },
  usernameExtends,
  bottomExtends,
  api,
  params,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(content);
  const [page, setPage] = useState(number ?? 1);
  const [hasMore, setHasMore] = useState(page < totalPages);
  const [firstLoad, setFirstLoad] = useState(false);
  const size = 20;

  const reloadData = async () => {
    setLoading(true);
    setPage(1);
    setData([]);
    setHasMore(true);
    try {
      const json = await api({ page: 1, size, ...params });
      setData(json.content);
      setPage(json.page.number + 1);
      setHasMore(page < json.page.totalPages);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const json = await api({ page: page + 1, size, ...params });
      setData([...data, ...json.content]);
      setPage(json.page.number + 1);
      setHasMore(page < json.page.totalPages);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const paramsSignature = JSON.stringify(params);

  useEffect(() => {
    if (firstLoad) {
      reloadData();
    } else {
      setFirstLoad(true);
    }
  }, [paramsSignature]);

  useEffect(() => {
    loadMoreData();
  }, []);

  if (!content) {
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
            <div style={{ marginTop: '16px' }}>
              <Skeleton avatar paragraph={{ rows: 1 }} active />
            </div>
          }
          endMessage={<Divider plain>没有更多文章了</Divider>}
        >
          <List
            // pagination={{ current: number, total: totalElements, onChange: onPageChange }}
            dataSource={data}
            loading={loading && data.length === 0}
            locale={{ emptyText: '暂无文章' }}
            renderItem={(value) => {
              return (
                <Styled.Item key={value.id}>
                  <BlogInfo {...value} usernameExtends={usernameExtends} bottomExtends={bottomExtends} />
                </Styled.Item>
              );
            }}
          />
        </InfiniteScroll>
      </Styled.List>
    </Styled.Container>
  );
};

export default BlogList;
