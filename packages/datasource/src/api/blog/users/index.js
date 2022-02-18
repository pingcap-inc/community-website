import blogClient from '../../blogClient';

export const getComments = ({ userId, page, size }) =>
  blogClient.get(`/api/users/${userId}/comments`, { params: { page, size } });
export const getPosts = ({ userId, page, size, status }) =>
  blogClient.get(`/api/users/${userId}/posts`, { params: { page, size, status } });
export const getLikes = ({ userId, page, size }) =>
  blogClient.get(`/api/users/${userId}/likes`, { params: { page, size } });
export const getFavorites = ({ userId, page, size }) =>
  blogClient.get(`/api/users/${userId}/favorites`, { params: { page, size } });
export const get = ({ userId }) => blogClient.get(`/api/users/${userId}`);
