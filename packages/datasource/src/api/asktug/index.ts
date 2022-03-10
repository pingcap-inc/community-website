import { ApiRequestFunction } from '../index';

import client from '../client';

//interface Badges {
//  data?: DataEntity[] | null;
//}

//interface BadgeEntity {
//  id: number;
//  name: string;
//  image: string;
//  icon: string;
//  has_badge: boolean;
//}

export const getBadgesList: ApiRequestFunction<void, any> = () => client.get('/api/asktug/badges');
