const router = require('express').Router();

const { successResp, generator, sample } = require('../../utils');
const { ROLES } = require('../../constants');

router.get('', (req, res) => {
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
});

module.exports = router;
