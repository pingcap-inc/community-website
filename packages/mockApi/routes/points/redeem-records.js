const { successResp } = require('../../utils');

module.exports = (req, res) => {
  successResp({
    detail: 'success',
    data: [
      {
        product_id: 30010, // 商品 ID
        product_name: 'TiDB U型枕', // 商品名称
        points: 500, // 兑换消耗的积分
        consignee_name: '张三', // 收件人名称
        consignee_phone: '136xxxxxxxx', // 收件人手机号
        consignee_addrss: '北京市', // 收货地址
        comment: '无', // 订单备注
        courier_company: '顺丰', // 发货的物流公司, 未发货时为空
        tracking_number: 'SF1421361031071', // 物流号码, 未发货时为空
        created_at: '2021-06-22/14:29', // 兑换时间
      },
    ],
  })(req, res);
};
