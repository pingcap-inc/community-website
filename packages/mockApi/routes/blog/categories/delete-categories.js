const { successResp } = require('../../../utils');

module.exports = (req, res) => {
  const data = {
    code: 204,
  };
  return successResp(data)(req, res);
};
