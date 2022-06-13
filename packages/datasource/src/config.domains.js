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
    'asktug.com': 'community-preview.asktug.com',
    'accounts.pingcap.com': 'accounts-preview.pingcap.com',
  },
  local: {
    'tidb.net': 'localhost:3000',
    'contributor.tidb.io': 'contributor.tidb-local.io',
    'asktug.com': 'community-preview.asktug.com',
    'accounts.pingcap.com': 'accounts-preview.pingcap.com',
  },
};
