const faker = require('faker');
const router = require('express').Router();

const utils = require('../utils');
const { ROLES } = require('../constants');

const { datatype, internet, image } = faker;

router.get('', (req, res) => {
  utils.successResp({
    data: {
      id: datatype.number({ min: 1, max: 5 }),
      username: internet.userName(),
      avatar_url: image.avatar(),
      org: {
        slug: internet.userName(),
        // role: utils.sample(Object.values(ROLES)),
        role: ROLES.ADMIN,
      },
      // You may manually uncomment "org_enroll" if testing the register status
      // org_enroll: {
      //   audit_status: 0, // 0 -> pending, 1 -> pass, 2 -> deny
      //   audit_status_display: 'pending',
      //   audit_reason: faker.lorem.paragraph(),
      // },
      org_invitations: [
        {
          id: 1,
          org_name: 'PingCAP',
          org_slug: 'xxxxxx1',
          org_company: '北京平凯星辰科技发展有限公司',
          inviter_username: 'wangdi',
          valid: true,
        },
        {
          id: 2,
          org_name: 'PongCAP',
          org_slug: 'xxxxxx2',
          org_company: '北京乓凯星辰科技发展有限公司',
          inviter_username: 'dangwi',
          valid: false,
        },
        {
          id: 3,
          org_name: 'PACPing',
          org_slug: 'xxxxxx3',
          org_company: '一个你已经加入了的公司',
          inviter_username: 'gandiw',
          valid: true,
        },
      ],
    },
  })(req, res);

  // utils.errorResp({
  //   code: 401,
  //   detail: 'Authentication credentials were not provided',
  // })(req, res);
});

module.exports = router;
