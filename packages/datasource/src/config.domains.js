export const defaultEnvDomains = {
  production: {
    'tidb.io': 'tidb.io',
    'tug.tidb.io': 'tug.tidb.io',
    'contributor.tidb.io': 'contributor.tidb.io',
    'asktug.com': 'asktug.com',
    'accounts.pingcap.com': 'accounts.pingcap.com',
  },
  preview: {
    'tidb.io': 'community-preview.tidb.io',
    'tug.tidb.io': 'community-preview-tug.tidb.io',
    'contributor.tidb.io': 'community-preview-contributor.tidb.io',
    'asktug.com': 'idc.asktug.com',
    'accounts.pingcap.com': 'dev-accounts.pingcap.com',
  },
  local: {
    'tidb.io': 'tidb-local.io',
    'tug.tidb.io': 'tug.tidb-local.io',
    'contributor.tidb.io': 'contributor.tidb-local.io',
    'asktug.com': 'idc.asktug.com',
    'accounts.pingcap.com': 'dev-accounts.pingcap.com',
  },
};
