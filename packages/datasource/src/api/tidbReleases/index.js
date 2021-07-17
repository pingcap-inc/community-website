import client from '../client';

export const tidbReleases = () => client.post('/api/tidb-releases');
