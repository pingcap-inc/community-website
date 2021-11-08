const router = require('express').Router();

router.get('/categories', require('./categories'));

module.exports = router;
