const { errorResp, successResp } = require('../../utils');

module.exports = async (req, res) => {
  const { old_password } = req.body;

  if (old_password === '400') {
    return errorResp({
      detail: 'params wrong',
      errors: {
        old_password: ['old password is wrong'],
        new_password: ['the password is too similar to the username', 'this password is too common'],
      },
    })(req, res);
  }

  if (old_password === '401') {
    return errorResp({
      code: 401,
      detail: 'Authentication credentials were not provided',
    })(req, res);
  }

  successResp()(req, res);
};
