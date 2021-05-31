const router = require('express').Router();
const { successResp, errorResp, middlewares } = require('../utils');

const { wait, oneOf } = middlewares;

router.post(
  '/send-code',
  wait(),
  oneOf(
    successResp({ code: 200, detail: 'success' }),
    ...[
      { identifier: ['user does not exists'] },
      { re_token_v3: ['man-machine check failed, please refresh page and try again later'] },
    ].map((errors) => errorResp({ code: 400, detail: 'params wrong', errors })),
    errorResp({ code: 429, detail: 'rate limit' })
  )
);

router.post(
  '/verify',
  wait(),
  oneOf(
    successResp({ code: 200, detail: 'success' }),
    errorResp({ code: 400, detail: 'params wrong', errors: { code: ['invalid code'] } })
  )
);

router.post(
  '/reset-password',
  wait(),
  oneOf(
    successResp({ code: 200, detail: 'success' }),
    errorResp({ code: 428, detail: 'precondition required，please verify your identity first' }),
    errorResp({ code: 400, detail: 'params wrong', errors: { new_password: ['password is required'] } })
  )
);

router.head(
  '/reset-password',
  wait(),
  oneOf(
    (req, res) => res.sendStatus(200),
    (req, res) => res.sendStatus(428)
  )
);

module.exports = router;
