import getRules from './featureToggle.config';

export const isFeatureEnabled = ({ host, name }) => {
  const rules = getRules();
  const rule = rules[name];
  if (!rule) return true;

  const { disabledHosts, isEnabled } = rule;
  if (isEnabled && !disabledHosts.includes(host)) return true;
  return false;
};
