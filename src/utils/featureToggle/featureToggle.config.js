const HOSTS = {
  TIDB_IO: 'tidb.io',
  TUG_TIDB_IO: 'tug.tidb.io',
};

export const FEATURES = {
  CREATE_ORGANIZATION: Symbol('CREATE_ORGANIZATION'),
  ORGANIZATOIN_MEMBERS: Symbol('ORGANIZATOIN_MEMBERS'),
};

const getRules = () => ({
  [FEATURES.CREATE_ORGANIZATION]: {
    disabledHosts: Object.values(HOSTS),
    isEnabled: true,
  },

  [FEATURES.ORGANIZATOIN_MEMBERS]: {
    disabledHosts: Object.values(HOSTS),
    isEnabled: true,
  },
});

export default getRules;
