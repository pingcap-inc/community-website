import blogClient from '../../blogClient';

export const getComments = ({ userId, page, size, sort }) =>
  blogClient.get(`/api/users/${userId}/comments`, { params: { page, size, sort } });
export const getPosts = ({ userId, page, size, status, sort }) =>
  blogClient.get(`/api/users/${userId}/posts`, { params: { page, size, status, sort } });
export const getLikes = ({ userId, page, size, sort }) =>
  blogClient.get(`/api/users/${userId}/likes`, { params: { page, size, sort } });
export const getFavorites = ({ userId, page, size, sort }) =>
  blogClient.get(`/api/users/${userId}/favorites`, { params: { page, size, sort } });
export const get = ({ userId }) => blogClient.get(`/api/users/${userId}`);
