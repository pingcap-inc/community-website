import client from '../client';
import { BLOG_API_URL_PREFIX } from './common';

export * as posts from './posts';
export * as common from './common';

export const getLatest = () => client.get(`${BLOG_API_URL_PREFIX}/latest`);

export const getRecommend = () => client.get(`${BLOG_API_URL_PREFIX}/recommend`);

export const getTags = () => client.get(`${BLOG_API_URL_PREFIX}/tags`);

export const getCategories = () => client.get(`${BLOG_API_URL_PREFIX}/categories`);
