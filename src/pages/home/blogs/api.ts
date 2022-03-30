import { api } from '@tidb-community/datasource';

export interface ILatestBlogForHomePage {
  title: string;
  link: string;
  updated_at: Date;
  created_at: Date;
  creator: {
    username: string;
    profile_link: string;
    avatar_url: string;
  };
  categories: api.blog.IMeta[];
}

export async function getLatestBlog(size = 6): Promise<ILatestBlogForHomePage[]> {
  const result = await api.blog.getLatestList({ page: 0, size });
  return result.content.map((value) => {
    return {
      title: value.title,
      link: `/blog/${value.slug}`,
      updated_at: value.lastModifiedAt,
      created_at: value.createdAt,
      creator: {
        username: value.author.username,
        profile_link: `/u/${value.author.username}`,
        avatar_url: value.author.avatarURL,
      },
      categories: value.category,
    };
  });
}
