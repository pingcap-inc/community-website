import { blogClient } from '../../index';

export interface IBlogAuthor {
  id: number;
  username: string;
  avatarURL: string;
}

export interface IBlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface IPost {
  id: number;
  slug: string;
  status: string;
  author: IBlogAuthor;
  origin: string;
  title: string;
  summary: string;
  publishedAt: Date;
  recommended: boolean;
  recommendAt?: Date;
  tags: [];
  likes: number;
  comments: number;
}

export interface IPage {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface IResponse<T> {
  content: T[];
  page: IPage;
}

export async function getPostsByUsername(username: string, page?: number, size?: number): Promise<IResponse<IPost>> {
  const pageStr = page ?? '';
  const sizeStr = size ?? '';
  const result = await blogClient.get(`/api/users/username/${username}/posts?page=${pageStr}&size=${sizeStr}`);
  return result.data;
}

export async function getFavoritesByUsername(
  username: string,
  page?: number,
  size?: number
): Promise<IResponse<IPost>> {
  const pageStr = page ?? '';
  const sizeStr = size ?? '';
  const result = await blogClient.get(`/api/users/username/${username}/favorites?page=${pageStr}&size=${sizeStr}`);
  return result.data;
}
