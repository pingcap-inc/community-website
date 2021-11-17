const router = require('express').Router();

router.get('/categories', require('./categories/categories'));
router.get('/categories/:id', require('./categories/[id]'));
router.get('/categories/slug/:slug', require('./categories/[slug]'));
router.post('/categories', require('./categories/create-categories'));
router.put('/categories/:id', require('./categories/update-categories'));
router.delete('/categories/:id', require('./categories/delete-categories'));

router.get('/posts/latest', require('./posts/posts'));
router.get('/posts/recommend', require('./posts/posts'));
router.get('/posts/:id', require('./posts/[id]'));
router.post('/posts', require('./posts/create-posts'));
router.put('/posts/:id', require('./posts/update-posts'));
router.delete('/posts/:id', require('./posts/delete-posts'));

router.get('/tags', require('./tags/tags'));
router.get('/tags/hot', require('./tags/tags'));
router.get('/tags/:id', require('./tags/[id]'));
router.get('/tags/slug/:slug', require('./tags/[slug]'));

module.exports = router;
