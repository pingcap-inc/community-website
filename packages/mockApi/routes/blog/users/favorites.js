const { successResp } = require('../../../utils');

const content = [
  {
    key: {
      postID: 0,
      userID: 0,
    },
    post: {
      creatorId: 0,
      modifierId: 0,
      deletedAt: '2021-11-22T02:45:02.099Z',
      id: 0,
      title: 'string',
      status: 'DRAFT',
      origin: 'ORIGINAL',
      author: {
        id: 0,
        username: 'string',
        name: 'string',
        introduction: 'string',
        avatarURL: 'string',
      },
      category: {
        creatorId: 0,
        modifierId: 0,
        deletedAt: '2021-11-22T02:45:02.099Z',
        id: 0,
        name: 'string',
        slug: 'string',
        weight: 0,
        description: 'string',
      },
      tags: [
        {
          creatorId: 0,
          modifierId: 0,
          deletedAt: '2021-11-22T02:45:02.099Z',
          id: 0,
          name: 'string',
          slug: 'string',
          weight: 0,
        },
      ],
      comments: [
        {
          creatorId: 0,
          modifierId: 0,
          deletedAt: '2021-11-22T02:45:02.099Z',
          id: 0,
          content: 'string',
          replyComment: 'string',
          post: 'string',
          commenter: {
            id: 0,
            username: 'string',
            name: 'string',
            introduction: 'string',
            avatarURL: 'string',
          },
          level: 0,
        },
      ],
      recommended: true,
      recommender: {
        id: 0,
        username: 'string',
        name: 'string',
        introduction: 'string',
        avatarURL: 'string',
      },
      publisher: {
        id: 0,
        username: 'string',
        name: 'string',
        introduction: 'string',
        avatarURL: 'string',
      },
      publishedAt: '2021-11-22T02:45:02.099Z',
      public: true,
    },
    user: {
      id: 0,
      username: 'string',
      name: 'string',
      introduction: 'string',
      avatarURL: 'string',
    },
    favoritedAt: '2021-11-22T02:45:02.099Z',
  },
];

module.exports = (req, res) => {
  const { page, size } = req.query;
  const _page = page ? Number.parseInt(page) : 1;
  const _size = size ? Number.parseInt(size) : 20;
  const data = {
    content,
    page: {
      size: _size,
      totalElements: content.length,
      totalPages: Math.floor(content.length / _size),
      number: _page,
    },
  };
  return successResp(data)(req, res);
};
