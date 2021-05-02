const { errorResp, successResp, generator } = require('../../../utils');

module.exports = (req, res) => {
  const { uid } = req.params;
  const { word } = req.query;

  if (uid === '404') {
    return errorResp({
      code: 404,
      detail: 'organization does not exists',
    })(req, res);
  }

  const data = generator({
    id: '{{datatype.uuid}}',
    username: '{{internet.userName}}',
    avatar_url: '{{image.avatar}}',
  });

  successResp({
    data: data.filter((item) => item.username.includes(word)),
  })(req, res);
};
