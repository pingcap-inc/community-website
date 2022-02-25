import { Page, Pagination, Post } from './posts/[id]';

export * as posts from './posts';
export * as common from './common';
export * as users from './users';
export * as username from './username';

export function getList(query?: PostQuery & { latest: boolean }): Page<Post>;

export function getLatest(query?: PostQuery): Page<Post>;

export function getRecommend(query?: PostQuery): Page<Post>;

export function getPostBySlug(query?: PostDetails): Promise<Post>;

export function getTags(pagination?: Pagination): Promise<Page<Tag>>;

export function getHotTags(pagination?: Pagination): Promise<Page<Tag>>;

export function getTagById(id: number): Promise<TagDetails>;

export function getTagBySlug(slug: string): Promise<TagDetails>;

export function getCategories(pagination?: Pagination): Promise<Page<Category>>;

export function getCategoryById(id: number): Promise<CategoryDetails>;

export function getCategoryBySlug(slug: string): Promise<CategoryDetails>;

interface PostQuery {
  tagID?: number;
  categoryID?: number;
  page: number;
  size: number;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
}

interface TagDetails extends Tag {
  description: string;
  posts: 0;
  createdAt: null;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface CategoryDetails extends Category {
  description: string;
  posts: 0;
  createdAt: null;
}

interface PostDetails {
  slug: string;
  visit?: boolean;
  fromShareId?: string;
}

export enum EStatus {
  ALL = '',
  DRAFT = 'draft',
  PENDING = 'pending',
  REJECTED = 'rejected',
  PUBLISHED = 'published',
}

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
  status: EStatus;
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
