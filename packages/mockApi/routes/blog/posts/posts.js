const { successResp } = require('../../../utils');
const { content } = require('./posts.mock');

module.exports = (req, res) => {
  // const { page, size } = req.query;
  // const _page = page ? Number.parseInt(page) : 1;
  // const _size = size ? Number.parseInt(size) : 20;
  const data = {
    page: {
      size: 0,
      totalElements: 0,
      totalPages: 0,
      number: 0,
    },
    content,
  };
  return successResp(data)(req, res);
};
