import useSWRInfinite from 'swr/infinite';
import { api, fetcher } from '~/api';
import { DiscourseNotification, DiscourseNotificationProps } from '@pingcap-inc/tidb-community-site-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import { AsktugFilter } from './layout/menu';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ConfigProvider, List, Skeleton } from 'antd';

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

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifications([]);
    mutate(() => undefined, false).then();
    setSize(1).then();
  }, [filter, mutate, setNotifications, setSize]);

  useEffect(() => {
    if (!isValidating) {
      if (data) {
        setNotifications(data.flatMap((notifications) => notifications.notifications));
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
    return data[size - 1]?.notifications.length > 0;
  }, [data, size, isValidating]);

  const loadMoreData = useCallback(async () => {
    await setSize((size) => size + 1);
  }, [setSize]);

  const markRead = useCallback(
    async (id) => {
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
              <DiscourseNotification
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

export default Asktug;
