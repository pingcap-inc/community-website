const { errorResp, successResp } = require('../../utils');
const router = require('express').Router();

router.post('/code', (req, res) => {
  const { phone } = req.body;
  if (!phone)
    errorResp({
      detail: 'params error',
      errors: {
        phone: ['this field is required'], // 键是传入的名参数; 值是一个数组, 其中包含了具体的错误信息
      },
    });

  successResp()(req, res);
});

module.exports = router;
