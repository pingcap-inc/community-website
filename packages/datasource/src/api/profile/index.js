import client from '../client';

export const profile = () => client.get(`/api/profile`);
