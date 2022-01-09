const { successResp, errorResp } = require('../../utils');
module.exports = (req, res) => {
  const { product_id, consignee_name, consignee_phone, consignee_phone_code, consignee_addrss, comment } = req.body;

  for (let param in [product_id, consignee_name, consignee_phone, consignee_addrss, consignee_phone_code, comment]) {
    if (!param) {
      return errorResp({
        errors: {
          product_id: ['this field is required'], // 键是传入的名参数; 值是一个数组, 其中包含了具体的错误信息
          consignee_phone_code: ['this field is required'],
        },
      });
    }
  }

  successResp({
    detail: 'submit success',
    data: {
      redeem_success: true, // 是否兑换成功,
      redeem_record_id: 1, // 兑换记录 ID, 如果兑换失败则为 null
      comment: '兑换失败，商品不存在或已下架，请刷新重试', // 兑换失败的原因
    },
  })(req, res);
};
