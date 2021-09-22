const router = require('express').Router();

router.post('/applications', require('./applications'));

module.exports = router;
