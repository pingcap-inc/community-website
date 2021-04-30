const faker = require('faker');
const router = require('express').Router();

const { ROLES } = require('../constants');
const { successResp, sample } = require('../utils');

const { datatype, internet, image } = faker;

router.get('', (req, res) => {
  successResp({
    data: {
      id: datatype.number({ min: 1, max: 10 }),
      username: internet.userName(),
      avatar_url: image.avatar(),
      org: {
        slug: internet.userName(),
        role: sample(Object.values(ROLES)),
      },
      // You may manually uncomment "org_enroll" if testing the register status
      // org_enroll: {
      //   audit_status: 0, // 0 -> pending, 1 -> pass, 2 -> deny
      //   audit_status_display: 'pending',
      //   audit_reason: faker.lorem.paragraph(),
      // },
    },
  })(req, res);
});

module.exports = router;
