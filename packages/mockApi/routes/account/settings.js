const faker = require('faker');

const utils = require('../../utils');

const { datatype } = faker;
const { successResp, wait, getValueOrNull } = utils;

module.exports = async (req, res) => {
  await wait();

  // return utils.errorResp({
  //   code: 401,
  //   detail: 'Authentication credentials were not provided',
  // })(req, res);

  successResp({
    data: {
      phone: getValueOrNull('130*****1234'),
      email: getValueOrNull('example@mail.com'),
      email_verified: datatype.boolean(),
      has_password: datatype.boolean(),
      associated_accounts: {
        github: getValueOrNull({
          id: 'github-id',
          login: 'github-usernname',
        }),
      },
    },
  })(req, res);
};
