import client from '../client';

export const getBadgesList = () => client.get('/api/asktug/badges');