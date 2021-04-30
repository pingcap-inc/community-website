const { errorResp, successResp } = require('../../utils');

const registeredNames = ['regitstered1', 'regitstered2'];

module.exports = (req, res) => {
  const { name } = req.body;

  if (registeredNames.includes(name)) {
    return errorResp({
      errors: {
        name: ["It's already been used"],
      },
    })(req, res);
  }

  successResp({
    detail: 'not yet used',
  })(req, res);
};
