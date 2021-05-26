const router = require('express').Router();
const { successResp, errorResp, middlewares } = require('../utils');

const { wait, oneOf } = middlewares;

router.post(
  '/phone/check',
  wait(),
  oneOf(
    successResp({ code: 200, detail: 'success' }),
    ...[{ phone: ['phone number has been registered'] }, { phone: ['invalid phone number'] }].map((errors) =>
      errorResp({ code: 400, detail: 'params wrong', errors })
    )
  )
);

router.post(
  '/phone/send-code',
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
  '/phone',
  wait(),
  oneOf(
    (req, res) =>
      successResp({
        code: 200,
        detail: 'success',
        data: {
          redirect_to: req.query.redirect_to || 'http://localhost:3000/login?loginSuccess=true',
          sso_callbacks: [
            'http://localhost:4000/api/login/_sso_callback?code=200&ms=100',
            'http://localhost:4000/api/login/_sso_callback?code=400&ms=100',
            'http://localhost:4000/api/login/_sso_callback?code=200&ms=700',
          ],
        },
      })(req, res),
    ...[
      { phone: ['user does not exist'] },
      { phone: ['invalid phone number'] },
      { code: ['invalid code'] },
      { re_token_v3: ['man-machine check failed, please refresh page and try again later'] },
    ].map((errors) => errorResp({ code: 400, detail: 'params wrong', errors })),
    errorResp({ code: 429, detail: 'rate limit' })
  )
);

router.post(
  '/password',
  wait(),
  oneOf(
    (req, res) =>
      successResp({
        code: 200,
        detail: 'success',
        data: {
          redirect_to: req.query.redirect_to,
          sso_callbacks: [
            'http://localhost:4000/api/login/_sso_callback?code=200&ms=100',
            'http://localhost:4000/api/login/_sso_callback?code=400&ms=100',
            'http://localhost:4000/api/login/_sso_callback?code=200&ms=700',
          ],
        },
      })(req, res),
    ...[
      { __all__: ['identifier or password is wrong, please try again'] },
      { identifier: ['this feild is required'] },
      { re_token_v3: ['man-machine check failed, please refresh page and try again later'] },
    ].map((errors) => errorResp({ code: 400, detail: 'params wrong', errors })),
    errorResp({ code: 429, detail: 'rate limit' })
  )
);

router.get(
  '/_sso_callback',
  (req, res, next) => wait(parseInt(req.query.ms))(req, res, next),
  (req, res) => {
    res.sendStatus(parseInt(req.query.code));
  }
);

module.exports = router;
