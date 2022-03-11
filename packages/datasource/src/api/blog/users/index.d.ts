import { Page, Pagination, IPost, PostStatus, UserInfo } from '../posts/[id]';

interface Query extends Pagination {
  status?: PostStatus;
}

interface Favorite {
  post: IPost;
  user: UserInfo;
  favoritedAt: string;
}

interface Like {
  post: IPost;
  user: UserInfo;
  likedAt: string;
}

interface Comment {
  id: number;
  content: string;
  repliedTo?: UserInfo;
  post: {
    id: number;
    title: string;
  };
  commenter: UserInfo;
}

interface UserDetails extends UserInfo {
  posts: 0;
  favorite: 0;
  likes: 0;
  comments: 0;
}

export function getPosts(param: { userId: number; status?: string; query?: Query }): Promise<Page<IPost>>;

export function getLikes(param: { userId: number; query?: Pagination }): Promise<Page<Like>>;

export function getFavorites(param: { userId: number; query?: Pagination }): Promise<Page<Favorite>>;

export function getComments(param: { userId: number; query?: Pagination }): Promise<Page<Comment>>;

export function get(param: { userId: number }): Promise<UserDetails>;
