import blogClient from '../../blogClient';

export const getComments = (userId, params) => blogClient.get(`/api/${userId}/comments`, { params });
export const getPosts = (userId, params) => blogClient.get(`/api/${userId}/posts`, { params });
export const getLikes = (userId, params) => blogClient.get(`/api/${userId}/likes`, { params });
export const getFavorites = (userId, params) => blogClient.get(`/api/${userId}/favorites`, { params });
