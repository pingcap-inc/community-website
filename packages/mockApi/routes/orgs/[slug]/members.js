const { errorResp, successResp, generator, sample } = require('../../../utils');
const { ROLES } = require('../../../constants');

module.exports = (req, res) => {
  const { slug } = req.params;

  if (slug === '404') {
    return errorResp({
      code: 404,
      detail: 'organization does not exists',
    })(req, res);
  }

  const data = generator(
    {
      name: '{{name.firstName}}',
      username: '{{internet.userName}}',
      email: '{{internet.email}}',
    },
    {
      callback: (item, idx) => ({
        ...item,
        id: idx + 1,
        role: sample(Object.values(ROLES)),
      }),
    }
  );

  successResp({
    data,
  })(req, res);
};
