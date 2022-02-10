const _ = require('lodash');
const router = require('express').Router();

const utils = require('../../../utils');
const data = require('./notifications.json');

router.get('/', async (req, res) => {
  await utils.wait();

  const { page } = req.query;

  if (parseInt(page) >= 2) {
    utils.successResp({
      content: [],
    })(req, res);
  } else {
    utils.successResp(data)(req, res);
  }
});

router.get('/summary', async (req, res) => {
  await utils.wait();

  utils.successResp({
    unreadCount: 2,
    newCount: 2,
  })(req, res);
});

router.patch('/:id/read', async (req, res) => {
  utils.successResp({})(req, res);
});

module.exports = router;
