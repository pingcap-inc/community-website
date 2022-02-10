import useSWRInfinite from 'swr/infinite';
import { api, fetcher } from '~/api';
import { BlogNotification, BlogNotificationProps } from '@pingcap-inc/tidb-community-site-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import { BlogFilter } from './layout/menu';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ConfigProvider, List, Skeleton } from 'antd';
import { SpringPage } from '~/api/blog';

type Notification = BlogNotificationProps['notification'];

interface BlogProps {
  filter: BlogFilter;
}

const Blog = ({ filter }: BlogProps) => {
  const { data, mutate, size, setSize, isValidating } = useSWRInfinite<SpringPage<Notification>>(
    (n) => ['blog.getNotifications', { page: n + 1, type: filter.type }],
    { fetcher, dedupingInterval: 100 }
  );

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifications([]);
    mutate(() => undefined, false).then();
    setSize(1).then();
  }, [filter, mutate, setNotifications, setSize]);

  useEffect(() => {
    if (!isValidating) {
      if (data) {
        setNotifications(data.flatMap((notifications) => notifications.content));
      } else {
        setNotifications([]);
      }
    }
  }, [data, size, isValidating]);

  const hasMore = useMemo(() => {
    if (isValidating) {
      return true;
    }
    if (!data) {
      return false;
    }
    if (size === 0) {
      return true;
    }
    return data[size - 1]?.content.length > 0;
  }, [data, size, isValidating]);

  const loadMoreData = useCallback(async () => {
    await setSize((size) => size + 1);
  }, [setSize]);

  const markRead = useCallback(
    async (id) => {
      api.blog.readNotification(id).catch(console.error);
      mutate((notifications) => {
        let changed = false;
        for (const bulk of notifications) {
          for (const notification of bulk.content) {
            if (notification.id === id && !notification.haveRead) {
              notification.haveRead = true;
              changed = true;
            }
          }
        }
        if (changed) {
          return [...notifications];
        } else {
          return notifications;
        }
      }, false).catch(console.error);
    },
    [mutate]
  );

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 600,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={notifications.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<Skeleton paragraph={{ rows: 1 }} active />}
        scrollableTarget="scrollableDiv"
      >
        <ConfigProvider renderEmpty={() => undefined}>
          <List
            dataSource={notifications}
            renderItem={(item) => (
              <BlogNotification
                key={item.id}
                notification={item}
                wrap={(el) => <List.Item>{el}</List.Item>}
                markRead={markRead}
              />
            )}
          />
        </ConfigProvider>
      </InfiniteScroll>
    </div>
  );
};

export default Blog;
