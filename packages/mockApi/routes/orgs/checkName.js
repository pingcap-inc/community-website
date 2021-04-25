const { errorResp, successResp } = require('../../utils');
const { MESSAGES } = require('../../constants');

const registeredNames = ['regitstered1', 'regitstered2'];

module.exports = (req, res) => {
  const { name } = req.body;

  if (registeredNames.includes(name)) {
    return errorResp({
      code: 400,
      detail: MESSAGES.INVALID_PARAMS,
      errors: {
        name: ["It's already been used"],
      },
    })(req, res);
  }

  successResp({
    detail: 'not yet used',
  })(req, res);
};
