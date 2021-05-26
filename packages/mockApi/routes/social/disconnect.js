const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  const { provider } = req.params;

  if (provider === '401') {
    return errorResp({ detail: 'Authentication credentials were not provided.' })(req, res);
  }

  if (provider === '404') {
    return errorResp({
      detail: 'provider not found',
    })(req, res);
  }

  successResp()(req, res);
};
