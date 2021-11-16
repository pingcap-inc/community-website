const { successResp } = require('../../../utils');
const { content } = require('./tags.mock');

module.exports = (req, res) => {
  const { id } = req.params;
  const _id = Number.parseInt(id);
  const data = content.filter((value) => value.id === _id)?.[0];
  return successResp(data)(req, res);
};
