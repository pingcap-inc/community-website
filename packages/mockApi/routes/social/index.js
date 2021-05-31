const router = require('express').Router();

router.get('login', require('./login'));
router.post('/disconnect/:provider', require('./disconnect'));

module.exports = router;
