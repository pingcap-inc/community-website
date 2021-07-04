const faker = require('faker');

const { errorResp, successResp, wait } = require('../../../utils');

const { image } = faker;

module.exports = async (req, res) => {
  await wait();

  const { originalname } = req.file;

  if (originalname.includes('400')) {
    return errorResp({
      errors: {
        file: ['only .jpg, .png and .jepg files are accepted'],
      },
    })(req, res);
  } else if (originalname.includes('403')) {
    return errorResp({
      code: 403,
      detail: 'you do not have permission to perform this action',
    })(req, res);
  }

  successResp({
    data: {
      logo: image.avatar(),
    },
  })(req, res);
};
