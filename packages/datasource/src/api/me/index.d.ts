import { ApiRequestFunction } from '../index';

type MeData = {
  id: number;
  username: string;
  avatar_url: string;
  org: {
    slug: string;
    role: string;
  };
};

export const me: ApiRequestFunction<void, MeData>;
