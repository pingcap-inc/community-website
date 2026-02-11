import Axios from 'axios';
import { ApiRequestFunction } from '../index';

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

export const getBadgesList: ApiRequestFunction<void, any> = () =>
  Axios.get('/tidbcommunity/forum/badges.json').then(({ data }) => data);
