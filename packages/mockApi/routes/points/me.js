const { successResp } = require('../../utils');
const { random } = require('lodash/number');

module.exports = (req, res) => {
  successResp({
    detail: 'success',
    data: {
      current_level: 5, // 等级
      current_points: 348, // 积分
      current_exps: 828, // 经验
      current_rank: 123, // 经验排名
      is_today_checked: random(0, 2) === 0, // 今天是否签到
      level_desc: {
        // 当前等级描述
        min_exps: 500, // 当前等级的最低经验要求
        max_exps: 999, // 下一等级的最低经验要求
        progress: 0.6573, // 当前等级进度
      },
    },
  })(req, res);
};
