const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  const { real_name } = req.body;

  if (real_name === undefined || real_name === '[empty]') {
    return errorResp({
      detail: 'something wrong',
      errors: {
        real_name: ['this field is required'],
        email: ['invalid email address'],
      },
    })(req, res);
  } else if (real_name === '[401]') {
    return errorResp({
      detail: 'Authentication credentials were not provided',
    })(req, res);
  } else if (real_name === '[409]') {
    return errorResp({
      detail: '用户已经提交过申请，或者已经加入 TUG 了',
    })(req, res);
  } else {
    successResp({
      detail: 'success',
    })(req, res);
  }
};
