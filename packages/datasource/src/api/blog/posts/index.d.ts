import { CreatePost, Post } from './[id]';

export * as post from './[id]';

export function create(body: CreatePost): Promise<Post>;
