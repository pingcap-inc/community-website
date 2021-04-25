// The API doc could be refer to
// https://github.com/pingcap/account/blob/master/src/pingcap_sso/api/docs/ORG.md
//
// The Postman collection chould be downloaded from
// https://www.getpostman.com/collections/f6e237c8ce2282dbd6b1

const router = require('express').Router();

router.post('/check-name', require('./checkName'));

module.exports = router;
