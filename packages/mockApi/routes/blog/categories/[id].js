const { errorResp, successResp } = require('../../utils');
const { categories } = require('./categories.data');

module.exports = (req, res) => {
  const { id } = req.body;

  if (id === undefined) {
    return errorResp({
      code: 400,
      detail: 'you need to input a category id',
    })(req, res);
  }

  successResp(categories[id])(req, res);
};
