const router = require('express').Router();

const utils = require('../../utils');

const validate = (req, res) => {
  const { phone } = req.body;

  if (phone === '400') {
    return utils.errorResp({
      errors: {
        phone: ['phone number has been registered'],
        re_token_v3: ['man-machine check failed, please refresh page and try again later'],
      },
    })(req, res);
  }

  if (phone === '401') {
    return utils.errorResp({
      code: 401,
      detail: 'Authentication credentials were not provided',
    })(req, res);
  }
};

router.post('', async (req, res) => {
  await utils.wait();
  validate(req, res);
  utils.successResp({})(req, res);
});

router.post('/send-code', async (req, res) => {
  await utils.wait();
  validate(req, res);
  utils.successResp({})(req, res);
});

module.exports = router;
