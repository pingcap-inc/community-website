const router = require('express').Router();

router.get('/badges', require('./badges'));

module.exports = router;
