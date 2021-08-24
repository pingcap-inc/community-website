import client from '../client';

export const addEmail = ({ email }) => client.post('api/subscribe', { email });
