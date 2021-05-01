import * as form from './form';
import { defaultEnvDomains } from './config.domains';
import { getData as getNavData } from './nav';

export const getData = ({ domain, path, locale, env, envDomainConfig } = {}) => {
  const defaultEnv = (typeof process !== 'undefined' && process?.env?.NEXT_PUBLIC_RUNTIME_ENV) || 'production';

  env = env || defaultEnv;
  if (!['production', 'local'].includes(env)) {
    env = 'preview';
  }

  const domainConfig = (envDomainConfig || defaultEnvDomains)[env];

  return {
    nav: getNavData({
      domain,
      domainConfig,
      env,
      locale,
      path,
    }),
  };
};

export const getFormData = () => {
  return form;
};

export * as api from './api';
