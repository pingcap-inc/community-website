const router = require('express').Router();

router.get('/login/:provider', require('./login'));
router.post('/disconnect/:provider', require('./disconnect'));

module.exports = router;
