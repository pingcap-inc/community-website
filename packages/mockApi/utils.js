const { MESSAGES } = require('./constants');

const errorResp = ({ code = 400, detail = MESSAGES.INVALID_PARAMS, errors } = {}) => (req, res) => {
  res.status(code).json({ detail, errors });
};

const successResp = ({ code = 200, data, detail = MESSAGES.SUCCESS, ...rest } = {}) => (req, res) => {
  res.status(code).json({
    data,
    detail,
    ...rest,
  });
};

module.exports = {
  errorResp,
  successResp,
};
