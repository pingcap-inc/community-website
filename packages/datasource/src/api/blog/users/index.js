import blogClient from '../../blogClient';

import * as username from './username';
export { username };

export const getComments = (userId, params) => blogClient.get(`/api/users/${userId}/comments`, { params });
export const getPosts = (userId, params) => blogClient.get(`/api/users/${userId}/posts`, { params });
export const getLikes = (userId, params) => blogClient.get(`/api/users/${userId}/likes`, { params });
export const getFavorites = (userId, params) => blogClient.get(`/api/users/${userId}/favorites`, { params });
export const get = (userId) => blogClient.get(`/api/users/${userId}`);
