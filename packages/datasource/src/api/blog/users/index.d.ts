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

export function getPosts(userId: string, query?: Query): Promise<Page<Post>>;

export function getLikes(userId: string, query?: Query): Promise<Page<Like>>;

export function getFavorites(userId: string, query?: Query): Promise<Page<Favorite>>;

export function getComments(userId: string, query?: Query): Promise<Page<Comment>>;
