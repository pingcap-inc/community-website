const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  successResp({
    detail: 'success',
    data: [
      {
        id: 330010, // 商品 ID
        name: 'TiDB & Flink 联名限量款双肩包', // 商品名称
        cover_url: 'https://img2.pingcap.com/forms/b/9/b93839175459283bfd72a96601c6c7cf73ffcb3c.png', // 商品展示图
        points: 1500, // 兑换需要的积分
        remains: 58, // 商品剩余数量
      },
      {
        id: 390010, // 商品 ID
        name: '限量纸质版】数据库架构选型指南', // 商品名称
        cover_url: 'https://img2.pingcap.com/forms/2/0/2037945e7f15ca1886c15ea0756f979ab46ad3ad_TO7hDor.png', // 商品展示图
        points: 111, // 兑换需要的积分
        remains: 107, // 商品剩余数量
      },
    ],
  })(req, res);
};
