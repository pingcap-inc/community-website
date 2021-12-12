const { successResp } = require('../../../utils');
const { content } = require('./audits.mock');

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
