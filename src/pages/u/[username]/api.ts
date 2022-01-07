import axios from 'axios';

const domain = 'https://asktug.com';

export interface IRawBadges {
  id: number;
  name: string;
  description: string;
  grant_count: number;
  image: string;
  listable: boolean;
  enabled: boolean;
  has_badge: boolean;
  long_description: string;
}

async function getAllBadges(): Promise<Map<IRawBadges['id'], IRawBadges>> {
  const result = await axios.get(`${domain}/badges.json`);
  const { badges } = result.data;
  const badgesMap = new Map<IRawBadges['id'], IRawBadges>();
  badges.forEach((value) => badgesMap.set(value.id, { ...value, has_badge: false }));
  return badgesMap;
}

export async function getBadgesById(id: string): Promise<IRawBadges[]> {
  const badgesMap = await getAllBadges();
  const result = await axios.get(`${domain}/user-badges/${id}.json`);
  const { badges } = result.data;
  badges.forEach((value) => badgesMap.set(value.id, { ...value, has_badge: true }));
  const badgesArr: IRawBadges[] = [];
  badgesMap.forEach((value) => badgesArr.push(value));
  return badgesArr;
}

export async function getUserProfileById(id: string): Promise<{}> {
  return {};
}
