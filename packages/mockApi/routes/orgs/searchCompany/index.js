const mock = require('./searchCompany.mock');
const { MESSAGES } = require('../../../constants');
const { errorResp, successResp } = require('../../../utils');

module.exports = (req, res) => {
  const { word } = req.query;

  if (word === '429') {
    return errorResp({ code: 429, detail: MESSAGES.TOO_MANY_REQUESTS })(req, res);
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
