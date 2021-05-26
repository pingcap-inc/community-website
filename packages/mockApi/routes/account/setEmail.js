const router = require('express').Router();

const { errorResp, successResp, wait } = require('../../utils');

const validate = (req, res) => {
  const { email } = req.body;

  if (email === '400') {
    return errorResp({
      detail: 'params wrong',
      errors: {
        email: ['email has been registered'],
        re_token_v3: ['man-machine check failed, please refresh page and try again later'],
      },
    })(req, res);
  }

  if (email === '401') {
    return errorResp({
      code: 401,
      detail: 'Authentication credentials were not provided',
    })(req, res);
  }
};

router.post('', async (req, res) => {
  await wait();
  validate(req, res);
  successResp({})(req, res);
});

router.post('/send-code', async (req, res) => {
  await wait();
  validate(req, res);
  successResp({})(req, res);
});

module.exports = router;
