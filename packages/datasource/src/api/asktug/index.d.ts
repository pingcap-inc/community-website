import { ApiRequestFunction } from '../index';

interface Badges {
  data?: DataEntity[] | null;
}

interface BadgeEntity {
  id: number;
  name: string;
  image: string;
  icon: string;
  has_badge: boolean;
}

export const getBadgesList: ApiRequestFunction<void, Badges>;
