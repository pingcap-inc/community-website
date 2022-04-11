export const defaultEnvDomains = {
  production: {
    'tidb.net': 'tidb.net',
    'contributor.tidb.io': 'contributor.tidb.io',
    'asktug.com': 'asktug.com',
    'accounts.pingcap.com': 'accounts.pingcap.com',
  },
  preview: {
    'tidb.net': 'community-preview.tidb.io',
    'contributor.tidb.io': 'community-preview-contributor.tidb.io',
    'asktug.com': 'new.asktug.com',
    'accounts.pingcap.com': 'dev-accounts.pingcap.com',
  },
  local: {
    'tidb.net': 'localhost:3000',
    'contributor.tidb.io': 'contributor.tidb-local.io',
    'asktug.com': 'new.asktug.com',
    'accounts.pingcap.com': 'dev-accounts.pingcap.com',
  },
};
