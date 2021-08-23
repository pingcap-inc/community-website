import { ApiRequestFunction, PageData } from '../../index';

type MembersParams = {
  slug: string;
};

type TopicsParams = {
  slug: string;
  page: number;
  pageSize: number;
};

type TopicUrgenciesParams = {
  slug: string;
  topicId: number;
};

type MemberData = {
  name: string;
  username: string;
  email: string;
  id: number;
  role: string;
};

type UserData = {
  id: number; // 创建人 ID
  username: string; // 创建人姓名
  avatar_url: string; // 创建人头像
};

type TopicUrgencyData = {
  created_at: string; // 加急时间
  creator: UserData;
};

type TopicData = {
  id: number; // AskTUG 主题 ID (topic_id), https://asktug.com/t/{topics_slug}/{topic_id}
  slug: string; // AskTUG 主题 Slug (topic_slugs)
  category: {
    id: number;
    slug: string; // AskTUG 分类 Slug,  https://asktug.com/c/{category_slug}
    name: string; // AskTUG 分类名称
  };
  title: string; // 帖子标题
  excerpt: string; // 问题摘要
  like_count: number; // 点赞数
  reply_count: number; // 回复数
  views: number; // 查看数
  created_at: string; // 创建时间
  creator: UserData;
  urgencies: TopicUrgencyData[];
  is_qa_topic: boolean;
};

type TopicUrgeCheckData = {
  user_current_points: number;
  consumed_points: number;
  is_qa_topic: boolean;
};

type TopicsResult = PageData<TopicData, 'topics'>;

export const members: ApiRequestFunction<MembersParams, { data: MemberData[] }>;
export const topics: ApiRequestFunction<TopicsParams, TopicsResult>;
export const topicUrgencies: ApiRequestFunction<TopicUrgenciesParams, { data: TopicUrgencyData[] }>;
export const urgeTopic: ApiRequestFunction<TopicUrgenciesParams, void>;
export const urgeTopicCheck: ApiRequestFunction<TopicUrgenciesParams, void>;
