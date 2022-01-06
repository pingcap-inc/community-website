const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  successResp({
    user: {
      username: 'mock_user',
      avatar_url: 'https://www.gravatar.com/avatar/fcb8bb2d4c044660c192539e14e925af?d=identicon',
    },
    current_level: 3, // 当前等级
    current_exp: 2371, // 当前经验
    level_desc: {
      min_exp: 2000, // 当前等级要求的最低经验
      max_exp: 5000, // 当前等级要求的最高经验
      progress: 0.1236, // 用户当前进度
    },
  })(req, res);
};
