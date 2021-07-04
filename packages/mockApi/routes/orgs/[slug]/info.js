const enums = require('@tidb-community/datasource/lib/form/org/enums');
const faker = require('faker');

const { errorResp, successResp, wait, sample } = require('../../../utils');

const { company, datatype, image, lorem } = faker;

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

  const industryType = sample(enums.organizationTypes);
  const orgSize = sample(enums.organizationSizes);
  const province = sample(enums.provinces);
  const city = sample(province.children);

  successResp({
    data: {
      slug: slug,
      name: company.companyName(),
      introduction: lorem.paragraph(),
      logo: image.avatar(),
      topic_urgency_remain_times: datatype.number({ max: 2 }),
      company_name: company.companyName(),
      industry_type_code: industryType.value,
      industry_type_text: industryType.label,
      member_range_code: orgSize.value,
      member_range_text: orgSize.label,
      company_base_code: city.value,
      company_base_text: `${province.label}-${city.label}`,
    },
  })(req, res);
};
