module.exports = (req, res) => {
  res.redirect(
    302,
    `http://localhost:3000/login?social_provider=${req.params.provider}&redirect_to=${encodeURIComponent(
      req.query.redirect_to || ''
    )}`
  );
};
