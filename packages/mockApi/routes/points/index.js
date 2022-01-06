const router = require('express').Router();

router.get('/public', require('./public'));
router.get('/top', require('./top'));
router.get('/me', require('./me'));
router.post('/daily-checkin', require('./daily-checkin'));
router.get('/shop/products', require('./products'));
router.post('/shop/redeem', require('./redeem'));
router.get('/shop/redeem-records', require('./redeem-records'));
router.get('/awarded', require('./awarded'));
module.exports = router;
