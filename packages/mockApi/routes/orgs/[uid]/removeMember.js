const { errorResp, successResp } = require('../../../utils');

module.exports = (req, res) => {
  const { uid } = req.params;

  if (uid === '400') {
    return errorResp({
      detail: 'you are the only admin of the organization, please appoint an admin before quit',
    })(req, res);
  } else if (uid === '404') {
    return errorResp({
      code: 404,
      detail: 'organization does not exists',
    })(req, res);
  }

  successResp()(req, res);
};
