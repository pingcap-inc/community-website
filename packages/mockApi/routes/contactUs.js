const router = require('express').Router();

const { successResp, errorResp, middlewares } = require('../utils');

const { wait, oneOf } = middlewares;

router.get(
  '/validate-qualification',
  wait(),
  oneOf(
    successResp({
      data: {
        company_info_is_completed: true,
        phone_email_is_completed: true,
      },
    }),
    errorResp({ code: 401, detail: 'Authentication credentials were not provided' })
  )
);

router.post(
  '/emergencies',
  wait(),
  oneOf(
    successResp(),
    errorResp({
      errors: {
        emergency_type: ['`onoffline` is not a valid choice'],
        affect: ['this field is required'],
      },
    }),
    errorResp({
      code: 428,
      detail: 'precondition required',
      data: {
        company_info_is_completed: false,
        phone_email_is_completed: true,
      },
    })
  )
);

router.post(
  '/cooperation',
  wait(),
  oneOf(
    successResp(),
    errorResp({
      errors: {
        cooperation_type: ['this field is required'],
        detail: ['this field is required'],
      },
    }),
    errorResp({
      code: 401,
      detail: 'Authentication credentials were not provided',
    }),
    errorResp({
      code: 428,
      detail: 'precondition required',
      data: {
        company_info_is_completed: true,
        phone_email_is_completed: false,
      },
    })
  )
);

router.post(
  '/communication',
  wait(),
  oneOf(
    successResp(),
    errorResp({
      errors: {
        tidb_node_num: ['this field is required'],
        pain_points: ['this feild is required'],
      },
    }),
    errorResp({
      code: 401,
      detail: 'Authentication credentials were not provided',
    }),
    errorResp({
      code: 428,
      detail: 'precondition required',
      data: {
        company_info_is_completed: false,
        phone_email_is_completed: true,
      },
    })
  )
);

module.exports = router;
