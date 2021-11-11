const { successResp } = require('../../../utils');
const { posts } = require('./posts.mock');

module.exports = (req, res) => {
  const { id } = req.params;
  const _id = Number.parseInt(id);
  const data = posts.filter((value) => value.id === _id)?.[0];
  return successResp(data)(req, res);
};
