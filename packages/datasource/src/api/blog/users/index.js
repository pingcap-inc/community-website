import blogClient from '../../blogClient';

export const getComments = (userId) => blogClient.get(`/api/${userId}/comments`);
export const getPosts = (userId) => blogClient.get(`/api/${userId}/posts`);
export const getLikes = (userId) => blogClient.get(`/api/${userId}/likes`);
export const getFavorites = (userId) => blogClient.get(`/api/${userId}/favorites`);
