import blogClient from '../blogClient';

export * as posts from './posts';
export * as common from './common';
export * as users from './users';
export * as username from './username';

export const getList = ({ latest, ...params }) =>
  blogClient.get(`/api/posts/${latest ? 'latest' : 'recommend'}`, { params });

// deprecated, use getList({ latest: true })
export const getLatest = (params) => blogClient.get(`/api/posts/latest`, { params });

// deprecated, use getList({ latest: false })
export const getRecommend = (params) => blogClient.get(`/api/posts/recommend`, { params });

export const getPosts = (params) => blogClient.get(`/api/posts`, { params });
export const getPostBySlug = ({ slug, ip, shareId, visit }) =>
  blogClient.get(`/api/posts/${slug}/detail`, {
    params: { shareId, visit },
    headers: ip ? { 'X-Forwarded-For': ip } : undefined,
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
