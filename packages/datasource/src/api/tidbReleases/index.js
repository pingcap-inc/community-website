import client from '../client';

export const tidbReleases = () => client.get('/api/tidb-releases');
