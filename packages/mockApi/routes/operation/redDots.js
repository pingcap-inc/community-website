const router = require('express').Router();

const utils = require('../../utils');

router.get('', (req, res) => {
  // return utils.errorResp({
  //   code: 401,
  //   detail: 'Authentication credentials were not provided',
  // })(req, res);

  utils.successResp({
    data: [
      {
        name: 'org-enroll', // 红点的代号
        visible: true, // 是否显示
      },
      {
        name: 'company-info',
        visible: true,
      },
      {
        name: 'join-org', // 标识用户是否加入过团队，由后端来标记
        visible: true,
      },
    ],
  })(req, res);
});

router.post('/:dotName', (req, res) => {
  const { dotName } = req.params;

  if (dotName === '401') {
    return utils.errorResp({
      code: 401,
      detail: 'Authentication credentials were not provided',
    })(req, res);
  }

  utils.successResp()(req, res);
});

module.exports = router;
