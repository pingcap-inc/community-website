const mock = require('./searchCompany.mock');
const { errorResp, successResp } = require('../../../utils');

module.exports = (req, res) => {
  const { word } = req.body;

  if (word === '429') {
    return errorResp({ code: 429, detail: 'rate limit' })(req, res);
  } else if (word === '400') {
    return errorResp({
      errors: {
        word: ['word is required'],
      },
    })(req, res);
  }

  successResp({
    data: mock.companyList.filter((item) => item.name.indexOf(word) >= 0),
  })(req, res);
};
