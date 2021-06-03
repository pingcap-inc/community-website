const router = require('express').Router();
const { successResp, errorResp, middlewares } = require('../utils');

const { wait, oneOf } = middlewares;

router.post(
  '/send-code',
  wait(),
  oneOf(
    successResp({ code: 200, detail: 'success' }),
    ...[
      { phone: ['user does not exist'] },
      { phone: ['invalid phone number'] },
      { re_token_v3: ['man-machine check failed, please refresh page and try again later'] },
    ].map((errors) => errorResp({ code: 400, detail: 'params wrong', errors })),
    errorResp({ code: 429, detail: 'rate limit' })
  )
);

router.post(
  '',
  wait(),
  oneOf(
    (req, res) =>
      successResp({
        code: 200,
        detail: 'success',
        data: {
          redirect_to: req.body.redirect_to || 'http://localhost:3001/login?loginSuccess=true',
          sso_callbacks: [
            'http://localhost:4000/api/login/_sso_callback?code=200&ms=100',
            'http://localhost:4000/api/login/_sso_callback?code=400&ms=100',
            'http://localhost:4000/api/login/_sso_callback?code=200&ms=700',
          ],
        },
      })(req, res),
    ...[
      { phone: ['user already exist'] },
      { code: ['invalid code'] },
      { re_token_v3: ['man-machine check failed, please refresh page and try again later'] },
    ].map((errors) => errorResp({ code: 400, detail: 'params wrong', errors })),
    errorResp({ code: 429, detail: 'rate limit' })
  )
);

module.exports = router;
