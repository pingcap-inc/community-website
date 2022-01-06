const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  successResp({
    detail: 'success',
    data: {
      continues_checkin_count: 1, // 已连续签到多少天
      points: 2, // 获得积分奖励
      tomorrow_points: 3, // 明日继续签到将获得的积分
    },
  })(req, res);
};
