const { errorResp, successResp } = require('../../utils');

module.exports = async (req, res) => {
  const { new_password } = req.body;

  if (new_password === '400') {
    return errorResp({
      detail: 'params wrong',
      errors: {
        new_password: ['the password is too similar to the username', 'this password is too common'],
      },
    })(req, res);
  }

  if (new_password === '401') {
    return errorResp({
      code: 401,
      detail: 'Authentication credentials were not provided',
    })(req, res);
  }

  if (new_password === '403') {
    return errorResp({
      code: 403,
      detail: 'You have no permission for preform this action',
    })(req, res);
  }

  successResp()(req, res);
};
