module.exports = (req, res) => {
  console.log('redirect_to!!', req.query.redirect_to);

  res.redirect(302, req.query.redirect_to || 'back');
};
