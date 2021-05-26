const router = require('express').Router();

router.post('/disconnect/:provider', require('./disconnect'));

module.exports = router;
