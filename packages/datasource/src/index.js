import { getData as navGetData } from './nav';
import { defaultEnvDomains } from './config.domains';

const defaultEnv = (typeof process !== 'undefined' && process?.env?.NEXT_PUBLIC_RUNTIME_ENV) || 'production';

export const getData = ({ domain, path, locale, env, envDomainConfig } = {}) => {
  return {
    nav: navGetData({
      domain,
      path,
      locale,
      domainConfig: (envDomainConfig || defaultEnvDomains)[env || defaultEnv],
    }),
  };
};
