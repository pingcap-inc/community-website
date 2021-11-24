import { Page, Pagination, Post, PostStatus, UserInfo } from '../posts/[id]';

interface Query extends Pagination {
  status?: PostStatus;
}

interface Favorite {
  post: Post;
  user: UserInfo;
  favoritedAt: string;
}

interface Like {
  post: Post;
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

export function getPosts(userId: number, query?: Query): Promise<Page<Post>>;

export function getLikes(userId: number, query?: Query): Promise<Page<Like>>;

export function getFavorites(userId: number, query?: Query): Promise<Page<Favorite>>;

export function getComments(userId: number, query?: Query): Promise<Page<Comment>>;

export function get(userId: number): Promise<UserDetails>;
