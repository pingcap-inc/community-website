const { successResp } = require('../../../utils');

module.exports = (req, res) => {
  const { id } = req.params;
  const _id = Number.parseInt(id);
  const data = {
    id: _id,
    version: 2,
    title: '此屬性可以讓過長文字直接換至下一行此屬性可以讓過長文字直接換至下一行此屬性可以讓過長文字直接換至下一行',
    content: '[{"type":"paragraph","children":[{"text":"feawfewf"}]}]',
    status: 'PUBLISHED',
    origin: 'REPOST',
    sourceURL: 'fewafewffa',
    coverImageURL: null,
    author: {
      id: 2,
      username: 'Hacker_1K80hkuZ',
      name: '',
      avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
    },
    category: { id: 1, name: '用户实践', slug: 'user-practice' },
    tags: [],
    recommended: null,
    recommender: null,
    recommendAt: null,
    publisher: null,
    publishedAt: '2021-11-18T01:21:23.000+00:00',
    likes: 0,
    shares: 0,
    favorites: 0,
    visits: 0,
    comments: 0,
  };
  return successResp(data)(req, res);
};

module.exports.comments = (req, res) => {
  const data = {
    content: [
      {
        id: 1,
        content: '测试',
        repliedTo: null,
        commenter: {
          id: 2,
          username: 'Hacker_1K80hkuZ',
          name: '',
          avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
        },
        createdAt: '2021-11-17T18:25:08.000+00:00',
        lastModifiedAt: '2021-11-17T18:25:08.000+00:00',
      },
      {
        id: 2,
        content: '测试',
        repliedTo: null,
        commenter: {
          id: 2,
          username: 'Hacker_1K80hkuZ',
          name: '',
          avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
        },
        createdAt: '2021-11-17T18:25:10.000+00:00',
        lastModifiedAt: '2021-11-17T18:25:10.000+00:00',
      },
      {
        id: 3,
        content: '测试',
        repliedTo: null,
        commenter: {
          id: 2,
          username: 'Hacker_1K80hkuZ',
          name: '',
          avatarURL: 'https://www.gravatar.com/avatar/8e0ecab6358b4760cdd695f06d63af61?d=identicon',
        },
        createdAt: '2021-11-17T18:25:12.000+00:00',
        lastModifiedAt: '2021-11-17T18:25:12.000+00:00',
      },
    ],
    page: {
      size: 20,
      totalElements: 3,
      totalPages: 1,
      number: 0,
    },
  };
  return successResp(data)(req, res);
};

module.exports.comment = (req, res) => {
  return successResp({})(req, res);
};
module.exports.like = (req, res) => {
  return successResp({})(req, res);
};
module.exports.cancelLike = (req, res) => {
  return successResp({})(req, res);
};
module.exports.favorite = (req, res) => {
  return successResp({})(req, res);
};
module.exports.cancelFavorite = (req, res) => {
  return successResp({})(req, res);
};
module.exports.share = (req, res) => {
  res.status(200).json(123);
};
