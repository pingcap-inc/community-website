const router = require('express').Router();

router.get('/', require('./categories'));
router.get('/:id', require('./[id]'));

module.exports = router;
