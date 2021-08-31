import client from '../nextClient';

export const addEmail = (email) => client.post('/next-api/subscribe', { email });
