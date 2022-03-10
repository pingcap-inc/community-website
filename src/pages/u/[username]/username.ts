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
