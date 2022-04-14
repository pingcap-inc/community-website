export const AUDIT_STATUS = {
  PENDING: 0,
  PASS: 1,
  DENY: 2,
};

export const IMAGES = {
  [AUDIT_STATUS.PENDING]: {
    src: `${process.env.NEXT_PUBLIC_CDN_URL}/images/account/organization-audit-pending.png`,
    alt: 'pending',
    $width: 346 / 2,
  },
  [AUDIT_STATUS.PASS]: {
    src: `${process.env.NEXT_PUBLIC_CDN_URL}/images/account/organization-audit-pass.png`,
    alt: 'pass',
    $width: 310 / 2,
  },
  [AUDIT_STATUS.DENY]: {
    src: `${process.env.NEXT_PUBLIC_CDN_URL}/images/account/organization-audit-deny.png`,
    alt: 'deny',
    $width: 350 / 2,
  },
};

export const TEXTS = {
  [-1]: (reason) => `未知状态: ${reason}`,
  [AUDIT_STATUS.PENDING]: () =>
    '你已成功提交 TiDB 社区认证，工作人员预计 3 个工作日内完成审核，在此期间请保持联系电话与邮箱畅通',
  [AUDIT_STATUS.PASS]: () => '恭喜你已通过 TiDB 社区认证，可以邀请成员加入团队，共享权益',
  [AUDIT_STATUS.DENY]: (reason) =>
    `很抱歉，由于 ${reason} 原因，你提交的 TiDB 社区认证审核未通过，请重新提交资料进行认证`,
};
