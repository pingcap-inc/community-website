import blogClient from '../blogClient';

export * as posts from './posts';
export * as common from './common';

export const getLatest = () => blogClient.get(`/posts/latest`);

export const getRecommend = () => blogClient.get(`/posts/recommend`);

export const getTags = () => blogClient.get(`/tags`);
export const getHotTags = () => blogClient.get(`/tags/hot`);
export const getTagById = (id) => blogClient.get(`/tags/${id}`);
export const getTagBySlug = (slug) => blogClient.get(`/tags/slug/${slug}`);

export const getCategories = () => blogClient.get(`/categories`);
export const getCategoryById = (id) => blogClient.get(`/categories/${id}`);
export const getCategoryBySlug = (slug) => blogClient.get(`/categories/slug/${slug}`);
