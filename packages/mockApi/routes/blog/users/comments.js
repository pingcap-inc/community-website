const { successResp } = require('../../../utils');

const content = [
  {
    id: 0,
    content: 'string',
    repliedTo: {
      id: 0,
      username: 'string',
      name: 'string',
      introduction: 'string',
      avatarURL: 'string',
    },
    post: {
      creatorId: 0,
      modifierId: 0,
      deletedAt: '2021-11-22T02:42:19.738Z',
      id: 0,
      title: 'string',
      comments: [
        {
          creatorId: 0,
          modifierId: 0,
          deletedAt: '2021-11-22T02:42:19.738Z',
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
      public: true,
    },
    commenter: {
      id: 0,
      username: 'string',
      name: 'string',
      introduction: 'string',
      avatarURL: 'string',
    },
    createdAt: '2021-11-22T02:42:19.738Z',
    lastModifiedAt: '2021-11-22T02:42:19.738Z',
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
