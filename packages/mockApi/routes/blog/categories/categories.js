const { successResp } = require('../../../utils');
const { categories } = require('./categories.mock');
const { LOCALHOST } = require('../../../constants');

module.exports = (req, res) => {
  const { page, size } = req.query;
  const _page = page ? Number.parseInt(page) : 1;
  const _size = size ? Number.parseInt(size) : 20;
  const data = {
    _embedded: {
      categories,
    },
    _links: {
      self: {
        href: `${LOCALHOST}/blog/api/categories?page=${_page}&size=${_size}`,
      },
      profile: {
        href: `${LOCALHOST}/blog/api/profile/categories`,
      },
    },
    page: {
      size: _size,
      totalElements: categories.length,
      totalPages: Math.floor(categories.length / _size),
      number: _page,
    },
  };
  return successResp(data)(req, res);
};
