export interface FilterInfo {
  latest: boolean;
  type: 'all' | 'category' | 'tag';
  slug: string;
}

export const parseSlugs = (slugs: string[] | undefined, latest: string): FilterInfo | false => {
  if (!slugs?.length) {
    // url: /blog
    return {
      latest: Boolean(latest),
      type: 'all',
      slug: '',
    };
  } else {
    const [type, slug] = slugs;
    if (slugs.length === 2) {
      switch (type) {
        case 'c':
          return {
            latest: Boolean(latest),
            type: 'category',
            slug,
          };
        case 'tag':
          return {
            latest: Boolean(latest),
            type: 'tag',
            slug,
          };
        default:
          break;
      }
    }
  }
  return false;
};
