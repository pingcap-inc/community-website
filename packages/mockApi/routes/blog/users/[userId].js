const { successResp } = require('../../../utils');


module.exports = (req, res) => {
  const data = {
    "id": 1,
    "username": "root",
    "name": "root",
    "introduction": "nothing",
    "avatarURL": "",
    "posts": 123,
    "favorites": 234,
    "likes": 345,
    "comments": 456
  };
  return successResp(data)(req, res);
};
