import { ApiRequestFunction } from '../index';

import client from '../client';

export interface Badges {
  badges?: BadgeEntity[] | null;
}

export interface BadgeEntity {
  id: number;
  name: string;
  image_url: string;
  icon: string;
  has_badge: boolean;
}

export const getBadgesList: ApiRequestFunction<void, any> = () => client.get('/_asktug/badges');
