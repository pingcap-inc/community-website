const router = require('express').Router();

const { successResp } = require('../../../utils');

router.get('', (req, res) => {
  successResp({
    data: [{ name: 'Maggie', username: 'liman124', email: 'liman@pingcap.com', role: '管理员' }],
  })(req, res);
});

module.exports = router;
