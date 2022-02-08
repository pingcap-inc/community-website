import useSWRInfinite from 'swr/infinite';
import { api, fetcher } from '~/api';
import { DiscourseNotification, DiscourseNotificationProps } from '@pingcap-inc/tidb-community-site-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import { AsktugFilter } from './layout/menu';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Divider, List, Skeleton } from 'antd';

type Notification = DiscourseNotificationProps['notification'];

interface Notifications {
  notifications: Notification[];
  total_rows_notifications: number;
  seen_notification_id: number;
  load_more_notifications: string;
}

interface AsktugProps {
  filter: AsktugFilter;
}

const Asktug = ({ filter }: AsktugProps) => {
  const { data, mutate, size, setSize, isValidating } = useSWRInfinite<Notifications>(
    (n) => ['asktug.getNotifications', { offset: n * 60, type: filter.type }],
    { fetcher }
  );

  const notifications = useRef<Notification[]>([]);

  useEffect(() => {
    if (data && !isValidating) {
      notifications.current = data.flatMap((notifications) => notifications.notifications);
    }
  }, [data, size, isValidating]);

  const hasMore = useMemo(() => {
    if (isValidating) {
      return true;
    }
    if (!data) {
      return false;
    }
    return data[size].notifications.length > 0;
  }, [data, size, isValidating]);

  const loadMoreData = useCallback(async () => {
    await setSize((size) => size + 1);
  }, [setSize]);

  const markRead = useCallback(async (id) => {
    api.asktug.readNotification(id).catch(console.error);
    mutate((notifications) => {
      let changed = false;
      for (const bulk of notifications) {
        for (const notification of bulk.notifications) {
          if (notification.id === id && !notification.read) {
            notification.read = true;
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
  }, []);

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
        dataLength={notifications.current.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider />}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={notifications.current}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <DiscourseNotification notification={item} wrap={(el) => <div>{el}</div>} markRead={markRead} />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Asktug;
