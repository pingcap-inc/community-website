type PageInfo = {
  path: string | undefined;
  status: string;
  statusText: string;
  showBadge?: boolean;
};

export const infos: PageInfo[] = [
  {
    path: 'all',
    status: '',
    statusText: '发表过任何',
    showBadge: true,
  },
  {
    path: 'draft',
    status: 'DRAFT',
    statusText: '草稿状态的',
  },
  {
    path: 'pending',
    status: 'PENDING',
    statusText: '审核中的',
  },
  {
    path: 'rejected',
    status: 'REJECTED',
    statusText: '审核未通过的',
  },
  {
    path: undefined,
    status: 'PUBLISHED',
    statusText: '发表过任何',
  },
];

// maps /blog/user/:id/posts => published
// maps /blog/user/:id/posts/{all,pending,draft,rejected}
// type is from slug
export const getPageInfo = (typeParam: string[] | undefined): PageInfo | undefined => {
  if (typeParam?.length > 1) {
    return undefined;
  }

  const [path] = typeParam || [];

  return infos.find((info) => info.path === path);
};
