import { asktugClient } from '../clients';

export enum NotificationType {
  mentioned = 1,
  replied = 2,
  quoted = 3,
  edited = 4,
  liked = 5,
  private_message = 6,
  invited_to_private_message = 7,
  invitee_accepted = 8,
  posted = 9,
  moved_post = 10,
  linked = 11,
  granted_badge = 12,
  invited_to_topic = 13,
  custom = 14,
  group_mentioned = 15,
  group_message_summary = 16,
  watching_first_post = 17,
  topic_reminder = 18,
  liked_consolidated = 19,
  post_approved = 20,
  code_review_commit_approved = 21,
}

export interface AsktugNotification<Data extends AsktugNotificationData = AsktugNotificationData> {
  id: number;
  notification_type: NotificationType;
  read: boolean;
  created_at: string;
  post_number: number;
  topic_id?: number;
  fancy_title?: string;
  slug?: string;
  data: Data;
}

export interface AsktugNotificationData {}

export interface TopicBasicData extends AsktugNotificationData {
  topic_title: string;
  display_username: string;
}

export interface TopicData extends TopicBasicData {
  original_post_id: number;
  original_post_type: number;
  original_username: string;
  revision_number: null | number;
}

export interface BadgeData extends AsktugNotificationData {
  badge_id: number;
  badge_name: string;
  badge_slug: string;
  badge_title: string;
  username: string;
}

export interface GroupData extends AsktugNotificationData {
  group_id: number;
  group_name: string;
  inbox_count: number;
  username: string;
}

export interface CustomData extends TopicBasicData {
  message: string;
}

export interface LikedConsolidatedData extends AsktugNotificationData {
  username: string;
  display_username: string;
  count: number;
}

export interface Notifications {
  notifications: AsktugNotification[];
  total_rows_notifications: number;
  seen_notification_id: number;
  load_more_notifications: string;
}

export interface GetNotificationParams {
  unread?: 1;
  limit?: number;
  recent?: 1;
  silent?: 1;
  type?: NotificationType;
  offset?: number;
}

export interface AsktugPrivateMessage {
  id: number;
  slug: string;
  fancy_title: string;
  posters: {
    user_id: number;
  }[];
}

export interface AsktugUser {
  id: number;
  username: string;
  is_verified: boolean;
}

export interface PrivateMessages {
  users: AsktugUser[];
  topic_list: {
    per_page: number;
    topics: AsktugPrivateMessage[];
  };
}

export interface GetPrivateMessagesParams {
  unread?: 1;
}

export const getNotifications = (params: GetNotificationParams = {}): Promise<Notifications> =>
  asktugClient.get('/notifications', { params });

export const readNotification = (id: number) => asktugClient.put('/notifications/mark-read', { params: { id } });
