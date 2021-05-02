const router = require('express').Router();

router.use('/api/me', require('./me'));
router.use('/api/orgs', require('./orgs'));

module.exports = router;
