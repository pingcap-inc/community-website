const router = require('express').Router();

router.use('/api/me', require('./me'));
router.use('/api/orgs', require('./orgs'));
router.use('/api/profile', require('./profile'));

module.exports = router;
