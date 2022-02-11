import { blogClient } from '~/api';

export enum NotificationType {
  POST = 'POST',
  COMMENT = 'COMMENT',
  LIKE = 'LIKE',
  FAVORITE = 'FAVORITE',
}

export interface SpringPage<T> {
  content: T[];
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface BlogUser {
  id: number;
  username: string;
  name: string;
  avatarURL: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
}

export interface BlogComment {
  id: string;
  content: string;
  replyComment: string;
  commenter: BlogUser;
}

export interface BlogNotification {
  id: number;
  type: NotificationType;
  title: string;
  haveRead: boolean;
  target_url: string;
  recipient: BlogUser;
  actor: BlogUser;
  relatedPost: BlogPost;
  relatedComment: BlogComment;
  createdAt: string;
}

export interface BlogNotificationsParams {
  page: number;
  size: number;
  type: NotificationType;
  haveRead: boolean;
}

export interface BlogNotificationsSummary {
  unreadCount: number;
  newCount: number;
}

export function getNotifications(params: BlogNotificationsParams): Promise<SpringPage<BlogNotification>> {
  return blogClient.get('/api/notifications', { params });
}

export function getNotificationsSummary(): Promise<BlogNotificationsSummary> {
  return blogClient.get('/api/notifications/summary');
}

export async function readNotification(id: number): Promise<void> {
  await blogClient.patch(`/api/notifications/${id}/read`);
}
