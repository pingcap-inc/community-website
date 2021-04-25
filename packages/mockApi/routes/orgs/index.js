// The API doc could be refer to
// https://github.com/pingcap/account/blob/master/src/pingcap_sso/api/docs/ORG.md
const router = require('express').Router();

router.get('/check-name', (req, res) => {
  res.json({
    detail: 'not yet used',
  });
});

module.exports = router;
