const { successResp } = require('../../../utils');
const { content } = require('./tags.mock');

module.exports = (req, res) => {
  const { slug } = req.params;
  const data = content.filter((value) => value.slug === slug)?.[0];
  return successResp(data)(req, res);
};
