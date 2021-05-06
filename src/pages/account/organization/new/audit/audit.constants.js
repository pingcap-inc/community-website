export const AUDIT_STATUS_PENDING = 'pending';
export const AUDIT_STATUS_DONE = 'done';
export const AUDIT_STATUS_ERROR = 'error';

export const imageWidths = {
  [AUDIT_STATUS_PENDING]: 346 / 2,
  [AUDIT_STATUS_DONE]: 310 / 2,
  [AUDIT_STATUS_ERROR]: 350 / 2,
};

export const texts = {
  [AUDIT_STATUS_PENDING]: () => '您已...',
  [AUDIT_STATUS_DONE]: () => '恭喜您已通过...',
  [AUDIT_STATUS_ERROR]: (reason) => `很抱歉，由于 ${reason} 原因...`,
};
