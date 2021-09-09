const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  const { true_name } = req.body;

  // eslint-disable-next-line no-console
  console.log(req.body);

  if (true_name === undefined || true_name === '[empty]') {
    return errorResp({
      detail: 'something wrong',
      errors: {
        real_name: ['this field is required'],
      },
    })(req, res);
  }

  // successResp({
  //   detail: 'success',
  // })(req, res);
};
