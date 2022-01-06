const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  successResp({
    detail: 'success',
    data: [
      {
        digest: '连续签到 1 天', // 摘要
        points: 2, // 获得积分数量, 可能为负
        exps: 2, // 获得经验数量, 可能为负
        comment: '', // 备注
        created_at: '2022-01-04', // 创建时间
      },
      {
        digest: '绑定 GitHub 账号',
        points: 20,
        exps: 10,
        comment: '',
        created_at: '2021-06-08',
      },
    ],
    total_num: 150, // 总条目数
    per_page: 10, // 每页条目数
    cur_page: 1, // 当前页数
  })(req, res);
};
