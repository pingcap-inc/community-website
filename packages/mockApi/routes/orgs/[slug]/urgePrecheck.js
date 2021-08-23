const faker = require('faker');

const { errorResp, successResp, wait } = require('../../../utils');

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

  successResp({
    data: {
      user_current_points: datatype.number({ min: 50, max: 500 }),
      consumed_points: datatype.number({ min: 100, max: 150 }),
      is_qa_topic: datatype.boolean(),
    },
  })(req, res);
};
