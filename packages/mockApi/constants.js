const MESSAGES = {
  SUCCESS: 'success',
  INVALID_PARAMS: 'params wrong',
  TOO_MANY_REQUESTS: 'rate limit',
};

const ROLES = {
  ADMIN: 'admin',
  MEMBER: 'member',
};

const ROLE_NAMES = {
  [ROLES.ADMIN]: '管理员',
  [ROLES.MEMBER]: '成员',
};

const LOCALHOST = 'http://127.0.0.1';

module.exports = {
  MESSAGES,
  ROLES,
  ROLE_NAMES,
  LOCALHOST,
};
