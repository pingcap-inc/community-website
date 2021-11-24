const { successResp } = require('../../../utils');

const content = [
  {
    post: {
      id: 1,
      title: 'title',
      status: 'PUBLISHED',
      origin: 'REPOST',
      author: {
        id: 2,
        username: 'Hacker_1K80hkuZ',
        name: '是因为真的没名字',
        avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
      },
      category: {
        id: 1,
        name: '用户实践',
        slug: 'user-practice',
      },
      tags: [],
      recommended: null,
      recommender: null,
      publisher: null,
      publishedAt: '2021-11-18T01:21:23.000+00:00',
    },
    user: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    favoritedAt: '2021-11-22T06:31:47.000+00:00',
  },
  {
    post: {
      id: 4,
      title: 'title',
      status: 'PUBLISHED',
      origin: 'REPOST',
      author: {
        id: 2,
        username: 'Hacker_1K80hkuZ',
        name: '是因为真的没名字',
        avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
      },
      category: {
        id: 1,
        name: '用户实践',
        slug: 'user-practice',
      },
      tags: [
        {
          id: 2,
          name: '测评',
          slug: 'evaluation',
        },
        {
          id: 3,
          name: '调优',
          slug: 'tuning',
        },
      ],
      recommended: null,
      recommender: null,
      publisher: {
        id: 2,
        username: 'Hacker_1K80hkuZ',
        name: '是因为真的没名字',
        avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
      },
      publishedAt: '2021-11-22T06:33:03.000+00:00',
    },
    user: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    favoritedAt: '2021-11-22T06:33:08.000+00:00',
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
