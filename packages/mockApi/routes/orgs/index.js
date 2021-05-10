// The API doc could be refer to
// https://github.com/pingcap/account/blob/master/src/pingcap_sso/api/docs/ORG.md
//
// The Postman collection chould be downloaded from
// https://www.getpostman.com/collections/f6e237c8ce2282dbd6b1

const router = require('express').Router();

router.get('/:slug/find-user', require('./[slug]/findUser'));
router.get('/:slug/members', require('./[slug]/members'));
router.post('/:slug/add-members', require('./[slug]/addMembers'));
router.post('/:slug/remove-member', require('./[slug]/removeMember'));
router.post('/:slug/update-member-role', require('./[slug]/updateMemberRole'));
router.post('/check-name', require('./checkName'));
router.get('/search-company', require('./searchCompany'));
router.post('/invitations/:id', require('./invitations/[id]'));
router.use('/enroll', require('./enroll'));

module.exports = router;
