import client from '../client';

export const me = () => client.get(`/api/me`);
