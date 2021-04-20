export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  runtimeHelpers: true,
  lessInBabelMode: {
    javascriptEnabled: true,
  },
};
