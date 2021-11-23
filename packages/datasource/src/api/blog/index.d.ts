import { Page, Pagination, Post } from './posts/[id]';

export * as posts from './posts';
export * as common from './common';
export * as users from './users';

export function getLatest(query?: PostQuery): Page<Post>;

export function getRecommend(query?: PostQuery): Page<Post>;

export function getTags(pagination?: Pagination): Promise<Page<Tag>>;

export function getHotTags(pagination?: Pagination): Promise<Page<Tag>>;

export function getTagById(id: number): Promise<TagDetails>;

export function getTagBySlug(slug: string): Promise<TagDetails>;

export function getCategories(pagination?: Pagination): Promise<Page<Category>>;

export function getCategoryById(id: number): Promise<CategoryDetails>;

export function getCategoryBySlug(slug: string): Promise<CategoryDetails>;

interface PostQuery {
  tagID: number;
  categoryID: number;
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
