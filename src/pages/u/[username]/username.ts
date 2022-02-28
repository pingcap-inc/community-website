import { api } from '@tidb-community/datasource';
import { IResponseList } from '../../../../packages/datasource/src/api/blog';

const { blogClient } = api;

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
  publishedAt?: Date;
  createdAt: Date;
  lastModifiedAt: Date;
  deletedAt?: Date;
  recommended: boolean;
  recommendAt?: Date;
  tags: [];
  likes: number;
  comments: number;
}

export interface IPostFavorite {
  post: IPost;
  user: IBlogAuthor;
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

export function getPostUrlBySlug(slug: IPost['slug']): string {
  return `/blog/${slug}`;
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

export async function getPostsNumberByUsername(params: { username: string; status?: string }): Promise<number | null> {
  let postNumber: number | null = null;
  try {
    const data = await getPostsByUsername(params);
    postNumber = data?.page?.totalElements ?? null;
  } catch (e) {
    console.error('getPostsNumberByUsername error');
  }
  return postNumber;
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

export async function getPostFavoritesNumberByUsername(username: string): Promise<number | null> {
  let number: number | null = null;
  try {
    const data = await getPostFavoritesByUsername(username);
    number = data?.page?.totalElements ?? null;
  } catch (e) {
    console.error('getPostsNumberByUsername error');
  }
  return number;
}
