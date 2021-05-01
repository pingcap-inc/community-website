import { defaultEnvDomains } from './config.domains';
import { getData as navGetData } from './nav';

const defaultEnv = (typeof process !== 'undefined' && process?.env?.NEXT_PUBLIC_RUNTIME_ENV) || 'production';

export const getData = ({ domain, env, envDomainConfig, locale, path } = {}) => {
  env = env || defaultEnv;

  if (!['production', 'local'].includes(env)) {
    env = 'preview';
  }

  const domainConfig = (envDomainConfig || defaultEnvDomains)[env];

  return {
    nav: navGetData({
      domain,
      domainConfig,
      env,
      locale,
      path,
    }),
  };
};
