const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  successResp({
    data: [
      {
        ranking: 1, // 排名
        user: {
          username: '东北大胖子',
          avatar_url: 'https://www.gravatar.com/avatar/a35d7e100f8ff15a15c5d0cf0118acc6?d=identicon',
        },
        exps: 14813, // 经验值
      },
      {
        ranking: 1, // 排名
        user: {
          username: 'yilong',
          avatar_url: 'https://www.gravatar.com/avatar/a35d7e100f8ff15a15c5d0cf0118acc6?d=identicon',
        },
        exps: 14811, // 经验值
      },
      {
        ranking: 1, // 排名
        user: {
          username: 'GangShen',
          avatar_url: 'https://www.gravatar.com/avatar/a35d7e100f8ff15a15c5d0cf0118acc6?d=identicon',
        },
        exps: 6155, // 经验值
      },
    ],
    limit: 3, // 当前传入的参数，前 3 名
    period: 'all', // 当前传入的参数，历史总榜
  })(req, res);
};
