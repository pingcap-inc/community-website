const { successResp } = require('../../../utils');

const content = [
  {
    id: 1,
    content: '测试',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T18:25:08.000+00:00',
    lastModifiedAt: '2021-11-17T18:25:08.000+00:00',
  },
  {
    id: 2,
    content: '测试',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T18:25:10.000+00:00',
    lastModifiedAt: '2021-11-17T18:25:10.000+00:00',
  },
  {
    id: 3,
    content: '测试',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T18:25:12.000+00:00',
    lastModifiedAt: '2021-11-17T18:25:12.000+00:00',
  },
  {
    id: 4,
    content: 'fewafewf',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:28:15.000+00:00',
    lastModifiedAt: '2021-11-17T19:28:15.000+00:00',
  },
  {
    id: 5,
    content: '1',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:28:44.000+00:00',
    lastModifiedAt: '2021-11-17T19:28:44.000+00:00',
  },
  {
    id: 6,
    content: '12',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:28:46.000+00:00',
    lastModifiedAt: '2021-11-17T19:28:46.000+00:00',
  },
  {
    id: 7,
    content: '12',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:28:48.000+00:00',
    lastModifiedAt: '2021-11-17T19:28:48.000+00:00',
  },
  {
    id: 8,
    content: '333',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:28:52.000+00:00',
    lastModifiedAt: '2021-11-17T19:28:52.000+00:00',
  },
  {
    id: 9,
    content: '4213',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:28:58.000+00:00',
    lastModifiedAt: '2021-11-17T19:28:58.000+00:00',
  },
  {
    id: 10,
    content: '42133333',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:29:00.000+00:00',
    lastModifiedAt: '2021-11-17T19:29:00.000+00:00',
  },
  {
    id: 11,
    content: 'fewafwef',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:29:06.000+00:00',
    lastModifiedAt: '2021-11-17T19:29:06.000+00:00',
  },
  {
    id: 12,
    content: 'fewafwef',
    repliedTo: null,
    post: {
      id: 1,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-17T19:29:07.000+00:00',
    lastModifiedAt: '2021-11-17T19:29:07.000+00:00',
  },
  {
    id: 13,
    content: 'comment',
    repliedTo: null,
    post: {
      id: 4,
      title: 'title',
    },
    commenter: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '是因为真的没名字',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    createdAt: '2021-11-22T06:33:18.000+00:00',
    lastModifiedAt: '2021-11-22T06:33:18.000+00:00',
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
