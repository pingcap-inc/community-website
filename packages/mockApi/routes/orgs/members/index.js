const router = require('express').Router();

const { successResp, generator } = require('../../../utils');

router.get('', (req, res) => {
  const data = generator({
    id: '{{datatype.uuid}}',
    name: '{{name.firstName}}',
    username: '{{internet.userName}}',
    email: '{{internet.email}}',
    isAdmin: '{{datatype.boolean}}',
  });

  successResp({
    data,
  })(req, res);
});

module.exports = router;
