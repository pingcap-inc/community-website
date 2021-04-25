export const FEATURES = {
  CREATE_ORGANIZATION: 'create-organization',
};

const HOSTS = {
  TIDB_IO: 'tidb.io',
  TUG_TIDB_IO: 'tug.tidb.io',
  LOCALHOST: 'localhost:3000',
};

const rules = {
  [FEATURES.CREATE_ORGANIZATION]: {
    disabledHosts: Object.values(HOSTS),
    isEnabled: true,
  },
};

export default rules;
