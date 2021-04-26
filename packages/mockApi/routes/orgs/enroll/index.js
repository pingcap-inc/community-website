const router = require('express').Router();

const { MESSAGES } = require('../../../constants');
const { errorResp, successResp } = require('../../../utils');

router.use('/send-code', (req, res) => {
  const { email } = req.body;
  if (email === '429') {
    return errorResp({ code: 429, detail: MESSAGES.TOO_MANY_REQUESTS })(req, res);
  } else if (email === '400') {
    return errorResp({
      errors: {
        email: ['invalid email address'],
      },
    })(req, res);
  }

  successResp({
    payload: {
      email,
    },
  })(req, res);
});

module.exports = router;
