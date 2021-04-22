const _rawOrganizationTypes = {
  '2w9wk6ruQ': '银行/保险/证券',
  '3c1rjdpSl': '互联网金融/支付',
  '90canxoSK': '电信/网络/云服务商',
  aw19TkYYo: '政府/公共事业',
  ouOyjTZ0Z: '医疗/健康/生命科学',
  G72pterE1: '教育/科研',
  '52sP1khSg': '地产/建筑',
  c7dVC8UjC: '能源/化工/流程制造',
  X2Thv1h8f: '高科技/汽车/高端离散制造',
  '41lcd1qlg': '零售/电商/消费品',
  '29PrL1JyM': '物流/交通/出行',
  dr3d0965V: '社交/门户/在线服务',
  iHZo2pq9O: '媒体/视频/文娱',
  other: '其他',
};

const _rawPersonalPositions = {
  d2bcq9UIf: '高级管理人员（CxO）',
  wSwt14p80: 'IT 总监（科长/主任/总工）',
  '6dYS1TIb5': '经理/工程师（DBA/运维/系统运营）',
  '46Ihn4MTy': '经理/工程师（开发/研发/测试）',
  '95cvUSA2G': '架构师',
  t6bR785CA: '销售（销售总监/经理/BD/业务代表）',
  Nn9dfIiP1: '产品（产品总监/经理/运营）',
  '20X2gfA83': '职能（采购/行政/法务/人力）',
  b89N83JWd: '教授/老师',
  '2G3agrmyP': '学生',
  YMva964wM: '分析师/媒体记者',
  other: '其他',
};

const _rawOrganizationSizes = {
  option1: '0-50人',
  ex4ab2q8x: '51-100人',
  sdpGA0bis: '100-200人',
  htO5CtXq7: '200-500人',
  JH0foSs6h: '500-1000人',
  Gfddv2G2w: '1000人以上',
};

const createArray = (map) => {
  return Object.keys(map).map((key) => ({
    value: key,
    label: map[key],
  }));
};

export const organizationTypes = createArray(_rawOrganizationTypes);
export const personalPositions = createArray(_rawPersonalPositions);
export const organizationSizes = createArray(_rawOrganizationSizes);
