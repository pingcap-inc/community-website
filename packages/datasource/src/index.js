import { getData as navGetData } from './nav';
import { defaultEnvDomains } from './config.domains';

const defaultEnv = process.env.RUNTIME_ENV || 'production';

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
