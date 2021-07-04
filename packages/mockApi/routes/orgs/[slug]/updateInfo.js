const { errorResp, successResp, wait } = require('../../../utils');

module.exports = async (req, res) => {
  await wait();
  const { slug } = req.params;

  if (slug === '400') {
    return errorResp({
      errors: {
        name: ['already used'],
        industry_type_code: ['invalid option'],
      },
    })(req, res);
  } else if (slug === '403') {
    return errorResp({
      detail: 'you do not have permission to perform this action',
    })(req, res);
  } else if (slug === '404') {
    return errorResp({
      code: 404,
      detail: 'organization does not exists',
    })(req, res);
  }

  successResp()(req, res);
};
