export const AUDIT_STATUS = {
  PENDING: 0,
  PASS: 1,
  DENY: 2,
};

export const IMAGES = {
  [AUDIT_STATUS.PENDING]: {
    src: '/images/account/organization-audit-pending.png',
    alt: 'pending',
    $width: 346 / 2,
  },
  [AUDIT_STATUS.PASS]: {
    src: '/images/account/organization-audit-pass.png',
    alt: 'pass',
    $width: 310 / 2,
  },
  [AUDIT_STATUS.DENY]: {
    src: '/images/account/organization-audit-deny.png',
    alt: 'deny',
    $width: 350 / 2,
  },
};

export const TEXTS = {
  [-1]: (reason) => `未知状态: ${reason}`,
  [AUDIT_STATUS.PENDING]: () => '您已...',
  [AUDIT_STATUS.PASS]: () => '恭喜您已通过...',
  [AUDIT_STATUS.DENY]: (reason) => `很抱歉，由于 ${reason} 原因...`,
};
