// The API doc could be refer to
// https://github.com/pingcap/account/blob/master/src/pingcap_sso/api/docs/ACCOUNT.md

const router = require('express').Router();

router.get('/settings', require('./settings'));
router.use('/set-email', require('./setEmail'));
router.use('/set-phone', require('./setPhone'));

module.exports = router;
