// The Postman collection chould be downloaded from
// https://www.getpostman.com/collections/f6e237c8ce2282dbd6b1

const router = require('express').Router();

router.use('/accounts', require('./accountsSite'));

router.use('/api/account', require('./account'));
router.use('/api/contact-us', require('./contactUs'));
router.use('/api/forgot', require('./forgot'));
router.use('/api/login', require('./login'));
router.use('/api/me', require('./me'));
router.use('/api/operation', require('./operation'));
router.use('/api/orgs', require('./orgs'));
router.use('/api/profile', require('./profile'));
router.use('/api/signup', require('./signup'));
router.use('/api/social', require('./social'));
router.use('/api/tidb-releases', require('./tidbReleases'));
router.use('/next-api/subscribe', require('./subscribe'));
router.use('/api/tug', require('./tug'));
router.use('/blog/api', require('./blog'));
router.use('/api/asktug', require('./asktug'));
router.use('/api/points', require('./points'));
router.use('/api/sms', require('./sms'));
router.use('/_asktug/notifications', require('./notifications'));

module.exports = router;
