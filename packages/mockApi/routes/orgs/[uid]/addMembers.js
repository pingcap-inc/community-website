const { errorResp, successResp } = require('../../../utils');

module.exports = (req, res) => {
  const { uid } = req.params;

  if (uid === '403') {
    return errorResp({
      code: 403,
      detail: 'you do not have permission to perform this action',
    })(req, res);
  } else if (uid === '404') {
    return errorResp({
      code: 404,
      detail: 'organization does not exists',
    })(req, res);
  }

  successResp()(req, res);
};
