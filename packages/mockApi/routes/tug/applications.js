// eslint-disable-next-line no-unused-vars
const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  const { real_name } = req.body;

  // eslint-disable-next-line no-console
  console.log(req.body);
  console.log('real_name', real_name);

  if (real_name === undefined || real_name === '[empty]') {
    return errorResp({
      detail: 'something wrong',
      errors: {
        real_name: ['this field is required'],
      },
    })(req, res);
  } else {
    successResp({
      detail: 'success',
    })(req, res);
  }
};
