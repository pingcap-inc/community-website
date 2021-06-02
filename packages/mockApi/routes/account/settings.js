const faker = require('faker');

const utils = require('../../utils');

const { random } = faker;
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
      email_verified: random.boolean(),
      // has_password: random.boolean(),
      has_password: false,
      associated_accounts: {
        github: getValueOrNull({
          id: 'github-id',
          login: 'github-usernname',
        }),
      },
    },
  })(req, res);
};
