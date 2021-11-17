import client from '../client';

const BLOG_API_URL_PREFIX = 'blog/api';

export * as posts from './posts';
export * as common from './common';

export const getLatest = () => client.get(`${BLOG_API_URL_PREFIX}/posts/latest`);

export const getRecommend = () => client.get(`${BLOG_API_URL_PREFIX}/posts/recommend`);

export const getTags = () => client.get(`${BLOG_API_URL_PREFIX}/tags`);
export const getHotTags = () => client.get(`${BLOG_API_URL_PREFIX}/tags/hot`);
export const getTagById = (id) => client.get(`${BLOG_API_URL_PREFIX}/tags/${id}`);
export const getTagBySlug = (slug) => client.get(`${BLOG_API_URL_PREFIX}/tags/slug/${slug}`);

export const getCategories = () => client.get(`${BLOG_API_URL_PREFIX}/categories`);
export const getCategoryById = (id) => client.get(`${BLOG_API_URL_PREFIX}/categories/${id}`);
export const getCategoryBySlug = (slug) => client.get(`${BLOG_API_URL_PREFIX}/categories/slug/${slug}`);
