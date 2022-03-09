import useSWRInfinite from 'swr/infinite';
import { api, fetcher } from '~/api';
import { BlogNotification, BlogNotificationProps } from '@pingcap-inc/tidb-community-site-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import { BlogFilter } from './layout/menu';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ConfigProvider, List } from 'antd';
import { SpringPage } from '~/api/blog';
import { ListPlaceholder } from '~/pages/private-messages/PrivateMessages.component';
import { ListLoader } from '~/pages/notifications/Asktug.component';

type Notification = BlogNotificationProps['notification'];

interface BlogProps {
  filter: BlogFilter;
}

const Blog = ({ filter }: BlogProps) => {
  const { data, mutate, size, setSize, isValidating } = useSWRInfinite<SpringPage<Notification>>(
    (n) => ['blog.getNotifications', { page: n + 1, type: filter.type }],
    { fetcher, dedupingInterval: 100 }
  );
  console.log(data);

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
    console.log(data);
    const lastPage = data[data.length - 1];
    return lastPage.page.number < lastPage.page.totalPages;
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
      }}
    >
      <InfiniteScroll
        dataLength={notifications.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<ListLoader />}
        scrollableTarget="scrollableDiv"
      >
        <ConfigProvider renderEmpty={() => !isValidating && <ListPlaceholder text={'还没有通知哦'} />}>
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
