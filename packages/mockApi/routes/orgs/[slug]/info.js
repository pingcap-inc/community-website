const faker = require('faker');

const { errorResp, successResp, wait } = require('../../../utils');

const { company, image, lorem } = faker;

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

  successResp({
    data: {
      slug: slug,
      name: company.companyName(),
      introduction: lorem.paragraph(),
      logo: image.avatar(),
    },
  })(req, res);
};
