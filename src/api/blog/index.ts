import { blogClient } from '~/api';
import { IPost, IPostFavorite, IResponse } from '../asktug/profile';
import { IResponseList } from '../../../packages/datasource/src/api/blog';

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

export async function getPostsByUsername(input: {
  username: string;
  status?: string;
  page?: number;
  size?: number;
}): Promise<IResponse<IPost>> {
  const { username, ...params } = input;
  const url = `/api/users/username/${username}/posts`;
  return await blogClient.get(url, { params });
}

export async function getPostsNumberByUsername(input: { username: string; status?: string }): Promise<number | null> {
  const result = await getPostsByUsername(input);
  return result?.page?.totalElements ?? null;
}

export function getPostUrlBySlug(slug: IPost['slug']): string {
  return `/blog/${slug}`;
}

export function getListNumberFromResponse<T>(response: IResponseList<T>): number | null {
  return response?.page?.totalElements ?? null;
}

export async function getPostFavoritesByUsername(
  username: string,
  page?: number,
  size?: number
): Promise<IResponse<IPostFavorite>> {
  const pageStr = page ?? '';
  const sizeStr = size ?? '';
  const url = `/api/users/username/${username}/favorites?page=${pageStr}&size=${sizeStr}`;
  return await blogClient.get(url);
}

export async function getPostFavoritesNumberByUsername(input: { username: string }): Promise<number | null> {
  const { username } = input;
  const result = await getPostFavoritesByUsername(username);
  return result?.page?.totalElements ?? null;
}
