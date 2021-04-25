const HOSTS = {
  TIDB_IO: 'tidb.io',
  TUG_TIDB_IO: 'tug.tidb.io',
};

export const FEATURES = {
  CREATE_ORGANIZATION: 'create-organization',
};

const getRules = () => ({
  [FEATURES.CREATE_ORGANIZATION]: {
    disabledHosts: Object.values(HOSTS),
    isEnabled: true,
  },
});

export default getRules;
