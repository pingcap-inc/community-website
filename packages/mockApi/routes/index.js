const router = require('express').Router();

router.use('/api/orgs', require('./orgs'));

module.exports = router;
