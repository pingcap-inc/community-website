import client from '../client';

export const fetch = () => client.get('/api/profile');

export const update = (data) => client.patch('/api/profile', data);
