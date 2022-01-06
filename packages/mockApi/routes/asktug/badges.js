const { errorResp, successResp } = require('../../utils');

module.exports = (req, res) => {
  successResp({
    data: [
      {
        id: 111, // 徽章 ID
        name: 'Contributor', // 徽章名称
        image: 'https://img2.pingcap.com/forms/3/5/35e40ac2a66e842044ecc4cb9b805450f066a1e3.png', // 徽章图片, 可能为空, image 的展示优先级高于 icon
        icon: 'fa-certificate', // 徽章 icon, 可能为空
        has_badge: true, // 是否拥有该徽章
      },
      {
        id: 133,
        name: '高级贡献者',
        image: 'https://img2.pingcap.com/forms/9/7/97e13e292e488741bc6052bb57859e0cc2ef205a.png!thumb',
        icon: '3',
        has_badge: false,
      },
    ],
  })(req, res);
};
