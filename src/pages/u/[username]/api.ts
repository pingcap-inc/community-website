import axios from 'axios';

const askTUGDomain = 'https://asktug.com';

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
  const result = await axios.get(`${askTUGDomain}/badges.json`);
  const { badges } = result.data;
  const badgesMap = new Map<IRawBadges['id'], IRawBadges>();
  badges.forEach((value) => badgesMap.set(value.id, { ...value, has_badge: false }));
  return badgesMap;
}

export async function getBadgesById(id: string): Promise<IRawBadges[]> {
  const badgesMap = await getAllBadges();
  const result = await axios.get(`${askTUGDomain}/user-badges/${id}.json`);
  const { badges } = result.data;
  badges.forEach((value) => badgesMap.set(value.id, { ...value, has_badge: true }));
  const badgesArr: IRawBadges[] = [];
  badgesMap.forEach((value) => badgesArr.push(value));
  return badgesArr;
}

export interface IProfile {
  username: string;
  avatar_url: string;
  bio: string;
  joined_at: string;
  level: number;
  points: number;
  exps: number;
  level_desc: {
    min_exps: number;
    max_exps: number;
    progress: number;
  };
  can_edit: boolean;
}

export async function getUserProfileById(id: string): Promise<IProfile> {
  const result = await axios.get(`https://accounts.pingcap.com/api/users/${id}`);
  const { data } = result.data;
  return data;
}

export enum EUserActionFilter {
  LIKE = 1,
  WAS_LIKED = 2,
  BOOKMARK = 3,
  NEW_TOPIC = 4,
  REPLY = 5,
  RESPONSE = 6,
  MENTION = 7,
  QUOTE = 9,
  EDIT = 11,
  NEW_PRIVATE_MESSAGE = 12,
  GOT_PRIVATE_MESSAGE = 13,
  SOLVED = 15,
  ASSIGNED = 16,
}

export interface IUserAction {
  topic_id: number;
  post_id: number;
  post_number: number;
  title: string;
  username: string;
  created_at: Date;
  excerpt: string;
}

export async function getAnswersById(id: string, offset: number = 0): Promise<IUserAction[]> {
  const result = await axios.get(
    `${askTUGDomain}/user_actions.json?offset=${offset}&username=${id}&filter=${EUserActionFilter.REPLY}`
  );
  const { user_actions } = result.data;
  return user_actions ?? [];
}

export const getPostUrl = (topic_id: number, post_number: number) =>
  `${askTUGDomain}/t/topic/${topic_id}/${post_number}`;
