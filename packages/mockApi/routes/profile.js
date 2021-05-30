const _ = require('lodash');
const dayjs = require('dayjs');
const faker = require('faker');
const router = require('express').Router();

const utils = require('../utils');

const { datatype } = faker;

const positionKeys = Object.keys(require('@tidb-community/datasource/lib/form/org/personal-positions.json'));

router.get('', async (req, res) => {
  await utils.wait(2000);

  // return utils.errorResp({
  //   code: 401,
  //   detail: 'Authentication credentials were not provided',
  // })(req, res);

  const data = utils.generator(
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
      callback: (item) => {
        const data = {
          ...item,
          username_last_modified_at: dayjs(item.username_last_modified_at).format('YYYY-MM-DD HH:mm:ss'),
          gender: datatype.number({ min: 0, max: 1 }),
          date_of_birth: dayjs(item.date_of_birth, 'YYYY-MM-DD'),
          job_title: _.sample(positionKeys),
        };

        _.sampleSize(
          [
            'username_last_modified_at',
            'bio',
            'name',
            'date_of_birth',
            'address',
            'company_name',
            'gender',
            'job_title',
          ],
          3
        ).forEach((key) => {
          data[key] = null;
        });

        return data;
      },
    }
  )[0];

  utils.successResp({
    data,
  })(req, res);
});

router.patch('', async (req, res) => {
  await utils.wait();
  utils.successResp()(req, res);
});

module.exports = router;
