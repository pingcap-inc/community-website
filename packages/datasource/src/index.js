import { getData as navGetData } from './nav';
import { defaultEnvDomains } from './config.domains';

const defaultEnv = (typeof process !== 'undefined' && process?.env?.NEXT_PUBLIC_RUNTIME_ENV) || 'production';

export const getData = ({ domain, path, locale, env, envDomainConfig } = {}) => {
  env = env || defaultEnv;
  if (env !== 'production' && env !== 'local') {
    env = 'preview';
  }

  const domainConfig = (envDomainConfig || defaultEnvDomains)[env];

  return {
    nav: navGetData({
      domain,
      path,
      locale,
      env,
      domainConfig,
    }),
  };
};
