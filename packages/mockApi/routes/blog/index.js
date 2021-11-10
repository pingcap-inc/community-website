const router = require('express').Router();

router.get('/categories', require('./categories/categories'));
router.get('/categories/:id', require('./categories/[id]'));
router.get('/posts', require('./posts/posts'));
router.get('/posts/:id', require('./posts/[id]'));

module.exports = router;
