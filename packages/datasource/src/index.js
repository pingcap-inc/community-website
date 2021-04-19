import { getData as navGetData } from './nav';
import { defaultEnvDomains } from './config.domains';

const defaultEnv = process.env.NODE_ENV;

export const getData = ({ domain, path, locale, env, envDomainConfig } = {}) => {
  return {
    nav: navGetData({
      domain,
      path,
      locale,
      env: env || defaultEnv,
      domainConfig: envDomainConfig || defaultEnvDomains,
    }),
  };
};
