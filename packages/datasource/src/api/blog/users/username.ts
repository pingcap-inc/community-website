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

export async function getPostsByUsername(username: string, page?: number, size?: number): Promise<IPost[]> {
  const pageStr = page ?? '';
  const sizeStr = size ?? '';
  const result = await blogClient.get(`/api/users/username/${username}/posts?page=${pageStr}&size=${sizeStr}`);
  return result.data.content ?? [];
}
