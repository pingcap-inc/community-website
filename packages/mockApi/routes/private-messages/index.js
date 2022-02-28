const _ = require('lodash');
const faker = require('faker');
const router = require('express').Router();

const utils = require('../../utils');
const data = require('./notifications.json');

router.get('', async (req, res) => {
  await utils.wait();

  const { offset } = req.query;

  if (parseInt(offset) >= 120) {
    utils.successResp({
      notifications: [],
    })(req, res);
  } else {
    utils.successResp(data)(req, res);
  }
});

module.exports = router;
