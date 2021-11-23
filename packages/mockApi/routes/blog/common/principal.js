const { successResp } = require('../../../utils');

module.exports = (req, res) => {
  // return errorResp({ code: 403, message: 'Forbidden' })(req, res)
  return successResp({
    id: 2,
    roles: ['READER'],
    authorities: [
      'DELETE_POST',
      'MODIFY_POST',
      'CREATE_POST',
      'CREATE_COMMENT',
      'DELETE_COMMENT',
      'MODIFY_COMMENT',
      'READ_POST',
    ],
  })(req, res);
};
