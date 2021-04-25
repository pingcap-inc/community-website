const { MESSAGES } = require('./constants');

const errorResp = ({ code, detail, errors }) => (req, res) => {
  res.status(code).json({ detail, errors });
};

const successResp = ({ code = 200, data, detail = MESSAGES.SUCCESS } = {}) => (req, res) => {
  res.status(code).json(
    data === undefined
      ? { detail }
      : {
          detail,
          data,
        }
  );
};

module.exports = {
  errorResp,
  successResp,
};
