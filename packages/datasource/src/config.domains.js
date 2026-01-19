export const defaultEnvDomains = {
  production: {
    'tidb.net': 'pingkai.cn/tidbcommunity',
    'contributor.tidb.io': 'contributor.tidb.io',
    'asktug.com': 'pingkai.cn/tidbcommunity/forum',
    'accounts.pingcap.com': 'pingkai.cn/accounts',
  },
  preview: {
    'tidb.net': 'community.pingkai.cn/tidbcommunity',
    'contributor.tidb.io': 'contributor.tidb.io',
    'asktug.com': 'community.pingkai.cn/tidbcommunity/forum',
    'accounts.pingcap.com': 'community.pingkai.cn/accounts',
  },
  local: {
    'tidb.net': 'localhost:3000',
    'contributor.tidb.io': 'contributor.tidb-local.io',
    'asktug.com': 'community-preview.asktug.com',
    'accounts.pingcap.com': 'accounts-preview.pingcap.cn',
  },
};
