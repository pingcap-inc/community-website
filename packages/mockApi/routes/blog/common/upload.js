const { successResp } = require('../../../utils');

module.exports = (req, res) => {
  return successResp({
    uploadURL: 'http://localhost:4000/blog/api/fake-upload',
    downloadURL: 'https://fakeimg.pl/1540x440/',
  })(req, res);
};

module.exports.fakeUpload = (req, res) => {
  return successResp()(req, res);
};
