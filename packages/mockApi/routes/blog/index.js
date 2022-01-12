const router = require('express').Router();

router.get('/categories', require('./categories/categories'));
router.get('/categories/:id', require('./categories/[id]'));
router.get('/categories/search/bySlug', require('./categories/[slug]'));
router.post('/categories', require('./categories/create-categories'));
router.put('/categories/:id', require('./categories/update-categories'));
router.delete('/categories/:id', require('./categories/delete-categories'));

router.get('/posts/latest', require('./posts/posts'));
router.get('/posts/recommend', require('./posts/posts'));
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
router.get('/posts/:slug/detail', require('./posts/[slug]'));

router.get('/tags', require('./tags/tags'));
router.get('/tags/hot', require('./tags/tags'));
router.get('/tags/:id', require('./tags/[id]'));
router.get('/tags/search/bySlug', require('./tags/[slug]'));

router.get('/users/:id', require('./users/[userId]'));
router.get('/users/:id/posts', require('./users/posts'));
router.get('/users/:id/likes', require('./users/likes'));
router.get('/users/:id/favorites', require('./users/favorites'));
router.get('/users/:id/comments', require('./users/comments'));

router.get('/principal', require('./common/principal'));
router.post('/upload/image/auth', require('./common/upload'));
router.put('/fake-upload', require('./common/upload').fakeUpload);

router.get('/audits', require('./audits/audits'));
router.get('/audits/:id', require('./audits/[id]'));

module.exports = router;
