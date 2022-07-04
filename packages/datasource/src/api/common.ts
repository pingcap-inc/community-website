import client from './client';

export const searchCompany = (params: { word: string }) => client.get('/api/search-company', { params });
