// The Postman collection chould be downloaded from
// https://www.getpostman.com/collections/f6e237c8ce2282dbd6b1

const router = require('express').Router();

router.use('/api/account', require('./account'));
router.use('/api/me', require('./me'));
router.use('/api/orgs', require('./orgs'));
router.use('/api/profile', require('./profile'));

module.exports = router;
