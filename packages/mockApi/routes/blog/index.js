const router = require('express').Router();

router.get('/categories', require('./categories/categories'));
router.get('/categories/:id', require('./categories/[id]'));

module.exports = router;
