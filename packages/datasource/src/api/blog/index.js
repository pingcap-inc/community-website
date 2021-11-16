import client from '../client';

const BLOG_API_URL_PREFIX = 'blog/api';

export const getLatest = () => client.get(`${BLOG_API_URL_PREFIX}/latest`);

export const getRecommend = () => client.get(`${BLOG_API_URL_PREFIX}/recommend`);

export const getTags = () => client.get(`${BLOG_API_URL_PREFIX}/tags`);

export const getCategories = () => client.get(`${BLOG_API_URL_PREFIX}/categories`);
