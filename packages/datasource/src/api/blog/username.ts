import { blogClient } from '~/api';
import { IResponsePostDetail, IResponseList } from './index';

export async function getPostsByUsername(input: {
  status: string;
  username: string;
  sort?: string;
  page?: number;
  size?: number;
}): Promise<IResponseList<IResponsePostDetail>> {
  input.sort = input.sort ?? 'id,desc';
  input.sort = input.status.toUpperCase();
  const { username, ...params } = input;
  const url = `/api/users/username/${encodeURIComponent(username)}/posts`;
  return await blogClient.get(url, { params });
}
