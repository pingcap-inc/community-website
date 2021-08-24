const router = require('express').Router();

const { successResp, errorResp, middlewares } = require('../utils');

const { wait, oneOf } = middlewares;

router.post(
  '',
  wait(),
  oneOf(
    successResp(),
    errorResp({
      errors: {
        email: ['must be a valid email address'],
      },
    })
  )
);

module.exports = router;
