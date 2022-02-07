const { successResp } = require('../../utils');

module.exports = (req, res) => {
  const { currentPage, perPage } = req.query;
  const curr = parseInt(currentPage);
  const per = parseInt(perPage);
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
        digest: '绑定 GitHub 账号1',
        points: 20,
        exps: 10,
        comment: '',
        created_at: '2021-06-08',
      },
      {
        digest: '绑定 GitHub 账号2',
        points: 20,
        exps: 10,
        comment: '',
        created_at: '2021-06-08',
      },
      {
        digest: '绑定 GitHub 账号3',
        points: 20,
        exps: 10,
        comment: '',
        created_at: '2021-06-08',
      },
    ].slice((curr - 1) * per, curr * per),
    total_num: 4, // 总条目数
    per_page: per, // 每页条目数
    curr_page: curr, // 当前页数
  })(req, res);
};
