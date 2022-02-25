import { blogClient } from '~/api';
import { IPost, IResponse } from './index';

export async function getPostsByUsername(input: {
  status: string;
  username: string;
  sort?: string;
  page?: number;
  size?: number;
}): Promise<IResponse<IPost>> {
  input.sort = input.sort ?? 'id,desc';
  input.sort = input.status.toUpperCase();
  const { username, ...params } = input;
  const url = `/api/users/username/${username}/posts`;
  return await blogClient.get(url, { params });
}
