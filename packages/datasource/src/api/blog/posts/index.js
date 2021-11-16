import blogClient from '../../blogClient';

export * as post from './[id]';

export async function create(post) {
  return await blogClient.post('/api/posts', post);
}
