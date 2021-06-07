const _ = require('lodash');
const faker = require('faker');

const { errorResp, successResp, generator, wait } = require('../../../utils');
const { ROLES, ROLE_NAMES } = require('../../../constants');

const { datatype } = faker;

module.exports = async (req, res) => {
  await wait();
  const { slug } = req.params;

  if (slug === '403') {
    return errorResp({
      code: 403,
      detail: 'you do not have permission to perform this action',
    })(req, res);
  } else if (slug === '404') {
    return errorResp({
      code: 404,
      detail: 'organization does not exists',
    })(req, res);
  }

  const data = generator(
    {
      username: '{{internet.userName}}',
      email: '{{internet.email}}',
    },
    {
      callback: (item, idx) => {
        const role = _.sample(Object.values(ROLES));
        return {
          ...item,
          id: idx + 1,
          role,
          role_display: ROLE_NAMES[role],
          type: datatype.number({ min: 0, max: 1 }),
        };
      },
    }
  );

  successResp({
    data,
  })(req, res);
};
