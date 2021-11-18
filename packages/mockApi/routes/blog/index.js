const router = require('express').Router();

router.get('/categories', require('./categories/categories'));
router.get('/categories/:id', require('./categories/[id]'));
router.post('/categories', require('./categories/create-categories'));
router.put('/categories/:id', require('./categories/update-categories'));
router.delete('/categories/:id', require('./categories/delete-categories'));

router.get('/posts', require('./posts/posts'));
router.get('/posts/:id', require('./posts/[id]'));
router.get('/posts/:id/comments', require('./posts/[id]').comments);
router.post('/posts/:id/comments', require('./posts/[id]').comment);
router.patch('/posts/:id/like', require('./posts/[id]').like);
router.patch('/posts/:id/like/cancel', require('./posts/[id]').cancelLike);
router.patch('/posts/:id/favorite', require('./posts/[id]').favorite);
router.patch('/posts/:id/favorite/cancel', require('./posts/[id]').cancelFavorite);
router.post('/posts/:id/share', require('./posts/[id]').share);
router.post('/posts', require('./posts/create-posts'));
router.put('/posts/:id', require('./posts/update-posts'));
router.delete('/posts/:id', require('./posts/delete-posts'));

router.get('/common/principal', require('./common/principal'));

module.exports = router;
