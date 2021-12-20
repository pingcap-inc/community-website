export type PostOrigin = 'ORIGINAL' | 'REPOST';
export type PostStatus = 'DRAFT' | 'PENDING' | 'REJECTED' | 'PUBLISHED' | 'ARCHIVED';

export interface Meta {
  id: number;
  name: string;
  slug: string;
}

export interface Post {
  creatorId: number;
  modifierId: number;
  deletedAt: string;
  publishedAt: string;
  id: number;
  slug: string;
  version: string;
  title: string;
  content: string;
  category: Meta;
  tags: Meta[];
  origin: PostOrigin;
  status: PostStatus;
  sourceURL: string;
  coverImageURL?: string;
  rejectReason?: string;
  recommended: boolean;
  public: boolean;
}

interface Page<T> {
  content: T[];
  page: {
    number: number; // 0 based
    totalElements: number;
    totalPages: number;
    size: number;
  };
}

interface Pagination {
  page?: number;
  size?: number;
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
  repliedTo?: UserInfo;
  commenter: UserInfo;
  createdAt: string;
  lastModifiedAt: string;
}

interface Share {
  shareID: number;
  shared: boolean;
}

export function info(id: number): Promise<PostDetails>;

export function update(id: number, body: CreatePost): Promise<Post>;

export function submit(id: number): Promise<void>;

export function cancelSubmit(id: number): Promise<void>;

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

export function share(id: number): Promise<Share>;

export function comments(id: number, page: number, pageSize?: number): Promise<Page<PostComment>>;

export function comment(id: number, body: string, replyTo?: number): Promise<void>;

export function del(id: number): Promise<void>;
