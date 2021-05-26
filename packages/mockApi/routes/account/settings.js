const faker = require('faker');

const { successResp, wait, getValueOrNull } = require('../../utils');

const { random } = faker;

module.exports = async (req, res) => {
  await wait();

  successResp({
    phone: getValueOrNull('130*****1234'),
    email: getValueOrNull('example@mail.com'),
    email_verified: random.boolean(),
    has_password: random.boolean(),
    associated_accounts: {
      github: getValueOrNull({
        id: 'github-id',
        login: 'github-usernname',
      }),
    },
  })(req, res);
};
