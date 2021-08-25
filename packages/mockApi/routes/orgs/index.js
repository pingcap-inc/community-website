// The API doc could be refer to
// https://github.com/pingcap/account/blob/master/src/pingcap_sso/api/docs/ORG.md

const router = require('express').Router();

// XXX: These routers should be displayed before the dramatic slug routers,
// or they may be overwritten.
router.get('/search-company', require('./searchCompany'));
router.post('/check-name', require('./checkName'));
router.post('/invitations/:id', require('./invitations/[id]'));

router.get('/:slug', require('./[slug]/info'));
router.get('/:slug/find-user', require('./[slug]/findUser'));
router.get('/:slug/members', require('./[slug]/members'));
router.get('/:slug/topics', require('./[slug]/topics'));
router.post('/:slug/add-members', require('./[slug]/addMembers'));
router.post('/:slug/remove-member', require('./[slug]/removeMember'));
router.post('/:slug/upload-logo', require('./[slug]/uploadLogo'));
router.put('/:slug', require('./[slug]/updateInfo'));
router.put('/:slug/member-role', require('./[slug]/updateMemberRole'));
router.post('/:slug/topic-urgencies/precheck', require('./[slug]/urgePrecheck'));

module.exports = router;
