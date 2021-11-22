import blogClient from '../../blogClient';

export const getComments = (id) => blogClient.get(`/api/${id}/comments`);
export const getPosts = (id) => blogClient.get(`/api/${id}/posts`);
export const getLikes = (id) => blogClient.get(`/api/${id}/likes`);
export const getFavorites = (id) => blogClient.get(`/api/${id}/favorites`);
