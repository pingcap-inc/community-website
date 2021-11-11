const { successResp } = require('../../../utils');
const { posts } = require('./posts.mock');

module.exports = (req, res) => {
  const { page, size } = req.query;
  const _page = page ? Number.parseInt(page) : 1;
  const _size = size ? Number.parseInt(size) : 20;
  const data = {
    _embedded: {
      posts,
    },
    _links: [
      {
        href: 'string',
        hreflang: 'string',
        title: 'string',
        type: 'string',
        deprecation: 'string',
        profile: 'string',
        name: 'string',
        templated: true,
      },
    ],
    page: {
      size: _size,
      totalElements: posts.length,
      totalPages: Math.floor(posts.length / _size),
      number: _page,
    },
  };
  return successResp(data)(req, res);
};
