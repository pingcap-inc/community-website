const router = require('express').Router();

router.get('/categories', require('./categories/categories'));
router.get('/categories/:id', require('./categories/[id]'));
router.post('/categories/:id', require('./categories/create-categories'));
router.put('/categories/:id', require('./categories/update-categories'));

router.get('/posts', require('./posts/posts'));
router.get('/posts/:id', require('./posts/[id]'));
router.post('/posts/:id', require('./posts/create-posts'));
router.put('/posts/:id', require('./posts/update-posts'));

module.exports = router;
