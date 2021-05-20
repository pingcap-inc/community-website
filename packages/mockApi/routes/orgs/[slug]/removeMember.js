const { errorResp, successResp, wait } = require('../../../utils');

module.exports = async (req, res) => {
  await wait();
  const { slug } = req.params;

  if (slug === '400') {
    return errorResp({
      detail: 'you are the only admin of the organization, please appoint an admin before quit',
    })(req, res);
  } else if (slug === '404') {
    return errorResp({
      code: 404,
      detail: 'organization does not exists',
    })(req, res);
  }

  successResp()(req, res);
};
