const { errorResp, successResp, generator, sample } = require('../../../utils');
const { ROLES } = require('../../../constants');

module.exports = (req, res) => {
  if (req.params.uid === '404') {
    return errorResp({
      code: 404,
      detail: 'organization does not exists',
    })(req, res);
  }

  const data = generator(
    {
      id: '{{datatype.uuid}}',
      name: '{{name.firstName}}',
      username: '{{internet.userName}}',
      email: '{{internet.email}}',
    },
    {
      callback: (item) => ({
        ...item,
        role: sample(Object.values(ROLES)),
      }),
    }
  );

  successResp({
    data,
  })(req, res);
};
