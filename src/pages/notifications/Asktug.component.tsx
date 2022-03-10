import useSWRInfinite from 'swr/infinite';
import { api, fetcher } from '~/api';
import { DiscourseNotification, DiscourseNotificationProps } from '@pingcap-inc/tidb-community-site-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import { AsktugFilter } from './layout/menu';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ConfigProvider, List as RawList, Spin } from 'antd';
import { ListPlaceholder } from '~/pages/private-messages/PrivateMessages.component';
import styled from 'styled-components';
import { AsktugNotification } from '~/api/asktug';

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

export const ListLoader = () => (
  <div
    style={{
      //  center the child
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
    }}
  >
    <Spin />
  </div>
);

export const List = styled(RawList)`
  .ant-list-empty-text {
    padding: 0;
  }
`;

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
            renderItem={(item: AsktugNotification) => (
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
