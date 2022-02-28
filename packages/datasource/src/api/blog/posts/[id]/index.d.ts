export interface UserInfo {
  id: number;
  username: string;
  name: string;
  avatarURL: string;
}

export interface PostDetails extends IPost {}

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

export function update(id: number, body: CreatePost): Promise<IPost>;

export function submit(id: number): Promise<void>;

export function cancelSubmit(id: number): Promise<void>;

export function reject(id: number, reason: string): Promise<void>;

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

export function delComment(id: number, commentId: number): Promise<void>;
