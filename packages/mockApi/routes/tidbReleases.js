const router = require('express').Router();

const { successResp, middlewares } = require('../utils');

router.get(
  '',
  middlewares.wait(),
  successResp({
    data: [
      {
        major_number: 5,
        prefix: 'v5',
        children: ['v5.1.0', 'v5.0.3', 'v5.0.1'],
      },
      {
        major_number: 4,
        prefix: 'v4',
        children: ['v4.1.0', 'v4.0.1', 'v4.0.0'],
      },
    ],
  })
);

module.exports = router;
