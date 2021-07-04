const enums = require('@tidb-community/datasource/lib/form/org/enums');
const faker = require('faker');

const { errorResp, successResp, wait } = require('../../../utils');

const { company, datatype, image, lorem } = faker;

module.exports = async (req, res) => {
  console.log('enum!!', enums);
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
      topic_urgency_remain_times: datatype.number({ max: 2 }),
      company_name: company.companyName(),
    },
  })(req, res);
};
