import rules from './index.config';

export const isFeatureEnabled = (rules) => ({ host, name }) => {
  const rule = rules[name];
  if (!rule) return true;

  const { disabledHosts, isEnabled } = rule;
  if (isEnabled && !disabledHosts.includes(host)) return true;
  return false;
};

const handler = (req, res) => {
  const {
    headers: { host },
    query: { name },
  } = req;

  res.status(200).json({
    isEnabled: isFeatureEnabled(rules)({
      host,
      name,
    }),
  });
};

export default handler;
