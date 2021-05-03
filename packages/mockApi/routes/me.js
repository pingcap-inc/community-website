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
        role: utils.sample(Object.values(ROLES)),
      },
      // You may manually uncomment "org_enroll" if testing the register status
      // org_enroll: {
      //   audit_status: 0, // 0 -> pending, 1 -> pass, 2 -> deny
      //   audit_status_display: 'pending',
      //   audit_reason: faker.lorem.paragraph(),
      // },
    },
  })(req, res);

  // utils.errorResp({
  //   code: 401,
  //   detail: 'Authentication credentials were not provided',
  // })(req, res);
});

module.exports = router;
