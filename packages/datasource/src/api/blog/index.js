import blogClient from '../blogClient';

export * as posts from './posts';
export * as common from './common';
export * as users from './users';

export const getLatest = (params) => blogClient.get(`/api/posts/latest`, { params });

export const getRecommend = (params) => blogClient.get(`/api/posts/recommend`, { params });

export const getPosts = (params) => blogClient.get(`/api/posts`, { params });
//TODO: need to pass header of X-Forward-For for forward client real ip to backend
export const getPostBySlug = (slug, ip) =>
  blogClient.get(`/api/posts/${slug}/detail${ip !== undefined ? '?visit=true' : ''}`, {
    headers: { 'X-Forwarded-For': ip },
  });

export const getTags = (params) => blogClient.get(`/api/tags`, { params });
export const getHotTags = (params) => blogClient.get(`/api/tags?sort=posts,desc`, { params });
export const getTagById = (id) => blogClient.get(`/api/tags/${id}`);
export const getTagBySlug = (slug) => blogClient.get(`/api/tags/search/bySlug?slug=${slug}`);

export const getCategories = () => blogClient.get(`/api/categories`);
export const getCategoryById = (id) => blogClient.get(`/api/categories/${id}`);
export const getCategoryBySlug = (slug) => blogClient.get(`/api/categories/search/bySlug?slug=${slug}`);

export const getAudits = () => blogClient.get(`/api/audits`);
export const auditById = (id) => blogClient.get(`/api/audits/${id}`);
