import useSWR from 'swr';
import { DiscourseNotification, DiscourseNotificationProps } from '@pingcap-inc/tidb-community-site-components';

import { AsktugFilter } from './layout/menu';
import { useState } from 'react';

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

interface UseAsktugNotificationsResult {
  notifications: Notification[];
  loadMore: () => void;
  loading: boolean;
  hasMore: boolean;
}

const useAsktugNotifications = ({ filter }: AsktugProps): Notification[] => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useSWR<Notifications>(['asktug.getNotifications']);

  return [];
};

const Asktug = ({ filter }: AsktugProps) => {
  const {} = useSWR<Notifications>(['asktug.getNotifications']);
};
