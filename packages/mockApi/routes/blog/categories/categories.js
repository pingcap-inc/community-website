const { successResp } = require('../../utils');
const { LOCALHOST } = require('../../constants');
const { categories } = require('./categories.data');

module.exports = (req, res) => {
  const { page, size } = req.body;
  const _page = page ?? 1;
  const _size = size ?? 20;
  successResp({
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
      totalPages: categories.length / _size,
      number: _page,
    },
  })(req, res);
};
