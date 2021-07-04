// The API doc could be refer to
// https://github.com/pingcap/account/blob/master/src/pingcap_sso/api/docs/ORG.md

const router = require('express').Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/:slug', require('./[slug]/info'));
router.get('/:slug/find-user', require('./[slug]/findUser'));
router.get('/:slug/members', require('./[slug]/members'));
router.get('/:slug/topics', require('./[slug]/topics'));
router.get('/search-company', require('./searchCompany'));
router.post('/:slug/add-members', require('./[slug]/addMembers'));
router.post('/:slug/remove-member', require('./[slug]/removeMember'));
router.post('/:slug/upload-logo', upload.single('logo'), require('./[slug]/uploadLogo'));
router.post('/check-name', require('./checkName'));
router.post('/invitations/:id', require('./invitations/[id]'));
router.put('/:slug', require('./[slug]/updateInfo'));
router.put('/:slug/member-role', require('./[slug]/updateMemberRole'));

module.exports = router;
