import { api } from '@tidb-community/datasource';

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
  publishedAt: Date;
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

export async function getPostsByUsername(username: string, page?: number, size?: number): Promise<IResponse<IPost>> {
  const pageStr = page ?? '';
  const sizeStr = size ?? '';
  const url = `/api/users/username/${username}/posts?page=${pageStr}&size=${sizeStr}`;
  return await blogClient.get(url);
}

export async function getPostsNumberByUsername(username: string): Promise<number | undefined> {
  const data = await getPostsByUsername(username);
  return data?.page?.totalElements;
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
  const data = await getPostFavoritesByUsername(username);
  return data?.page?.totalElements ?? null;
}
