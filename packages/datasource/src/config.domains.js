export const defaultEnvDomains = {
  production: {
    'tidb.io': 'tidb.io',
    'contributor.tidb.io': 'contributor.tidb.io',
    'asktug.com': 'asktug.com',
    'accounts.pingcap.com': 'accounts.pingcap.com',
  },
  preview: {
    'tidb.io': 'community-preview.tidb.io',
    'contributor.tidb.io': 'community-preview-contributor.tidb.io',
    'asktug.com': 'new.asktug.com',
    'accounts.pingcap.com': 'dev-accounts.pingcap.com',
  },
  local: {
    'tidb.io': 'localhost:3000',
    'contributor.tidb.io': 'contributor.tidb-local.io',
    'asktug.com': 'new.asktug.com',
    'accounts.pingcap.com': 'dev-accounts.pingcap.com',
  },
};
