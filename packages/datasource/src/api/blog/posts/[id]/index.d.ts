export type PostOrigin = 'ORIGIN' | 'REPOST';

export interface Post {
  id: number;
}

interface Page<T> {
  content: T[];
  page: {
    current: number;
    totalElements: number;
    totalPages: number;
    size: number;
  };
}

export interface UserInfo {
  id: number;
  username: string;
  name: string;
  avatarURL: string;
}

export interface PostDetails extends Post {}

export interface CreatePost {
  title: string;
  content: string;
  origin: PostOrigin;
  sourceURL?: string;
  coverImageURL?: string;
  tags: number[];
  category?: number;
}

export interface PostComment {
  id: number;
  content: string;
  repliedTo: UserInfo;
  commenter: UserInfo;
  createdAt: string;
  lastModifiedAt: string;
}

export function info(id: number): Promise<PostDetails>;

export function update(id: number, body: CreatePost): Promise<Post>;

export function submit(id: number): Promise<void>;

export function reject(id: number): Promise<void>;

export function recommend(id: number): Promise<void>;

export function cancelRecommend(id: number): Promise<void>;

export function publish(id: number): Promise<void>;

export function cancelPublish(id: number): Promise<void>;

export function like(id: number): Promise<void>;

export function cancelLike(id: number): Promise<void>;

export function favorite(id: number): Promise<void>;

export function cancelFavorite(id: number): Promise<void>;

export function visit(id: number): Promise<void>;

export function share(id: number): Promise<number>;

export function comments(id: number, page: number, pageSize?: number): Promise<Page<PostComment>>;

export function comment(id: number, body: string, replyTo?: number): Promise<void>;
