const faker = require('faker');

const utils = require('../../../utils');

const { image } = faker;

module.exports = async (req, res) => {
  await utils.wait();

  // return utils.errorResp({
  //   errors: {
  //     file: ['only .jpg, .png and .jepg files are accepted'],
  //   },
  // })(req, res);

  // return utils.errorResp({
  //   code: 403,
  //   detail: 'you do not have permission to perform this action',
  // })(req, res);

  utils.successResp({
    data: {
      logo: image.avatar(),
    },
  })(req, res);
};
