const router = require('express').Router();

const handler = (req, res) => {
  res.redirect(req.query.redirect_to);
};

router.get('/social/login/:provider', handler);

router.get('/login', handler);

router.get('/logout', handler);

module.exports = router;
