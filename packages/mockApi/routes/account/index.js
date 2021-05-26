// The API doc could be refer to
// https://github.com/pingcap/account/blob/master/src/pingcap_sso/api/docs/ACCOUNT.md

const router = require('express').Router();

router.get('/settings', require('./settings'));

module.exports = router;
