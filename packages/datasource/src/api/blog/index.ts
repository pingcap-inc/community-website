import blogClient from '../blogClient';

export * as posts from './posts';
export * as common from './common';
export * as users from './users';
export * as username from './username';

export type TPostOrigin = 'ORIGINAL' | 'REPOST';
export type TPostStatus = 'DRAFT' | 'PENDING' | 'REJECTED' | 'PUBLISHED' | 'ARCHIVED';

interface IRequestPagination {
  page?: number;
  size?: number;
}

export interface IMeta {
  id: number;
  name: string;
  slug: string;
}

export interface IAuthor {
  id: number;
  username: string;
  avatarURL: string;
}

export interface IResponsePostDetail {
  creatorId: number;
  modifierId: number;
  deletedAt: Date;
  publishedAt?: Date;
  createdAt: Date;
  lastModifiedAt?: Date;
  id: number;
  slug: string;
  version: string;
  title: string;
  summary: string;
  content: string;
  category: IMeta[];
  tags: IMeta[];
  origin: TPostOrigin;
  status: TPostStatus;
  sourceURL: string;
  coverImageURL?: string;
  rejectReason?: string;
  recommended: boolean;
  recommendAt?: Date;
  public: boolean;
  likes: number;
  comments: number;
  visits: number;
  author: IAuthor;
}

export interface IPage {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface IResponseList<T> {
  content: T[];
  page: IPage;
}

interface IRequestPostList {
  tagID?: number;
  categoryID?: number;
  page: number;
  size: number;
}

interface ITag {
  id: number;
  name: string;
  slug: string;
}

interface ITagDetails extends ITag {
  description: string;
  posts: 0;
  createdAt: null;
}

interface ICategory {
  id: number;
  name: string;
  slug: string;
}

interface ICategoryDetails extends ICategory {
  description: string;
  posts: 0;
  createdAt: null;
}

interface IRequestPostDetail {
  slug: string;
  ip?: string;
  visit?: boolean;
  shareId?: string;
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

export async function getPostList({
  latest,
  ...params
}: IRequestPostList & { latest: boolean }): Promise<IResponseList<IResponsePostDetail>> {
  return await blogClient.get(`/api/posts/${latest ? 'latest' : 'recommend'}`, { params });
}

export async function getLatestList({ ...params }: IRequestPostList): Promise<IResponseList<IResponsePostDetail>> {
  return await blogClient.get(`/api/posts/latest`, { params });
}

export async function getRecommendList({ ...params }: IRequestPostList): Promise<IResponseList<IResponsePostDetail>> {
  return await blogClient.get(`/api/posts/recommend`, { params });
}

export async function getAllPostList({ ...params }: IRequestPostList): Promise<IResponseList<IResponsePostDetail>> {
  return await blogClient.get(`/api/posts`, { params });
}

export async function getPostBySlug({ slug, ip, shareId, visit }: IRequestPostDetail): Promise<IResponsePostDetail> {
  return await blogClient.get(`/api/posts/${slug}/detail`, {
    params: { shareId, visit },
    headers: ip ? { 'X-Forwarded-For': ip } : undefined,
  });
}

export async function getTags(params: IRequestPagination): Promise<IResponsePostDetail> {
  return await blogClient.get(`/api/tags`, { params });
}

export async function getHotTags(params: IRequestPagination): Promise<IResponseList<ITag>> {
  return await blogClient.get(`/api/tags?sort=posts,desc`, { params });
}

export async function getTagById(params: { id: number }): Promise<ITagDetails> {
  return await blogClient.get(`/api/tags/${params.id}`);
}

export async function getTagBySlug(params: { slug: string }): Promise<ITagDetails> {
  const url = `/api/tags/search/bySlug?slug=${params.slug}`;
  return await blogClient.get(url);
}

export async function getCategories(params: { pagination?: IRequestPagination }): Promise<IResponseList<ICategory>> {
  return await blogClient.get(`/api/categories`, { params });
}

export async function getCategoryById(params: { id: string }): Promise<ICategoryDetails> {
  return await blogClient.get(`/api/categories/${params.id}`);
}

export async function getCategoryBySlug(params: { slug: string }): Promise<ICategoryDetails> {
  return await blogClient.get(`/api/categories/search/bySlug?slug=${params.slug}`);
}

export async function getAudits(params: any): Promise<ICategoryDetails> {
  return await blogClient.get(`/api/audits`, { params });
}

export async function auditById(params: { id: number }): Promise<ICategoryDetails> {
  return await blogClient.get(`/api/audits/${params.id}`);
}
