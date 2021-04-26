const { MESSAGES } = require('./constants');

const errorResp = ({ code = 400, detail = MESSAGES.INVALID_PARAMS, errors }) => (req, res) => {
  res.status(code).json({ detail, errors });
};

const successResp = ({ code = 200, data, detail = MESSAGES.SUCCESS, payload } = {}) => (req, res) => {
  const respPayload =
    payload ??
    (data === undefined
      ? { detail }
      : {
          detail,
          data,
        });

  res.status(code).json(respPayload);
};

module.exports = {
  errorResp,
  successResp,
};
