import blogClient from '../blogClient';

export * as posts from './posts';
export * as common from './common';
export * as users from './users';

export const getLatest = () => blogClient.get(`/api/posts/latest`);

export const getRecommend = () => blogClient.get(`/api/posts/recommend`);

export const getTags = () => blogClient.get(`/api/tags`);
export const getHotTags = () => blogClient.get(`/api/tags?sort=posts,desc`);
export const getTagById = (id) => blogClient.get(`/api/tags/${id}`);
export const getTagBySlug = (slug) => blogClient.get(`/api/tags/slug/${slug}`);

export const getCategories = () => blogClient.get(`/api/categories`);
export const getCategoryById = (id) => blogClient.get(`/api/categories/${id}`);
export const getCategoryBySlug = (slug) => blogClient.get(`/api/categories/slug/${slug}`);
