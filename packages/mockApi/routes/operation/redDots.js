const faker = require('faker');
const router = require('express').Router();

const { successResp, errorResp, wait } = require('../../utils');

const { datatype } = faker;

router.get('', async (req, res) => {
  await wait();

  successResp({
    data: [
      {
        name: 'org-enroll', // 红点的代号
        visible: datatype.boolean(), // 是否显示
      },
      {
        name: 'company-info',
        visible: datatype.boolean(),
      },
      {
        name: 'join-org', // 标识用户是否加入过团队，由后端来标记
        visible: datatype.boolean(),
      },
    ],
  })(req, res);
});

router.post('/:dotName', async (req, res) => {
  await wait(2000);

  const { dotName } = req.params;

  if (dotName === '401') {
    return errorResp({
      code: 401,
      detail: 'Authentication credentials were not provided',
    })(req, res);
  }

  successResp()(req, res);
});

module.exports = router;
