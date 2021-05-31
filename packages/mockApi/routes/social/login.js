module.exports = (req, res) => {
  res.redirect(302, req.query.redirect_to || 'back');
};
