import axios from 'axios';

const askTUGDomain = `${process.env.NEXT_PUBLIC_API_BASE_URL}/_asktug` ?? 'https://asktug.com';
const blogDomain = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
const accountsDomain = process.env.NEXT_PUBLIC_ACCOUNTS_BASE_URL ?? '';
const asktugApiDefaultPageSize = 30;

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

export async function getBadgesByUsername(username: string): Promise<IRawBadges[]> {
  const badgesMap = await getAllBadges();
  const result = await axios.get(`${askTUGDomain}/user-badges/${username}.json`);
  const { badges } = result.data;
  badges?.forEach((value) => badgesMap.set(value.id, { ...value, has_badge: true }));
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

export async function getUserProfileByUsername(username: string): Promise<IProfile> {
  const result = await axios.get(`${accountsDomain}/api/users/${username}`);
  const { data } = result.data;
  return data;
}

export enum EUserActionFilter {
  // eslint-disable-next-line no-unused-vars
  LIKE = 1,
  // eslint-disable-next-line no-unused-vars
  WAS_LIKED = 2,
  // eslint-disable-next-line no-unused-vars
  BOOKMARK = 3,
  // eslint-disable-next-line no-unused-vars
  NEW_TOPIC = 4,
  // eslint-disable-next-line no-unused-vars
  REPLY = 5,
  // eslint-disable-next-line no-unused-vars
  RESPONSE = 6,
  // eslint-disable-next-line no-unused-vars
  MENTION = 7,
  // eslint-disable-next-line no-unused-vars
  QUOTE = 9,
  // eslint-disable-next-line no-unused-vars
  EDIT = 11,
  // eslint-disable-next-line no-unused-vars
  NEW_PRIVATE_MESSAGE = 12,
  // eslint-disable-next-line no-unused-vars
  GOT_PRIVATE_MESSAGE = 13,
  // eslint-disable-next-line no-unused-vars
  SOLVED = 15,
  // eslint-disable-next-line no-unused-vars
  ASSIGNED = 16,
  // eslint-disable-next-line no-unused-vars
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

export const getTopicUrl = (topic_id: number, post_number: number) =>
  `${askTUGDomain}/t/topic/${topic_id}/${post_number}`;

export async function getAnswersByUsername(
  username: string,
  pageNumber: number = 0,
  pageSize: number = 10
): Promise<IUserAction[]> {
  const offset = pageNumber * asktugApiDefaultPageSize - pageSize;
  const result = await axios.get(
    `${askTUGDomain}/user_actions.json?offset=${offset}&username=${username}&filter=${EUserActionFilter.REPLY}`
  );
  const { user_actions } = result.data;
  return user_actions ?? [];
}

export async function getAskTugFavoritesByUsername(
  username: string,
  pageNumber: number = 0,
  pageSize: number = 10
): Promise<IUserAction[]> {
  const offset = pageNumber * asktugApiDefaultPageSize - pageSize;
  const result = await axios.get(
    `${askTUGDomain}/user_actions.json?offset=${offset}&username=${username}&filter=${EUserActionFilter.BOOKMARK}`
  );
  const { user_actions } = result.data;
  return user_actions ?? [];
}

export interface IQuestions {
  id: number;
  title: string;
  posts_count: number;
  reply_count: number;
  created_at: Date;
  views: number;
  like_count: number;
}

export async function getQuestionsByUsername(
  username: string,
  page: number = 0,
  per_page: number
): Promise<IQuestions[]> {
  const result = await axios.get(
    `${askTUGDomain}/topics/created-by/${username}.json?page=${page}&per_page=${per_page}`
  );
  return result.data.topic_list?.topics ?? [];
}

export interface IBlogAuthor {
  id: number;
  username: string;
  avatarURL: string;
}

export interface IBlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface IPost {
  id: number;
  slug: string;
  status: string;
  author: IBlogAuthor;
  origin: string;
  title: string;
  summary: string;
  publishedAt: Date;
  recommended: boolean;
  recommendAt?: Date;
  tags: [];
  likes: number;
  comments: number;
}

export async function getPostsByUsername(username: string, page?: number, size?: number): Promise<IPost[]> {
  const pageStr = page ?? '';
  const sizeStr = size ?? '';
  const result = await axios.get(
    `${blogDomain}/blog/api/users/username/${username}/posts?page=${pageStr}&size=${sizeStr}`
  );
  return result.data.content ?? [];
}

export interface IProfileSummary {
  user_summary: {
    likes_given: number;
    likes_received: number;
    topics_entered: number;
    posts_read_count: number;
    days_visited: number;
    topic_count: number;
    post_count: number;
    time_read: number;
  };
}

export async function getSummaryByUsername(username: string): Promise<IProfileSummary> {
  const result = await axios.get(`${askTUGDomain}/u/${username}/summary.json`);
  return result.data;
}
