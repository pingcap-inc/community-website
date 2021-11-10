const { successResp } = require('../../../utils');
const { categories } = require('./categories.mock');

module.exports = (req, res) => {
  const { id } = req.params;
  const data = categories[id];
  return successResp(data)(req, res);
};
