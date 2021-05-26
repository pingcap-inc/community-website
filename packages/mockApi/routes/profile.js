const dayjs = require('dayjs');
const faker = require('faker');
const router = require('express').Router();

const { errorResp, successResp, generator } = require('../utils');

const { datatype } = faker;

router.get('', async (req, res) => {
  const data = generator(
    {
      avatar_url: '{{image.avatar}}',
      username: '{{internet.userName}}',
      username_last_modified_at: '{{date.past}}',
      bio: '{{lorem.paragraphs}}',
      name: '{{name.findName}}',
      date_of_birth: '{{date.past}}',
      address: '{{address.streetAddress}}, {{address.city}}, {{address.country}}',
      company_name: '{{company.companyName}}',
    },
    {
      min: 1,
      callback: (item) => ({
        ...item,
        username_last_modified_at: dayjs(item.username_last_modified_at).format('YYYY-MM-DD HH:mm:ss'),
        gender: datatype.number({ min: 0, max: 1 }),
        date_of_birth: dayjs(item.date_of_birth, 'YYYY-MM-DD'),
      }),
    }
  );

  successResp({
    data,
  })(req, res);
});

module.exports = router;
